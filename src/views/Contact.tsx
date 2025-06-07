"use client";

import { InputTextareaField } from "@/components/form/inputs/InputTextareaField";
import { InputTextField } from "@/components/form/inputs/InputTextField";
import { CFormProvider } from "@/components/form/CFormProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
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

  const handleSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <div className="py-16 min-h-screen bg-gradient-to-br from-[#1e2533] via-[#232b39] to-[#181f2a]">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg">
          Əlaqə
        </h1>
        <p className="text-lg text-blue-100 text-center mb-12 max-w-2xl mx-auto">
          Bizimlə əlaqə saxlayın və layihəniz barədə danışın.
        </p>
        <CFormProvider methods={methods} onSubmit={handleSubmit}>
          <InputTextField
            name="fullName"
            label="Ad Soyad"
            placeholder="Ad və Soyadınızı daxil edin"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Göndər
          </button>
        </CFormProvider>
      </div>
    </div>
  );
}
