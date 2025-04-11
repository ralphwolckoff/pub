import { FormsType } from "@/types/form";
import "../../../../styles/Home.module.css";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import { RegisterForm } from "./register.form";
import Image from "next/image";
import Link from "next/link";

interface Props {
  form: FormsType;
}
export const RegisterView = ({ form }: Props) => {
  return (
    <Container className="bg-gradient-to-t from-[#24fdfd]/40 to-[#000000] flex items-center justify-center h-screen">
      <div className="grid grid-cols-2 bg-gray-300/15 opacity-90 text-white rounded-[10px]">
        <div className="px-20">
          <Typography variant="h5" weight="medium">
            Welcome Back
          </Typography>
          <Typography variant="body-sm" component="p">
            Inscription
          </Typography>
          <RegisterForm form={form} />
        </div>
        <div className="relative py-7 px-4 space-y-7">
          <Typography variant="h5" weight="medium">
            La beauté illumine la vie
          </Typography>

          <Image
            width={500}
            height={500}
            src="/assets/imgs/image.jpeg"
            alt="description"
            className="rounded-[10px] object-cover object-center"
          />
          <div className="flex items-center gap-2">
            <Typography variant="body-xs" component="h2">
              Tu as un compte ?
            </Typography>
            <Typography variant="body-xs" component="span" theme="primary">
              <Link href="/connexion/login">Connexion</Link>
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};
