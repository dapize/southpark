import { css } from '@emotion/react'
import emotionReset from 'emotion-reset';

export const globalStyles = css`
  ${emotionReset}

  #root {
    min-width: 100vw;
    min-height: 100vh;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
  }
`
