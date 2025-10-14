import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export interface Contact {
    id: number;
    href: string;
    label: string;
    icon: React.ReactNode;
}

export const contacts: Contact[] = [
    {
        id: 1,
        href: "mailto:info@creadive.az",
        label: "info@creadive.az",
        icon: <FaEnvelope className="w-3 h-auto text-white" />,
    },
    {
        id: 2,
        href: "tel:+994105319987",
        label: "+994 10 531 99 87",
        icon: <FaPhone className="w-3 h-auto text-white" />,
    },
    {
        id: 3,
        href: "https://maps.app.goo.gl/XokJ59Kvhj4xGRZc6",
        label: "Bakı şəhəri, Azərbaycan",
        icon: <FaMapMarkerAlt className="w-3 h-auto text-white" />,
    },
];