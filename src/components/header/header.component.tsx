import classes from './header.module.scss';

export const HeaderComponent = () => {
  return (
    <header className={classes.header}>
      <a href='/my-habits'>
        <div>Logo</div>
      </a>
      <div>Hi, NAME</div>
      <div>Burger Menu</div>
    </header>
  );
};
