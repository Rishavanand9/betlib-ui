import React from 'react';
import styled, { CSSProp } from 'styled-components';

const FooterContainer = styled.footer<{ customStyles?: CSSProp }>`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.customStyles};
`;

export interface FooterProps {
  customStyles?: CSSProp;
}

const Footer: React.FC<FooterProps> = ({ customStyles }) => {
  return (
    <FooterContainer customStyles={customStyles}>
      <p>© 2024 My Betting Site</p>
    </FooterContainer>
  );
};

export default Footer;
