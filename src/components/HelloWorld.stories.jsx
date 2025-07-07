import HelloWorld from './HelloWorld';

export default {
  title: 'Components/HelloWorld',
  component: HelloWorld,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to display',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export const Default = {
  args: {
    text: 'Hello World',
  },
};

export const CustomText = {
  args: {
    text: 'Welcome to Storybook!',
  },
};

export const WithCustomStyles = {
  args: {
    text: 'Styled Hello World',
    className: 'text-purple-600 text-6xl',
  },
}; 