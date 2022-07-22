import React, { useState } from "react";
import ClassComponent from "./ClassComp";
import FunctionalComp from "./FunctionalComp";
const CompType = (props) => {
  return (
    <div className="Comps">
      <FunctionalComp initialValue={4} />
      <ClassComponent />
    </div>
  );
};

export default CompType;
