"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import React, { FC } from "react";

interface IInputTextField extends React.ComponentProps<"input"> {
  label?: string;
  className?: string;
}

export const InputTextField: FC<IInputTextField> = ({ ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = errors[props.name!];

  return (
    <div className="input_wrapper relative w-full mb-4">
      {props.label && (
        <label
          className={`block text-sm font-medium mb-1.5 transition-colors duration-200 ${
            hasError ? "text-red-500" : "text-gray-700"
          }`}
          htmlFor={props.label}
        >
          {props.label}
        </label>
      )}
      <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
        <input
          className={`w-full py-3 px-5 text-sm bg-white border ${
            hasError
              ? "border-red-300 focus:border-red-500"
              : "border-gray-200 focus:border-blue-500"
          } placeholder-gray-400 rounded-lg transition-all duration-200
          focus:ring-2 focus:ring-opacity-50 ${
            hasError ? "focus:ring-red-200" : "focus:ring-blue-200"
          }
          hover:border-gray-300
          disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
          ${props.className}`}
          {...register(props.name!)}
          {...props}
          id={props?.label}
        />
      </motion.div>
      <ErrorMessage
        errors={errors}
        name={props.name!}
        render={({ message }) => (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-1.5 flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {message}
          </motion.p>
        )}
      />
    </div>
  );
};
