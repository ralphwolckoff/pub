import { FormsType } from "@/types/form";
import { Button } from "@/ui/design-sytem/button/button";
import { Input } from "@/ui/design-sytem/forms/input";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import Link from "next/link";

interface Props {
  form: FormsType;
}
export const RegisterForm = ({ form }: Props) => {
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
      <Typography variant="body-xs">Comment m'avez-vous trouvé ?</Typography>
      <Input
        isLoading={isLoading}
        placeholder="Comment nous avez-vous connu ?"
        register={register}
        errors={errors}
        errorMsg="tu dois renseigner ce champ"
        id="how_did_head"
      />
      <div className="flex items-center justify-between">
        <Typography variant="body-xs">
          <Link href="/">keep me loged in</Link>
        </Typography>
      </div>
      <Button variant="success" isLoading={isLoading} type="submit" fullWith>
        S'inscrire
      </Button>
      <Typography
        variant="body-xs"
        className="max-w-md mx-auto space-y-1 text-center"
      >
        <div>En t'incrivant, tu acceptes les </div>
        <div>
          <Link href="/#" className="text-black">
            Conditions générales d'utilisation {""}
          </Link>
          et la {""}
          <Link href="/#" className="text-black">
            Politique de confidentialité
          </Link>
          .
        </div>
      </Typography>
    </form>
  );
};
