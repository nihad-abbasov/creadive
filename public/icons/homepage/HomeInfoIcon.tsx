export default function HomeInfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className || "w-6 h-6 text-red-500"}
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="#FEE2E2"
      />
      <line
        x1="10"
        y1="7"
        x2="10"
        y2="11"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="10" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}
