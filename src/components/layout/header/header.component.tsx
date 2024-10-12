'use client';

import classes from './header.module.scss';
import { BurgerMenu } from '@/components/burger-menu/burger-menu.component';
import { useState } from 'react';

export const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const triggerMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes.logoWrapper}>
          <a href='/my-habits'>
            <div>Logo</div>
          </a>
          <div>Hi, NAME</div>
        </div>
        <div onClick={triggerMenu} className={classes.burger} role='button'>
          {!showMenu ? 'Burger' : 'X'}
        </div>
        {showMenu && <BurgerMenu />}
      </header>
    </>
  );
};
