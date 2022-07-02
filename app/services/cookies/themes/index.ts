import { createCookie } from '@remix-run/node';

import { lightTheme, darkTheme } from '~/themes';

export let colorSchemeCookie = createCookie('color-scheme');

export const getColorSchemeToken = async (request: Request) =>
  await colorSchemeCookie.parse(request.headers.get('Cookie'));

export const getColorScheme = async (request: Request) => {
  const userSelectedColorScheme = await getColorSchemeToken(request);
  const systemPreferredColorScheme =
    request.headers.get('Sec-CH-Prefers-Color-Scheme') === lightTheme.className
      ? lightTheme.className
      : darkTheme.className;

  return (
    userSelectedColorScheme ??
    systemPreferredColorScheme ??
    lightTheme.className
  );
};
