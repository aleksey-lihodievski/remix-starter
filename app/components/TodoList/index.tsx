import React from 'react';

import Scroller from '../Scroller';
import { ITodo } from '~/types';

interface ITodoListProps {
  todos: ITodo[];
}

const TodoList: React.FC<ITodoListProps> = ({ todos }) => {
  return (
    <Scroller>
      {todos.map((todo) => (
        <p key={todo._id}>{todo.title}</p>
      ))}
    </Scroller>
  );
};

export default TodoList;
