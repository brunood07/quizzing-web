import { Test } from ".";
import { TestProps } from "./test.types";

const Template = (args: TestProps) => <Test {...args} />;

export const Default = Template.bind({});

export default {
  title: "Test",
  component: Test,
  args: {
    text: "Teste",
  },
};
