function Header({ showForm, setShowForm }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Fact App" />
        <h1>Fact App</h1>
      </div>
      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Share a Fact"}
      </button>
    </header>
  );
}

export default Header;
