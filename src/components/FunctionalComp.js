import React, { useState } from "react";
import PropTypes from "prop-types";

const FunctionalComp = (props) => {
  const [count, setCount] = useState(props.initialValue);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="component function">
      <h3>Counter App using Functional Component : </h3>
      <h2>{count}</h2>
      <button onClick={increase}>Add</button>
    </div>
  );
};

export default FunctionalComp;
FunctionalComp.propTypes = {
  initialValue: PropTypes.oneOf([0, 2, 4]),
};
