import { createStitches } from '@stitches/react';

export const { styled, createTheme, getCssText, globalCss, css } =
  createStitches({
    media: {
      xs: '(min-width: 576px)',
      sm: '(min-width: 768px)',
      md: '(min-width: 992px)',
      lg: '(min-width: 1200px)',
      xl: '(min-width: 1536px)',
    },
    theme: {
      colors: {
        commonBlack: '#000',
        commonWhite: '#fff',

        primaryMain: '#41a9FF',
        primaryLight: '#84c5fb',
        primaryDark: '#1b476a',
        primaryContrastText: '#fff',

        secondaryMain: '#b1245a',
        secondaryLight: '#db2c6f',
        secondaryDark: '#55112b',
        secondaryContrastText: '#fff',

        warningMain: '#ed6c02',
        warningLight: '#ff9800',
        warningDark: '#e65100',
        warningContrastText: '#fff',

        infoMain: '#0288d1',
        infoLight: '#03a9f4',
        infoDark: '#01579b',
        infoContrastText: '#fff',

        successMain: '#2e7d32',
        successLight: '#4caf50',
        successDark: '#1b5e20',
        successContrastText: '#fff',

        grayMain: '#bdbdbd',
        grayExtraLight: '#eeeeee',
        grayLight: '#e0e0e0',
        grayDark: '#424242',
        grayBackground: '#f5f5f5',
        grayContrastText: '#fff',
        gray100: '#fafafa',
        gray200: '#f5f5f5',
        gray300: '#eeeeee',
        gray400: '#e0e0e0',
        gray500: '#bdbdbd',
        gray600: '#9e9e9e',
        gray700: '#757575',
        gray800: '#616161',
        gray900: '#424242',
        gray1000: '#212121',
      },
      space: {
        1: '5px',
        2: '10px',
        3: '15px',
      },
      fontSizes: {
        1: '12px',
        2: '13px',
        3: '15px',
      },
      fonts: {
        untitled: 'Untitled Sans, apple-system, sans-serif',
        mono: 'Söhne Mono, menlo, monospace',
      },
      //   fontWeights: {},
      //   lineHeights: {},
      //   letterSpacings: {},
      //   sizes: {},
      //   borderWidths: {},
      //   borderStyles: {},
      //   radii: {},
      //   shadows: {},
      //   zIndices: {},
      //   transitions: {},
    },
  });

globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    animationDuration: '0.01ms !important',
    animationIterationCount: '1 !important',
    transitionDuration: '0.01ms !important',
    scrollBehavior: 'auto !important',
  },
  'body, h1, h2, h3, h4, p, figure, figcaption, blockquote, dl, dd': {
    margin: 0,
  },
  "ul[role='list'], ol[role='list']": { listStyle: 'none' },
  'html:focus-within': {
    scrollBehavior: 'smooth',
  },
  body: {
    color: '$commonBlack',
    backgroundColor: '$commonWhite',
    minHeight: '100vh',
    textRendering: 'optimizeSpeed',
    lineHeight: 1.5,
  },
  'a:not([class])': {
    textDecorationSkipInk: 'auto',
  },
  'img, picture': {
    maxWidth: '100%',
    display: 'block',
  },
  'input, button, textarea, select': { font: 'inherit' },
  '@media (prefers-reduced-motion: reduce)': {
    'html:focus-within': {
      scrollBehavior: 'auto',
    },
  },
})();
