import { useState } from "react";
import { X } from "lucide-react";
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
    startDate: "",
    endDate: "",
    package: "",
    message: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
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
        startDate: "",
        endDate: "",
        package: "",
        message: "",
      });

      close();
    } catch {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">

      {/* Background Blur */}

      <div
        onClick={close}
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
      />

      {/* Modal */}

      <div className="relative z-10 w-full max-w-3xl rounded-3xl bg-white p-8 shadow-2xl md:p-10">

        {/* Close Button */}

        <button
          onClick={close}
          className="absolute right-5 top-5 rounded-full p-2 hover:bg-slate-100"
        >
          <X size={22} />
        </button>

        {/* Heading */}

        <h2 className="mb-2 text-3xl font-bold text-[#6957DF]">
          Travel Enquiry
        </h2>

        <p className="mb-8 text-slate-500">
          Tell us about your travel plan and we will contact you shortly.
        </p>

        <form onSubmit={submit} className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* Name */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Full Name
            </label>

            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-[#6957DF]"
            />
          </div>

          {/* Phone */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Phone Number
            </label>

            <input
              required
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-[#6957DF]"
            />
          </div>

          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email Address
            </label>

            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-[#6957DF]"
            />
          </div>

          {/* Tour Type Question */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Which type of tour are you interested in?
            </label>

            <select
              required
              name="package"
              value={form.package}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-white p-4 outline-none transition focus:border-[#6957DF]"
            >
              <option value="">Select Tour Type</option>
              <option value="Domestic Tour">Domestic Tour</option>
              <option value="International Tour">International Tour</option>
            </select>
          </div>

          {/* Start Date */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Start Date
            </label>

            <input
              required
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-[#6957DF]"
            />
          </div>

          {/* End Date */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              End Date
            </label>

            <input
              required
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-[#6957DF]"
            />
          </div>

          {/* Message */}

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Message
            </label>

            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us your destination, number of travellers, budget, etc."
              className="w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-[#6957DF]"
            />
          </div>

          {/* Submit Button */}

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 flex items-center justify-center rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] py-4 font-bold text-white shadow-lg transition-all hover:scale-[1.01] disabled:opacity-70"
          >
            {loading ? (
              <LoadingSpinner />
            ) : (
              "Submit Enquiry"
            )}
          </button>

        </form>
      </div>
    </div>
  );
}