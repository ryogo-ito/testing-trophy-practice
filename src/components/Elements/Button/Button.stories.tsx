import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/Elements/Button/Button.tsx';

const meta: Meta<typeof Button> = {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'mdボタン',
  },
};

export const Secondary: Story = {
  args: {
    children: 'mdボタン',
    variant: 'secondary',
  },
};

export const Small: Story = {
  args: {
    children: 'smボタン',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'mdボタン',
  },
};

export const Large: Story = {
  args: {
    children: 'lgボタン',
    size: 'lg',
  },
};
