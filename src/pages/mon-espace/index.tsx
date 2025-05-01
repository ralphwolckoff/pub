import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/Seo/Seo";
import { UserAccountContainer } from "@/ui/modules/user-account/user-account.container";
import React from "react";

const Home = () => {
  return (
    <>
      <Seo title="Accueill" description="description de la page" />
      <Layout withSidebar>
        <UserAccountContainer />
      </Layout>
    </>
  );
};

export default Home;
