import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    {
      name: "Model S",
      id: "models",
    },
    {
      name: "Model 3",
      id: "model3",
    },

    {
      name: "Model X",
      id: "modelx",
    },
    {
      name: "Model Y",
      id: "modely",
    },
    {
      name: "Solar Roof",
      id: "solarroof",
    },
    {
      name: "Solar Panels",
      id: "solarpanels",
    },
    {
      name: "Powerwall",
      id: "powerwall",
    },
  ],
};

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
});

export default carSlice.reducer;
