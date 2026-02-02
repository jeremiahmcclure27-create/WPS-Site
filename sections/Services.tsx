"use client";

import { motion } from "framer-motion";
import { Building2, Wrench, Sparkles, PackageOpen } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Commercial Janitorial",
      description:
        "Comprehensive cleaning solutions for offices, retail spaces, and commercial facilities.",
      features: [
        "Daily, weekly, or custom schedules",
        "Restroom sanitization",
        "Trash removal & recycling",
        "Surface disinfection",
        "Break room maintenance",
      ],
    },
    {
      icon: Wrench,
      title: "Facility Maintenance",
      description: "Keep your property in top condition with our ongoing maintenance services.",
      features: [
        "HVAC filter replacement",
        "Light fixture maintenance",
        "Basic repairs & upkeep",
        "Preventive maintenance plans",
        "Emergency response available",
      ],
    },
    {
      icon: Sparkles,
      title: "Floor Care & Polishing",
      description: "Professional floor cleaning, stripping, waxing, and polishing services.",
      features: [
        "Strip & wax treatments",
        "High-speed buffing",
        "Carpet deep cleaning",
        "Tile & grout restoration",
        "Protective coatings",
      ],
    },
    {
      icon: PackageOpen,
      title: "Move-In/Move-Out",
      description: "Thorough cleaning for property transitions, ensuring spaces are move-in ready.",
      features: [
        "Deep cleaning top to bottom",
        "Cabinet & appliance cleaning",
        "Window washing",
        "Carpet shampooing",
        "Quick turnaround times",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-[#f3f4f6] to-[#e5e7eb]"
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
              Our Services
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-900 mb-4">
              Every Space Cared For.
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              From daily janitorial to scheduled maintenance, we keep your building clean, safe, and
              ready for the next workday.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={index * 0.08}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-slate-500 mb-4 text-sm md:text-base">
              Don&apos;t see exactly what you need? We build custom scopes for unique properties.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-slate-950 font-semibold px-6 py-3 rounded-xl text-sm md:text-base transition-all duration-300 shadow-[0_16px_40px_rgba(132,204,22,0.45)]"
            >
              <span>Request Custom Quote</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
