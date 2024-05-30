import React from 'react';
import styled, { CSSProp } from 'styled-components';

const ButtonStyled = styled.button<{ customStyles?: CSSProp }>`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.primaryColorDark};
  }
  ${(props) => props.customStyles};
`;

export interface ButtonProps {
  label: string;
  onClick: () => void;
  customStyles?: CSSProp;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, customStyles }) => {
    return <ButtonStyled customStyles={customStyles} onClick={onClick}>{label}</ButtonStyled>;
};

export default Button;
