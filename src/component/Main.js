function Main({ inhalt }) {
  return (
    <main className="main input field">
      <div>
        <h4>{inhalt}</h4>
      </div>
    </main>
  );
}

Main.defaultProps = {
  inhalt: "Set Id",
};

export default Main;
