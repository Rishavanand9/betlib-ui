import React from 'react';
import { Meta, StoryFn } from '@storybook/react/types-6-0';
import Footer, { FooterProps } from './Footer';
import { ThemeProvider } from '../../context/ThemeContext/ThemeContext';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

const Template: StoryFn<FooterProps> = (args) => <ThemeProvider><Footer {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  customStyles: { backgroundColor: 'gray' },
};
