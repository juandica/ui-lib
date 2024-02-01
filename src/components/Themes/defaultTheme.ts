export const palette = {
    aliceBlue: '#f6fbfe',
    amber: '#ffc10a',
    astral: '#31708f',
    black: '#000',
    blackRussian: '#0b132b',
    cinnabar: '#e54d3e',
    coral: '#ff7f50',
    cornSilk: '#fcf8e3',
    curiousBlue: '#3498db',
    fernGreen: '#537348',
    frostee: '#d6e9c6',
    gainsboro: '#ddd',
    ginFizz: '#faebcc',
    grey: '#757575',
    hintOfGreen: '#e4efdb',
    jacksonsPurple: '#3e3b7c',
    lavenderBlush: '#f9f2f4',
    lightGray: '#cbced1',
    lightSlateBlue: '#8087f3',
    lochmara: '#1d6fa5',
    matterhorn: '#555',
    mcKenzie: '#8a6d3b',
    mediumSeaGreen: '#39ca74',
    moonYellow: '#f1c40f',
    nobel: '#999',
    oldRose: '#c7254e',
    onahau: '#bce8f1',
    paleRose: '#ebccd1',
    pattensBlue: '#d9edf7',
    progressBarRed: '#e74b3b',
    progressBarYellow: '#f1c40f',
    progressBarGreen: '#31af64',
    regalBlue: '#153255',
    roofTerracotta: '#a94442',
    silver: '#c3c3c3',
    snow: '#fafafa',
    softPeach: '#ebdfdd',
    summerSky: '#32ceeb',
    whisper: '#eee',
    white: '#fff',
    whiteSmoke: '#fbfbfb',
  };
  
  export const defaultTheme = {
    palette: {
      brand: {
        indigo: palette.blackRussian,
        primary: palette.regalBlue,
        violet: palette.jacksonsPurple,
        purple: palette.lightSlateBlue,
        blue: palette.summerSky,
        sungold: palette.amber,
      },
      icons: {
        green: palette.mediumSeaGreen,
        yellow: palette.moonYellow,
        red: palette.cinnabar,
      },
      risk: {
        low: palette.mediumSeaGreen,
        medium: palette.moonYellow,
        high: palette.cinnabar,
        mediumHigh: palette.coral,
        unauthorized: palette.silver,
      },
      action: {
        light: palette.aliceBlue,
        main: palette.curiousBlue,
        dark: palette.lochmara,
      },
      info: {
        light: palette.pattensBlue,
        main: palette.onahau,
        dark: palette.astral,
      },
      success: {
        light: palette.hintOfGreen,
        main: palette.frostee,
        dark: palette.fernGreen,
      },
      warning: {
        light: palette.cornSilk,
        main: palette.ginFizz,
        dark: palette.mcKenzie,
      },
      error: {
        light: palette.softPeach,
        main: palette.paleRose,
        dark: palette.roofTerracotta,
      },
      background: {
        primary: palette.white,
        light: palette.snow,
        secondary: palette.whiteSmoke,
        tertiary: palette.whisper,
        dark: palette.grey,
      },
      border: {
        primary: palette.gainsboro,
        secondary: palette.silver,
      },
      text: {
        primary: palette.matterhorn,
        secondary: palette.nobel,
        heading: palette.regalBlue,
        contrast: palette.white,
        error: palette.cinnabar,
      },
      progressBar: {
        high: palette.progressBarRed,
        medium: palette.progressBarYellow,
        low: palette.progressBarGreen,
      },
    },
    fonts: {
      largeMetric: "'Sharp Sans', Helvetica, Arial, sans-serif",
      heading: "'Sharp Sans', Helvetica, Arial, sans-serif",
      generalContent: "'Inter', Helvetica, Arial, sans-serif",
      monospaced: 'monospace',
    },
    borders: {
      primary: `1px solid ${palette.gainsboro}`,
      contrast: `1px solid ${palette.white}`,
      brand: `1px solid ${palette.regalBlue}`,
      warning: `1px solid ${palette.ginFizz}`,
      info: `1px solid ${palette.onahau}`,
      secondaryDashed: `1px dashed ${palette.lightGray}`,
    },
    shadows: {
      standard: '0 5px 10px rgba(0,0,0,0.2)',
    },
    media: {
      customMax: (width: number): string => `@media only screen and (max-width: ${width}px)`,
      customMin: (width: number): string => `@media only screen and (min-width: ${width}px)`,
      largeScreen: '@media only screen and (max-width: 1100px)',
      largeScreenMin: '@media only screen and (min-width: 1101px)',
      extraLargeScreen: '@media only screen and (min-width: 1650px)',
    },
    macros: {
      hexToRgb: (hex: string): string => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
  
        return `rgb(${r}, ${g}, ${b})`;
      },
      hexToRgba: (hex: string, alpha = 1): string => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
  
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      },
      metricScoreColor: (score: MetricColor, authorized = true): string => {
        if (!authorized) {
          return defaultTheme.palette.border.secondary;
        } else if (score === 'green') {
          return defaultTheme.palette.risk.low;
        } else if (score === 'yellow') {
          return defaultTheme.palette.risk.medium;
        } else if (score === 'red') {
          return defaultTheme.palette.risk.high;
        } else {
          return defaultTheme.palette.text.primary;
        }
      },
      scoreColor: (score: number, authorized = true): string => {
        if (!authorized) {
          return defaultTheme.palette.border.secondary;
        } else if (score < 334) {
          return defaultTheme.palette.risk.low;
        } else if (score < 667) {
          return defaultTheme.palette.risk.medium;
        } else {
          return defaultTheme.palette.risk.high;
        }
      },
    },
  };
  
  export type palette = keyof typeof palette;
  export type defaultTheme = keyof typeof defaultTheme;
  export type CustomTheme = typeof defaultTheme;
  export type MetricColor = 'red' | 'green' | 'yellow' | 'default';
  