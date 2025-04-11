import { Seo } from "@/ui/components/Seo/Seo";
import { RegisterContainer } from "@/ui/modules/authentification/Register/Register.container";

export default function Home() {
  return (
    <>
      <Seo title="Inscription" description="Register page" />
      <RegisterContainer />
    </>
  );
}
