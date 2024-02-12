import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Marbella/Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Primary.args = {
  color: "primary",
  children: "Primary button",
};

export const Secondary: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Secondary.args = {
  color: "secondary",
  children: "Secondary button",
};

export const Error: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Error.args = {
  color: "error",
  children: "Error button",
};
