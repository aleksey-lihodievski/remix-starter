import { ActionFunction, redirect } from '@remix-run/node';

import { getColorScheme, colorSchemeCookie } from '~/services/cookies';
import { lightTheme, darkTheme } from '~/themes';

export const action: ActionFunction = async ({ request }) => {
  const currentColorScheme = await getColorScheme(request);
  const newColorScheme =
    currentColorScheme === lightTheme.className
      ? darkTheme.className
      : lightTheme.className;

  const body = await request.formData();
  const redirectTo = body.get('redirectTo')?.toString() || '/';

  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await colorSchemeCookie.serialize(newColorScheme),
    },
  });
};
