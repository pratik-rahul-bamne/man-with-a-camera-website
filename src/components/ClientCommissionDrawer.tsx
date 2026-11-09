import React, { useState } from 'react';
import { X, Check, Calendar, Phone, MessageSquare, Send, Printer } from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/weddingData';

interface ClientCommissionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientCommissionDrawer: React.FC<ClientCommissionDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [currency, setCurrency] = useState<'INR' | 'USD' | 'EUR'>('INR');
  const [days, setDays] = useState<number>(2);
  const [destination, setDestination] = useState('Sangli & Kolhapur Region');

  // Add-ons
  const [includeTeaserFilm, setIncludeTeaserFilm] = useState(true);
  const [includeFullFilm, setIncludeFullFilm] = useState(true);
  const [includeHeirloomAlbum, setIncludeHeirloomAlbum] = useState(true);
  const [includeDroneAerial, setIncludeDroneAerial] = useState(true);
  const [includePreWedding, setIncludePreWedding] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    coupleNames: '',
    email: '',
    phone: '',
    weddingDate: '2026-12-15',
    venue: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Base pricing logic in INR
  const baseRatePerDayINR = 75000;
  const teaserCostINR = includeTeaserFilm ? 25000 : 0;
  const fullFilmCostINR = includeFullFilm ? 40000 : 0;
  const albumCostINR = includeHeirloomAlbum ? 35000 : 0;
  const droneCostINR = includeDroneAerial ? 20000 : 0;
  const preWeddingCostINR = includePreWedding ? 30000 : 0;

  const totalINR =
    days * baseRatePerDayINR +
    teaserCostINR +
    fullFilmCostINR +
    albumCostINR +
    droneCostINR +
    preWeddingCostINR;

  const currencyRates = {
    INR: { symbol: '₹', rate: 1 },
    USD: { symbol: '$', rate: 1 / 84 },
    EUR: { symbol: '€', rate: 1 / 92 },
  };

  const currentTotal = Math.round(totalINR * currencyRates[currency].rate);
  const formattedTotal = new Intl.NumberFormat('en-IN').format(currentTotal);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const availableDestinations = [
    'Sangli & Kolhapur Region',
    'Mumbai & Suburban Metros',
    'Pune & Lonavala Resorts',
    'Goa Beach & Coastal Weddings',
    'Udaipur & Rajasthan Palaces',
    'Other Destination (India / Abroad)',
  ];

  const calendarDates = [
    { season: 'Winter 2026 (Nov - Jan)', slots: 'Limited Dates Available' },
    { season: 'Spring 2027 (Feb - Apr)', slots: 'Bookings Open' },
    { season: 'Summer 2027 (May - Jun)', slots: 'Destination Slots Open' },
    { season: 'Autumn 2027 (Oct - Dec)', slots: 'Inquiries Welcome' },
  ];

  const whatsappMessage = encodeURIComponent(
    `Hello Man With A Camera,\n\nI would like to inquire about wedding coverage:\n- Couple: ${formData.coupleNames || 'Prospective Client'}\n- Date: ${formData.weddingDate}\n- Destination: ${destination}\n- Days: ${days} days\n- Estimated Investment: ${currencyRates[currency].symbol}${formattedTotal}\n- Notes: ${formData.notes || 'None'}\n\nPlease let me know your availability.`
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-[#080808]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div className="relative w-full max-w-2xl bg-[#101010] border-l border-[rgba(198,164,119,0.22)] h-full overflow-y-auto z-10 p-6 sm:p-10 text-[#F5F0E8] flex flex-col justify-between">
        <div>
          {/* Top Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[rgba(245,240,232,0.1)] mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-[#C6A477]"></span>
                <span className="text-[10px] tracking-[0.25em] text-[#C6A477] uppercase font-semibold">
                  {BUSINESS_PROFILE.handle} · DIRECT DESK
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5F0E8]">
                Bookings &amp; Inquiries
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 border border-[rgba(245,240,232,0.15)] text-[#A6A19A] hover:text-[#080808] hover:bg-[#C6A477] transition-all cursor-pointer"
              aria-label="Close Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!submitted ? (
            <div className="space-y-8">
              {/* Direct Call / WhatsApp Quick Banner */}
              <div className="bg-[#080808] p-4 border border-[rgba(198,164,119,0.22)] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] tracking-[0.22em] text-[#C6A477] uppercase font-semibold">
                    DIRECT CALL / WHATSAPP BOOKING
                  </p>
                  <p className="text-sm font-mono text-[#F5F0E8] mt-0.5">
                    {BUSINESS_PROFILE.formattedPhone}
                  </p>
                  <p className="text-[10px] text-[#A6A19A] mt-0.5">
                    Sangli | Mumbai | Destination Weddings
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${BUSINESS_PROFILE.phone}`}
                    className="p-2 border border-[rgba(245,240,232,0.2)] hover:border-[#C6A477] text-[#C6A477] flex items-center gap-1.5 text-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>CALL</span>
                  </a>

                  <a
                    href={BUSINESS_PROFILE.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C6A477] text-[#080808] hover:bg-[#F5F0E8] px-3 py-2 text-xs font-semibold uppercase flex items-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WHATSAPP</span>
                  </a>
                </div>
              </div>

              {/* Season Availability */}
              <div className="bg-[#141414] p-4 border border-[rgba(245,240,232,0.08)]">
                <div className="flex items-center justify-between text-[10px] tracking-[0.22em] text-[#C6A477] uppercase font-semibold mb-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    WEDDING SEASON CALENDAR
                  </span>
                  <span className="text-emerald-400">SINCE 2014</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {calendarDates.map((item, i) => (
                    <div key={i} className="bg-[#080808] p-2 border border-[rgba(245,240,232,0.06)]">
                      <p className="text-[#F5F0E8] font-medium">{item.season}</p>
                      <p className="text-[10px] text-[#A6A19A] mt-0.5">{item.slots}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Calculator Section */}
              <div className="bg-[#141414] p-5 border border-[rgba(198,164,119,0.18)]">
                <div className="flex items-center justify-between pb-3 border-b border-[rgba(245,240,232,0.1)] mb-4">
                  <span className="text-[10px] tracking-[0.24em] text-[#C6A477] uppercase font-semibold">
                    PACKAGE CALCULATOR
                  </span>

                  {/* Currency Toggle */}
                  <div className="flex items-center border border-[rgba(245,240,232,0.15)] text-[9px] tracking-[0.18em]">
                    {(['INR', 'USD', 'EUR'] as const).map((curr) => (
                      <button
                        key={curr}
                        type="button"
                        onClick={() => setCurrency(curr)}
                        className={`px-2 py-1 uppercase cursor-pointer ${
                          currency === curr
                            ? 'bg-[#C6A477] text-[#080808] font-bold'
                            : 'text-[#A6A19A] hover:text-[#F5F0E8]'
                        }`}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Days Slider */}
                <div className="mb-5">
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="text-[#A6A19A] uppercase tracking-[0.18em]">WEDDING DURATION</span>
                    <span className="text-[#F5F0E8] font-serif text-sm font-semibold">{days} Day Coverage</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="4"
                    step="1"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full accent-[#C6A477] cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-[#A6A19A] mt-1">
                    <span>1-Day Wedding</span>
                    <span>2-Day Traditional</span>
                    <span>3-Day Royal</span>
                    <span>4-Day Destination</span>
                  </div>
                </div>

                {/* Service Inclusions */}
                <div className="space-y-3 pt-3 border-t border-[rgba(245,240,232,0.06)]">
                  <label className="flex items-center justify-between text-xs cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div
                        onClick={() => setIncludeTeaserFilm(!includeTeaserFilm)}
                        className={`w-3.5 h-3.5 border transition-all flex items-center justify-center ${
                          includeTeaserFilm
                            ? 'border-[#C6A477] bg-[#C6A477] text-[#080808]'
                            : 'border-[rgba(245,240,232,0.3)] bg-transparent'
                        }`}
                      >
                        {includeTeaserFilm && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-[#F5F0E8] group-hover:text-[#C6A477] transition-colors">
                        Cinematic Wedding Teaser (1–3 Minutes for Instagram &amp; Family)
                      </span>
                    </div>
                    <span className="text-[10px] text-[#A6A19A] font-mono">+ Included</span>
                  </label>

                  <label className="flex items-center justify-between text-xs cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div
                        onClick={() => setIncludeFullFilm(!includeFullFilm)}
                        className={`w-3.5 h-3.5 border transition-all flex items-center justify-center ${
                          includeFullFilm
                            ? 'border-[#C6A477] bg-[#C6A477] text-[#080808]'
                            : 'border-[rgba(245,240,232,0.3)] bg-transparent'
                        }`}
                      >
                        {includeFullFilm && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-[#F5F0E8] group-hover:text-[#C6A477] transition-colors">
                        Full Traditional Documentary Feature Film (20–45 Minutes)
                      </span>
                    </div>
                    <span className="text-[10px] text-[#A6A19A] font-mono">+ Included</span>
                  </label>

                  <label className="flex items-center justify-between text-xs cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div
                        onClick={() => setIncludeHeirloomAlbum(!includeHeirloomAlbum)}
                        className={`w-3.5 h-3.5 border transition-all flex items-center justify-center ${
                          includeHeirloomAlbum
                            ? 'border-[#C6A477] bg-[#C6A477] text-[#080808]'
                            : 'border-[rgba(245,240,232,0.3)] bg-transparent'
                        }`}
                      >
                        {includeHeirloomAlbum && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-[#F5F0E8] group-hover:text-[#C6A477] transition-colors">
                        Premium Handcrafted Heirloom Photo Album (Canvera Silk / Leather)
                      </span>
                    </div>
                    <span className="text-[10px] text-[#A6A19A] font-mono">+ Included</span>
                  </label>

                  <label className="flex items-center justify-between text-xs cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div
                        onClick={() => setIncludeDroneAerial(!includeDroneAerial)}
                        className={`w-3.5 h-3.5 border transition-all flex items-center justify-center ${
                          includeDroneAerial
                            ? 'border-[#C6A477] bg-[#C6A477] text-[#080808]'
                            : 'border-[rgba(245,240,232,0.3)] bg-transparent'
                        }`}
                      >
                        {includeDroneAerial && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-[#F5F0E8] group-hover:text-[#C6A477] transition-colors">
                        4K Drone Aerial Mandap &amp; Baraat Coverage
                      </span>
                    </div>
                    <span className="text-[10px] text-[#A6A19A] font-mono">+ Included</span>
                  </label>

                  <label className="flex items-center justify-between text-xs cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div
                        onClick={() => setIncludePreWedding(!includePreWedding)}
                        className={`w-3.5 h-3.5 border transition-all flex items-center justify-center ${
                          includePreWedding
                            ? 'border-[#C6A477] bg-[#C6A477] text-[#080808]'
                            : 'border-[rgba(245,240,232,0.3)] bg-transparent'
                        }`}
                      >
                        {includePreWedding && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-[#F5F0E8] group-hover:text-[#C6A477] transition-colors">
                        Scenic Pre-Wedding Shoot (Sangli / Mumbai / Escapes)
                      </span>
                    </div>
                    <span className="text-[10px] text-[#A6A19A] font-mono">+ Optional</span>
                  </label>
                </div>

                {/* Total Investment Display */}
                <div className="mt-6 pt-4 border-t border-[rgba(198,164,119,0.22)] flex items-end justify-between">
                  <div>
                    <span className="text-[9px] tracking-[0.2em] text-[#A6A19A] uppercase block">
                      ESTIMATED INVESTMENT
                    </span>
                    <span className="text-[10px] text-[#C6A477] font-light">
                      Senior Cinematographers &amp; Color Grading
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-2xl sm:text-3xl text-[#C6A477] font-semibold">
                      {currencyRates[currency].symbol}
                      {formattedTotal}
                    </span>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-[10px] tracking-[0.22em] text-[#C6A477] uppercase block mb-1">
                    COUPLE NAMES *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Akash & Pooja"
                    value={formData.coupleNames}
                    onChange={(e) => setFormData({ ...formData, coupleNames: e.target.value })}
                    className="w-full bg-transparent border-b border-[rgba(245,240,232,0.2)] focus:border-[#C6A477] py-2 text-sm text-[#F5F0E8] outline-none transition-colors placeholder:text-[#A6A19A]/40"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] tracking-[0.22em] text-[#C6A477] uppercase block mb-1">
                      WHATSAPP / PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="9766066092"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-[rgba(245,240,232,0.2)] focus:border-[#C6A477] py-2 text-sm text-[#F5F0E8] outline-none transition-colors placeholder:text-[#A6A19A]/40"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.22em] text-[#C6A477] uppercase block mb-1">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      placeholder="client@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-[rgba(245,240,232,0.2)] focus:border-[#C6A477] py-2 text-sm text-[#F5F0E8] outline-none transition-colors placeholder:text-[#A6A19A]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] tracking-[0.22em] text-[#C6A477] uppercase block mb-1">
                      WEDDING DATE
                    </label>
                    <input
                      type="date"
                      value={formData.weddingDate}
                      onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                      className="w-full bg-transparent border-b border-[rgba(245,240,232,0.2)] focus:border-[#C6A477] py-2 text-sm text-[#F5F0E8] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.22em] text-[#C6A477] uppercase block mb-1">
                      WEDDING DESTINATION
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-[#101010] border-b border-[rgba(245,240,232,0.2)] focus:border-[#C6A477] py-2 text-sm text-[#F5F0E8] outline-none transition-colors"
                    >
                      {availableDestinations.map((d) => (
                        <option key={d} value={d} className="bg-[#101010] text-[#F5F0E8]">
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.22em] text-[#C6A477] uppercase block mb-1">
                    VENUE DETAILS OR CEREMONY WISHES
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your wedding events, haldi, sangeet, or rituals..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-transparent border-b border-[rgba(245,240,232,0.2)] focus:border-[#C6A477] py-2 text-sm text-[#F5F0E8] outline-none transition-colors placeholder:text-[#A6A19A]/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C6A477] text-[#080808] hover:bg-[#F5F0E8] py-3.5 text-[11px] tracking-[0.25em] font-semibold uppercase transition-all duration-300 gold-halo flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT BOOKING INQUIRY</span>
                </button>
              </form>
            </div>
          ) : (
            /* Submission Dossier Preview */
            <div className="bg-[#080808] border border-[#C6A477] p-6 space-y-6">
              <div className="flex items-center gap-2 text-[#C6A477]">
                <Check className="w-5 h-5" />
                <span className="text-[11px] tracking-[0.25em] font-semibold uppercase">
                  INQUIRY GENERATED · MAN WITH A CAMERA
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#F5F0E8]">
                Namaste, {formData.coupleNames || 'Dear Patrons'}!
              </h3>

              <p className="text-sm text-[#A6A19A] leading-relaxed">
                Thank you for considering {BUSINESS_PROFILE.name}. We will review date availability for {destination} and connect with you on WhatsApp/Phone ({formData.phone || BUSINESS_PROFILE.formattedPhone}).
              </p>

              <div className="bg-[#141414] p-4 border border-[rgba(245,240,232,0.08)] space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#A6A19A]">REF NO:</span>
                  <span className="text-[#C6A477]">MWAC-{(Math.random() * 9000 + 1000).toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A6A19A]">DESTINATION:</span>
                  <span className="text-[#F5F0E8]">{destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A6A19A]">ESTIMATE:</span>
                  <span className="text-[#C6A477] font-semibold">
                    {currencyRates[currency].symbol}
                    {formattedTotal}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/919766066092?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#C6A477] text-[#080808] hover:bg-[#F5F0E8] py-3 text-[11px] tracking-[0.22em] font-semibold uppercase transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>FORWARD INQUIRY ON WHATSAPP (+91 9766066092)</span>
                </a>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => window.print()}
                    className="flex-1 border border-[rgba(198,164,119,0.4)] text-[#F5F0E8] hover:bg-[#C6A477]/10 py-2.5 text-[10px] tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>PRINT DOSSIER</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="border border-[rgba(245,240,232,0.15)] text-[#A6A19A] hover:text-[#F5F0E8] py-2.5 px-4 text-[10px] tracking-[0.2em] uppercase cursor-pointer"
                  >
                    EDIT
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom studio guarantee */}
        <div className="pt-6 mt-8 border-t border-[rgba(245,240,232,0.08)] text-[10px] tracking-[0.18em] text-[#A6A19A] uppercase flex items-center justify-between">
          <span>CAPTURING TIMELESS LOVE STORIES SINCE {BUSINESS_PROFILE.foundedYear}</span>
          <span className="text-[#C6A477]">SANGLI · MUMBAI</span>
        </div>
      </div>
    </div>
  );
};
