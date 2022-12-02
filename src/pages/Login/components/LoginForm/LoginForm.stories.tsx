import React from "react";
import { Story } from "@storybook/react";
import { LoginForm } from ".";

const Template: Story = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export default {
  title: "Components/LoginForm",
  component: LoginForm,
};
