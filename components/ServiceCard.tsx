"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden p-8 group"
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl gradient-lime flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-navy" />
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-2xl text-navy mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-6">{description}</p>

      {/* Features List */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-lime mt-2 shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Learn More Link */}
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-navy font-semibold group-hover:text-lime transition-colors"
      >
        <span>Get Quote</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
}
