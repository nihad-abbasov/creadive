"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { usePathname, useRouter } from "@/lib/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { Locale } from "@/i18n/routing";
import { LOCALES } from "@/constants";
import Image from "next/image";

const locales: Locale[] = LOCALES as Locale[];

export default function LanguageSwitcher() {
  const t = useTranslations("common");
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isScrolled } = useScrollPosition(50);
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLocale = (nextLocale: Locale) => {
    if (nextLocale === currentLocale) return;
    router.push(pathname, { locale: nextLocale });
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="group relative px-2 py-2.5 rounded-xl text-sm bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center space-x-1 shadow-lg hover:shadow-xl"
        aria-label={t("language")}
      >
        <Image
          src={`/images/flags/${currentLocale}.png`}
          alt={`${currentLocale} flag`}
          width={20}
          height={15}
          className="rounded-sm"
          priority
        />
        {!isScrolled && (
          <span className="font-medium">{currentLocale.toUpperCase()}</span>
        )}
        <ChevronDownIcon
          className={`w-4 h-4 text-white/80 group-hover:text-white transition-all duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="willAppear absolute right-0 mt-1 w-full bg-white/95 backdrop-blur-md rounded-xl shadow-2xl ring-1 ring-black/5 z-[10000] overflow-hidden">
          {/* Language options */}
          <ul className="w-full">
            {locales
              .filter((loc) => loc !== currentLocale)
              .map((loc) => {
                return (
                  <li key={loc} className="w-full">
                    <button
                      onClick={() => changeLocale(loc)}
                      className="w-full px-4 py-3 text-left transition-all duration-200 flex items-center space-x-1 group text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                    >
                      {/* Flag image */}
                      <Image
                        src={`/images/flags/${loc}.png`}
                        alt={`${loc} flag`}
                        width={24}
                        height={18}
                        className="rounded-sm"
                        priority
                      />
                      {/* Language info */}
                      <div className="flex-1 text-left">
                        <div className="text-xs text-slate-600 text-center font-semibold uppercase tracking-wide">
                          {loc}
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
}
