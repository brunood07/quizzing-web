import { screen, render } from '@testing-library/react';

import { LoginForm } from '.';

describe('Testing the main component', () => {
  it('should render the heading', () => {
    const { container } = render(<LoginForm />);

    expect(
      screen.getByRole('heading', { name: /LoginForm/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});