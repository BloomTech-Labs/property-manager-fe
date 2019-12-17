import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    common: { black: 'rgba(0, 0, 0, 1)', white: '#fff' },
    background: { paper: '#fff', default: '#fafafa' },
    primary: {
      light: 'rgba(80, 107, 145, 1)',
      main: 'rgba(45, 59, 79, 1)',
      dark: 'rgba(23, 30, 41, 1)',
      contrastText: '#fff'
    },
    secondary: {
      light: 'rgba(183, 247, 183, 1)',
      main: 'rgba(118, 226, 118, 1)',
      dark: 'rgba(86, 140, 86, 1)',
      contrastText: 'rgba(45, 59, 79, 1)'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(45, 59, 79, 1)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    }
  }
});

export default function PropmanTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

PropmanTheme.propTypes = {
  children: PropTypes.shape({}).isRequired
};
