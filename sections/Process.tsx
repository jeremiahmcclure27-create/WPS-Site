"use client";

import { motion } from "framer-motion";
import ProcessTimeline from "@/components/ProcessTimeline";

export default function Process() {
  return (
    <section
      id="process"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-[#e5e7eb] to-[#f3f4f6]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[32px] bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.18)] p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-block px-4 py-1.5 bg-lime/10 text-lime-dark rounded-full text-[11px] md:text-xs font-semibold tracking-[0.16em] uppercase mb-4">
              The WPS Standard
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-900 mb-4">
              How We Work With You.
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Simple steps, clear communication, and no surprises—so you always know what&apos;s
              happening in your building.
            </p>
          </motion.div>

          <ProcessTimeline />

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-16"
>
  <div className="text-center bg-slate-900 text-white rounded-3xl px-6 md:px-10 py-10 md:py-12 border border-slate-800">
    <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">
      Ready to Walk the Space Together?
    </h3>
    <p className="text-sm md:text-base text-slate-100/95 mb-6 max-w-2xl mx-auto">
      Share a few details about your building and we&apos;ll recommend a schedule, scope, and clear
      pricing built around how you actually operate day to day.
    </p>
   <a
  href="#contact"
  className="inline-flex items-center justify-center gap-2 rounded-lg 
             bg-lime hover:bg-lime-dark 
             text-white font-semibold 
             px-6 py-3 text-sm md:text-base
             border border-lime-dark/40 
             shadow-sm hover:shadow-md 
             hover:-translate-y-0.5 
             transition-all duration-200"
>
  <span>Schedule Free Walkthrough</span>
</a>

  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}
