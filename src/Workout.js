import React from "react";
import { getDataTestAttribute } from "./helpers/attributeHelper";

function Workout({ name, target, group }) {
  return (
    <div {...getDataTestAttribute("workout-container")}>
      <h4 data-test-id="workout-name">Name: {name}</h4>
      <h6 data-test-id="workout-target">Target: {target}</h6>
      <h6 data-test-id="workout-group">Group: {group}</h6>
    </div>
  );
}

export default Workout;
