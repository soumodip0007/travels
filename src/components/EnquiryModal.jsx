import { useState } from "react";
import { X } from "lucide-react";
import { submitEnquiry } from "../utils/submitEnquiry";
import LoadingSpinner from "./LoadingSpinner";

export default function EnquiryModal({
    open,
    close,
    packageName
}) {

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({

        name: "",
        phone: "",
        email: "",
        startDate: "",
        endDate: "",
        package: packageName,
        message: ""

    });

    if (!open) return null;

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const submit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            await submitEnquiry(form);

            alert("Enquiry Sent Successfully!");

            close();

        } catch {

            alert("Something went wrong.");

        }

        setLoading(false);

    };

    return (

        <div className="fixed inset-0 z-[99999] flex items-center justify-center">

            <div
                onClick={close}
                className="absolute inset-0 backdrop-blur-md bg-black/40"
            />

            <div className="relative z-10 w-[60%] rounded-3xl bg-white p-10 shadow-2xl">

                <button
                    onClick={close}
                    className="absolute right-6 top-6"
                >

                    <X />

                </button>

                <h2 className="mb-8 text-3xl font-bold text-[#6957DF]">

                    Travel Enquiry

                </h2>

                <form
                    onSubmit={submit}
                    className="grid grid-cols-2 gap-5"
                >

                    <input
                        required
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        className="rounded-xl border p-4"
                    />

                    <input
                        required
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        className="rounded-xl border p-4"
                    />

                    <input
                        required
                        name="email"
                        placeholder="Email"
                        type="email"
                        onChange={handleChange}
                        className="rounded-xl border p-4"
                    />

                    <input
                        required
                        type="date"
                        name="startDate"
                        onChange={handleChange}
                        className="rounded-xl border p-4"
                    />

                    <input
                        required
                        type="date"
                        name="endDate"
                        onChange={handleChange}
                        className="rounded-xl border p-4"
                    />

                    <input
                        readOnly
                        value={packageName}
                        name="package"
                        className="rounded-xl border bg-slate-100 p-4"
                    />

                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Message"
                        onChange={handleChange}
                        className="col-span-2 rounded-xl border p-4"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="col-span-2 flex items-center justify-center rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] py-4 font-bold text-white transition-all disabled:opacity-70"
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