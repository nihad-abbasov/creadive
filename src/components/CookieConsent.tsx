"use client";

import { useCookieConsent, CookiePreferences } from "@/context/CookieConsentContext";
import { XMarkIcon, CogIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const defaultPreferences: CookiePreferences = {
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
};

// Toggle Switch Component for better performance
const ToggleSwitch = ({ enabled, onChange, disabled = false }: {
    enabled: boolean;
    onChange: () => void;
    disabled?: boolean
}) => (
    <button
        onClick={disabled ? undefined : onChange}
        disabled={disabled}
        className={`w-11 h-6 rounded-full relative transition-colors ${enabled ? 'bg-blue-600' : 'bg-gray-300'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${enabled ? 'right-1' : 'left-1'
            }`}></div>
    </button>
);

export default function CookieConsent() {
    const { hasConsented, preferences, updatePreferences, isLoading } = useCookieConsent();
    const [showPreferences, setShowPreferences] = useState(false);
    const [tempPreferences, setTempPreferences] = useState<CookiePreferences>(preferences);

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

    const acceptNecessaryOnly = () => {
        updatePreferences(defaultPreferences);
    };

    const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
        if (type === "necessary") return; // Cannot disable necessary cookies
        setTempPreferences(prev => ({ ...prev, [type]: value }));
    };

    const saveCustomPreferences = () => {
        updatePreferences(tempPreferences);
        setShowPreferences(false);
    };

    const openPreferences = () => {
        setTempPreferences(preferences);
        setShowPreferences(true);
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
                <div className="absolute bottom-0 left-0 right-0 pointer-events-auto">
                    <div className="mx-4 mb-4 sm:mx-6 sm:mb-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 sm:p-8">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        🍪 Cookie Bildirişi
                                    </h3>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                        Saytımızda təcrübənizi yaxşılaşdırmaq üçün çerezlərdən istifadə edirik.
                                        Analitika və marketinq çerezləri ilə sizə daha yaxşı xidmət göstərə bilərik.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                    <button
                                        onClick={openPreferences}
                                        className="flex items-center justify-center gap-2 px-4 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200 text-sm"
                                    >
                                        <CogIcon className="w-4 h-4" />
                                        Tənzimləmələr
                                    </button>

                                    <button
                                        onClick={acceptNecessaryOnly}
                                        className="px-4 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200 text-sm"
                                    >
                                        Yalnız Zəruri
                                    </button>

                                    <button
                                        onClick={acceptAll}
                                        className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all duration-200 text-sm shadow-lg"
                                    >
                                        Hamısını Qəbul Et
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
                                <h2 className="text-xl font-semibold text-gray-900">Cookie Tənzimləmələri</h2>
                                <button
                                    onClick={() => setShowPreferences(false)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <XMarkIcon className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-6">
                                <div className="space-y-4">
                                    <p className="text-gray-600 text-sm">
                                        Bu tənzimləmələr ilə hansı çerezlərin aktiv olmasını seçə bilərsiniz.
                                        Zəruri çerezlər saytın düzgün işləməsi üçün lazımdır və söndürülə bilməz.
                                    </p>

                                    {/* Cookie Categories */}
                                    <div className="space-y-3">
                                        {/* Necessary Cookies */}
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-medium text-gray-900">Zəruri Çerezlər</h3>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-500">Həmişə aktiv</span>
                                                    <ToggleSwitch enabled={true} onChange={() => { }} disabled />
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Bu çerezlər saytın əsas funksiyalarının işləməsi üçün zəruridir və söndürülə bilməz.
                                            </p>
                                        </div>

                                        {/* Analytics Cookies */}
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-medium text-gray-900">Analitika Çerezləri</h3>
                                                <ToggleSwitch
                                                    enabled={tempPreferences.analytics}
                                                    onChange={() => handlePreferenceChange('analytics', !tempPreferences.analytics)}
                                                />
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Bu çerezlər sayt performansını və istifadəçi davranışını anlamaq üçün istifadə olunur (Google Analytics).
                                            </p>
                                        </div>

                                        {/* Marketing Cookies */}
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-medium text-gray-900">Marketinq Çerezləri</h3>
                                                <ToggleSwitch
                                                    enabled={tempPreferences.marketing}
                                                    onChange={() => handlePreferenceChange('marketing', !tempPreferences.marketing)}
                                                />
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Bu çerezlər sizə uyğun reklamlar göstərmək üçün istifadə olunur (Facebook Pixel).
                                            </p>
                                        </div>

                                        {/* Functional Cookies */}
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-medium text-gray-900">Funksional Çerezlər</h3>
                                                <ToggleSwitch
                                                    enabled={tempPreferences.functional}
                                                    onChange={() => handlePreferenceChange('functional', !tempPreferences.functional)}
                                                />
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Bu çerezlər əlavə funksiyalar və fərdiləşdirilmiş təcrübə təmin edir.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200">
                                <button
                                    onClick={() => setShowPreferences(false)}
                                    className="flex-1 px-4 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                                >
                                    Ləğv et
                                </button>
                                <button
                                    onClick={saveCustomPreferences}
                                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all shadow-lg"
                                >
                                    Tənzimləmələri Saxla
                                </button>
                            </div>
                        </div>
                    </div>
                </Transition>
            )}
        </div>
    );
}


