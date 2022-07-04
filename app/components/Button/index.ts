import { styled } from '~/themes';

const Button = styled('button', {
  fontSize: '1.5rem',
  background: 'transparent',
  color: '$primaryMain',
  border: '5px solid',
  cursor: 'pointer',

  '&:hover': {
    background: '$primaryMain',
    borderColor: '$primaryMain',
    color: '$primaryContrastText',
  },
  '&:active': {
    borderColor: '$primaryDark',
    background: '$primaryDark',
  },
});

export default Button;
