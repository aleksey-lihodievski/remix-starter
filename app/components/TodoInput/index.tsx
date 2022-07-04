import React from 'react';
import { useLocation } from '@remix-run/react';

import Button from '~/components/Button';
import Input from '~/components/Input';
import { TodoInputForm } from './components';

const TodoInput: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <TodoInputForm method="post" action="/api/todos/add">
      <Input name="newTask" css={{ flex: 1 }} />
      <input type="hidden" name="redirectTo" value={pathname} />
      <Button type="submit">Add</Button>
    </TodoInputForm>
  );
};

export default TodoInput;
