import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { LoginFormType } from "@/types/form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { LoginView } from "./Login.view";
import axios from "axios";

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
    try {
      const res = await axios.post("/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      setError("email", { message: "Invalid email" });
      setError("password", { message: "Invalid password" });
      setIsLoading(false);
      toast.error("Identifiants invalides !");
      return;
    }

    toast.success("Bienvenue a toi !");
    setIsLoading(false);
    reset();
    router.push("/");
  };

  const onSubmit: SubmitHandler<LoginFormType> = async (formData) => {
    setIsLoading(true);
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
