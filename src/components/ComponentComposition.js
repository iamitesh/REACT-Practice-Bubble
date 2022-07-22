import React, { useEffect, useRef } from "react";
import { toCelsius, toFahrenheit, tryConvert } from "../utilities/utilities";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

const ComponentComposition = (props) => {
  const resultEle = useRef(null);
  const [scale, setScale] = React.useState("c");
  const [temperature, setTemperature] = React.useState("");
  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
  const focusResult = () => {
    console.log(resultEle.current);
    resultEle.current.classList.add("focus");
  };
  return (
    <>
      {props.children}

      <fieldset>
        <legend>Both temprature scales are in sync:</legend>
        <div className="temprature-pair">
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onScaleChange={setScale}
            onTemperatureChange={setTemperature}
          />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onScaleChange={setScale}
            onTemperatureChange={setTemperature}
          />
        </div>
      </fieldset>
      <button onClick={focusResult}>Focus on Celcuis Input</button>
      <BoilingVerdict ref={resultEle} celsius={parseFloat(celsius)} />
    </>
  );
};

export default ComponentComposition;
