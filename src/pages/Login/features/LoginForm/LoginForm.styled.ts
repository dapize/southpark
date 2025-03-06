import { styled } from "@mui/system";

export const Form = styled('form')(({theme}) => ({
  position: 'relative',
  zIndex: 10,
  backgroundColor: '#111',
  padding: '20px 30px',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '480px',
  width: '85%',
  rowGap: '32px',
  [theme.breakpoints.up('sm')] :{
    padding: '35px 42px'
  }
}))
