"use client";

import { useCookieConsent } from "@/context/CookieConsentContext";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function CookieConsent() {
  const { hasConsented, updatePreferences, isLoading } = useCookieConsent();
  const [showPreferences, setShowPreferences] = useState(false);

  // Don't show if loading or already consented
  if (isLoading || hasConsented) return null;

  const acceptAll = () => {
    updatePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
  };

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none">
      {/* Backdrop for preferences modal - Only render when needed */}
      {showPreferences && (
        <Transition
          show={showPreferences}
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="absolute inset-0 bg-black/60 pointer-events-auto"
            onClick={() => setShowPreferences(false)}
          />
        </Transition>
      )}

      {/* Cookie Consent Banner */}
      <Transition
        show={!showPreferences}
        as={Fragment}
        enter="transform ease-out duration-300"
        enterFrom="translate-y-full opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transform ease-in duration-200"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-full opacity-0"
      >
        <div className="absolute bottom-0 left-0 right-0 pointer-events-auto w-[45%] ml-auto">
          <div className="mx-4 mb-4 sm:mx-6 sm:mb-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-md shadow-lg border border-white/20 py-6 px-6 md:py-3 md:px-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-gray-700 text-sm sm:text-sm leading-relaxed">
                    Saytımızda təcrübənizi yaxşılaşdırmaq üçün cookie-lərdən
                    istifadə edirik.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={acceptAll}
                    className="text-sm font-medium underline"
                  >
                    Qəbul Et
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      {/* Preferences Modal - Only render when needed */}
      {showPreferences && (
        <Transition
          show={showPreferences}
          as={Fragment}
          enter="transform ease-out duration-200"
          enterFrom="scale-95 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transform ease-in duration-150"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
        >
          <div className="absolute inset-6 sm:inset-12 md:inset-20 lg:inset-32 xl:inset-40 pointer-events-auto">
            <div className="bg-white rounded-xl shadow-xl h-full flex flex-col max-h-[80vh] mx-auto max-w-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Cookie Tənzimləmələri
                </h2>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <XMarkIcon className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </Transition>
      )}
    </div>
  );
}
