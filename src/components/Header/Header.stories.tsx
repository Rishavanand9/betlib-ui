import React from 'react';
import { Meta, StoryFn } from '@storybook/react/types-6-0';
import Header, { HeaderProps } from './Header';
import { ThemeProvider } from '../../context/ThemeContext';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => <ThemeProvider><Header {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  title: 'My Betting Site',
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  title: 'My Betting Site',
  customStyles: { backgroundColor: 'purple' },
};
