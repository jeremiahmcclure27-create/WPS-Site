"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="gradient-navy text-white">
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/WPS.png"
                alt="WPS Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <div>
                <div className="font-display font-bold text-lg">WPS WINSLETT</div>
                <div className="text-lime text-sm">Property Services LLC</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Professional property and janitorial services in Murrieta and the Inland Empire.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-lime transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-lime transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-lime transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-lime transition-colors">
                  Get Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+14041234567" className="text-gray-300 hover:text-lime transition-colors">
                    (404) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="mailto:andy@wpsproperties.com"
                    className="text-gray-300 hover:text-lime transition-colors"
                  >
                    andy@wpsproperties.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                <div className="text-gray-300">Murrieta, CA</div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Hours</h3>
            <div className="flex items-start gap-3 mb-3">
              <Clock className="w-5 h-5 text-lime shrink-0 mt-0.5" />
              <div className="text-gray-300 text-sm">
                <div className="font-semibold mb-2">24/7 Availability</div>
                <div>Monday - Friday: 7AM - 6PM</div>
                <div>Saturday: 8AM - 4PM</div>
                <div>Sunday: By Appointment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area */}
        <div className="border-t border-gray-600 pt-8 mb-8">
          <p className="text-center text-gray-300 text-sm">
            <span className="font-semibold text-lime">Proudly serving the Murrieta Valley</span> |
            Murrieta • Temecula • Wildomar • Lake Elsinore • Menifee • Inland Empire
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} WPS Winslett Property Services LLC. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-lime/10 text-lime rounded-full text-xs font-semibold">
              Licensed & Insured
            </span>
            <span className="px-3 py-1 bg-lime/10 text-lime rounded-full text-xs font-semibold">
              Locally Owned
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
