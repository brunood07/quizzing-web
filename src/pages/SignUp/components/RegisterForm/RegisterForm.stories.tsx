import { Story } from '@storybook/react';

import { RegisterForm } from '.';

const Template: Story = (args) => <RegisterForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Components/RegisterForm',
  component: RegisterForm
};