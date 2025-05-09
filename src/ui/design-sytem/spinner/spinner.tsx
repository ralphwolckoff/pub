import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "white";
}

export const Spinner = ({ size = "medium", variant = "primary" }: Props) => {
  let variantStyle: string, sizeStyle: string;

  switch (size) {
    case "small":
      sizeStyle = "w-6 h-6";
      break;
    case "medium":
      sizeStyle = "w-9 h-9";
      break;
    case "large":
      sizeStyle = "w-12 h-12";
      break;
  }
  switch (variant) {
    case "primary":
      variantStyle = "text-primary";
      break;
    case "white":
      variantStyle = "text-white";
      break;
  }

  return (
    <svg
      role="spinner"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={clsx(sizeStyle, variantStyle, "animate-spin")}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentcolor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentcolor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};
