import { screen, render } from '@testing-library/react';

import { Input } from '.';

describe('Testing the main component', () => {
  it('should render the heading', () => {
    const { container } = render(<Input />);

    expect(
      screen.getByRole('heading', { name: /Input/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});