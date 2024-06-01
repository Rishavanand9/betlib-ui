import React from 'react';
import { Meta, StoryFn } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './Button';
import { ThemeProvider } from '../../context/ThemeContext/ThemeContext';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <ThemeProvider><Button {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
  onClick: () => alert('Button clicked!'),
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  label: 'Click Me',
  onClick: () => alert('Button clicked!'),
  customStyles: { backgroundColor: 'green' },
};
