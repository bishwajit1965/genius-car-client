import React from "react";
import Products from "../Products/Products";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import MoreServices from "../MoreServices/MoreServices";
import Team from "../Team/Team";
import ChooseUs from "../ChooseUs/ChooseUs";
 

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <MoreServices />
      <Products />
      <Team />
      <ChooseUs />

    </div>
  );
};

export default Home;
