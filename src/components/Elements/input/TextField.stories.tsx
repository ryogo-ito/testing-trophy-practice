import { Meta, StoryObj } from '@storybook/react';

import { TextField } from '@/components/Elements/input/TextField.tsx';

const meta: Meta<typeof TextField> = {
  title: 'Elements/TextField',
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
  args: {
    placeholder: '名前を入力してください',
    label: '名前',
  },
};

export const Secondary: Story = {
  args: {
    placeholder: 'メールアドレスを入力してください',
    label: 'メールアドレス',
    helperText: '入力形式が間違っています',
    error: true,
  },
};
