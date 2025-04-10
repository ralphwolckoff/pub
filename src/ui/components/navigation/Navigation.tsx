import { Button } from "@/ui/design-sytem/button/button";
import { Avatar } from "@/ui/design-sytem/avatar/avatar";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex items-center text-sm justify-between px-10 ">
      <div className="flex items-center gap-2">
        <Avatar size="small" src="/assets/imgs/Calque3.png" alt="description" />
        <Typography variant="body-sm">Audrey</Typography>
      </div>
      <div className="flex items-center gap-2">
        <Link href="#/" className="p-2 hover:bg-gray-300 rounded-md">
          Home
        </Link>

        <Link href="#/about" className="p-2 hover:bg-gray-300 rounded-md">
          <select name="About" id="about">
            <option value="about">About</option>
            <option value="team">Team</option>
            <option value="services">Services</option>
            <option value="contact">Contact</option>
          </select>
        </Link>
        <Link href="#/contact" className="p-2 hover:bg-gray-300 rounded-md">
          Contact
        </Link>
      </div>
      <div className="flex items-center text-gray gap-2">
        <Button>Log In</Button>
        <Button variant="secondary">Sign In</Button>
      </div>
    </div>
  );
}
