import { styled } from '~/themes';

const Input = styled('input', {
  color: '$primaryMain',
  border: '5px solid',
  outlineColor: '$secondaryMain',
  outlineOffset: '2px',
  outlineWidth: '5px',
  fontWeight: 'bold',
  transition: '0.3s all ease',
  background: 'transparent',
  padding: '0.3rem 0.5rem',

  '&:focus': {
    outlineStyle: 'dotted',
  },
});

export default Input;
