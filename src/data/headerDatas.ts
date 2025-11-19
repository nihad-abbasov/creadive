export type NavDropdownItem = {
  text: string;
  url: string;
};

export type NavLink = {
  id: number;
  href: string;
  label: string;
  dropdown?: NavDropdownItem[];
};

type TFunc = (key: string) => string;

export function getNavLinks(t: TFunc): NavLink[] {
  return [
    {
      id: 1,
      href: "/services",
      label: t("nav.services"),
      dropdown: [
        {
          text: t("nav.servicesItems.web"),
          url: "/services?service=web-development",
        },
        { text: t("nav.servicesItems.smm"), url: "/services?service=smm" },
        {
          text: t("nav.servicesItems.dm"),
          url: "/services?service=digital-marketing",
        },
        { text: t("nav.servicesItems.uiux"), url: "/services?service=ui-ux" },
        { text: t("nav.servicesItems.seo"), url: "/services?service=seo" },
        {
          text: t("nav.servicesItems.gd"),
          url: "/services?service=graphic-design",
        },
        {
          text: t("nav.servicesItems.targeting"),
          url: "/services?service=targeting",
        },
        {
          text: t("nav.servicesItems.mobile_app"),
          url: "/services?service=mobile-development",
        },
      ],
    },
    {
      id: 2,
      href: "/about",
      label: t("nav.about"),
      dropdown: [
        { text: t("nav.aboutItems.values"), url: "/about" },
        { text: t("nav.aboutItems.team"), url: "/about/#team_section" },
        { text: t("nav.aboutItems.faq"), url: "/about/#faq_section" },
      ],
    },
    { id: 3, href: "/portfolio", label: t("nav.portfolio") },
    { id: 4, href: "/blog", label: t("nav.blog") },
    { id: 5, href: "/contact", label: t("nav.contact") },
    { id: 6, href: "/#contact_cta_section", label: t("nav.contactCTA") },
  ];
}
