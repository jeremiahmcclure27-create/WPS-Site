"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Home, ChevronRight, ChevronLeft, Check, LucideIcon } from "lucide-react";

interface FormData {
  serviceType: string;
  propertyType: string;
  propertySize: string;
  frequency: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ServiceOption {
  value: string;
  label: string;
  icon: LucideIcon;
}

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    serviceType: "",
    propertyType: "",
    propertySize: "",
    frequency: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Failed to submit form");
        alert("There was an error submitting your request. Please try calling us directly.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try calling us directly.");
    }
  };

  const serviceOptions: ServiceOption[] = [
    { value: "commercial", label: "Commercial Janitorial", icon: Building2 },
    { value: "maintenance", label: "Facility Maintenance", icon: Building2 },
    { value: "floor", label: "Floor Care & Polishing", icon: Building2 },
    { value: "movein", label: "Move-In/Move-Out", icon: Home },
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-lg mx-auto"
      >
        <div className="w-20 h-20 rounded-full bg-lime/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-lime-dark" />
        </div>
        <h3 className="font-display font-bold text-3xl text-navy mb-4">Request Received!</h3>
        <p className="text-gray-600 mb-2">
         {"Thank you for your interest. We'll review your request and get back to you within 24"}
          hours.
        </p>
        <p className="text-sm text-gray-500">Check your email for a confirmation message.</p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="bg-gray-100 px-8 py-6">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                  currentStep >= step ? "bg-lime text-navy" : "bg-gray-300 text-gray-600"
                }`}
              >
                {step}
              </div>
              {step < 3 && (
                <div
                  className={`w-20 md:w-32 h-1 mx-2 ${
                    currentStep > step ? "bg-lime" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center text-sm text-gray-600 mt-2">
          Step {currentStep} of {totalSteps}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-8 md:p-12">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="font-display font-bold text-2xl text-navy mb-6">
                What service do you need?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceType: option.value })}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      formData.serviceType === option.value
                        ? "border-lime bg-lime/10"
                        : "border-gray-200 hover:border-lime/50"
                    }`}
                  >
                    <option.icon className="w-8 h-8 text-navy mb-3" />
                    <div className="font-semibold text-navy">{option.label}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="font-display font-bold text-2xl text-navy mb-6">
                Tell us about your property
              </h3>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Property Type</label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime focus:outline-none"
                  required
                >
                  <option value="">Select property type</option>
                  <option value="office">Office Building</option>
                  <option value="retail">Retail Space</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="medical">Medical Facility</option>
                  <option value="residential">Residential Complex</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Approximate Size (sq ft)
                </label>
                <input
                  type="text"
                  value={formData.propertySize}
                  onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                  placeholder="e.g., 5000"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Service Frequency
                </label>
                <select
                  value={formData.frequency}
                  onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime focus:outline-none"
                  required
                >
                  <option value="">Select frequency</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="onetime">One-Time</option>
                </select>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="font-display font-bold text-2xl text-navy mb-6">
                Your contact information
              </h3>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Phone *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Additional Details (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any specific requirements or questions?"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime focus:outline-none resize-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-navy font-semibold px-6 py-3 rounded-lg border-2 border-navy transition-all duration-300 hover:shadow-lg"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={
                (currentStep === 1 && !formData.serviceType) ||
                (currentStep === 2 &&
                  (!formData.propertyType || !formData.propertySize || !formData.frequency))
              }
              className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-navy font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-navy font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Submit Request</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}