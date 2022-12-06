import { screen, render } from '@testing-library/react';

import { Spinner } from '.';

describe('Testing the main component', () => {
  it('should render the heading', () => {
    const { container } = render(<Spinner />);

    expect(
      screen.getByRole('heading', { name: /Spinner/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});