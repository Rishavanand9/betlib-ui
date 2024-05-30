import React from 'react';
import styled, { CSSProp } from 'styled-components';

const HeaderContainer = styled.header<{ customStyles?: CSSProp }>`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.customStyles};
`;

export interface HeaderProps {
  title: string;
  customStyles?: CSSProp;
}

const Header: React.FC<HeaderProps> = ({ title, customStyles }) => {
  return (
    <HeaderContainer customStyles={customStyles}>
      <h1>{title}</h1>
    </HeaderContainer>
  );
};

export default Header;
