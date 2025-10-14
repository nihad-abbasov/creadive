import Image from "next/image";

type LogoProps = {
  isWhite?: boolean;
  isForHeader?: boolean;
};

export default function Logo({
  isWhite = false,
  isForHeader = false,
}: LogoProps) {
  return (
    <Image
      src={isWhite ? "/logos/white_h.png" : "/logos/black_h.png"}
      alt="Creadive"
      width={0}
      height={0}
      sizes="100vw"
      priority
      className={`${isForHeader ? "w-40 h-auto" : "w-full"}`}
    />
  );
}
