import { Container } from "@/ui/components/container/container";
import { Avatar } from "@/ui/design-sytem/avatar/avatar";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import Image from "next/image";

export const Posts = () => {
  return (
    <Container className="grid grid-cols-3 gap-7 py-10">
      <div className="flex flex-col items-center justify-beetween">
        <div className="relative w-[310px] h-[200px] overflow-hidden">
          <Image
            fill
            src="/assets/imgs/images.jpeg"
            alt="description"
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <Typography variant="lead" weight="medium">
            Lorem ipsum dolor
          </Typography>
          <Typography variant="body-sm" component="p" weight="medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          </Typography>

          <div className="flex items-center gap-2 mt-4">
            <Avatar
              size="small"
              src="/assets/imgs/images.jpeg"
              alt="description"
            />
            <Typography variant="body-sm">Audrey .</Typography>
            <Typography variant="body-sm" theme="gray">
              2 days ago
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-beetween">
        <div className="relative w-[310px] h-[200px] overflow-hidden">
          <Image
            fill
            src="/assets/imgs/images.jpeg"
            alt="description"
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <Typography variant="lead" weight="medium">
            Lorem ipsum dolor
          </Typography>
          <Typography variant="body-sm" component="p" weight="medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          </Typography>

          <div className="flex items-center gap-2 mt-4">
            <Avatar
              size="small"
              src="/assets/imgs/images.jpeg"
              alt="description"
            />
            <Typography variant="body-sm">Audrey .</Typography>
            <Typography variant="body-sm" theme="gray">
              2 days ago
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-beetween">
        <div className="relative w-[310px] h-[200px] overflow-hidden">
          <Image
            fill
            src="/assets/imgs/images.jpeg"
            alt="description"
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <Typography variant="lead" weight="medium">
            Lorem ipsum dolor
          </Typography>
          <Typography variant="body-sm" component="p" weight="medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          </Typography>

          <div className="flex items-center gap-2 mt-4">
            <Avatar
              size="small"
              src="/assets/imgs/images.jpeg"
              alt="description"
            />
            <Typography variant="body-sm">Audrey .</Typography>
            <Typography variant="body-sm" theme="gray">
              2 days ago
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-beetween">
        <div className="relative w-[310px] h-[200px] overflow-hidden">
          <Image
            fill
            src="/assets/imgs/images.jpeg"
            alt="description"
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <Typography variant="lead" weight="medium">
            Lorem ipsum dolor
          </Typography>
          <Typography variant="body-sm" component="p" weight="medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          </Typography>

          <div className="flex items-center gap-2 mt-4">
            <Avatar
              size="small"
              src="/assets/imgs/images.jpeg"
              alt="description"
            />
            <Typography variant="body-sm">Audrey .</Typography>
            <Typography variant="body-sm" theme="gray">
              2 days ago
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-beetween">
        <div className="relative w-[310px] h-[200px] overflow-hidden">
          <Image
            fill
            src="/assets/imgs/images.jpeg"
            alt="description"
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <Typography variant="lead" weight="medium">
            Lorem ipsum dolor
          </Typography>
          <Typography variant="body-sm" component="p" weight="medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          </Typography>

          <div className="flex items-center gap-2 mt-4">
            <Avatar
              size="small"
              src="/assets/imgs/images.jpeg"
              alt="description"
            />
            <Typography variant="body-sm">Audrey .</Typography>
            <Typography variant="body-sm" theme="gray">
              2 days ago
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-beetween">
        <div className="relative w-[310px] h-[200px] overflow-hidden">
          <Image
            fill
            src="/assets/imgs/images.jpeg"
            alt="description"
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <Typography variant="lead" weight="medium">
            Lorem ipsum dolor
          </Typography>
          <Typography variant="body-sm" component="p" weight="medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          </Typography>

          <div className="flex items-center gap-2 mt-4">
            <Avatar
              size="small"
              src="/assets/imgs/images.jpeg"
              alt="description"
            />
            <Typography variant="body-sm">Audrey .</Typography>
            <Typography variant="body-sm" theme="gray">
              2 days ago
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};
