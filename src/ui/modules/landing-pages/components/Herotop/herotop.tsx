import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";

export const HeroTop = () => {
  return (
    <Container className="py-3">
      <a href="#/">
        <div className="relative  h-[626px] rounded-[20px] overflow-hidden">
          <div className="relative flex items-end h-full  opacity-90 px-10 py-10 z-10 bg-gradient-to-r from-[#f6f6f6]/0 to-[#000000]/80">
            <div className="flex flex-col gap-2">
              <Typography variant="caption3" theme="white" component="span">
                Featured
              </Typography>
              <div className="flex items-center justify-between text-left  gap-4">
                <div>
                  <Typography variant="h4" theme="white" weight="medium">
                    Breaking Into Product Design:
                  </Typography>
                  <Typography variant="h4" theme="white" weight="medium">
                    Advice from Untitled Founder, Frankie
                  </Typography>
                </div>
                <RiArrowRightLine size={42} className="text-white" />
              </div>
              <Typography
                variant="body-sm"
                component="p"
                theme="white"
                className="text-l w-200"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quod architecto aliquid
                perferendis minima pariatur maxime doloremque eligendi, dolor
                amet iste. Est consectetur pariatur et itaque maxime?
              </Typography>
            </div>
          </div>
          <Image
            fill
            src="/assets/imgs/pexels.jpg"
            alt=""
            className="object-cover object-center"
          />
        </div>
      </a>
    </Container>
  );
};
