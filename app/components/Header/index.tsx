import React from 'react';
import ThemeSwitcher from '../ThemeSwitcher';

import C from './components';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <C.HeaderComponent>
      <h1>{title}</h1>
      <ThemeSwitcher />
    </C.HeaderComponent>
  );
};

export default Header;
