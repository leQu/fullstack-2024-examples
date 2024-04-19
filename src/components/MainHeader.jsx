import styles from "../styles/MainHeader.module.css";

function MainHeader({ title = "Hej", description }) {
  const newTitle = title.toUpperCase();

  const state = {
    initialCount: 100,
  };

  return (
    <header>
      <h1 className={styles.MainHeader}>{newTitle}</h1>
      <p>{description}</p>
      <p>{state.initialCount}</p>
    </header>
  );
}

export default MainHeader;
