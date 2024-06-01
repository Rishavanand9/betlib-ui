import React from "react";
import styled from "styled-components";
import { useTheme } from "@context/ThemeContext/ThemeContext";

export type SnackbarProps = {
  message: string;
  severity: string;
  onClose: Function;
};

const StyledSnackbar = styled.div<{ severity: string }>`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ severity, theme }) =>
    theme.colors[severity] || theme.colors.default};
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
`;

const Snackbar: React.FC<SnackbarProps> = ({ message, severity, onClose }) => {
  const { theme } = useTheme();

  return (
    <StyledSnackbar severity={severity} theme={theme}>
      {message}
    </StyledSnackbar>
  );
};

export default Snackbar;
