import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <h1>Multi API App</h1>
      </div>

      <div className="container">
        <h2 align="center" style={{ color: "#fff" }}>
          Welcome to the multi api app, <br /> Choose the options below:
        </h2>
        <div className="row">
          <div className="capsule">
            <button className="button green">Corona</button>
            <button className="button red">Flags</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
