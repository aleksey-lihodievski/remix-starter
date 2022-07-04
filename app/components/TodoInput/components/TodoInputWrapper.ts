import { Form } from '@remix-run/react';

import { styled } from '~/themes';

const TodoInputForm = styled(Form, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  columnGap: '1rem',
  margin: '0 auto',
  marginBottom: '1rem',
  width: '100%',
  maxWidth: '500px',
});

export default TodoInputForm;
