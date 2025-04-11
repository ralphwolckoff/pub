import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { LoginFormType } from "@/types/form";

import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { LoginView } from "./Login.view";

export const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {}, []);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormType>();

  const handleSignInUser = async ({ email, password }: LoginFormType) => {
    toast.success("Bienvenue a toi !");
    setIsLoading(false);
    reset();
    router.push("/mon-espace");
  };

  const onSubmit: SubmitHandler<LoginFormType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;
    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au moins 6 caractères",
      });
      setIsLoading(false);
      return;
    }
    handleSignInUser(formData);
  };
  return (
    <LoginView
      form={{
        errors,
        register,
        handleSubmit,
        onSubmit,
        isLoading,
      }}
    />
  );
};
