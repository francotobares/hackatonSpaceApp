/* eslint-disable prettier/prettier */
import React from 'react';
import ThemeContext from './ThemeContext';
import theme from '../styles/theme';

interface Props {
  children: React.ReactNode;
}

function ThemeProvider({children}: Props) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
