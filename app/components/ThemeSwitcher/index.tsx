import { ActionFunction, redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';

import Button from '~/components/Button';
import { getColorScheme, colorSchemeCookie } from '~/services/cookies';
import { lightTheme, darkTheme } from '~/themes';

export const action: ActionFunction = async ({ request }) => {
  const currentColorScheme = await getColorScheme(request);
  const newColorScheme =
    currentColorScheme === lightTheme.className
      ? darkTheme.className
      : lightTheme.className;

  return redirect(request.url, {
    headers: {
      'Set-Cookie': await colorSchemeCookie.serialize(newColorScheme),
    },
  });
};

export default function Index() {
  return (
    <Form method="post">
      <Button type="submit">hello</Button>
    </Form>
  );
}
