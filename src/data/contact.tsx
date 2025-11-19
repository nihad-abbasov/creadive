import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ADDRESS, EMAIL, MAP_URL, PHONE_NUMBER } from "@/constants";

export interface Contact {
  id: number;
  href: string;
  label: string;
  icon: React.ReactNode;
}

export const contacts: Contact[] = [
  {
    id: 1,
    href: `mailto:${EMAIL}`,
    label: EMAIL,
    icon: <FaEnvelope className="w-3 h-auto text-white" />,
  },
  {
    id: 2,
    href: `tel:${PHONE_NUMBER}`,
    label: PHONE_NUMBER,
    icon: <FaPhone className="w-3 h-auto text-white" />,
  },
  {
    id: 3,
    href: MAP_URL,
    label: ADDRESS,
    icon: <FaMapMarkerAlt className="w-3 h-auto text-white" />,
  },
];
