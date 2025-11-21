import {
  CURRENT_YEAR,
  EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PHONE_NUMBER,
  TWITTER_URL,
} from "@/constants";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import Logo from "../Logo";

type FooterLink = {
  id: number;
  href: string;
  label: string;
};

const getFooterLinks = (
  t: ReturnType<typeof useTranslations>
): FooterLink[] => [
  { id: 1, href: "/", label: t("footer.home") },
  { id: 2, href: "/about", label: t("footer.about") },
  { id: 3, href: "/services", label: t("footer.services") },
  { id: 4, href: "/contact", label: t("footer.contact") },
  { id: 5, href: "/blog", label: t("footer.blog") },
  { id: 6, href: "/portfolio", label: t("footer.portfolio") },
  { id: 7, href: "/privacy-policy", label: t("footer.privacyPolicy") },
];

type Service = {
  id: number;
  href: string;
  label: string;
};

const getServices = (t: ReturnType<typeof useTranslations>): Service[] => [
  {
    id: 1,
    href: "/services?service=web-development",
    label: t("nav.servicesItems.web"),
  },
  {
    id: 2,
    href: "/services?service=ui-ux",
    label: t("nav.servicesItems.uiux"),
  },
  {
    id: 3,
    href: "/services?service=digital-marketing",
    label: t("nav.servicesItems.dm"),
  },
  { id: 4, href: "/services?service=seo", label: t("nav.servicesItems.seo") },
  {
    id: 5,
    href: "/services?service=graphic-design",
    label: t("nav.servicesItems.gd"),
  },
  { id: 6, href: "/services?service=smm", label: t("nav.servicesItems.smm") },
  {
    id: 7,
    href: "/services?service=targeting",
    label: t("nav.servicesItems.targeting"),
  },
  {
    id: 8,
    href: "/services?service=mobile-development",
    label: t("nav.servicesItems.mobile_app"),
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
    href: `mailto:${EMAIL}`,
    label: EMAIL,
  },
  {
    id: 2,
    href: `tel:${PHONE_NUMBER}`,
    label: PHONE_NUMBER,
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
    href: INSTAGRAM_URL,
    icon: (
      <FaInstagram className="w-6 h-6 transition-colors duration-200 text-gray-400 hover:text-pink-500" />
    ),
  },
  {
    id: 2,
    label: "Facebook",
    href: FACEBOOK_URL,
    icon: (
      <FaFacebook className="w-6 h-6 transition-colors duration-200 text-gray-400 hover:text-blue-600" />
    ),
  },
  {
    id: 3,
    label: "LinkedIn",
    href: LINKEDIN_URL,
    icon: (
      <FaLinkedin className="w-6 h-6 transition-colors duration-200 text-gray-400 hover:text-blue-500" />
    ),
  },
  {
    id: 4,
    label: "Twitter",
    href: TWITTER_URL,
    icon: (
      <FaTwitter className="w-6 h-6 transition-colors duration-200 text-gray-400 hover:text-sky-400" />
    ),
  },
];

export default function Footer() {
  const t = useTranslations();
  const footerLinks = getFooterLinks(t);
  const services = getServices(t);
  return (
    // bg-gradient-to-tl from-blue-900 to-black
    <footer className="text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 mb-0 md:mb-0 w-2/3 md:w-3/4"
              aria-label="Creadive Logo"
            >
              <Logo isWhite={true} isForHeader={false} />
            </Link>
            <p className="text-gray-400 text-sm">{t("common.slogan")}</p>
          </div>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <span className="text-lg font-semibold mb-0 md:mb-0">
              {t("footer.quickLinks")}
            </span>
            <ul className="space-y-2 text-gray-400 text-sm">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="hover:text-white"
                    aria-label={link.label}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <span className="text-lg font-semibold mb-0 md:mb-0">
              {t("footer.ourServices")}
            </span>
            <ul className="space-y-2 text-gray-400 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="hover:text-white"
                    aria-label={service.label}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <span className="text-lg font-semibold mb-0 md:mb-0">
              {t("footer.contact")}
            </span>
            <ul className="space-y-2 text-gray-400 text-sm">
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link
                    href={contact.href}
                    className="hover:text-white"
                    aria-label={contact.label}
                  >
                    {contact.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <span className="text-lg font-semibold mb-0 md:mb-0">
              {t("footer.followUs")}
            </span>
            <ul className="flex space-x-4 list-none">
              {socials.map((social) => (
                <li key={social.id}>
                  <Link
                    href={social.href}
                    aria-label={social.label}
                    className="hover:text-white"
                  >
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm font-extralight">
          <p>
            &copy; {CURRENT_YEAR} Creadive. {t("footer.copyright")}
          </p>
          {/* <p className="mt-2">
            <Link
              href="/privacy-policy"
              className="hover:text-white underline"
              aria-label={t("footer.privacyPolicy")}
            >
              {t("footer.privacyPolicy")}
            </Link>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
