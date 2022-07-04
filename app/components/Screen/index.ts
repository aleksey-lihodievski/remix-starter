import { styled } from '~/themes';

import Container from '../Container';

const Screen = styled(Container, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
  maxHeight: '100%',
});

export default Screen;
