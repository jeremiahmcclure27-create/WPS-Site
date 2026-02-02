"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface GalleryItem {
  title: string;
  description: string;
}

export default function Gallery() {
  const galleryItems: GalleryItem[] = [
    {
      title: "Commercial Office",
      description: "Pristine workspace cleaning.",
    },
    {
      title: "Retail Space",
      description: "Customer-ready environments.",
    },
    {
      title: "Floor Polishing",
      description: "High-gloss, slip-conscious finishes.",
    },
    {
      title: "Facility Maintenance",
      description: "Complete property care over time.",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-[#f3f4f6] to-[#e5e7eb]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Card wrapper */}
        <div className="rounded-[32px] bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.18)] p-8 md:p-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-block px-4 py-1.5 bg-lime/10 text-lime-dark rounded-full text-[11px] md:text-xs font-semibold tracking-[0.16em] uppercase mb-4">
              Our Work
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-900 mb-4">
              See the Difference.
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Hospital-grade cleanliness delivered with precision and care. Photos coming soon as we
              complete projects across Murrieta and the surrounding cities.
            </p>
          </motion.div>

          {/* Gallery Grid (on-brand placeholders) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(15,23,42,0.22)] bg-slate-900"
              >
                {/* Navy gradient placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-lime/25" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/60 transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                  <Sparkles className="w-10 h-10 mb-3 text-lime group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-display font-bold text-xl md:text-2xl mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-100/90">{item.description}</p>
                </div>

                {/* "Coming Soon" Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 text-slate-900 rounded-full text-[11px] font-semibold shadow-sm">
                  Photos Coming Soon
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 rounded-2xl bg-slate-50 border border-slate-100 p-6 md:p-8 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-lime" />
              <h3 className="font-display font-bold text-lg md:text-xl text-slate-900">
                New to Murrieta, Committed to Excellence
              </h3>
            </div>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              We&apos;re building our local portfolio. Be among our first clients and experience the
              WPS standard of cleanliness. Professional results first, photos to follow as we grow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
