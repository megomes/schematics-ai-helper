// Tailwind CSS custom design tokens type definitions

declare module 'tailwindcss/lib/util/color' {
  export interface DefaultColors {
    primary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    secondary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    success: {
      500: string;
      600: string;
    };
    warning: {
      500: string;
      600: string;
    };
    error: {
      500: string;
      600: string;
    };
    info: {
      500: string;
      600: string;
    };
    ai: {
      claude: string;
      chatgpt: string;
      thinking: string;
    };
    circuit: {
      input: string;
      output: string;
      signal: string;
      block: string;
      connection: string;
      highlight: string;
    };
  }
}

// Extend Tailwind's default theme
declare global {
  namespace Tailwind {
    interface Theme {
      colors: {
        primary: {
          50: '#f0f9ff';
          100: '#e0f2fe';
          200: '#bae6fd';
          300: '#7dd3fc';
          400: '#38bdf8';
          500: '#0ea5e9';
          600: '#0284c7';
          700: '#0369a1';
          800: '#075985';
          900: '#0c4a6e';
        };
        secondary: {
          50: '#f0fdf4';
          100: '#dcfce7';
          200: '#bbf7d0';
          300: '#86efac';
          400: '#4ade80';
          500: '#22c55e';
          600: '#16a34a';
          700: '#15803d';
          800: '#166534';
          900: '#14532d';
        };
        success: {
          500: '#22c55e';
          600: '#16a34a';
        };
        warning: {
          500: '#f59e0b';
          600: '#d97706';
        };
        error: {
          500: '#ef4444';
          600: '#dc2626';
        };
        info: {
          500: '#3b82f6';
          600: '#2563eb';
        };
        ai: {
          claude: '#d97706';
          chatgpt: '#10a37f';
          thinking: '#8b5cf6';
        };
        circuit: {
          input: '#22c55e';
          output: '#ef4444';
          signal: '#3b82f6';
          block: '#6b7280';
          connection: '#94a3b8';
          highlight: '#fbbf24';
        };
      };
      fontFamily: {
        primary: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ];
        mono: [
          'JetBrains Mono',
          'SF Mono',
          'Monaco',
          'Cascadia Code',
          'monospace',
        ];
        display: ['Inter Display', 'Inter', 'sans-serif'];
      };
      borderRadius: {
        button: '0.375rem';
        card: '0.5rem';
        modal: '0.75rem';
        'circuit-block': '0.5rem';
      };
      boxShadow: {
        button: '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        modal: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        'circuit-block': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
      };
      spacing: {
        'chat-message': '1rem';
        'block-padding': '1.5rem';
        'sidebar-padding': '2rem';
        'panel-gap': '1rem';
      };
    }
  }
}

export {};
