import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./Register.view";
import { RegisterFormType } from "@/types/form";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggle";
import axios from "axios";
import { useRouter } from "next/router";
import Register from "@/pages/api/register";

export const RegisterContainer = () => {
  const { value: isLoading, setValue: setIsLoading } = useToggle({
    initial: false,
  });
  const router = useRouter();

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
    try {
      await axios.post("/api/register", {
        email,
        password,
        how_did_hear,
      });
      router.push("/connexion/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        if (response?.status === 400) {
          setError("email", {
            type: "manual",
            message: "Email already exists",
          });
        } else if (response?.status === 500) {
          toast.error("Server error, please try again later");
        }
      } else {
        toast.error("An unexpected error occurred");
      }
      console.error("registration failed", error);
    }

    setIsLoading(false);
    toast.success("User created successfully");
    reset();
  };

  const onSubmit: SubmitHandler<RegisterFormType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;
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
