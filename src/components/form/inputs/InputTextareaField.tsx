"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import React, { FC } from "react";

interface IInputTextareaField extends React.ComponentProps<"textarea"> {
  label?: string;
  className?: string;
}

export const InputTextareaField: FC<IInputTextareaField> = ({ ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = errors[props.name!];

  return (
    <div className="input_wrapper relative w-full mb-3">
      {props.label && (
        <label
          // className={`block text-sm font-medium mb-1 transition-colors duration-200 ${
          //   hasError ? "text-red-500" : "text-gray-700"
          // }`}
          className="block text-sm font-medium mb-1 transition-colors duration-200 text-black"
          htmlFor={props.label}
        >
          {props.label}
        </label>
      )}
      <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
        <textarea
          className={`w-full py-3 px-5 text-sm bg-white border ${hasError ? "border-red-500 focus:border-red-500" : "border-gray-200"
            } placeholder-gray-400 rounded-lg transition-all duration-200 ${hasError ? "focus:ring-red-200" : ""
            }
          hover:border-gray-300
          disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
          min-h-32 max-h-48 resize-y
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
            className="text-red-500 text-xs flex items-center gap-1.5"
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
