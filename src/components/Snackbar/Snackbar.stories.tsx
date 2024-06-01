// Snackbar.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Snackbar from './Snackbar'; // Adjust the import path as needed
import { SEVERITY } from 'utils/constants';

// Define the metadata for the story
export default {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: {
    message: { control: 'text' },
    severity: {
      control: {
        type: 'select',
        options: Object.values(SEVERITY),
      },
    },
  },
} as Meta<typeof Snackbar>;

// Define the template for the Snackbar story
const Template: StoryFn<typeof Snackbar> = (args) => <Snackbar {...args} />;

// Define the default story
export const Default = Template.bind({});
Default.args = {
  message: 'This is a default snackbar message',
  severity: SEVERITY.INFO,
};

// Define a story for each severity level
export const Success = Template.bind({});
Success.args = {
  message: 'This is a success message',
  severity: SEVERITY.SUCCESS,
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning message',
  severity: SEVERITY.WARNING,
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is an error message',
  severity: SEVERITY.ERROR,
};
