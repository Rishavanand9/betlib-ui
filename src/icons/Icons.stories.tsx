// Icons.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  AdultIcon,
  AnnounceLogo,
  ArrowBelowIcon,
  ArrowDownIcon,
  AvatarIcon,
  BasketBallLogo,
  CasinoLogo,
  CloseIcon,
  FootBallLogo,
  HorseRaceLogo,
  LogoutIcon,
  MenuIcon,
  PlaceholderImage,
  SupportIcon,
  CricketBallLogo,
  TennisBallLogo,
  ArrowUpIcon,
  SecureIcon
} from "icons";

export default {
  title: "Components/Icons",
  component: CloseIcon, // Example component
} as Meta;

const Template: StoryFn = (args) => (
  <div style={{ display: "flex", gap: "20px" }}>
    <CloseIcon height={20} width={20} fill="#000" />
    <CricketBallLogo height={20} width={20} fill="#000" />
    <FootBallLogo height={20} width={20} fill="#000" />
    <HorseRaceLogo height={20} width={20} fill="#000" />
    <LogoutIcon height={20} width={20} fill="#000" />
    <MenuIcon height={20} width={20} fill="#000" />
    <PlaceholderImage height={20} width={20} fill="#000" />
    <CasinoLogo height={20} width={20} fill="#000" />
    <AnnounceLogo height={20} width={20} fill="#000" />
    <AvatarIcon height={20} width={20} fill="#000" />
    <AdultIcon height={20} width={20} fill="#000" />
    <ArrowBelowIcon height={20} width={20} fill="#000" />
    <ArrowUpIcon height={20} width={20} fill="#000" />
    <ArrowDownIcon height={20} width={20} fill="#000" />
    <BasketBallLogo height={20} width={20} fill="#000" />
    <SupportIcon height={20} width={20} fill="#000" />
    <TennisBallLogo height={20} width={20} fill="#000" />
    <MenuIcon height={20} width={20} fill="#000" />
    <SecureIcon height={20} width={20} fill="#000" />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
