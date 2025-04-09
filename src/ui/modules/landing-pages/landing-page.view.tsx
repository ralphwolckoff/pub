import { Box } from "@/ui/design-sytem/box/box";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";

export const LandingPageView = () => {
  return (
    <Box className="relative bg-gray-400 h-[626px]">
      <a href="#/">
        <div className="">
          <div className="relative flex items-center justify-start px-5 h-full bg-gray-800 opacity-50   z-10 rounded-[10px]">
            <Typography variant="caption2" theme="white" weight="medium">
              Lire la formation
            </Typography>
            <RiArrowRightLine size={42} className="text-white" />
          </div>
          <Image
            fill
            src="/assets/imgs/images.jpeg"
            alt=""
            className="object-cover object-center"
          />
        </div>
      </a>
    </Box>
  );
};
