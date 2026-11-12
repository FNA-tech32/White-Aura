import { Clock, Mail, MapPin, Phone, Smile } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                <Smile className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">White Aura</span>
            </Link>
            <p className="text-gray-400">
              Providing exceptional dental care and modern aesthetic solutions
              with a gentle, personalized touch.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <div className="space-y-2 text-gray-400">
              <div>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </div>
              <div>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact & Booking
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Services</h3>
            <div className="space-y-2 text-gray-400">
              <div>General Dentistry</div>
              <div>Cosmetic Dentistry & Veneers</div>
              <div>Restorative Care & Implants</div>
              <div>Pediatric & Family Dentistry</div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact Info</h3>
            <div className="space-y-2.5 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                <a
                  href="tel:+18005292872"
                  className="hover:text-white transition-colors"
                >
                  +1 (800) 529-2872
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                <a
                  href="tel:+12125550199"
                  className="hover:text-white transition-colors"
                >
                  +1 (212) 555-0199 (Direct)
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                <a
                  href="mailto:info@whiteaura.com"
                  className="hover:text-white transition-colors"
                >
                  info@whiteaura.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <span>120 White Aura Blvd, Suite 400, New York, NY 10022</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Mon-Fri: 8AM-6PM | Sat: 9AM-2PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 White Aura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
