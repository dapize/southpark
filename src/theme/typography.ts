const base = {
  fontFamily: 'Montserrat, sans-serif',
  color: '#fff',
  fontWeight: 400,
};

export const typography = {
  h1: {
    ...base,
    fontWeight: 300,
    fontSize: '6rem',
    lineHeight: 1.167,
    letterSpacing: '-0.01562em',
  },
  h2: {
    ...base,
    fontWeight: 300,
    fontSize: '3.75rem',
    lineHeight: 1.2,
    letterSpacing: '-0.00833em',
  },
  h3: {
    ...base,
    fontSize: '3rem',
    lineHeight: 1.167,
    letterSpacing: 0,
  },
  h4: {
    ...base,
    fontSize: '2.125rem',
    lineHeight: 1.235,
    letterSpacing: '0.00735em',
  },
  h5: {
    ...base,
    fontSize: '1.5rem',
    lineHeight: 1.334,
    letterSpacing: 0,
  },
  h6: {
    ...base,
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
  },
  subtitle1: {
    ...base,
    fontSize: '1rem',
    lineHeight: 1.75,
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    ...base,
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.57,
    letterSpacing: '0.00714em',
  },
  body1: {
    ...base,
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  body2: {
    ...base,
    fontSize: '0.875rem',
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
  },
  button: {
    ...base,
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
  },
  caption: {
    ...base,
    fontSize: '0.75rem',
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },
  overline: {
    ...base,
    fontSize: '0.75rem',
    lineHeight: 2.66,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
  },
}
