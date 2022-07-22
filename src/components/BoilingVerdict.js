import React, { useEffect, useRef } from "react";

const BoilingVerdict = React.forwardRef((props, ref) => {
  const myStyle = { color: "red", fontWeight: "bolder" };

  //   useEffect(() => {
  //     focusResult();
  //   });

  if (props.celsius >= 100) {
    return (
      <p
        className="result-verdict"
        ref={ref}
        style={{ color: "green", fontWeight: "bolder" }}
      >
        Met Boiling Tempratiure.
      </p>
    );
  }
  return (
    <p className="result-verdict" ref={ref} style={myStyle}>
      Please increase Temprature to reach Boiling State
    </p>
  );
});
export default BoilingVerdict;
