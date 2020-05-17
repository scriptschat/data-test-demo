import React from "react";

function Workout({ name, target, group }) {
  return (
    <div data-test-id="workout-container">
      <h4 data-test-id="workout-name">Name: {name}</h4>
      <h6 data-test-id="workout-target">Target: {target}</h6>
      <h6 data-test-id="workout-group">Group: {group}</h6>
    </div>
  );
}

export default Workout;
