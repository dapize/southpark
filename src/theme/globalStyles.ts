import { css } from '@emotion/react'
import emotionReset from 'emotion-reset';

export const globalStyles = css`
  ${emotionReset}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-weight: 400;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  input[data-autocompleted] {
    background-color: transparent !important;
  }
`
