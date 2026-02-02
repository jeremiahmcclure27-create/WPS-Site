"use client";

import { motion } from "framer-motion";
import { Search, ClipboardCheck, FileCheck, Sparkles, LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProcessTimeline() {
  const steps: Step[] = [
    {
      icon: Search,
      title: "Inquiry",
      description: "Reach out via phone, email, or our contact form",
    },
    {
      icon: ClipboardCheck,
      title: "Site Walkthrough",
      description: "We visit your property to assess your specific needs",
    },
    {
      icon: FileCheck,
      title: "Custom Plan",
      description: "Receive a detailed service plan and transparent quote",
    },
    {
      icon: Sparkles,
      title: "Execution",
      description: "Professional service delivered on schedule, every time",
    },
  ];

  return (
    <div className="relative">
      {/* Desktop Timeline */}
      <div className="hidden md:block relative">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-0 right-0 h-1 gradient-lime -translate-y-1/2 origin-left"
        />

        {/* Steps */}
        <div className="grid grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon Circle */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-white border-4 border-lime shadow-lg flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-navy" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="text-lime font-display font-bold text-sm">Step {index + 1}</div>
                <h4 className="font-display font-bold text-xl text-navy">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            {/* Icon Circle */}
            <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-lime flex items-center justify-center">
              <step.icon className="w-7 h-7 text-navy" />
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <div className="text-lime font-display font-bold text-xs mb-1">Step {index + 1}</div>
              <h4 className="font-display font-bold text-lg text-navy mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}