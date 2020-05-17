import React from "react";
import workouts from "./data/worksouts.json";
import Workout from "./Workout";

function App() {
  return (
    <div data-test-id="app-container" className="container">
      <h1>Workouts</h1>
      {workouts.map((workout) => {
        return <Workout key={workout.id} data-test-id="workout" {...workout} />;
      })}
    </div>
  );
}

export default App;
