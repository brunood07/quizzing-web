import { screen, render } from '@testing-library/react';

import { Header } from '.';

describe('Testing the main component', () => {
  it('should render the heading', () => {
    const { container } = render(<Header />);

    expect(
      screen.getByRole('heading', { name: /Header/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});