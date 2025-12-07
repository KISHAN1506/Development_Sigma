function Hello({ username, textColors }) {
  return (
    <>
      <div style={{ color: textColors }}>Hello {username}</div>
    </>
  );
}

export default Hello;
