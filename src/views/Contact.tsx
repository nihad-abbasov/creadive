"use client";

import { InputTextareaField } from "@/components/form/inputs/InputTextareaField";
import { InputTextField } from "@/components/form/inputs/InputTextField";
import { CFormProvider } from "@/components/form/CFormProvider";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@/context/ToastContext";
import { contactApi } from "@/services/contact";
import { useForm } from "react-hook-form";
import { contacts } from "@/data/contact";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "@/lib/navigation";
import * as yup from "yup";
import { useLocale } from "next-intl";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
}

const schema = yup.object<ContactFormData>().shape({
  fullName: yup.string().required("Bu xana vacibdir"),
  email: yup
    .string()
    .required("Bu xana vacibdir")
    .email("Düzgün email formatı daxil edin"),
  phone: yup
    .string()
    .required("Bu xana vacibdir")
    .matches(/^[0-9+\-\s()]*$/, "Düzgün telefon nömrəsi daxil edin"),
  company: yup.string().required("Bu xana vacibdir"),
  subject: yup.string().required("Bu xana vacibdir"),
});

export default function Contact() {
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

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
        showToast("success", "Müraciətiniz uğurla göndərildi!");
        methods.reset();
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Contact form submission error:', error);

      let errorMessage = "Müraciətiniz göndərilərkən xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.";

      if (error.response?.data?.message) {
        // errorMessage = error.response.data.message;
        errorMessage = "Something went wrong. Try again later.";
      } else if (error.message) {
        // errorMessage = error.message;
        errorMessage = "Something went wrong. Try again later.";
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
          <h1 className="text-4xl font-bold !text-white mb-4">
            Vebsayt və Rəqəmsal Marketinq Xidmətləri Üçün Bizimlə Əlaqə Saxlayın
          </h1>
          <p className="text- text-white/80 max-w-2xl mx-auto">
            Rəqəmsal marketinq və veb layihəniz haqqında danışmaq üçün
            bizimlə əlaqə saxlayın. Peşəkar komandamız sizə kömək etməyə
            hazırdır!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 space-y-4 w-full md:w-1/2 mx-auto">
          <motion.ul
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2 w-full md:w-full mx-auto list-none flex flex-col lg:flex-row justify-center md:justify-between items-center md:border md:border-white rounded-lg py-2 px-4"
          >
            {
              contacts.map((contact) => (
                <li key={contact.id} className="!m-0">
                  <Link href={contact.href} className="hover:text-white flex items-center space-x-1">
                    <div>
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-gray-100">{contact.label}</p>
                    </div>
                  </Link>
                </li>
              ))
            }
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
                  label="Ad Soyad"
                  placeholder="Ad və Soyadınızı daxil edin"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <InputTextField
                    name="email"
                    label="Email"
                    placeholder="info@creadive.az"
                    type="email"
                  />
                  <InputTextField
                    name="phone"
                    label="Telefon"
                    placeholder="+994 10 531 99 87"
                    type="tel"
                  />
                </div>
                <InputTextField
                  name="company"
                  label="Şirkət"
                  placeholder="Şirkətinizin adı (Məs. Creadive Agentliyi)"
                />
                <InputTextareaField
                  name="subject"
                  label="Mövzu"
                  placeholder="Müraciətinizin mövzusu (Məs. Vebsaytınızın yaradılması, Mühasibat xidməti, və s.)"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full md:w-max bg-blue-600 text-white px-6 py-4 md:py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      Göndərilir...
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    </>
                  ) : (
                    <>
                      Göndər
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
