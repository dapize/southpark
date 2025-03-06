import { styled } from "@mui/system";

export const Wrapper = styled('div')`
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 5;
  }
`
