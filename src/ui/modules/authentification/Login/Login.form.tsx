import { FormsType } from "@/types/form";
import { Button } from "@/ui/design-sytem/button/button";
import { Input } from "@/ui/design-sytem/forms/input";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import Link from "next/link";

interface Props {
  form: FormsType;
}
export const LoginForm = ({ form }: Props) => {
  const { onSubmit, register, errors, isLoading, handleSubmit } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-2 space-y-4">
      <Typography variant="body-xs">Email</Typography>
      <Input
        isLoading={isLoading}
        type="email"
        placeholder="johndoe@gmail.com"
        register={register}
        errors={errors}
        errorMsg="tu dois renseigner ce champ"
        id="email"
      />
      <Typography variant="body-xs">Mot de passe </Typography>
      <Input
        isLoading={isLoading}
        type="password"
        placeholder="Entre ton mot de passe"
        register={register}
        errors={errors}
        errorMsg="tu dois renseigner ce champ"
        id="password"
      />
      <div className="flex items-center justify-between">
        <Typography variant="body-xs">
          <Link href="/">keep me loged in</Link>
        </Typography>
        <Typography variant="body-xs">
          <Link href="/accounts/forget-Password">Mot de passe oublié ?</Link>
        </Typography>
      </div>
      <Button variant="success" isLoading={isLoading} type="submit" fullWith>
        Connexion
      </Button>
    </form>
  );
};
