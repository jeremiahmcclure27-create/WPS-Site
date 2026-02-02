"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, HelpCircle } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

interface FAQ {
  question: string;
  answer: string;
}

export default function Contact() {
  const faqs: FAQ[] = [
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes, WPS Winslett Property Services is fully licensed and insured to operate in California. We carry comprehensive liability and workers' compensation insurance.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve Murrieta, Temecula, Wildomar, Lake Elsinore, Menifee, and surrounding Inland Empire communities.",
    },
    {
      question: "How quickly can you start service?",
      answer:
        "Most service requests can be accommodated within 48 hours. For emergencies, we offer same-day response when possible.",
    },
    {
      question: "Do you provide your own cleaning supplies?",
      answer:
        "Yes, we bring all necessary professional-grade equipment and eco-friendly cleaning solutions. If you have specific product preferences, we're happy to accommodate.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer:
        "Your satisfaction is guaranteed. If you're not completely happy, we'll return to address any concerns at no additional charge.",
    },
    {
      question: "Can you work after business hours?",
      answer:
        "Absolutely. We understand businesses need minimal disruption, so we can schedule service during evenings, weekends, or off-hours.",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-[#f3f4f6] to-[#e5e7eb]"
    >
      <div className="max-w-6xl mx-auto">
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
              Get Started
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-900 mb-4">
              Request Your Free Quote.
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Tell us about your property and we&apos;ll create a custom service plan with clear,
              transparent pricing.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-lime flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Phone</div>
                      <a
                        href="tel:+14041234567"
                        className="text-slate-600 hover:text-lime-dark transition-colors"
                      >
                        (404) 123-4567
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-lime flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Email</div>
                      <a
                        href="mailto:andy@wpsproperties.com"
                        className="text-slate-600 hover:text-lime-dark transition-colors break-all"
                      >
                        andy@wpsproperties.com
                      </a>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-lime flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Service Area</div>
                      <p className="text-slate-600">Murrieta, CA &amp; Surrounding Areas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="gradient-navy text-white rounded-2xl p-6">
                <h4 className="font-display font-bold text-lg mb-2">Need Immediate Service?</h4>
                <p className="text-sm text-slate-100 mb-4">
                  Call us directly for urgent issues and we&apos;ll do our best to respond as soon
                  as possible.
                </p>
                <a
                  href="tel:+14041234567"
                  className="inline-flex items-center gap-2 bg-lime text-slate-900 font-semibold px-4 py-2 rounded-lg hover:bg-lime-dark transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>

            {/* Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <QuoteForm />
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 text-lime-dark rounded-full text-sm font-semibold mb-4">
                <HelpCircle className="w-4 h-4" />
                <span>FAQ</span>
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-2">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-display font-bold text-slate-900 mb-2">{faq.question}</h4>
                  <p className="text-sm text-slate-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-600 text-sm md:text-base">
                Still have questions?{" "}
                <a
                  href="mailto:andy@wpsproperties.com"
                  className="text-lime-dark font-semibold hover:underline"
                >
                  Contact us directly
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
