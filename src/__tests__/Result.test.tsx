import React from "react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";
import Result from "../components/Result/Result";

const mockData = [
  {
    id: 5,
    type: "multi-select",
    que: "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
    options: ["dummy1", "dummy2", "dummy3", "dummy4"],
    answer: ["dummy2", "dummy4"],
    ansInput: ["dummy2", "dummy4"],
  },
];

test("snapshot of result page", () => {
  const component = renderer.create(<Result data={undefined} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Result component", () => {
  test("renders result component", () => {
    render(<Result data={mockData} />);
  });

  test("correct answers are shown", () => {
    render(<Result data={mockData} />);
    let answers = screen.getByRole("ans-header");
    expect(answers).toBeInTheDocument();
  });

  test("marks scored by user are shown", () => {
    render(<Result data={mockData} />);
    let marks = screen.getByRole("marks-scored");
    expect(marks).toBeInTheDocument();
  });

});
