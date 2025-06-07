"use client";

import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";

export type ToastType = "success" | "error" | "warning" | "info";

interface ToastProps {
  type: ToastType;
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const toastStyles = {
  success: {
    bg: "bg-green-50",
    text: "text-green-800",
    icon: CheckCircleIcon,
    iconColor: "text-green-400",
  },
  error: {
    bg: "bg-red-50",
    text: "text-red-800",
    icon: ExclamationCircleIcon,
    iconColor: "text-red-400",
  },
  warning: {
    bg: "bg-yellow-50",
    text: "text-yellow-800",
    icon: ExclamationTriangleIcon,
    iconColor: "text-yellow-400",
  },
  info: {
    bg: "bg-blue-50",
    text: "text-blue-800",
    icon: InformationCircleIcon,
    iconColor: "text-blue-400",
  },
};

export function Toast({
  type,
  message,
  isVisible,
  onClose,
  duration = 3000,
}: ToastProps) {
  const styles = toastStyles[type];
  const Icon = styles.icon;

  useEffect(() => {
    if (isVisible && duration) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-[9999]"
    >
      <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
        <Transition
          show={isVisible}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={`max-w-sm w-full ${styles.bg} shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden`}
          >
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Icon
                    className={`h-6 w-6 ${styles.iconColor}`}
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className={`text-sm font-medium ${styles.text}`}>
                    {message}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    type="button"
                    className={`${styles.bg} rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${styles.bg} focus:ring-${styles.iconColor}`}
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
