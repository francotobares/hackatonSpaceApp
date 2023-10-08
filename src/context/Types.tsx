/* eslint-disable prettier/prettier */
import { TextStyle } from 'react-native/types';

export interface ColorType {
  white: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  blue: string;
  bluePrimary: string;
  blueSecondary: string;
  gray: string;
  graySecondary: string;
  grayTertiary: string;
  grayQuaternary: string;
  greenSecondary: string;
}

export interface ThemeContextType {
  colors: ColorType;
  fontWeights: {
    light: TextStyle;
    normal: TextStyle;
    semibold: TextStyle;
    bold: TextStyle;
  };
  textVariants: {
    largeTitle: TextStyle;
    titleOne: TextStyle;
    titleTwo: TextStyle;
    titlethree: TextStyle;
    headline: TextStyle;
    body: TextStyle;
    callout: TextStyle;
    subhead: TextStyle;
    footnote: TextStyle;
    captionOne: TextStyle;
    captionTwo: TextStyle;
    captionSmall: TextStyle;
  };
}