import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FunctionalComp = (props) => {
  const [count, setCount] = useState(props.initialValue);

  //componentDidMount.
  //  the empty array [] as the second argument, that informs the useEffect Hook that it only needs to execute once, when the component mounts
  useEffect(() => {
    console.log(
      "Behavior before the component is added to the DOM in Func Comp."
    );
  }, []); // Mark [] here

  //componentDidUpdate--renders on every update
  // The most important thing to note is the optional second argument ([]) is no longer present. This means that the Hook will be evaluated on every re-render of the component. The optional second argument represents an array of dependency values that will trigger the re-evaluation of the useEffect Hook. If no values are provided in the array, it will only evaluate the Hook on mount. If the array itself is not provided, it will be evaluated every re-render.
  useEffect(() => {
    console.log(
      "Behavior when the component receives new state or props in Func Comp."
    );
  }); // Mark [] is not here here

  useEffect(() => {
    console.log(
      "Behavior when the component receives change in dependency array variable--count in Func Comp."
    );
  }, [count]); // Mark [] is not here here

  //componentWillUnmount--return statement in useEffect
  useEffect(() => {
    return () => {
      console.log(
        "Behavior right before the component is removed from the DOM in Func Comp."
      );
    };
  }, []);

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
