import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Forms/Button',
  component: Button,
} as Meta

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    size: 'small',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    size: 'big',
  },
}
