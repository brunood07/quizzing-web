import React from 'react';
import { Story } from '@storybook/react';
import { Header } from '.';

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Header',
  component: Header
};