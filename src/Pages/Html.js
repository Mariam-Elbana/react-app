import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import MainContent from "../Component/MainContent";
import { Helmet } from "react-helmet-async";

function Html() {
  return (
    <>
      <Helmet>
        <title>HTML Page</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      <Header />

      <MainContent data="Html Page" />

      <Footer />
    </>
  );
}

export default Html;
