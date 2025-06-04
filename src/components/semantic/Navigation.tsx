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
  { id: 5, href: "/team", label: "Komanda" },
  { id: 6, href: "/blog", label: "Bloq" },
  { id: 7, href: "/faq", label: "FAQ" },
  { id: 8, href: "/contact", label: "Əlaqə" },
];

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-slate-900 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-gray-100 hover:text-gray-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
