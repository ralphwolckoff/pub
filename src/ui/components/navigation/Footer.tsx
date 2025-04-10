import { Box } from "@/ui/design-sytem/box/box";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import { FooterLinks } from "./applinks";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { LinkTypes } from "@/lib/link-type";
import { footerLinks } from "@/types/app-links";
import { Avatar } from "@/ui/design-sytem/avatar/avatar";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerNavigationList = FooterLinks.map((colonLinks) => (
    <FooterLink key={uuidv4()} data={colonLinks} />
  ));
  return (
    <Box className="bg-gray-950 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center gap-2 py-10">
          <Typography
            variant="h5"
            component="div"
            theme="white"
            weight="medium"
          >
            Lorem ipsum dolor sit amet consectetur
          </Typography>
          <Typography
            variant="caption4"
            component="h3"
            theme="white"
            weight="medium"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Typography>
          <div className="flex items-center gap-4 pt-5">
            <button className="w-full border border-gray-400 px-5 py-1 text-sm text-white rounded ">
              voir plus
            </button>
            <button className="w-full border border-gray-400 px-5 py-1 text-sm bg-gray-800 text-white rounded">
              voir plus
            </button>
          </div>
        </div>
        <div></div>
      </Container>
      <Container className="pb-10">
        <div className="flex gap-4">{footerNavigationList}</div>
      </Container>
      <Container>
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Avatar
              size="small"
              src="/assets/imgs/getty.jpg"
              alt="description"
            />
            <Typography variant="caption4" component="h5">
              Audrey
            </Typography>
          </div>
          <Typography variant="caption4" className="text-sm">
            {`${currentYear} Audrey : All rights reseved`}
          </Typography>
        </div>
        <div></div>
      </Container>
    </Box>
  );
};

interface footerLinkProps {
  data: footerLinks;
}

const FooterLink = ({ data }: footerLinkProps) => {
  const LinkLists = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === LinkTypes.INTERNAL && (
        <Link href={link.baseUrl}>{link.label}</Link>
      )}
      {link.type === LinkTypes.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="mb-5"
      >
        {data.label}
      </Typography>
      <Typography theme="gray" variant="caption3" className="space-y-4">
        {LinkLists}
      </Typography>
    </div>
  );
};
