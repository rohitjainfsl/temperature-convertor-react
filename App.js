import React, { useEffect, useState, createContext } from "react";
import Celcius from "./Celcius";
import Farenheit from "./Farenheit";

export const TempContext = createContext({});

function App() {
  const [currentInput, setCurrentTemp] = useState({
    value: '',
    name: ''
  });
  const [convertedTemp, setConvertedTemp] = useState("");

  useEffect(() => {    
      if (currentInput.name === "celcius") setConvertedTemp((currentInput.value * 9) / 5 + 32);
      else if(currentInput.name === "farenheit") setConvertedTemp(((currentInput.value - 32) * 5) / 9);
    
  }, [currentInput]);

  return (
    <>
      <h1 style={{ marginBottom: "2rem" }}>Temperature Convertor</h1>
      <TempContext.Provider
        value={{ currentInput, setCurrentTemp, convertedTemp }}
      >
        <Celcius />
        <Farenheit />
      </TempContext.Provider>
    </>
  );
}

export default App;
