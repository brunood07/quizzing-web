import { screen, render } from '@testing-library/react';

import { RegisterForm } from '.';

describe('Testing the main component', () => {
  it('should render the heading', () => {
    const { container } = render(<RegisterForm />);

    expect(
      screen.getByRole('heading', { name: /RegisterForm/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});