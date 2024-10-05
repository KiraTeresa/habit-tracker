import classes from './homepage.module.scss';

export default function HomePage() {
  return (
    <>
      <div>
        This is the Homepage of MindSet, will only be needed for login.
        <div className={classes.small}>nested div</div>
      </div>
      <p className={classes.small}>extra small</p>
      <p className={classes.regular}>small</p>
      <p className={classes.medium}>medium</p>
      <p className={classes.large}>large</p>
      <p className={classes.extraLarge}>extra large</p>
    </>
  );
}
