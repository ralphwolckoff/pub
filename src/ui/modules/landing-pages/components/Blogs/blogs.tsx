import { Typography } from "@/ui/design-sytem/typography/Typography";
import { Posts } from "./posts";
import { Button } from "@/ui/design-sytem/button/button";

export const Blogs = () => {
  return (
    <div className="flex flex-col gap-4 py-10 px-10">
      <Typography variant="lead" weight="medium" className="text-sm">
        Recents blog posts :
      </Typography>
      <div>
        <Posts />
      </div>
      <div className="flex items-center justify-center text-sm">
        <Button variant="secondary">learding more...</Button>
      </div>
    </div>
  );
};
