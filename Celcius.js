import React, { useContext } from "react";
import { TempContext } from "./App";
import Farenheit from "./Farenheit";

function Celcius() {
  const { setCurrentTemp, farenheit } = useContext(TempContext);

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
        value={farenheit}
        name="celcius"
      />
    </div>
  );
}

export default Celcius;
