import { screen, render } from '@testing-library/react';

import { SecureInput } from '.';

describe('Testing the main component', () => {
  it('should render the heading', () => {
    const { container } = render(<SecureInput />);

    expect(
      screen.getByRole('heading', { name: /SecureInput/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});