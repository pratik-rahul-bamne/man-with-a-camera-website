import React, { useState } from 'react';
import { X, Check, Calendar, Phone, MessageSquare, Send, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/weddingData';

interface ClientCommissionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface InquiryData {
  coupleNames: string;
  weddingDate: string;
  destination: string;
  eventType: string;
  services: string[];
  contactName: string;
  phone: string;
  email: string;
  notes: string;
}

export const ClientCommissionDrawer: React.FC<ClientCommissionDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [referenceCode, setReferenceCode] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<InquiryData>({
    coupleNames: '',
    weddingDate: '',
    destination: 'Sangli & Kolhapur Region',
    eventType: 'Full Wedding Celebration',
    services: ['Wedding Photography', 'Cinematic Wedding Films'],
    contactName: '',
    phone: '',
    email: '',
    notes: '',
  });

  if (!isOpen) return null;

  const eventTypes = [
    'Full Wedding Celebration',
    'Pre-Wedding Session',
    'Multi-Day Royal Palace Wedding',
    'Engagement Ceremony',
    'Destination Wedding',
  ];

  const destinationOptions = [
    'Sangli & Kolhapur Region',
    'Mumbai & Suburban Metros',
    'Pune & Lonavala Resorts',
    'Goa Beach & Coastal Weddings',
    'Destination Wedding (Across India)',
    'International Destination',
  ];

  const availableServices = [
    'Wedding Photography',
    'Cinematic Wedding Films',
    'Pre-Wedding Photography',
    'Handcrafted Heirloom Album',
    '4K Drone Aerial Coverage',
  ];

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      const updated = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updated };
    });
  };

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.coupleNames.trim()) {
      newErrors.coupleNames = "Please enter the couple's names.";
    }
    if (!formData.weddingDate) {
      newErrors.weddingDate = 'Please select your wedding date.';
    }
    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one required service.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Please enter your full name.';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      setStep(3);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate reference code ONLY when inquiry is actually submitted
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const code = `MWAC-INQ-${new Date().getFullYear()}-${randomId}`;
    setReferenceCode(code);
    setIsSubmitted(true);
  };

  const formattedWhatsAppMsg = encodeURIComponent(
    `Hello Man With A Camera,\n\nI would like to check availability for our wedding:\n- Couple: ${formData.coupleNames}\n- Date: ${formData.weddingDate}\n- Location: ${formData.destination}\n- Event Type: ${formData.eventType}\n- Services: ${formData.services.join(', ')}\n- Contact: ${formData.contactName} (${formData.phone})\n- Reference: ${referenceCode || 'New Website Inquiry'}\n\nCould you please let us know your calendar availability?`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-drawer-title"
      className="fixed inset-0 z-50 flex justify-end"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#252525]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-xl bg-[#F7F5F0] border-l border-[#DDD8CF] h-full max-h-[100dvh] overflow-y-auto z-10 p-5 sm:p-8 md:p-10 text-[#252525] flex flex-col justify-between shadow-2xl">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 sm:pb-6 border-b border-[#DDD8CF] mb-5 sm:mb-6">
            <div>
              <p className="text-[10px] tracking-[0.24em] text-[#A68B6A] uppercase font-semibold">
                {BUSINESS_PROFILE.name} · Studio Booking
              </p>
              <h2 id="booking-drawer-title" className="font-serif text-xl sm:text-3xl text-[#252525] font-normal mt-1">
                Check Availability
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 border border-[#DDD8CF] text-[#68645E] hover:text-[#252525] hover:bg-[#EDEAE3] transition-all cursor-pointer rounded-sm"
              aria-label="Close Booking Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!isSubmitted ? (
            <div>
              {/* Step Progress Indicator */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center justify-between text-[11px] sm:text-xs tracking-[0.12em] sm:tracking-[0.16em] uppercase font-medium text-[#68645E] mb-2">
                  <span className={step >= 1 ? 'text-[#252525] font-semibold' : ''}>
                    1. <span className="hidden xs:inline">Wedding </span>Details
                  </span>
                  <span className={step >= 2 ? 'text-[#252525] font-semibold' : ''}>
                    2. Contact
                  </span>
                  <span className={step === 3 ? 'text-[#252525] font-semibold' : ''}>
                    3. Review
                  </span>
                </div>
                <div className="w-full bg-[#EDEAE3] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#252525] h-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>

              {/* STEP 1: WEDDING DETAILS */}
              {step === 1 && (
                <form onSubmit={handleNextStep1} className="space-y-5 sm:space-y-6">
                  <div>
                    <label className="text-xs tracking-[0.18em] uppercase text-[#252525] font-semibold block mb-2">
                      Couple's Names *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Akash & Pooja"
                      value={formData.coupleNames}
                      onChange={(e) => setFormData({ ...formData, coupleNames: e.target.value })}
                      className="w-full min-h-[46px] bg-[#EDEAE3] border border-[#DDD8CF] focus:border-[#252525] focus:bg-[#FFFFFF] px-4 py-3 text-base sm:text-sm text-[#252525] outline-none rounded-sm transition-colors placeholder:text-[#68645E]/50"
                    />
                    {errors.coupleNames && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.coupleNames}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs tracking-[0.18em] uppercase text-[#252525] font-semibold block mb-2">
                        Wedding Date *
                      </label>
                      <input
                        type="date"
                        value={formData.weddingDate}
                        onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                        className="w-full min-h-[46px] bg-[#EDEAE3] border border-[#DDD8CF] focus:border-[#252525] focus:bg-[#FFFFFF] px-4 py-3 text-base sm:text-sm text-[#252525] outline-none rounded-sm transition-colors"
                      />
                      {errors.weddingDate && (
                        <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.weddingDate}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs tracking-[0.18em] uppercase text-[#252525] font-semibold block mb-2">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full min-h-[46px] bg-[#EDEAE3] border border-[#DDD8CF] focus:border-[#252525] focus:bg-[#FFFFFF] px-4 py-3 text-base sm:text-sm text-[#252525] outline-none rounded-sm transition-colors"
                      >
                        {eventTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#FFFFFF] text-[#252525]">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-[0.18em] uppercase text-[#252525] font-semibold block mb-2">
                      Wedding Location / Destination
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-[#EDEAE3] border border-[#DDD8CF] focus:border-[#252525] focus:bg-[#FFFFFF] px-4 py-3 text-sm text-[#252525] outline-none rounded-sm transition-colors"
                    >
                      {destinationOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#FFFFFF] text-[#252525]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs tracking-[0.18em] uppercase text-[#252525] font-semibold block mb-2">
                      Required Services *
                    </label>
                    <div className="space-y-2.5">
                      {availableServices.map((service) => {
                        const isChecked = formData.services.includes(service);
                        return (
                          <div
                            key={service}
                            onClick={() => toggleService(service)}
                            className="flex items-center gap-3 p-3 bg-[#EDEAE3] border border-[#DDD8CF] hover:border-[#A68B6A] cursor-pointer rounded-sm transition-colors"
                          >
                            <div
                              className={`w-4 h-4 border flex items-center justify-center rounded-sm transition-colors ${
                                isChecked
                                  ? 'border-[#252525] bg-[#252525] text-[#FFFFFF]'
                                  : 'border-[#DDD8CF] bg-[#F7F5F0]'
                              }`}
                            >
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <span className="text-xs text-[#252525] font-medium">{service}</span>
                          </div>
                        );
                      })}
                    </div>
                    {errors.services && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.services}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#252525] text-[#FFFFFF] hover:bg-[#A68B6A] py-3.5 text-xs tracking-[0.2em] font-semibold uppercase transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer mt-6 shadow-sm"
                  >
                    <span>Proceed to Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* STEP 2: CONTACT DETAILS */}
              {step === 2 && (
                <form onSubmit={handleNextStep2} className="space-y-5 sm:space-y-6">
                  <div>
                    <label className="text-xs tracking-[0.18em] uppercase text-[#252525] font-semibold block mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Akash Deshmukh"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full min-h-[46px] bg-[#EDEAE3] border border-[#DDD8CF] focus:border-[#252525] focus:bg-[#FFFFFF] px-4 py-3 text-base sm:text-sm text-[#252525] outline-none rounded-sm transition-colors placeholder:text-[#68645E]/50"
                    />
                    {errors.contactName && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.contactName}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs tracking-[0.18em] uppercase text-[#252525] font-semibold block mb-2">
                        Mobile Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        placeholder="9766066092"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full min-h-[46px] bg-[#EDEAE3] border border-[#DDD8CF] focus:border-[#252525] focus:bg-[#FFFFFF] px-4 py-3 text-base sm:text-sm text-[#252525] outline-none rounded-sm transition-colors placeholder:text-[#68645E]/50 font-mono"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs tracking-[0.18em] uppercase text-[#252525] font-semibold block mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="client@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full min-h-[46px] bg-[#EDEAE3] border border-[#DDD8CF] focus:border-[#252525] focus:bg-[#FFFFFF] px-4 py-3 text-base sm:text-sm text-[#252525] outline-none rounded-sm transition-colors placeholder:text-[#68645E]/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-[0.18em] uppercase text-[#252525] font-semibold block mb-2">
                      Venue Details or Specific Desires
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about the venue, rituals, or any special moments you want us to capture..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#EDEAE3] border border-[#DDD8CF] focus:border-[#252525] focus:bg-[#FFFFFF] px-4 py-3 text-base sm:text-sm text-[#252525] outline-none rounded-sm transition-colors placeholder:text-[#68645E]/50 resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="border border-[#DDD8CF] text-[#68645E] hover:text-[#252525] hover:bg-[#EDEAE3] px-5 py-3 text-xs tracking-[0.18em] uppercase font-semibold rounded-sm transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="flex-1 bg-[#252525] text-[#FFFFFF] hover:bg-[#A68B6A] py-3 text-xs tracking-[0.2em] font-semibold uppercase transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>Review Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 3: REVIEW & SUBMIT */}
              {step === 3 && (
                <form onSubmit={handleFinalSubmit} className="space-y-6">
                  <div className="bg-[#EDEAE3] p-5 border border-[#DDD8CF] space-y-4 text-xs font-sans rounded-sm">
                    <div className="flex items-center justify-between pb-3 border-b border-[#DDD8CF]">
                      <span className="text-[10px] tracking-[0.2em] text-[#A68B6A] uppercase font-semibold">
                        Inquiry Summary
                      </span>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-[#A68B6A] hover:text-[#252525] uppercase text-[10px] tracking-wider font-semibold"
                      >
                        Edit Details
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-[#68645E] block text-[10px] uppercase tracking-wider">Couple</span>
                        <span className="text-[#252525] font-medium mt-0.5 block">{formData.coupleNames}</span>
                      </div>
                      <div>
                        <span className="text-[#68645E] block text-[10px] uppercase tracking-wider">Wedding Date</span>
                        <span className="text-[#252525] font-medium mt-0.5 block">{formData.weddingDate}</span>
                      </div>
                      <div>
                        <span className="text-[#68645E] block text-[10px] uppercase tracking-wider">Location</span>
                        <span className="text-[#252525] font-medium mt-0.5 block">{formData.destination}</span>
                      </div>
                      <div>
                        <span className="text-[#68645E] block text-[10px] uppercase tracking-wider">Event Type</span>
                        <span className="text-[#252525] font-medium mt-0.5 block">{formData.eventType}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#DDD8CF]">
                      <span className="text-[#68645E] block text-[10px] uppercase tracking-wider mb-1">Services</span>
                      <div className="flex flex-wrap gap-1.5">
                        {formData.services.map((s) => (
                          <span key={s} className="bg-[#F7F5F0] text-[#252525] px-2 py-0.5 border border-[#DDD8CF] text-[10px] font-medium rounded-sm">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#DDD8CF] grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-[#68645E] block text-[10px] uppercase tracking-wider">Contact Person</span>
                        <span className="text-[#252525] font-medium mt-0.5 block">{formData.contactName}</span>
                      </div>
                      <div>
                        <span className="text-[#68645E] block text-[10px] uppercase tracking-wider">Mobile Number</span>
                        <span className="text-[#252525] font-mono mt-0.5 block">{formData.phone}</span>
                      </div>
                    </div>

                    {formData.notes && (
                      <div className="pt-2 border-t border-[#DDD8CF]">
                        <span className="text-[#68645E] block text-[10px] uppercase tracking-wider mb-0.5">Notes</span>
                        <span className="text-[#252525] font-light text-xs italic">"{formData.notes}"</span>
                      </div>
                    )}
                  </div>

                  <p className="text-[11px] text-[#68645E] leading-relaxed">
                    * Submitting this form creates a priority inquiry to check our studio schedule. This does not commit you or charge any advance until availability is confirmed.
                  </p>

                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="border border-[#DDD8CF] text-[#68645E] hover:text-[#252525] hover:bg-[#EDEAE3] px-5 py-3.5 text-xs tracking-[0.18em] uppercase font-semibold rounded-sm transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="flex-1 bg-[#252525] text-[#FFFFFF] hover:bg-[#A68B6A] py-3.5 text-xs tracking-[0.2em] font-semibold uppercase transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Wedding Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Submission Confirmation */
            <div className="bg-[#EDEAE3] border border-[#DDD8CF] p-6 sm:p-8 space-y-6 animate-in fade-in duration-300 shadow-xl rounded-sm">
              <div className="flex items-center gap-2 text-[#A68B6A]">
                <Check className="w-5 h-5 stroke-[2.5]" />
                <span className="text-xs tracking-[0.22em] font-semibold uppercase">
                  Inquiry Received Successfully
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[#252525]">
                  Thank you, {formData.contactName}!
                </h3>
                <p className="text-xs text-[#68645E] font-light mt-2 leading-relaxed">
                  We have logged your inquiry for <strong className="text-[#252525]">{formData.coupleNames}</strong> on <strong className="text-[#252525]">{formData.weddingDate}</strong> in <strong className="text-[#252525]">{formData.destination}</strong>.
                </p>
              </div>

              {/* Distinction reminder */}
              <div className="bg-[#F7F5F0] p-4 border border-[#DDD8CF] text-xs text-[#68645E] space-y-2 rounded-sm">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span>INQUIRY REF:</span>
                  <span className="text-[#A68B6A] font-semibold">{referenceCode}</span>
                </div>
                <p className="text-[11px] text-[#68645E] pt-1">
                  <strong className="text-[#252525]">Notice:</strong> This is a booking inquiry, not a confirmed reservation. We will review our availability and connect with you on WhatsApp/Phone ({formData.phone}) within 24 hours.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/919766066092?text=${formattedWhatsAppMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#252525] text-[#FFFFFF] hover:bg-[#A68B6A] py-3 text-xs tracking-[0.2em] font-semibold uppercase transition-all rounded-sm flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Forward Details on WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full border border-[#DDD8CF] text-[#68645E] hover:text-[#252525] hover:bg-[#F7F5F0] py-2.5 text-xs tracking-[0.18em] uppercase rounded-sm cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="pt-6 mt-6 border-t border-[#DDD8CF] flex items-center justify-between text-[11px] text-[#68645E]">
          <span>Studio: {BUSINESS_PROFILE.formattedPhone}</span>
          <span>Sangli · Mumbai</span>
        </div>
      </div>
    </div>
  );
};
