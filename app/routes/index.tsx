import { ActionFunction, redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import Background from '~/components/Background';
import Button from '~/components/Button';
import textState, { charCountState } from '~/recoil/example';
// import { getThemeState } from '~/recoil/theme';
import { colorSchemeCookie, getColorScheme } from '~/services/cookies';

export const action: ActionFunction = async ({ request }) => {
  const currentColorScheme = await getColorScheme(request);
  const newColorScheme = currentColorScheme === 'light' ? 'dark' : 'light';

  return redirect(request.url, {
    headers: {
      'Set-Cookie': await colorSchemeCookie.serialize(newColorScheme),
    },
  });
};

export default function Index() {
  // const [theme, setTheme] = useRecoilState(getThemeState);
  const [text, setText] = useRecoilState(textState);
  const charCount = useRecoilValue(charCountState);

  // const toggleTheme = useCallback(() => {
  //   if (theme === 'lightTheme') {
  //     setTheme('darkTheme');
  //   } else {
  //     setTheme('lightTheme');
  //   }
  // }, [theme]);

  return (
    <Background
      style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}
    >
      <p>{text}</p>
      <p>{charCount}</p>
      {/* <p>{theme}</p> */}
      <Form method="post">
        <Button type="submit">Toggle theme</Button>
      </Form>
    </Background>
  );
}
