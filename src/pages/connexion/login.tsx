import { Seo } from "@/ui/components/Seo/Seo";
import { LoginContainer } from "@/ui/modules/authentification/Login/Login.container";

export default function Home() {
  return (
    <>
      <Seo title="Connexion" description="Login page" />
      <LoginContainer />
    </>
  );
}
