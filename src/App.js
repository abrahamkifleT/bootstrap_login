import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          {" "}
          <a href="#" className="navbar-brand">
            Frontend Bootcamp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav  ms-auto">
              <li className="nav_item">
                <a href="#learn" className="nav-link">
                  What you'll learn
                </a>
              </li>
              <li className="nav_item">
                <a href="#questions" className="nav-link">
                  Questions
                </a>
              </li>
              <li className="nav_item">
                <a href="#instractors" className="nav-link">
                  Instractors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
