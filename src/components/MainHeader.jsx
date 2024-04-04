function MainHeader({ title, description }) {
  const newTitle = title.toUpperCase();

  const state = {
    initialCount: 100,
  };

  return (
    <header>
      <h1>{newTitle}</h1>
      <p>{description}</p>
      <p>{state.initialCount}</p>
    </header>
  );
}

export default MainHeader;
