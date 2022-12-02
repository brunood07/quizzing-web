import { Story } from "@storybook/react";
import { Input } from ".";
import { InputProps } from "./Input.types";

const Template: Story<InputProps> = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Email",
  placeholder: "Digite o seu email",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Email",
  placeholder: "Digite o seu email",
  errors: "Email incorreto",
};

export default {
  title: "Components/Input",
  component: Input,
};
