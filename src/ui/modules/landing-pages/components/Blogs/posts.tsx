import { Container } from "@/ui/components/container/container";
import Image from "next/image";

export const Posts = () => {
  return (
    <Container className="grid grid-cols-3 gap-7 py-10">
      <div className="relative rounded-2xl">
        <Image fill src="/assets/imgs/images.jpeg" alt="description" />
        <div></div>
      </div>
    </Container>
  );
};
