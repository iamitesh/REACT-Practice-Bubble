import { scaleNames } from "../utilities/utilities";

const TemperatureInput = ({
  scale,
  onScaleChange,
  temperature,
  onTemperatureChange,
}) => {
  function handleChange(e) {
    onTemperatureChange(e.target.value);
    onScaleChange(scale);
  }

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
};
export default TemperatureInput;
