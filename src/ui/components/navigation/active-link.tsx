import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: Props) => {
  const router = useRouter();

  const isActive = useMemo(() => {
    return router.pathname === href;
  }, [router.pathname, href]);

  return (
    <Link
      href={href}
      className={clsx(isActive && "text-[#5f62e2] font-medium")}
    >
      {children}
    </Link>
  );
};
