import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./Register.view";
import { RegisterFormType } from "@/types/form";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggle";

export const RegisterContainer = () => {
  const { value: isLoading, setValue: setIsLoading } = useToggle({
    initial: false,
  });
  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormType>();

  const handleCreateUserAuthentication = async ({
    email,
    password,
    how_did_hear,
  }: RegisterFormType) => {
    setIsLoading(false);
    toast.success("User created successfully");
    reset();
  };

  const onSubmit: SubmitHandler<RegisterFormType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;

    if (password.length < 6) {
      setError("password", {
        type: "manual",
        message: "Password must be at least 6 characters",
      });
      return;
    }
    handleCreateUserAuthentication(formData);
  };

  return (
    <>
      <RegisterView
        form={{
          errors,
          register,
          handleSubmit,
          onSubmit,
          isLoading,
        }}
      />
    </>
  );
};
