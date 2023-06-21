import "./App.css";
import styled from "styled-components";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Model from "./components/Model";
import {
  modelS,
  modelX,
  modelY,
  powerWall,
  solarRoof,
  model3,
} from "./components/carInfo";

function App() {
  return (
    <Router>
      <Container className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/models"
            element={
              <Model
                image="models/model-s.avif"
                mobileImage="models/model-s-mobile.avif"
                title="Model S"
                description="Explore Inventory"
                isUnderline={true}
                leftBtn="Order Now"
                rightBtn="Demo Drive"
                stats={modelS}
                black={true}
              />
            }
          />
          <Route
            path="/model3"
            element={
              <Model
                image="models/model-3.avif"
                mobileImage="models/model-3-mobile.avif"
                title="Model 3"
                description="Demo Drive"
                isUnderline={true}
                leftBtn="Explore Inventory"
                rightBtn="Custom Order"
                stats={model3}
              />
            }
          />
          <Route
            path="/modelx"
            element={
              <Model
                image="models/model-x.avif"
                mobileImage="models/model-x-mobile.avif"
                title="Model X"
                description="Explore Inventory"
                isUnderline={true}
                leftBtn="Order Now"
                rightBtn="Demo Drive"
                stats={modelX}
                black={true}
              />
            }
          />
          <Route
            path="/modely"
            element={
              <Model
                image="models/model-y.avif"
                mobileImage="models/model-y-mobile.avif"
                title="Model Y"
                description="View Inventory"
                isUnderline={true}
                leftBtn="Order Now"
                rightBtn="Demo Drive"
                stats={modelY}
              />
            }
          />
          <Route
            path="/solarpanels"
            element={
              <Model
                image="models/solar-panels.avif"
                mobileImage="models/solar-panels.avif"
                title="Solar Panel for Your Home"
                description="Lowest Cost Solar Panels in America"
                leftBtn="Order Now"
                rightBtn="Schedule a Consultation"
                stats={solarRoof}
              />
            }
          />
          <Route
            path="/solarroof"
            element={
              <Model
                image="models/solar-roof.avif"
                mobileImage="models/solar-roof-mobile.avif"
                title="Solar Roof"
                description=""
                leftBtn="Order Now"
                rightBtn="Schedule a Consultation"
                stats={solarRoof}
              />
            }
          />
          <Route
            path="/powerwall"
            element={
              <Model
                image="models/power-wall.avif"
                mobileImage="models/power-wall-mobile.avif"
                title="Powerwall"
                description=""
                leftBtn="Order powerwall"
                rightBtn="Order with Solar"
                stats={powerWall}
              />
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div``;

export default App;
