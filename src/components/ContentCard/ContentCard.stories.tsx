import React from "react";
import { Story } from "@storybook/react";
import { ContentCard } from ".";
import { ContentCardProps } from "./ContentCard.types";

const Template: Story<ContentCardProps> = (args: ContentCardProps) => (
  <ContentCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export default {
  title: "Components/ContentCard",
  component: ContentCard,
  args: {
    children: "Teste",
  },
};
