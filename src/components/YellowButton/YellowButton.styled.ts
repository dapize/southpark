import { keyframes, styled } from "@mui/system";

const spintAnimation = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const Spinning = styled('span')(() => ({
  width: '25px',
  height: '25px',
  border: '3px solid black',
  borderRadius: '50%',
  display: 'flex',
  borderBottom: '3px solid transparent',
  animation: `${spintAnimation} 0.25s infinite linear`
}))
