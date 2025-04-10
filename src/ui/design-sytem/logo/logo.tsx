import clsx from "clsx";

interface Props {
  size?: "very-small" | "small" | "medium" | "large";
  className?: string;
}

export const Logo = ({ size = "medium", className }: Props) => {
  let sizeLogo: number;
  switch (size) {
    case "very-small":
      sizeLogo = 34;
      break;
    case "small":
      sizeLogo = 61;
      break;
    case "medium":
      sizeLogo = 88;
      break;
    case "large":
      sizeLogo = 140;
      break;
  }
  return (
    <>
      <img
        src="/assets/imgs/getty.jpg"
        alt="Logo"
        width={sizeLogo}
        height={sizeLogo}
        className={clsx(
          "rounded-full object-cover border-2 border-gray-950",
          className
        )}
      />
    </>
  );
};
