import { Container } from "@/ui/components/container/container";
import { Avatar } from "@/ui/design-sytem/avatar/avatar";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import Image from "next/image";

export const Posts = () => {
  return (
    <div className="grid grid-cols-3 gap-7 space-y-10">
      <div>
        <div className="relative w-full h-[200px] overflow-hidden">
          <Image
            fill
            src="/assets/imgs/hcb.avif"
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
      <div>
        <div className="relative w-full h-[200px] overflow-hidden">
          <Image
            fill
            src="/assets/imgs/Heb.avif"
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
      <div>
        <div className="relative w-full h-[200px] overflow-hidden">
          <Image
            fill
            src="/assets/imgs/photo.jpg"
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
      <div>
        <div className="relative w-full h-[200px] overflow-hidden">
          <Image
            fill
            src="/assets/imgs/fete.jpg"
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
      <div>
        <div className="relative w-full h-[200px] overflow-hidden">
          <Image
            fill
            src="/assets/imgs/image.jpeg"
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
      <div>
        <div className="relative w-full h-[200px] overflow-hidden">
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
    </div>
  );
};
