import { Clock3, Plane } from "lucide-react";

const About = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-orange-50 px-6">

      {/* Background Blur */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-3xl rounded-[30px] border border-sky-100 bg-white/90 p-12 text-center shadow-2xl backdrop-blur">

        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-orange-500 shadow-xl">
          <Plane size={42} className="text-white" />
        </div>

        {/* Badge */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
          <Clock3 size={16} />
          Website Under Development
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-extrabold text-slate-800">
          Coming Soon!
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          We're building something amazing for travelers.
          This page is currently under development and will be
          available very soon with exciting travel packages,
          destination guides and premium services.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button
            onClick={() => window.history.back()}
            className="rounded-full border-2 border-orange-500 px-8 py-3 font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
          >
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="rounded-full bg-gradient-to-r from-sky-500 to-sky-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            Back to Home
          </button>

        </div>

        {/* Bottom Text */}
        <p className="mt-12 text-sm text-slate-500">
          ✈ Thank you for your patience. We'll be launching this page soon.
        </p>

      </div>

    </section>
  );
};

export default About;