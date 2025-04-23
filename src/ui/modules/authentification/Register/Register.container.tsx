import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./Register.view";
import { RegisterFormType } from "@/types/form";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggle";
import axios from "axios";
import { useRouter } from "next/router";
import Register from "@/pages/api/register";
import { useState } from "react";

export const RegisterContainer = () => {
  const { value: isLoading, setValue: setIsLoading } = useToggle({
    initial: false,
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    register,

    reset,
  } = useForm<RegisterFormType>();

  const handleCreateUserAuthentication = async ({
    email,
    password,
    how_did_hear,
  }: RegisterFormType) => {
    try {
      const res = await axios.post("/api/register", {
        email,
        password,
        how_did_hear,
      });
      router.push("/connexion/login");
    } catch (error) {
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
