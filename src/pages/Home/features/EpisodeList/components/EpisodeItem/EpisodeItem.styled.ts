import { CSSObject, styled } from "@mui/system";
import shouldForwardProp from '@styled-system/should-forward-prop'

export const Wrapper = styled('li', {
  shouldForwardProp
})<{$fullWidth?: boolean}>(({theme, $fullWidth}) => {
  let styles: CSSObject = {
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.08)',
    overflow: 'hidden',
    borderRadius: 1,
    position: 'relative',
    transition: 'transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    ':hover': {
      boxShadow: "0 8px 22px -6px rgba(0,0,0,0.3)",
      transform: "scale(1.01) translateZ(0) perspective(1px)",
    }
  }
  if (!$fullWidth) {
    styles = {
      ...styles,
      [theme.breakpoints.up('sm')]: {
        flexShrink: 1,
        width: 'calc(50% - 10px)'
      },
      [theme.breakpoints.up('lg')]: {
        width: 'calc(33.33% - 13.3px)'
      }
    }
  } else {
    styles = {
      ...styles,
      [theme.breakpoints.up('sm')]: {
        width: '100%'
      },
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
        justifyConter: 'flex-start',
        aligItems: 'flex-start'
      }
    }
  }
  return styles;
});

export const Content = styled('div', { shouldForwardProp })<{$fullWidth?: boolean}>(({theme, $fullWidth}) => {
  let styles: CSSObject = {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '175px'
  };
  if (!$fullWidth) {
    styles = {
      ...styles,
      [theme.breakpoints.up('sm')]: {
        height: '200px'
      },
      [theme.breakpoints.up('md')]: {
        height: '160px'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        height: '185px'
      },
      [theme.breakpoints.up('xxl')]: {
        height: '140px'
      },
    }
  } else {
    styles = {
      ...styles,
      [theme.breakpoints.up('sm')]: {
        height: '120px'
      },
      [theme.breakpoints.up('md')]: {
        height: '100px'
      },
      [theme.breakpoints.up('lg')]: {
        height: '100%'
      }
    }
  }
  return styles;
});

export const Thumbnail = styled('img', { shouldForwardProp })<{$fullWidth?: boolean}>(({theme, $fullWidth}) => {
  let styles: CSSObject = {
    maxWidth: '100%',
    aspectRatio: '16/9',
    minHeight: 175
  };
  if ($fullWidth) {
    styles = {
      ...styles,
      [theme.breakpoints.up('lg')]:{
        width: '55%',
        flexShrink: 0,
      },
      [theme.breakpoints.up('xl')]:{
        width: '65%',
        flexShrink: 0,
      }
    }
  }

  return styles
})
