import { Button } from "@/ui/design-sytem/button/button";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex items-center text-sm justify-between px-5 ">
      <div>Audrey</div>
      <div className="flex items-center gap-2">
        <Link href="#/" className="p-2 hover:bg-gray-300 rounded-md">
          Home
        </Link>

        <Link href="#/about" className="p-2 hover:bg-gray-300 rounded-md">
          About
        </Link>
        <Link href="#/contact" className="p-2 hover:bg-gray-300 rounded-md">
          Contact
        </Link>
      </div>
      <div className="flex items-center text-gray gap-2">
        <Link href="#/login" className="p-2">
          Login
        </Link>
        <Button iconTheme="gray" variant="secondary">
          <Link href="#/register " className="p-2">
            Register
          </Link>
        </Button>
      </div>
    </div>
  );
}
