"use client";

import { InputTextareaField } from "@/components/form/inputs/InputTextareaField";
import { InputTextField } from "@/components/form/inputs/InputTextField";
import { CFormProvider } from "@/components/form/CFormProvider";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@/context/ToastContext";
import { contactApi } from "@/services/contact";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { contacts } from "@/data/contact";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useState } from "react";
import * as yup from "yup";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
}

const getSchema = (t: (key: string) => string) => {
  return yup.object<ContactFormData>().shape({
    fullName: yup.string().required(t("requiredText")),
    email: yup.string().required(t("requiredText")).email(t("validEmail")),
    phone: yup
      .string()
      .required(t("requiredText"))
      .matches(/^[0-9+\-\s()]*$/, t("validPhone")),
    company: yup.string().required(t("requiredText")),
    subject: yup.string().required(t("requiredText")),
  });
};

export default function Contact() {
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("contact");

  const schema = getSchema(t);

  const methods = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
    },
  });

  const locale = useLocale();

  const handleSubmit = async (formData: ContactFormData) => {
    setIsLoading(true);

    try {
      const response = await contactApi.create(formData, locale);

      if (response.status === 200 || response.status === 201) {
        showToast("success", t("success_message"));
        methods.reset();
      } else {
        throw new Error(
          `${t("unexpected_response_status")} ${response.status}`
        );
      }
    } catch (error: unknown) {
      console.error(t("submission_error"), error);

      let errorMessage = t("error_message_default");

      if (error && typeof error === "object" && "response" in error) {
        const apiError = error as {
          response?: { data?: { message?: string } };
        };
        if (apiError.response?.data?.message) {
          errorMessage = t("error_message_2");
        }
      } else if (error && typeof error === "object" && "message" in error) {
        const messageError = error as { message: string };
        if (messageError.message) {
          errorMessage = t("error_message_3");
        }
      }

      showToast("error", errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold !text-white mb-4">{t("title")}</h1>
          <p className="text- text-white/80 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 space-y-4 w-full md:w-1/2 mx-auto">
          <motion.ul
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2 w-full md:w-full mx-auto list-none flex flex-col lg:flex-row justify-center md:justify-between items-center md:border md:border-white rounded-lg py-2 px-4"
          >
            {contacts.map((contact) => (
              <li key={contact.id} className="!m-0">
                <Link
                  href={contact.href}
                  className="hover:text-white flex items-center space-x-1"
                >
                  <div>{contact.icon}</div>
                  <div>
                    <p className="text-gray-100">{contact.label}</p>
                  </div>
                </Link>
              </li>
            ))}
          </motion.ul>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CFormProvider
              methods={methods}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div>
                <InputTextField
                  name="fullName"
                  label={t("fullName_label")}
                  placeholder={t("fullName_placeholder")}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <InputTextField
                    name="email"
                    label={t("email_label")}
                    placeholder="info@creadive.az"
                    type="email"
                  />
                  <InputTextField
                    name="phone"
                    label={t("phone_label")}
                    placeholder="+994 10 531 99 87"
                    type="tel"
                  />
                </div>
                <InputTextField
                  name="company"
                  label={t("company_label")}
                  placeholder={t("company_placeholder")}
                />
                <InputTextareaField
                  name="subject"
                  label={t("subject_label")}
                  placeholder={t("subject_placeholder")}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full md:w-max bg-blue-600 text-white px-6 py-4 md:py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      {t("sending_message")}
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    </>
                  ) : (
                    <>
                      {t("send")}
                      <PaperAirplaneIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </CFormProvider>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
