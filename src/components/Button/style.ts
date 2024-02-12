import { defaultTheme } from '../Themes/defaultTheme';

import styled from '@emotion/styled';

export const ButtonStyled = styled.button({
  alignItems: 'center',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'center',
  margin: '0',
  textDecoration: 'none',
  outline: '0',
  width: '100%',
  cursor: 'pointer',

  '&:hover, &:focus': {
    filter: 'brightness(90%)',
    textDecoration: 'none',
  },

  '&:active': {
    filter: 'brightness(80%)',
  },

  '&$disabled': {
    '&:hover': {
      filter: 'none',
    },
  },
  '&.disabled': {
    cursor: 'not-allowed',
    opacity: '0.5',
  },
  '&.content': {
    width: 'auto',
  },
  '&.medium': {
    fontSize: '13px',
    padding: '4px 25px',
  },
  '&.large': {
    fontSize: '16px',
    padding: '10px 16px',
  },
  '&.primary': {
    background: defaultTheme.palette.action.main,
    borderColor: defaultTheme.palette.action.dark,
    color: defaultTheme.palette.text.contrast,
    '&:hover': {
      color: defaultTheme.palette.text.contrast,
    },
  },
  '&.white': {
    background: defaultTheme.palette.background.secondary,
    borderColor: defaultTheme.palette.border.primary,
    color: defaultTheme.palette.text.primary,
    '&:hover': {
      color: defaultTheme.palette.text.primary,
    },
  },
  '&.defenders': {
    background: defaultTheme.palette.background.primary,
    borderColor: defaultTheme.palette.action.main,
    color: defaultTheme.palette.action.main,
    '&:hover': {
      color: defaultTheme.palette.action.main,
    },
  },
  '&.secondary': {
    background: defaultTheme.palette.background.tertiary,
    borderColor: defaultTheme.palette.border.primary,
    color: defaultTheme.palette.text.primary,
    '&:hover': {
      color: defaultTheme.palette.text.primary,
    },
  },
  '&.tertiary': {
    background: 'transparent',
    borderColor: 'transparent',
    color: defaultTheme.palette.action.main,
    '&:hover': {
      background: defaultTheme.palette.background.secondary,
    },
  },
  '&.error': {
    background: defaultTheme.palette.error.dark,
    borderColor: defaultTheme.palette.error.dark,
    color: defaultTheme.palette.text.contrast,
    '&:hover': {
      color: defaultTheme.palette.text.contrast,
    },
  },
  '&.left': {
    borderRadius: '4px 0 0 4px',

    '&:hover': {
      position: 'relative',
      zIndex: '2',
    },
  },
  '&.right': {
    borderRadius: '0 4px 4px 0',
    margin: '0 0 0 -1px',

    '&:hover': {
      position: 'relative',
      zIndex: '2',
    },
  },
  '&.narrow': {
    padding: '4px 10px',
  },
});
