import React, { useEffect, useState } from "react";

function App() {
  const [celcius, setCelcius] = useState("");
  const [farenheit, setFarenheit] = useState("");

  function conversion(value, scale) {
    if (scale === "c") {
      setFarenheit((value * 9) / 5 + 32);
      setCelcius(value);
    } else {
      setCelcius(((value - 32) * 5) / 9);
      setFarenheit(value);
    }
  }

  return (
    <>
      <h1>Temperature Convertor</h1>
      <input
        type="text"
        name="celcius"
        placeholder="Enter temp in celcius"
        value={celcius}
        onChange={(e) => conversion(e.target.value, "c")}
      />
      <input
        type="text"
        name="farenheit"
        placeholder="Enter temp in farenheit"
        value={farenheit}
        onChange={(e) => conversion(e.target.value, "f")}
      />
    </>
  );
}

export default App;
