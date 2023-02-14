import React, { useContext } from "react";
import { TempContext } from "./App";

function Celcius() {
  const { setCurrentTemp, convertedTemp } = useContext(TempContext);

  function handleChange(e) {
    setCurrentTemp({ value: e.target.value, name: e.target.name });
  }

  return (
    <div className="celcius" style={{ margin: "1rem" }}>
      <input
        style={{ padding: "1rem" }}
        type="text"
        placeholder="Enter temp in Celcius"
        onChange={handleChange}
        value={convertedTemp}
        name="celcius"
      />
    </div>
  );
}

export default Celcius;
