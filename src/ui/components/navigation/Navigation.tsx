import { Button } from "@/ui/design-sytem/button/button";
import { Avatar } from "@/ui/design-sytem/avatar/avatar";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import { ActiveLink } from "./active-link";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex items-center text-sm justify-between pt-3 px-5 ">
      <div className="flex items-center gap-2">
        <Avatar size="small" src="/assets/imgs/Calque3.png" alt="description" />
        <Typography variant="body-sm">Audrey</Typography>
      </div>
      <div className="flex items-center gap-7">
        <ActiveLink href="/">Home</ActiveLink>

        <ActiveLink href="#/about">
          <select name="products" id="about">
            <option value="about">About</option>
            <option value="team">Team</option>
            <option value="services">Services</option>
            <option value="contact">Contact</option>
          </select>
        </ActiveLink>
        <ActiveLink href="#/services">
          <select value="Blogs" id="blogs">
            <option value="blogs">Blogs</option>
            <option value="blogs">Blogs</option>
            <option value="blogs">Blogs</option>
            <option value="blogs">Blogs</option>
          </select>
        </ActiveLink>
        <ActiveLink href="#/contact">pressing</ActiveLink>
        <ActiveLink href="#/contact">About us</ActiveLink>
      </div>
      <div className="flex items-center animation text-gray gap-2">
        <Button baseUrl="/connexion/login">Log In</Button>
        <Button baseUrl="/connexion" variant="secondary">
          Sign In
        </Button>
      </div>
    </div>
  );
}
