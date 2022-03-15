import React from "react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";
import DetailsForm from "../components/DetailsForm/DetailsForm";

test("snapshot of details form page", () => {
  const component = renderer.create(
    <DetailsForm navigate={() => {}} setPersonalDetails={() => {}} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Detail Form component", () => {
  test("renders detail-form component", () => {
    render(<DetailsForm navigate={() => {}} setPersonalDetails={() => {}} />);
  });

  test("name input exists", () => {
    render(<DetailsForm navigate={() => {}} setPersonalDetails={() => {}} />);
    const inputElement = screen.getByLabelText(/Your name/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("gender radio input exists", () => {
    render(<DetailsForm navigate={() => {}} setPersonalDetails={() => {}} />);
    const inputElement = screen.getByText(/Gender/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("language radio input exists", () => {
    render(<DetailsForm navigate={() => {}} setPersonalDetails={() => {}} />);
    const inputElement = screen.getByText(/Language/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("start-quiz button exists", () => {
    render(<DetailsForm navigate={() => {}} setPersonalDetails={() => {}} />);
    expect(screen.getByRole("start-quiz")).toBeInTheDocument();
  });

  test("start-quiz button is disabled initially", () => {
    render(<DetailsForm navigate={() => {}} setPersonalDetails={() => {}} />);
    expect(screen.getByRole("start-quiz")).toBeDisabled();
  });

  test("value of name input changes when typed in", () => {
    render(<DetailsForm navigate={() => {}} setPersonalDetails={() => {}} />);
    const inputElement = screen.getByLabelText(/Your name/i) as HTMLInputElement
    fireEvent.change(inputElement, {target: {value: "John"}})
    expect(inputElement.value).toBe("John");
  });

});
