import React, { useContext } from "react";
import { TemperatureContext } from "./App";

function Farenheit() {
  const {farenheit, conversion} = useContext(TemperatureContext)
  return (
    <div className="farenheit" style={{ margin: "1rem" }}>
      <input
        type="text"
        name="farenheit"
        placeholder="Enter temp in farenheit"
        value={farenheit}
        onChange={(e) => conversion(e.target.value, "f")}
      />
    </div>
  );
}

export default Farenheit;
