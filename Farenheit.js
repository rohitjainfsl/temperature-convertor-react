import React, { useContext } from "react";
import { TempContext } from "./App";

function Farenheit() {
  const { setCurrentTemp, convertedTemp } = useContext(TempContext);

  function handleChange(e) {
    setCurrentTemp({ value: e.target.value, name: e.target.name });
  }

  return (
    <div className="farenheit" style={{ margin: "1rem" }}>
      <input
        style={{ padding: "1rem" }}
        type="text"
        placeholder="Enter temp in farenheit"
        onChange={handleChange}
        value={convertedTemp}
        name="farenheit"
      />
    </div>
  );
}

export default Farenheit;
