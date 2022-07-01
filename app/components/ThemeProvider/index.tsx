export {};
// import React, { useEffect } from 'react';
// import { useRecoilValue } from 'recoil';

// import { getThemeState } from '~/recoil/theme';

// interface IThemeProvider {
//   // setThemeClassName: (theme: string) => void;
//   children: React.ReactNode;
// }

// const ThemeProvider: React.FC<IThemeProvider> = ({
//   // setThemeClassName,
//   children,
// }) => {
//   const themeClassName = useRecoilValue(getThemeState);

//   useEffect(() => {
//     document.body.className = themeClassName;
//   }, []);

//   return <>{children}</>;
// };

// export default ThemeProvider;
