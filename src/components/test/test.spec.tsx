import { screen, render } from "@testing-library/react";

import { Test } from "./index";

describe("Testing the test component", () => {
  it("Should render a red heading by default", () => {
    render(<Test text="Teste" />);

    expect(screen.getByRole("heading")).toHaveClass("text-[#FF0000]");
  });
});
