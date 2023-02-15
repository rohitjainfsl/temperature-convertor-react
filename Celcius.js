import React, { useContext } from "react";
import { TemperatureContext } from "./App";

function Celcius() {
  const {celcius, conversion} = useContext(TemperatureContext)
  return (
    <div className="celcius" style={{ margin: "1rem" }}>
      <input
        type="text"
        name="celcius"
        placeholder="Enter temp in celcius"
        value={celcius}
        onChange={(e) => conversion(e.target.value, "c")}
      />
    </div>
  );
}

export default Celcius;
