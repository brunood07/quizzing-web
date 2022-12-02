import { screen, render } from "@testing-library/react";

import { ContentCard } from ".";

describe("Testing the main component", () => {
  it("should render the heading", () => {
    const { container } = render(<ContentCard children={<h1>Teste</h1>} />);

    expect(
      screen.getByRole("heading", { name: /ContentCard/i })
    ).toBeInTheDocument();
  });
});
