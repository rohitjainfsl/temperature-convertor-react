import React, { useEffect, useState, createContext } from "react";
import Celcius from "./Celcius";
import Farenheit from "./Farenheit";

export const TempContext = createContext({});

function App() {
  const [currentInput, setCurrentTemp] = useState({
    value: '',
    name: ''
  });
  const [celcius, setCelcius] = useState("");
  const [farenheit, setFarenheit] = useState("");

  useEffect(() => {    
      if (currentInput.name === "celcius") setFarenheit((currentInput.value * 9) / 5 + 32);
      else if(currentInput.name === "farenheit") setCelcius(((currentInput.value - 32) * 5) / 9);
    
  }, [currentInput]);

  return (
    <>
      <h1 style={{ marginBottom: "2rem" }}>Temperature Convertor</h1>
      <TempContext.Provider
        value={{ currentInput, setCurrentTemp, celcius, farenheit }}
      >
        <Celcius />
        <Farenheit />
      </TempContext.Provider>
    </>
  );
}

export default App;
