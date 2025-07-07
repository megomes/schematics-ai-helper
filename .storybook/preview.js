import '../src/index.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: 'hsl(0 0% 6%)',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: {
        base: 'dark',
        colorPrimary: 'hsl(210 40% 98%)',
        colorSecondary: 'hsl(217.2 32.6% 17.5%)',
        appBg: 'hsl(0 0% 6%)',
        appContentBg: 'hsl(0 0% 6%)',
        appBorderColor: 'hsl(217.2 32.6% 17.5%)',
        textColor: 'hsl(210 40% 98%)',
        barTextColor: 'hsl(210 40% 98%)',
        barSelectedColor: 'hsl(210 40% 98%)',
        barBg: 'hsl(0 0% 6%)',
        inputBg: 'hsl(217.2 32.6% 17.5%)',
        inputBorder: 'hsl(217.2 32.6% 17.5%)',
        inputTextColor: 'hsl(210 40% 98%)',
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [{ value: 'dark', title: 'Dark' }],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
