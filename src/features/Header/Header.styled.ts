import { styled } from "@mui/system";

export const LogoutButton = styled('button')(({theme}) => ({
  border: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 35,
  height: 35,
  position: 'absolute',
  right: 20,
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'transparent',
  transition: 'opacity 0.15s ease-in-out',
  '&:hover': {
    cursor: 'pointer',
    opacity: 0.85
  },
  [theme.breakpoints.up('sm')] :{
    right: 40,
    width: 40,
    height: 40
  }
}))
