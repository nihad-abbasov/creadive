"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../Logo";

type NavLink = {
  id: number;
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { id: 1, href: "/about", label: "Haqqımızda" },
  { id: 2, href: "/services", label: "Xidmətlər" },
  { id: 3, href: "/products", label: "Məhsullar" },
  { id: 4, href: "/portfolio", label: "Portfolio" },
  { id: 5, href: "/blog", label: "Bloq" },
  { id: 6, href: "/contact", label: "Əlaqə" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <nav className="w-full bg-slate-900 backdrop-blur-md z-[9997] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                <Logo />
              </Link>
            </div>
            <div className="block md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-800/50 transition-all duration-200 focus:outline-none group"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <span
                    className={`absolute h-0.5 w-6 bg-gray-100 rounded-full transition-all duration-300 ease-in-out transform ${
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-0"
                        : "-translate-y-1.5"
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-gray-100 rounded-full transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-gray-100 rounded-full transition-all duration-300 ease-in-out transform ${
                      isMobileMenuOpen
                        ? "-rotate-45 translate-y-0"
                        : "translate-y-1.5"
                    }`}
                  />
                </div>
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`text-gray-100 hover:text-white transition-all duration-300 relative group ${
                      isActiveLink(link.href)
                        ? "text-white font-semibold"
                        : "text-gray-400"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-white rounded-full transition-all duration-300 ease-out ${
                        isActiveLink(link.href)
                          ? "w-full"
                          : "group-hover:w-full"
                      }`}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
        aria-hidden={!isMobileMenuOpen}
      />

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-[280px] bg-slate-900 z-[9999] transform transition-transform duration-300 ease-in-out h-screen ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        // aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-800">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-100"
              onClick={toggleMobileMenu}
            >
              <Logo />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-800/50 transition-all duration-200 focus:outline-none group"
              aria-label="Close mobile menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className="absolute h-0.5 w-6 bg-gray-100 rounded-full transition-all duration-300 ease-in-out transform rotate-45" />
                <span className="absolute h-0.5 w-6 bg-gray-100 rounded-full transition-all duration-300 ease-in-out transform -rotate-45" />
              </div>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col px-6 space-y-1 flex-grow py-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.id}
                href={link.href}
                className={`text-white py-3 px-4 rounded-lg transition-all duration-300 hover:bg-slate-800/50 text-lg font-medium relative group ${
                  isActiveLink(link.href) ? "bg-slate-800/50" : ""
                }`}
                onClick={toggleMobileMenu}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen
                    ? "slideIn 0.3s ease-out forwards"
                    : "none",
                  opacity: 0,
                  transform: "translateX(20px)",
                }}
              >
                {link.label}
                <span
                  className={`absolute left-0 top-0 w-1 h-0 bg-white rounded-r-full transition-all duration-300 ease-out ${
                    isActiveLink(link.href) ? "h-full" : "group-hover:h-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="border-t border-slate-800 p-6 space-y-6">
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-center">
              <Link
                href="tel:+994501234567"
                className="flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <FaPhone className="w-4 h-4 mr-2" />
                <span>+994 50 123 45 67</span>
              </Link>
              <Link
                href="mailto:info@creadive.az"
                className="flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <FaEnvelope className="w-4 h-4 mr-2" />
                <span>info@creadive.az</span>
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs text-gray-300 font-light">
              © {currentYear} Creadive. Bütün hüquqlar qorunur.
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
