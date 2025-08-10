import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div>
      {/* nav bar */}
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

      {/* Showcase */}
      <div className="bg-dark text-light p-5 text-center">
        <div className="container">
          <div className="d-sm-flex ">
            <div>
              <h1>
                Become a <span className="text-warning"> web Developer </span>
              </h1>
            </div>
            <img
              className="img-fluid w-50"
              src="/img/showcase.svg"
              alt="Showcase"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
