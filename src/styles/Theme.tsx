/* eslint-disable prettier/prettier */
import { TextStyle } from 'react-native';
import { ThemeContextType } from '../context/Types';

const palette = {
  white: '#ffffff',
  secondary: '#fbfbfd',
  tertiary: '#f5f5f7',
  quaternary: '#252525',
  background: '#eaeaea',
  blue: '#0071e3',
  bluePrimary: '#27374D',
  blueSecondary: '#f6fbff',
  gray: '#1d1d1f',
  graySecondary: '#86868b',
  greenSecondary: '#f5fff6',
  grayTertiary: '#d2d2d7',
  grayQuaternary: '#e8e8ed',
};

const theme: ThemeContextType = {
  colors: {
    white: palette.white,
    secondary: palette.secondary,
    tertiary: palette.tertiary,
    quaternary: palette.quaternary,
    blue: palette.blue,
    bluePrimary: palette.bluePrimary,
    blueSecondary: palette.blueSecondary,
    gray: palette.gray,
    graySecondary: palette.graySecondary,
    grayTertiary: palette.grayTertiary,
    grayQuaternary: palette.grayQuaternary,
    greenSecondary: palette.greenSecondary,
  },
  fontWeights: {
    light: {
      fontWeight: '300',
    } as TextStyle,
    normal: {
      fontWeight: '400',
    } as TextStyle,
    semibold: {
      fontWeight: '500',
    } as TextStyle,
    bold: {
      fontWeight: '600',
    } as TextStyle,
  },
  textVariants: {
    largeTitle: {
      fontSize: 34,
      color: palette.gray,
    },
    titleOne: {
      fontSize: 28,
      color: palette.gray,
    },
    titleTwo: {
      fontSize: 22,
      color: palette.gray,
    },
    titlethree: {
      fontSize: 20,
      color: palette.gray,
    },
    headline: {
      fontSize: 17,
      color: palette.gray,
    },
    body: {
      fontSize: 17,
      color: palette.gray,
    },
    callout: {
      fontSize: 16,
      color: palette.gray,
    },
    subhead: {
      fontSize: 16,
      color: palette.gray,
    },
    footnote: {
      fontSize: 16,
      color: palette.gray,
    },
    captionOne: {
      fontSize: 16,
      color: palette.gray,
    },
    captionTwo: {
      fontSize: 16,
      color: palette.gray,
    },
    captionSmall: {
      fontSize: 12,
      color: palette.gray,
    },
  },
};

export default theme;