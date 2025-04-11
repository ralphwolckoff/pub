import clsx from "clsx";
import { Typography } from "../typography/Typography";

interface Props {
  isLoading: boolean;
  placeholder: string;
  type?: "text" | "email" | "password";
  register: any;
  errors: any;
  errorMsg?: string;
  id: string;
  required?: boolean;
  isAutoCompleted?: boolean;
}

export const Input = ({
  isLoading,
  placeholder,
  type = "text",
  register,
  errors,
  errorMsg = "Tu dois enregister ce champ",
  id,
  required = true,
  isAutoCompleted = false,
}: Props) => {
  return (
    <div className="space-y-2">
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          "rounded-full py-3 px-5 text-xs bg-gray-950",
          isLoading && "cursor-not-allowed",
          errors[id]
            ? "placeholder-red-300 text-red-500 "
            : "placeholder-gray-600",
          "w-full p-4 font-light  focus:outline-none focus:ring-1 focus:ring-primary "
        )}
        disabled={isLoading}
        {...register(id, {
          required: {
            value: required,
            message: errorMsg,
          },
        })}
        autoComplete={isAutoCompleted ? "on" : "off"}
      />
      {errors[id] && (
        <Typography variant="body-xs" component="div" theme="danger">
          {errors[id]?.message}
        </Typography>
      )}
    </div>
  );
};
