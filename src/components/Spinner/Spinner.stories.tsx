import { Story } from '@storybook/react';

import { Spinner } from '.';

const Template: Story = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Components/Spinner',
  component: Spinner
};