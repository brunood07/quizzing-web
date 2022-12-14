import { screen, render } from '@testing-library/react';

import { Button } from '.';

describe('Testing the main component', () => {
  it('should render the heading', () => {
    const { container } = render(<Button />);

    expect(
      screen.getByRole('heading', { name: /Button/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});