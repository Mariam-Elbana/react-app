import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import MainContent from "../Component/MainContent";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      <Header />

      <MainContent data="Home Page" />

      <Footer />
    </>
  );
}

export default Home;
