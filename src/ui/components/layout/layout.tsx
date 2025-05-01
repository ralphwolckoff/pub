import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Container } from "../container/container";
import { Footer } from "../navigation/Footer";
import Navigation from "../navigation/Navigation";
import { UserAccountNavigation } from "../navigation/user-account-navigation";

interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
  withSidebar?: boolean;
}

export const Layout = ({
  children,
  isDisplayBreadcrumbs = true,
  withSidebar,
}: Props) => {
  let view: React.ReactElement = <></>;
  if (withSidebar) {
    view = (
      <Container className="m-14">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3">
            <UserAccountNavigation />
          </div>
          <div className="col-span-9">{children}</div>
        </div>
      </Container>
    );
  } else {
    view = <>{children}</>;
  }

  return (
    <>
      <Navigation />
      {view}
      <Footer />
    </>
  );
};
