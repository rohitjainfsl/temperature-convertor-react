import React, { useEffect, useState, createContext } from "react";
import Celcius from "./Celcius";
import Farenheit from "./Farenheit";

export const TemperatureContext = createContext({});

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
      <TemperatureContext.Provider value={{celcius, farenheit, conversion}}>
        <Celcius />
        <Farenheit />
      </TemperatureContext.Provider>
    </>
  );
}

export default App;
