import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 px-10 py-8">

      <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

        {/* Left */}

        <div className="flex items-center gap-6">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10">

            <Mail
              size={42}
              className="text-sky-400"
            />

          </div>

          <div>

            <h2 className="text-4xl font-bold text-white">
              Newsletter
            </h2>

            <p className="mt-2 max-w-md text-lg text-slate-300">
              Subscribe to get the latest travel deals and offers.
            </p>

          </div>

        </div>

        {/* Right */}

        <form className="flex w-full max-w-3xl gap-3">

          <input
            type="email"
            placeholder="Your Email ID"
            className="h-16 flex-1 rounded-lg border-none bg-white px-6 text-lg text-slate-700 outline-none"
          />

          <button
            type="submit"
            className="rounded-lg bg-sky-500 px-10 text-lg font-semibold transition hover:bg-orange-500"
          >
            Submit
          </button>

        </form>

      </div>

    </div>
  );
}