import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Creadive"
      width={0}
      height={0}
      sizes="100vw"
      priority
      className="w-2/3 h-auto"
    />
  );
}
