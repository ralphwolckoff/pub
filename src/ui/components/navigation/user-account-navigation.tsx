import { Box } from "@/ui/design-sytem/box/box";
import { Button } from "@/ui/design-sytem/button/button";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import { ActiveLink } from "./active-link";

export const UserAccountNavigation = () => {
  return (
    <Box className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <Typography variant="caption2" weight="medium">
          <ActiveLink href="/mon-espace">Mon Compte</ActiveLink>
        </Typography>

        <Typography variant="caption2" weight="medium">
          <ActiveLink href="/mon-espace/mes-projets">Mes Projets</ActiveLink>
        </Typography>
      </div>
      <Button variant="secondary">Deconnexion</Button>
    </Box>
  );
};
