import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styled from "styled-components";

function Home() {
  const [showBlack, handleShowBlack] = useState(false);

  const handleNavbar = () => {
    if (window.scrollY > 300) {
      handleShowBlack(true);
    } else {
      handleShowBlack(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);
    return () => window.removeEventListener("scroll", handleNavbar);
  }, []);

  return (
    <>
      <Container>
        <Navbar black={showBlack} isFixed={true} />
        <Hero />

        <section id="model-3">
          <Section
            title="Model 3"
            description="Order Online for Touchless Delivery"
            image="model-3.jpg"
            leftBtn="Explore Inventory"
            rightBtn="Custom Order"
            mobileImage="model-3-mobile.avif"
          />
        </section>

        <section id="model-y">
          <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            image="model-y.jpg"
            leftBtn="Explore Inventory"
            rightBtn="Custom Order"
            mobileImage="model-y-mobile.avif"
          />
        </section>

        <section id="model-s">
          <Section
            title="Model S"
            description="Explore Inventory"
            image="model-s.jpg"
            leftBtn="Custom Order"
            rightBtn="Demo Drive"
            mobileImage="model-s-mobile.avif"
            isUnderline={true}
          />
        </section>

        <section id="model-x">
          <Section
            title="Model X"
            description="Explore Inventory"
            image="model-x.jpg"
            leftBtn="Custom Order"
            rightBtn="Demo Drive"
            mobileImage="model-x-mobile.avif"
            isUnderline={true}
          />
        </section>

        <section id="solar-panels">
          <Section
            title="Solar Panels"
            description="Schedule a Virtual Consultation"
            image="solar-panel.jpg"
            leftBtn="Order Now"
            rightBtn="Learn More"
            mobileImage="solar-panels-mobile.avif"
            isUnderline={true}
          />
        </section>

        <section id="solar-roof">
          <Section
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            image="solar-roof.jpg"
            leftBtn="Order Now"
            rightBtn="Learn More"
            mobileImage="solar-roof-mobile.avif"
          />
        </section>

        <section id="power-wall">
          <Section
            title="Power Wall"
            description=""
            image="power-wall.avif"
            leftBtn="Order Now"
            rightBtn="Learn More"
            mobileImage="power-wall-mobile.avif"
          />
        </section>

        <section id="accessories">
          <Section
            title="Accessories"
            description=""
            image="accessories.jpg"
            rightBtn="Shop Now"
            mobileImage="accessories-mobile.avif"
            opacity={true}
          />
        </section>

        <Footer home={true} />
      </Container>
    </>
  );
}

const Container = styled.div`
  scroll-snap-type: y mandatory;
`;

export default Home;
