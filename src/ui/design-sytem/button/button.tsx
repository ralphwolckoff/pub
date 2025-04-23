import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import React from "react";
import { Spinner } from "../spinner/spinner";
import { LinkType, LinkTypes } from "@/lib/link-type";
import Link from "next/link";

interface Props {
  size?: "small" | "medium" | "large";
  variant?:
    | "accent"
    | "secondary"
    | "outline"
    | "disabled"
    | "ico"
    | "success"
    | "danger";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  baseUrl?: string;
  linkType?: LinkType;
  action?: Function;
  type?: "button" | "submit";
  fullWith?: boolean;
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "left",
  disabled,
  isLoading,
  children,
  baseUrl,
  linkType = "internal",
  type = "button",
  fullWith = false,
  action = () => {},
}: Props) => {
  let variantStyle: string = "",
    sizeStyle: string = "",
    icoSize: number = 0;

  switch (variant) {
    case "accent":
      variantStyle = "bg-primary-400 hover:bg-gray-800/12 rounded-[5px]";
      break;
    case "secondary":
      variantStyle =
        "bg-gray-950 hover:bg-gray-800/50 text-white rounded-[5px] ";
      break;
    case "outline":
      variantStyle =
        "bg-gray-800 hover:bg-gray-400/50 border border-gray-500 text-white rounded-[5px]";
      break;
    case "disabled":
      variantStyle =
        "bg-gray border border-gray-500 text-gray-500 rounded-[5px]";
      break;
    case "success":
      variantStyle = "bg-amber-200 hover:bg-amber-300 text-white rounded-full";
      break;
    case "danger":
      variantStyle =
        "bg-alert-danger hover:bg-alert-danger/75 text-white rounded";
      break;
    case "ico":
      if (iconTheme === "accent") {
        variantStyle =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyle =
          "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
      }
      if (iconTheme === "gray") {
        variantStyle = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
      }
      break;
  }

  switch (size) {
    case "small":
      sizeStyle = `text-caption3 font-medium w-full px-7 py-5 ${
        variant === "ico"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[12px]"
      }`;
      icoSize = 18;
      break;
    case "medium":
      sizeStyle = `text-caption2 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[8px]"
      }`;
      icoSize = 20;
      break;
    case "large":
      sizeStyle = `text-caption1 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      }`;
      icoSize = 24;
      break;
  }

  const handleClick = () => {
    if (action) {
      action();
    }
  };

  const ButtonContent = (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center ">
          {variant === "accent" || variant === "ico" ? (
            <Spinner size="small" variant="white" />
          ) : (
            <Spinner size="small" />
          )}
        </div>
      )}
      <div className={clsx(isLoading && "invisible")}>
        {icon && variant === "ico" ? (
          <icon.icon size={icoSize} />
        ) : (
          <div className={clsx(icon && "flex items-center gap-1")}>
            {icon && iconPosition === "left" && <icon.icon size={icoSize} />}
            {children}
            {icon && iconPosition === "right" && <icon.icon size={icoSize} />}
          </div>
        )}
      </div>
    </>
  );
  const ButtonElement = (
    <button
      type={type}
      className={clsx(
        variantStyle,
        sizeStyle,
        icoSize,
        isLoading && "cursor-not-allowed",
        fullWith && "w-full",
        "relative animate"
      )}
      onClick={handleClick}
      disabled={disabled || isLoading ? true : false}
    >
      {ButtonContent}
    </button>
  );

  if (baseUrl) {
    if (linkType === LinkTypes.EXTERNAL) {
      return (
        <a href={baseUrl} target="_blank">
          {ButtonElement}
        </a>
      );
    } else {
      return <Link href={baseUrl}>{ButtonElement}</Link>;
    }
  }
  return ButtonElement;
};
