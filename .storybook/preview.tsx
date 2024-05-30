import React from 'react';
import { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/context/ThemeContext';

const preview: Preview = {
  decorators: [
    (Story, { parameters }) => (
      <ThemeProvider>
          <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
