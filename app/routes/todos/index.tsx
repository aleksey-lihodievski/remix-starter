import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import Header from '~/components/Header';
import Screen from '~/components/Screen';
import TodoInput from '~/components/TodoInput';
import TodoList from '~/components/TodoList';
import { getTodos } from '~/api/todos';
import { ITodo } from '~/types';

type ILoaderReturn = ITodo[];

export const loader: LoaderFunction = async () => {
  const todos = await getTodos();
  return todos as ILoaderReturn;
};

export default function Index() {
  const todos = useLoaderData<ILoaderReturn>();

  return (
    <Screen css={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <Header title="To Do List" />
      <TodoList todos={todos} />
      <TodoInput />
    </Screen>
  );
}
