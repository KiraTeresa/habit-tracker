import { menuElements } from '@/constants/menu-elements.const';
import classes from './burger-menu.module.scss';
import { usePathname } from 'next/navigation';

export const BurgerMenu = () => {
  const pathName = usePathname();

  return (
    <ul className={classes.burgerList}>
      {menuElements.map(element => (
        <li
          key={element.title}
          className={element.link === pathName ? classes.active : ''}
        >
          <a href={element.link}>{element.title}</a>
          <p>{element.link === pathName}</p>
        </li>
      ))}
    </ul>
  );
};
