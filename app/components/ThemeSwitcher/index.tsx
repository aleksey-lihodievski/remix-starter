import { Form, useLocation } from '@remix-run/react';

import Button from '~/components/Button';

// place this where you use Theme switching

// export const action: ActionFunction = async ({ request }) => {
//   const currentColorScheme = await getColorScheme(request);
//   const newColorScheme =
//     currentColorScheme === lightTheme.className
//       ? darkTheme.className
//       : lightTheme.className;

//   return redirect(request.url, {
//     headers: {
//       'Set-Cookie': await colorSchemeCookie.serialize(newColorScheme),
//     },
//   });
// };

const ThemeSwitcher: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Form method="post" action="/api/theme/toggle">
      <Button type="submit">Toggle Theme</Button>
      <input type="hidden" name="redirectTo" value={pathname} />
    </Form>
  );
};

export default ThemeSwitcher;
