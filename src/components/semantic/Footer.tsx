import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Creadive</h3>
            <p className="text-gray-400">
              Creating digital experiences that drive results.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/services#web-development"
                  className="hover:text-white"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#ui-ux" className="hover:text-white">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services#marketing" className="hover:text-white">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@creadive.az</li>
              <li>+994 10 531 99 87</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/creadive.az"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/creadive.az"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/creadive-az/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/creadive_az"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="X"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Creadive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
