import { Layout } from "@/ui/components/layout/layout";
import { Footer } from "@/ui/components/navigation/Footer";
import Navigation from "@/ui/components/navigation/Navigation";
import { Seo } from "@/ui/components/Seo/Seo";
import { LandingPageContainer } from "@/ui/modules/landing-pages/landing-page.container";
import React from "react";

const Home = () => {
  return (
    <>
      <Seo title="Accueill" description="description de la page" />
      <Layout>
        <LandingPageContainer />
      </Layout>
    </>
  );
};

export default Home;
