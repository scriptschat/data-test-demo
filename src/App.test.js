import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttribute } from "../test/utils/testUtils";

/**
 * Factory function to setup App component
 * @function
 * @name setup
 *
 * @returns {ShallowWrapper}
 */
function setup() {
  return shallow(<App />);
}

describe("App renders", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("renders without error", () => {
    const container = findByTestAttribute(wrapper, "app-container");
    expect(container.exists()).toBe(true);
    expect(container.length).toBe(1);
  });

  test("renders workout components", () => {
    const workouts = findByTestAttribute(wrapper, "workout");
    expect(workouts).not.toBeNull();
    expect(workouts.length).toBe(3);
  });
});
