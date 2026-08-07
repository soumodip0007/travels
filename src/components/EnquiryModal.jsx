import { useState } from "react";
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
} from "lucide-react";

import { submitEnquiry } from "../utils/submitEnquiry";
import LoadingSpinner from "./LoadingSpinner";

export default function EnquiryModal({
  open,
  close,
}) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    startDate: "",
    endDate: "",
    tourType: "",
    tourPackage: ""
  });

  const domestic = [
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
    "Gujarat"
  ];

  const international = [
    "Nepal",
    "Bangkok Pattaya Phuket",
    "Bangkok, Pattaya, Phuket & Krabi",
    "Kazakhstan & Uzbekistan",
    "Vietnam",
    "Vietnam Phu Quoc",
    "Srilanka",
    "Singapore Malaysia, Genting",
    "Thailand Singapore Malyasia"
  ];

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "tourType" ? { tourPackage: "" } : {}),
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await submitEnquiry(form);

      alert("Enquiry Sent Successfully!");

      setForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        startDate: "",
        endDate: "",
        tourType: "",
        tourPackage: ""
      });

      close();
    } catch {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  const packageOptions =
    form.tourType === "Domestic Tour"
      ? domestic
      : form.tourType === "International Tour"
        ? international
        : [];

  // Purely decorative "ticket number" — cosmetic only, no functional role
  const ticketCode = `TE-${new Date().getFullYear().toString().slice(2)}${String(
    new Date().getMonth() + 1
  ).padStart(2, "0")}${String(new Date().getDate()).padStart(2, "0")}`;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">

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

        .enquiry-input:focus {
          box-shadow: 0 0 0 4px rgba(105, 87, 223, 0.14);
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
      `}</style>

      {/* Background Blur */}

      <div
        onClick={close}
        className="absolute inset-0 bg-[#241c4b]/50 backdrop-blur-md"
      />

      {/* Modal */}

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative z-10 grid max-h-[94vh] w-full max-w-4xl overflow-hidden rounded-[28px] bg-[#FBFAFF] shadow-[0_40px_100px_rgba(36,28,75,0.35)] md:grid-cols-[200px_1fr]"
      >

        {/* ================= Ticket Stub ================= */}

        <div className="enquiry-stub-bg relative hidden flex-col justify-between p-6 text-white md:flex">

          <div>
            <PlaneTakeoff size={22} className="text-white/90" />

            <h3 className="enquiry-display mt-1.5 text-xl leading-snug">
              Travel<br />Enquiry
            </h3>
          </div>

          {/* Perforated edge */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-px border-r-2 border-dashed border-white/25" />
          <div className="pointer-events-none absolute -right-3 -top-3 h-6 w-6 rounded-full bg-[#FBFAFF]" />
          <div className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 rounded-full bg-[#FBFAFF]" />
        </div>

        {/* ================= Form Side ================= */}

        <div className="enquiry-scroll overflow-y-auto p-5 md:p-7">

          {/* Close Button */}

          <button
            onClick={close}
            className="absolute right-4 top-4 rounded-full p-1.5 text-[#241c4b] transition hover:bg-purple-50 hover:text-[#6957DF]"
          >
            <X size={20} />
          </button>

          {/* Heading (mobile only, stub hidden) */}

          <div className="mb-4 md:hidden">
            <h2 className="enquiry-display mt-1 text-2xl text-[#241c4b]">
              Travel Enquiry
            </h2>
          </div>

          <p className="mb-4 hidden pr-8 text-sm text-slate-500 md:block">
            Tell us about your travel plan and we will contact you shortly.
          </p>

          <form onSubmit={submit} className="grid grid-cols-1 gap-3.5 md:grid-cols-2">

            {/* Name */}

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={17}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6957DF]/50"
                />
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="enquiry-input w-full rounded-xl border border-slate-200 bg-white p-3 pl-10 outline-none focus:border-[#6957DF]"
                />
              </div>
            </div>

            {/* Phone */}

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={17}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6957DF]/50"
                />
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="enquiry-input w-full rounded-xl border border-slate-200 bg-white p-3 pl-10 outline-none focus:border-[#6957DF]"
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6957DF]/50"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="enquiry-input w-full rounded-xl border border-slate-200 bg-white p-3 pl-10 outline-none focus:border-[#6957DF]"
                />
              </div>
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Address
              </label>

              <div className="relative">
                <MapPin
                  size={17}
                  className="pointer-events-none absolute left-3.5 top-3.5 text-[#6957DF]/50"
                />

                <textarea
                  required
                  name="address"
                  rows={3}
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter your full address (Street, Area, City, State, PIN Code)"
                  className="enquiry-input w-full rounded-2xl border border-slate-200 bg-white p-3 pl-10 text-[15px] text-[#241C4B] outline-none focus:border-[#6957DF] focus:ring-4 focus:ring-[#6957DF]/10 resize-none"
                />
              </div>

              <p className="mt-1 text-xs text-slate-500">
                This helps us provide region-specific travel assistance.
              </p>
            </div>

            {/* Tour Type */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Tour Type
              </label>

              <div className="relative">
                <Compass
                  size={17}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6957DF]/50"
                />

                <select
                  required
                  name="tourType"
                  value={form.tourType}
                  onChange={handleChange}
                  className="enquiry-input w-full appearance-none rounded-xl border border-slate-200 bg-white p-3 pl-10 pr-9 outline-none focus:border-[#6957DF]"
                >
                  <option value="">Select Tour Type</option>
                  <option value="Domestic Tour">Domestic Tour</option>
                  <option value="International Tour">International Tour</option>
                </select>

                <ChevronDown
                  size={17}
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>

            {/* Tour Package */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Select Tour Package
              </label>

              <div className="relative">
                <PlaneTakeoff
                  size={17}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6957DF]/50"
                />

                <select
                  required
                  name="tourPackage"
                  value={form.tourPackage}
                  onChange={handleChange}
                  disabled={!form.tourType}
                  className={`enquiry-input w-full appearance-none rounded-xl border p-3 pl-10 pr-9 outline-none transition-all
        ${!form.tourType
                      ? "border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed"
                      : "border-slate-200 bg-white text-slate-700 focus:border-[#6957DF]"
                    }`}
                >
                  <option value="">
                    {form.tourType
                      ? "Select Tour Package"
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

              {!form.tourType && (
                <p className="mt-1 text-xs text-slate-500">
                  Please select a tour type first.
                </p>
              )}
            </div>

            {/* Start Date */}

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Start Date
              </label>

              <div className="relative">
                <CalendarDays
                  size={17}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6957DF]/50"
                />
                <input
                  required
                  type="date"
                  name="startDate"
                  value={form.startDate}
                  onChange={handleChange}
                  className="enquiry-input w-full rounded-xl border border-slate-200 bg-white p-3 pl-10 outline-none focus:border-[#6957DF]"
                />
              </div>
            </div>

            {/* End Date */}

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                End Date
              </label>

              <div className="relative">
                <CalendarDays
                  size={17}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6957DF]/50"
                />
                <input
                  required
                  type="date"
                  name="endDate"
                  value={form.endDate}
                  onChange={handleChange}
                  className="enquiry-input w-full rounded-xl border border-slate-200 bg-white p-3 pl-10 outline-none focus:border-[#6957DF]"
                />
              </div>
            </div>

            {/* Submit Button */}

            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="enquiry-submit flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] px-10 py-3.5 font-bold text-white shadow-[0_20px_45px_rgba(105,87,223,0.35)] transition-all hover:scale-[1.01] hover:shadow-[0_25px_55px_rgba(105,87,223,0.45)] disabled:opacity-70 disabled:hover:scale-100"
              >
                {loading ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    Submit
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </motion.div>

    </div>
  );
}