"use client";

import { motion } from "framer-motion";
import { Shield, Award, Clock, ThumbsUp, LucideIcon } from "lucide-react";

interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function TrustBar() {
  const trustItems: TrustItem[] = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully bonded and covered.",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "100% satisfaction promise.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Evenings and weekends available.",
    },
    {
      icon: ThumbsUp,
      title: "Local & Trusted",
      description: "Proudly serving Murrieta Valley.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#f3f4f6] to-[#e5e7eb] py-10 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 rounded-2xl bg-lime/10 flex items-center justify-center">
                <item.icon className="w-7 h-7 md:w-8 md:h-8 text-lime-dark" />
              </div>
              <h3 className="font-display font-bold text-slate-900 mb-1 text-sm md:text-base">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
