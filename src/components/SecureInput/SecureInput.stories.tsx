import { Story } from "@storybook/react";
import { SecureInput } from ".";
import { SecureInputProps } from "./SecureInput.types";

const Template: Story<SecureInputProps> = (args: SecureInputProps) => (
  <SecureInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Senha",
  placeholder: "Digite a sua senha",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Senha",
  placeholder: "Digite a sua senha",
  errors: "Senha incorreta",
};

export default {
  title: "Components/SecureInput",
  component: SecureInput,
};
