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
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "../Logo";

type NavLink = {
  id: number;
  href: string;
  label: string;
  dropdown?: {
    text: string;
    url: string;
  }[];
};

const navLinks: NavLink[] = [
  {
    id: 1,
    href: "/services",
    label: "Xidmətlər",
    dropdown: [
      { text: "Vebsayt", url: "/services?service=web-development" },
      { text: "SMM", url: "/services?service=smm" },
      {
        text: "Rəqəmsal marketinq",
        url: "/services?service=digital-marketing",
      },
      { text: "UI/UX Dizayn", url: "/services?service=ui-ux" },
      { text: "SEO", url: "/services?service=seo" },
      { text: "Qrafik Dizayn", url: "/services?service=graphic-design" },
      { text: "Tarqetinq", url: "/services?service=targeting" },
    ],
  },
  {
    id: 2,
    href: "/about",
    label: "Haqqımızda",
    dropdown: [
      { text: "Biz kimik?", url: "/about" },
      { text: "Komandamız", url: "/about/#team_section" },
      { text: "FAQ", url: "/about/#faq_section" },
    ],
  },
  { id: 3, href: "/portfolio", label: "Portfolio" },
  { id: 4, href: "/blog", label: "Bloq" },
  { id: 5, href: "/contact", label: "Əlaqə" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
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

  // const currentYear = new Date().getFullYear();

  const handleDropdownEnter = (id: number) => {
    setActiveDropdown(id);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      {/* bg-gray-100 backdrop-blur-md */}
      <nav className="w-full z-[9997] relative pt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex-shrink-0"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            >
              <Link href="/" className="text-2xl font-bold text-white">
                <Logo isWhite={true} isForHeader={true} />
              </Link>
            </motion.div>
            <div className="block md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-800/50 transition-all duration-200 focus:outline-none group"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <span
                    className={`absolute h-0.5 w-6 bg-white/90 rounded-full transition-all duration-300 ease-in-out transform ${isMobileMenuOpen
                      ? "rotate-45 translate-y-0"
                      : "-translate-y-1.5"
                      }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-white/90 rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
                      }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-white/90 rounded-full transition-all duration-300 ease-in-out transform ${isMobileMenuOpen
                      ? "-rotate-45 translate-y-0"
                      : "translate-y-1.5"
                      }`}
                  />
                </div>
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.id}
                    className="relative"
                    custom={index}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    onMouseEnter={() =>
                      link.dropdown && handleDropdownEnter(link.id)
                    }
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={link.href}
                      className={`text-white hover:text-white transition-all duration-300 relative group flex flex-row items-center ${isActiveLink(link.href)
                        ? "text-white font-semibold"
                        : "text-white"
                        }`}
                    >
                      {link.label}
                      {link.dropdown && (
                        <motion.span
                          className="ml-1 inline-block"
                          animate={{
                            rotate: activeDropdown === link.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.span>
                      )}
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-white rounded-full transition-all duration-300 ease-out ${isActiveLink(link.href)
                          ? "w-full"
                          : "group-hover:w-full"
                          }`}
                      />
                    </Link>
                    {link.dropdown && activeDropdown === link.id && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        {/* Invisible bridge to prevent dropdown from closing */}
                        <div className="absolute left-0 w-full h-2" />
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div
                            className="rounded-md"
                            role="menu"
                            aria-orientation="vertical"
                          >
                            {link.dropdown.map((item, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white text-gray-900 rounded-md"
                              >
                                <Link
                                  href={item.url}
                                  className={`block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200 ${index === 0 ? "rounded-t-md" : ""
                                    } ${index === (link.dropdown?.length ?? 0) - 1
                                      ? "rounded-b-md"
                                      : ""
                                    }`}
                                  role="menuitem"
                                >
                                  {item.text}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <Link href="tel:+994105319987" className="bg-white hover:bg-gray-300 text-black text-sm px-4 py-2 rounded-full flex items-center transition-all duration-300">
                <FaPhone className="w-4 h-4 mr-2 text-blue-600" />
                +994 10 531 99 87
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <motion.div
        className={`md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={toggleMobileMenu}
        aria-hidden={!isMobileMenuOpen}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden fixed inset-y-0 right-0 w-[280px] bg-gradient-to-br from-slate-950 via-blue-900 to-slate-950 z-[9999] transform transition-transform duration-300 ease-in-out h-screen ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            {/* <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link
                href="/"
                className="text-2xl font-bold text-gray-100"
                onClick={toggleMobileMenu}
              >
                <Logo isWhite={false} isForHeader={true} />
              </Link>
            </motion.div> */}

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.3 }}
              >
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.3 }}
              >
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.3 }}
              >
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </Link>
              </motion.div>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-800/50 transition-all duration-200 focus:outline-none group"
              aria-label="Close mobile menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className="absolute h-0.5 w-6 bg-white/90 rounded-full transition-all duration-300 ease-in-out transform rotate-45" />
                <span className="absolute h-0.5 w-6 bg-white/90 rounded-full transition-all duration-300 ease-in-out transform -rotate-45" />
              </div>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col px-4 md:px-6 space-y-2 flex-grow py-4 md:py-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className={`block w-full !text-white py-3 px-4 rounded-lg transition-all duration-300 hover:bg-slate-800/50 text-lg font-medium relative group ${isActiveLink(link.href) ? "bg-black/20 !text-black" : ""
                    }`}
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 top-0 w-1 h-0 bg-gray-900 rounded-l-full transition-all duration-300 ease-out ${isActiveLink(link.href) ? "h-full" : "group-hover:h-full"
                      }`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Menu Footer */}
          <motion.div
            className="border-t border-gray-700 p-6 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {/* Contact Info */}
            <div className="space-y-3 text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.3 }}
              >
                <Link
                  href="tel:+994501234567"
                  className="flex items-center justify-center text-white hover:text-white transition-colors duration-200"
                >
                  <FaPhone className="w-4 h-4 mr-2" />
                  <span>+994 50 123 45 67</span>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.3 }}
              >
                <Link
                  href="mailto:info@creadive.az"
                  className="flex items-center justify-center text-white hover:text-white transition-colors duration-200"
                >
                  <FaEnvelope className="w-4 h-4 mr-2" />
                  <span>info@creadive.az</span>
                </Link>
              </motion.div>
            </div>

            {/* Copyright */}
            {/* <motion.div
              className="text-center text-xs text-gray-300 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.3 }}
            >
              © {currentYear} Creadive. Bütün hüquqlar qorunur.
            </motion.div> */}
          </motion.div>
        </div>
      </motion.div>

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
