"use client";

// import { InputTextareaField } from "@/components/form/inputs/InputTextareaField";
// import { InputTextField } from "@/components/form/inputs/InputTextField";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { CFormProvider } from "@/components/form/CFormProvider";
// import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useToast } from "@/context/ToastContext";
// import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
// import * as yup from "yup";

// interface ContactFormData {
//   fullName: string;
//   email: string;
//   phone: string;
//   company?: string;
//   subject: string;
// }

// const schema = yup.object<ContactFormData>().shape({
//   fullName: yup.string().required("Bu xana vacibdir"),
//   email: yup
//     .string()
//     .required("Bu xana vacibdir")
//     .email("Düzgün email formatı daxil edin"),
//   phone: yup
//     .string()
//     .required("Bu xana vacibdir")
//     .matches(/^[0-9+\-\s()]*$/, "Düzgün telefon nömrəsi daxil edin"),
//   company: yup.string().required("Bu xana vacibdir"),
//   subject: yup.string().required("Bu xana vacibdir"),
// });

export default function Contact() {
  // const { showToast } = useToast();
  // const methods = useForm({
  //   resolver: yupResolver(schema),
  //   reValidateMode: "onChange",
  //   mode: "onChange",
  //   defaultValues: {
  //     fullName: "",
  //     email: "",
  //     phone: "",
  //     company: "",
  //     subject: "",
  //   },
  // });

  // const handleSubmit = async (formData: ContactFormData) => {
  //   try {
  //     showToast("success", "Müraciətiniz uğurla göndərildi!");

  //     await setTimeout(() => {
  //       methods.reset();
  //     }, 2000);

  //   } catch (error) {
  //     showToast(
  //       "error",
  //       `Müraciətiniz göndərilərkən xəta baş verdi. Zəhmət olmasa yenidən cəhd edin: ${error}`
  //     );
  //   }
  // };

  return (
    // min-h-screen
    // bg-white
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold !text-white mb-4">
            Vebsayt və Rəqəmsal Marketinq Xidmətləri Üçün Bizimlə Əlaqə Saxlayın
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Rəqəmsal marketinq və veb dizayn layihəniz haqqında danışmaq üçün
            bizimlə əlaqə saxlayın. Peşəkar komandamız sizə kömək etməyə
            hazırdır!
          </p>
        </motion.div>

        {/* grid-cols-2 */}
        <h2 className="text-3xl font-bold text-center !text-white mb-8">
          Creadive Agentliyinin Əlaqə Məlumatları
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2 w-full md:w-1/3 mx-auto"
          >
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <FaPhone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Telefon
                  </h3>
                  <p className="text-gray-600">+994 50 123 45 67</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <FaEnvelope className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    E-poçt
                  </h3>
                  <p className="text-gray-600">info@creadive.az</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Ünvan</h3>
                  <p className="text-gray-600">
                    Bakı şəhəri, Azərbaycan
                    {/* Bakı şəhəri, Nərimanov rayonu, Atatürk prospekti 89 */}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          {/* <motion.div
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
                  className="group w-full md:w-max bg-blue-600 text-white px-6 py-4 md:py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Göndər
                  <PaperAirplaneIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </CFormProvider>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
