export default function HomeCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className || "w-5 h-5 text-green-500"}
    >
      <polyline points="4 11 8 15 16 6" />
    </svg>
  );
}
