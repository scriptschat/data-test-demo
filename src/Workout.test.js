import { shallow } from "enzyme";
import React from "react";
import { findByTestAttribute } from "../test/utils/testUtils";
import workouts from "./data/worksouts.json";
import Workout from "./Workout";

function setup() {
  return shallow(<Workout {...workouts[0]} />);
}

describe("Workout renders", () => {
  test("without error", () => {
    const wrapper = setup();
    const container = findByTestAttribute(wrapper, "workout-container");
    expect(container.exists()).toBe(true);
    expect(container.length).toBe(1);
  });

  test("workout name, target and group", () => {
    const wrapper = setup();

    const workoutName = findByTestAttribute(wrapper, "workout-name");
    expect(workoutName.exists()).toBe(true);
    expect(workoutName.text()).toContain("Bench Press");

    const workoutTarget = findByTestAttribute(wrapper, "workout-target");
    expect(workoutTarget.exists()).toBe(true);
    expect(workoutTarget.text()).toContain("Chest");

    const workoutGroup = findByTestAttribute(wrapper, "workout-group");
    expect(workoutGroup.exists()).toBe(true);
    expect(workoutGroup.text()).toContain("Upper Body");
  });
});
