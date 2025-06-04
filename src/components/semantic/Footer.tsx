import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Logo from "../Logo";

type FooterLink = {
  id: number;
  href: string;
  label: string;
};

const footerLinks: FooterLink[] = [
  {
    id: 1,
    href: "/",
    label: "Home",
  },
  {
    id: 2,
    href: "/about",
    label: "About",
  },
  {
    id: 3,
    href: "/services",
    label: "Services",
  },
  {
    id: 4,
    href: "/contact",
    label: "Contact",
  },
  {
    id: 5,
    href: "/blog",
    label: "Blog",
  },
  {
    id: 6,
    href: "/faq",
    label: "FAQ",
  },
  {
    id: 7,
    href: "/portfolio",
    label: "Portfolio",
  },
  {
    id: 8,
    href: "/team",
    label: "Team",
  },
  {
    id: 9,
    href: "/products",
    label: "Products",
  },
];

type Service = {
  id: number;
  href: string;
  label: string;
};

const services: Service[] = [
  {
    id: 1,
    href: "/services#web-development",
    label: "Web Development",
  },
  {
    id: 2,
    href: "/services#ui-ux",
    label: "UI/UX Design",
  },
  {
    id: 3,
    href: "/services#marketing",
    label: "Digital Marketing",
  },
  {
    id: 4,
    href: "/services#seo",
    label: "SEO",
  },
  {
    id: 5,
    href: "/services#graphic-design",
    label: "Graphic Design",
  },
];

type Contact = {
  id: number;
  href: string;
  label: string;
};

const contacts: Contact[] = [
  {
    id: 1,
    href: "mailto:info@creadive.az",
    label: "info@creadive.az",
  },
  {
    id: 2,
    href: "tel:+994105319987",
    label: "+994 10 531 99 87",
  },
];

type Social = {
  id: number;
  label: string;
  href: string;
  icon: React.ReactNode;
};

const socials: Social[] = [
  {
    id: 1,
    label: "Instagram",
    href: "https://www.instagram.com/creadive.az",
    icon: <FaInstagram className="w-6 h-6 transition-colors duration-200 hover:text-pink-500" />,
  },
  {
    id: 2,
    label: "Facebook",
    href: "https://www.facebook.com/creadive.az",
    icon: <FaFacebook className="w-6 h-6 transition-colors duration-200 hover:text-blue-600" />,
  },
  {
    id: 3,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/creadive-az/",
    icon: <FaLinkedin className="w-6 h-6 transition-colors duration-200 hover:text-blue-500" />,
  },
  {
    id: 4,
    label: "Twitter",
    href: "https://x.com/creadive_az",
    icon: <FaTwitter className="w-6 h-6 transition-colors duration-200 hover:text-sky-400" />,
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              <Logo />
            </Link>
            <p className="text-gray-400">
              Rəqəmsal təcrübələri yaradırıq ki, nəticələri göstərək.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-lg font-semibold mb-4">Qısa yollar</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-lg font-semibold mb-4">Xidmətlərimiz</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={service.href} className="hover:text-white">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link href={contact.href} className="hover:text-white">
                    {contact.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Bizi izlə</h4>
            <ul className="flex space-x-4 list-none">
              {socials.map((social) => (
                <li key={social.id}>
                  <Link href={social.href} className="hover:text-white">
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {currentYear} Creadive. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div >
    </footer >
  );
}
