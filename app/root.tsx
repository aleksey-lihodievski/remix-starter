import type {
  HeadersFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { RecoilRoot } from 'recoil';

import { getColorScheme } from './services/cookies';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Sandbox',
  viewport: 'width=device-width,initial-scale=1',
});

export const headers: HeadersFunction = () => ({
  'Accept-CH': 'Sec-CH-Prefers-Color-Scheme',
});

export const loader: LoaderFunction = async ({ request }) => ({
  colorScheme: await getColorScheme(request),
});

export default function App() {
  const { colorScheme } = useLoaderData();

  return (
    <RecoilRoot>
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <body className={colorScheme}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </body>
      </html>
    </RecoilRoot>
  );
}
