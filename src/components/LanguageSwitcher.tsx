"use client";

import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "@/lib/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { AppLocale } from "@/i18n/config";

const locales: AppLocale[] = ["az", "en", "ru"];

// Flag emojis for each locale
const localeFlags: Record<AppLocale, string> = {
  az: "🇦🇿",
  en: "🇺🇸",
  ru: "🇷🇺"
};

// Full language names
const localeNames: Record<AppLocale, string> = {
  az: "Azərbaycan",
  en: "English",
  ru: "Русский"
};

export default function LanguageSwitcher() {
  const t = useTranslations("common");
  const currentLocale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLocale = (nextLocale: AppLocale) => {
    if (nextLocale === currentLocale) return;
    router.push(pathname, { locale: nextLocale });
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="group relative px-4 py-2.5 rounded-xl text-sm bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-1 shadow-lg hover:shadow-xl"
        aria-label={t("language")}
      >
        <GlobeAltIcon className="w-4 h-4 text-white/80 group-hover:text-white transition-colors duration-300" />
        <span className="font-medium">{currentLocale.toUpperCase()}</span>
        <ChevronDownIcon
          className={`w-4 h-4 text-white/80 group-hover:text-white transition-all duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="willAppear absolute right-0 mt-3 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl ring-1 ring-black/5 z-[10000] overflow-hidden">
          {/* Header */}
          {/* <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <GlobeAltIcon className="w-4 h-4 text-blue-600" />
              {t("language")}
            </h3>
          </div> */}

          {/* Language options */}
          <ul>
            {locales.map((loc, index) => {
              const isActive = loc === currentLocale;
              return (
                <li key={loc}>
                  <button
                    onClick={() => changeLocale(loc)}
                    className={`w-full px-4 py-3 text-left transition-all duration-200 flex items-center gap-3 group ${isActive
                      ? "bg-blue-100 text-blue-700 border-r-2 border-blue-500"
                      : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                      }`}
                  >
                    {/* Flag */}
                    <span className="text-lg filter drop-shadow-sm">
                      {localeFlags[loc]}
                    </span>

                    {/* Language info */}
                    <div className="flex-1 text-left">
                      <div className="font-medium text-sm">
                        {localeNames[loc]}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        {loc}
                      </div>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Footer */}
          <div className="px-4 py-2 bg-gray-50/50 border-t border-gray-100">
            <div className="text-xs text-gray-500 text-center">
              {t("current")}: {localeNames[currentLocale]}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


