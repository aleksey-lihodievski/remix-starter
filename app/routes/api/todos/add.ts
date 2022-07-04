import { addTodo } from '~/api/todos';
import { ActionFunction, redirect } from '@remix-run/node';

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();

  const response = await addTodo(body.get('newTask') as string);

  const redirectTo = body.get('redirectTo')?.toString() || '/';

  return redirect(redirectTo);
};
