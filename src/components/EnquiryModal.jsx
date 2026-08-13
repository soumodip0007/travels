import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  User,
  Phone,
  Mail,
  MapPin,
  Compass,
  CalendarDays,
  PlaneTakeoff,
  ChevronDown,
  ChevronRight,
  AlertCircle,
} from "lucide-react";

import { submitEnquiry } from "../utils/submitEnquiry";
import LoadingSpinner from "./LoadingSpinner";

const DOMESTIC = [
  "Ajanta Ellora Mumbai Goa",
  "Madhya Pradesh",
  "Andaman",
  "Arunachal Pradesh",
  "Ayodhya",
  "Five Joytirlinga",
  "Himachal Pradesh",
  "Koraput",
  "Nagaland Tripura",
  "Offbeat Kashmir",
  "Pelling Ravangla Darjeeling",
  "Rajasthan",
  "South India",
  "Valley of Leh Ladakh",
  "Vizag Hyderabad",
  "Kashmir",
  "Kinnaur La Hul Spiti",
  "Meghalaya",
  "North India",
  "North Sikkim",
  "Goa",
  "Karnataka",
  "Goa with Lakshadweep",
  "Kerala with Kanyakumari",
  "Gujarat",
];

const INTERNATIONAL = [
  "Nepal",
  "Bangkok Pattaya Phuket",
  "Bangkok, Pattaya, Phuket & Krabi",
  "Kazakhstan & Uzbekistan",
  "Vietnam",
  "Vietnam Phu Quoc",
  "Srilanka",
  "Singapore Malaysia, Genting",
  "Thailand Singapore Malyasia",
];

const EMPTY_FORM = {
  name: "",
  phone: "",
  email: "",
  address: "",
  startDate: "",
  endDate: "",
  tourType: "",
  tourPackage: "",
};

const todayISO = () => new Date().toISOString().split("T")[0];

export default function EnquiryModal({ open, close }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [touched, setTouched] = useState({});
  const [attempted, setAttempted] = useState(false);

  // Lock background scroll + close on Escape while the modal is open
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const packageOptions =
    form.tourType === "Domestic Tour"
      ? DOMESTIC
      : form.tourType === "International Tour"
        ? INTERNATIONAL
        : [];

  // Field-level validation, computed fresh from current form state
  const errors = useMemo(() => {
    const e = {};

    if (!form.name.trim()) e.name = "Enter your full name.";

    if (!form.phone.trim()) {
      e.phone = "Enter a phone number.";
    } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
      e.phone = "Enter a valid 10-digit phone number.";
    }

    if (!form.email.trim()) {
      e.email = "Enter an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }

    if (!form.address.trim()) e.address = "Enter your address.";
    if (!form.tourType) e.tourType = "Select a tour type.";
    if (!form.tourPackage) e.tourPackage = "Select a package.";
    if (!form.startDate) e.startDate = "Choose a start date.";

    if (!form.endDate) {
      e.endDate = "Choose an end date.";
    } else if (form.startDate && form.endDate < form.startDate) {
      e.endDate = "End date can't be before the start date.";
    }

    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "tourType" ? { tourPackage: "" } : {}),
      ...(name === "startDate" && prev.endDate && value > prev.endDate
        ? { endDate: "" }
        : {}),
    }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const showError = (field) => (touched[field] || attempted) && errors[field];

  const submit = async (e) => {
    e.preventDefault();
    setAttempted(true);

    if (!isValid) {
      // Focus the first invalid field for a faster fix
      const firstInvalid = Object.keys(errors)[0];
      document.getElementsByName(firstInvalid)[0]?.focus();
      return;
    }

    setLoading(true);

    try {
      await submitEnquiry(form);
      alert("Enquiry sent successfully!");
      setForm(EMPTY_FORM);
      setTouched({});
      setAttempted(false);
      close();
    } catch {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  const inputBase =
    "enquiry-input w-full rounded-xl border bg-white p-3 pl-10 text-[15px] text-[#241C4B] outline-none placeholder:text-slate-400";

  const inputState = (field) =>
    showError(field)
      ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100"
      : "border-slate-200 focus:border-[#6957DF] focus:ring-4 focus:ring-[#6957DF]/10";

  return (
    <div className="fixed inset-0 z-[99999] flex items-end justify-center sm:items-center sm:p-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=JetBrains+Mono:wght@500&display=swap');

        .enquiry-display {
          font-family: 'Fraunces', serif;
          font-optical-sizing: auto;
        }

        .enquiry-mono {
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.08em;
        }

        .enquiry-stub-bg {
          background-image:
            linear-gradient(135deg, #6957DF 0%, #443381 100%),
            radial-gradient(circle at 20% 15%, rgba(255,255,255,0.14) 0, transparent 45%),
            radial-gradient(circle at 85% 85%, rgba(255,255,255,0.10) 0, transparent 40%);
        }

        .enquiry-input {
          transition: border-color 200ms ease, box-shadow 200ms ease, background-color 200ms ease;
        }

        .enquiry-scroll {
          scrollbar-width: none;
        }

        .enquiry-scroll::-webkit-scrollbar {
          display: none;
        }

        .enquiry-submit {
          position: relative;
          overflow: hidden;
        }

        .enquiry-submit::before {
          content: "";
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-20deg);
          transition: left 700ms ease;
        }

        .enquiry-submit:hover::before {
          left: 130%;
        }

        @media (max-width: 639px) {
          input[type="date"] {
            min-height: 44px;
          }
        }
      `}</style>

      {/* Background overlay */}
      <div
        onClick={close}
        className="absolute inset-0 bg-[#241c4b]/50 backdrop-blur-md"
      />

      {/* Modal — bottom sheet on mobile, centered card from sm+ */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32, ease: "easeOut" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className="relative z-10 flex h-[92dvh] sm:h-[42rem] w-full max-h-[92dvh] sm:max-h-[94vh] max-w-4xl flex-col overflow-hidden rounded-t-[28px] sm:rounded-[28px] bg-[#FBFAFF] shadow-[0_40px_100px_rgba(36,28,75,0.35)] sm:flex-row"
      >
        {/* ================= Ticket Stub (desktop only) ================= */}
        <div className="enquiry-stub-bg relative hidden w-[200px] shrink-0 flex-col justify-between p-6 text-white sm:flex">
          <div>
            <PlaneTakeoff size={22} className="text-white/90" />
            <h3 className="enquiry-display mt-1.5 text-xl leading-snug">
              Travel
              <br />
              Enquiry
            </h3>
          </div>

          {/* Perforated edge */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-px border-r-2 border-dashed border-white/25" />
          <div className="pointer-events-none absolute -right-3 -top-3 h-6 w-6 rounded-full bg-[#FBFAFF]" />
          <div className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 rounded-full bg-[#FBFAFF]" />
        </div>

        {/* ================= Form Side ================= */}
        <div className="flex min-h-0 flex-1 flex-col">
          {/* Sticky header */}
          <div className="flex shrink-0 items-start justify-between border-b border-slate-100 px-5 pb-3 pt-4 sm:px-7 sm:pt-6">
            <div>
              <h2
                id="enquiry-title"
                className="enquiry-display text-xl text-[#241c4b] sm:text-2xl"
              >
                Travel Enquiry
              </h2>
            </div>

            <button
              type="button"
              onClick={close}
              aria-label="Close enquiry form"
              className="-mr-1.5 -mt-1 shrink-0 rounded-full p-2 text-[#241c4b] transition hover:bg-purple-50 hover:text-[#6957DF]"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable form body */}
          <form
            id="enquiry-form"
            onSubmit={submit}
            noValidate
            className="enquiry-scroll min-h-0 flex-1 overflow-y-auto px-5 py-4 sm:px-7 sm:py-5"
          >
            <fieldset className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {/* Name */}
              <Field
                label="Full Name"
                icon={User}
                error={showError("name")}
              >
                <input
                  id="name"
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                  placeholder="Enter your name"
                  className={`${inputBase} ${inputState("name")}`}
                />
              </Field>

              {/* Phone */}
              <Field
                label="Phone Number"
                icon={Phone}
                error={showError("phone")}
              >
                <input
                  id="phone"
                  required
                  type="tel"
                  inputMode="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="tel"
                  placeholder="10-digit mobile number"
                  className={`${inputBase} ${inputState("phone")}`}
                />
              </Field>

              {/* Email */}
              <Field
                label="Email Address"
                icon={Mail}
                error={showError("email")}
                span2
              >
                <input
                  id="email"
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                  placeholder="Enter email address"
                  className={`${inputBase} ${inputState("email")}`}
                />
              </Field>

              {/* Address */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Address
                </label>

                <div className="relative">
                  <MapPin
                    size={17}
                    className="pointer-events-none absolute left-3.5 top-3.5 text-[#6957DF]/50"
                  />
                  <textarea
                    id="address"
                    required
                    name="address"
                    rows={2}
                    value={form.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="street-address"
                    placeholder="Street, area, city, state, PIN code"
                    className={`${inputBase} resize-none rounded-2xl ${inputState("address")}`}
                  />
                </div>

                {showError("address") && <ErrorText text={errors.address} />}
              </div>
            </fieldset>

            <fieldset className="mt-5 grid grid-cols-1 gap-3.5 border-t border-slate-100 pt-5 sm:grid-cols-2">
              {/* Tour Type */}
              <Field
                label="Tour Type"
                icon={Compass}
                error={showError("tourType")}
                select
              >
                <select
                  id="tourType"
                  required
                  name="tourType"
                  value={form.tourType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputBase} appearance-none pr-9 ${inputState("tourType")}`}
                >
                  <option value="">Select tour type</option>
                  <option value="Domestic Tour">Domestic Tour</option>
                  <option value="International Tour">
                    International Tour
                  </option>
                </select>
              </Field>

              {/* Tour Package */}
              <div>
                <label
                  htmlFor="tourPackage"
                  className="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Tour Package
                </label>

                <div className="relative">
                  <PlaneTakeoff
                    size={17}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6957DF]/50"
                  />
                  <select
                    id="tourPackage"
                    required
                    name="tourPackage"
                    value={form.tourPackage}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={!form.tourType}
                    className={`${inputBase} appearance-none pr-9 ${
                      !form.tourType
                        ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400"
                        : inputState("tourPackage")
                    }`}
                  >
                    <option value="">
                      {form.tourType
                        ? "Select tour package"
                        : "Select tour type first"}
                    </option>
                    {packageOptions.map((pkg) => (
                      <option key={pkg} value={pkg}>
                        {pkg}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={17}
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>

                {showError("tourPackage") && (
                  <ErrorText text={errors.tourPackage} />
                )}
              </div>

              {/* Start Date */}
              <Field
                label="Start Date"
                icon={CalendarDays}
                error={showError("startDate")}
              >
                <input
                  id="startDate"
                  required
                  type="date"
                  name="startDate"
                  min={todayISO()}
                  value={form.startDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputBase} ${inputState("startDate")}`}
                />
              </Field>

              {/* End Date */}
              <Field
                label="End Date"
                icon={CalendarDays}
                error={showError("endDate")}
              >
                <input
                  id="endDate"
                  required
                  type="date"
                  name="endDate"
                  min={form.startDate || todayISO()}
                  value={form.endDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputBase} ${inputState("endDate")}`}
                />
              </Field>
            </fieldset>
          </form>

          {/* Sticky footer / submit */}
          <div className="shrink-0 border-t border-slate-100 bg-[#FBFAFF] px-5 py-3.5 sm:px-7 sm:py-4">
            <div className="flex items-center justify-end gap-3">
              {attempted && !isValid && (
                <p className="mr-auto flex items-center gap-1.5 text-xs font-medium text-red-500 sm:text-sm">
                  <AlertCircle size={15} className="shrink-0" />
                  Please fix the highlighted fields.
                </p>
              )}

              <button
                type="submit"
                form="enquiry-form"
                disabled={loading}
                className="enquiry-submit ml-auto flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] px-7 py-3 text-sm font-bold text-white shadow-[0_20px_45px_rgba(105,87,223,0.35)] transition-all hover:scale-[1.01] hover:shadow-[0_25px_55px_rgba(105,87,223,0.45)] disabled:opacity-70 disabled:hover:scale-100 sm:px-10 sm:py-3.5 sm:text-base"
              >
                {loading ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    Submit Enquiry
                    <ChevronRight size={16} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/** Shared label + icon-input wrapper so every field lines up the same way. */
function Field({ label, icon: Icon, error, children, span2 }) {
  const id = children.props.id;

  return (
    <div className={span2 ? "sm:col-span-2" : undefined}>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <div className="relative">
        <Icon
          size={17}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6957DF]/50"
        />
        {children}
      </div>

      {error && <ErrorText text={error} />}
    </div>
  );
}

function ErrorText({ text }) {
  return (
    <p className="mt-1 flex items-center gap-1 text-xs font-medium text-red-500">
      <AlertCircle size={12} className="shrink-0" />
      {text}
    </p>
  );
}