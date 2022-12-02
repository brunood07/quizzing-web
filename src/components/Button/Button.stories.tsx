import { Story } from "@storybook/react";

import { Button } from ".";
import { ButtonProps } from "./Button.types";

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  buttonLabel: "Conectar",
};

export default {
  title: "Components/Button",
  component: Button,
};
