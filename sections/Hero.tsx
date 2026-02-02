"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-[#f3f4f6] to-[#e5e7eb] overflow-hidden">
      {/* subtle pattern */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e293b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
        {/* main card */}
        <div className="rounded-[32px] bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_24px_80px_rgba(15,23,42,0.16)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-12">
            {/* left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-1.5 rounded-full text-[11px] md:text-xs font-semibold tracking-[0.16em] uppercase bg-lime/10 text-lime-dark">
                  Murrieta · Commercial Property Services
                </span>
              </motion.div>

              <div>
                <h1 className="font-display font-bold text-4xl md:text-6xl text-slate-900 leading-tight mb-4">
                  Quietly Keep Your Spaces
                  <span className="block text-lime-dark">Clean, Safe, and Open.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-xl">
                  Local, insured property care for offices, medical spaces, and community buildings
                  across the Inland Empire.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime hover:bg-lime-dark text-slate-950 font-semibold px-6 py-3 text-sm md:text-base transition-all duration-300 shadow-[0_18px_40px_rgba(132,204,22,0.45)] hover:-translate-y-0.5"
                >
                  <span>Book a Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-semibold px-6 py-3 text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span>See All Services</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                {[
                  {
                    icon: Shield,
                    title: "Licensed & Insured",
                    subtitle: "Verified coverage",
                  },
                  {
                    icon: Clock,
                    title: "Reliable Scheduling",
                    subtitle: "Evenings & weekends",
                  },
                  {
                    icon: MapPin,
                    title: "Locally Owned",
                    subtitle: "Based in Murrieta",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm px-4 py-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime/10 text-lime-dark">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* right visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(15,23,42,0.22)] bg-white border border-slate-100">
                <div className="aspect-[4/5] bg-gradient-to-br from-slate-900 via-slate-700 to-lime/25 flex items-center justify-center">
                  <div className="text-center p-10">
                    <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-slate-900/70 backdrop-blur-lg flex items-center justify-center border border-slate-600">
                      <Shield className="w-14 h-14 text-lime" />
                    </div>
                    <div className="text-slate-50 text-lg font-semibold mb-1">
                      Professional Standards
                    </div>
                    <div className="text-slate-200 text-sm max-w-xs mx-auto">
                      Hospital‑grade cleaning practices, adapted for your offices, clinics, and
                      shared spaces.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
