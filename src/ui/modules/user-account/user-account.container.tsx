import { Button } from "@/ui/design-sytem/button/button";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const UserAccountContainer = () => {
  const router = useRouter();

  const handleLogoutUser = async () => {
    router.push("/connexion");
  };

  return (
    <div className="flex justify-center py-20">
      <Button action={handleLogoutUser} variant="secondary">
        Deconnexion
      </Button>
    </div>
  );
};
