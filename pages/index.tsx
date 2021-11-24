import React from "react";
import Head from "next/head";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import HeroHome from "../src/components/HeroHome";
import Features from "../src/components/Features";
// import FeaturesBlocks from "../src/components/FeaturesBlocks";
import Testimonials from "../src/components/Testimonials";
import Newsletter from "../src/components/Newsletter";
import Team from "../src/components/Team";
import Faqs from "../src/components/Faqs";

export default function landingPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Regalis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <HeroHome />
      <Features />
      {/* <FeaturesBlocks /> */}
      <Faqs />
      <Team />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
