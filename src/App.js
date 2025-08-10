import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div>
      {/* nav bar */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
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
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                Become a <span className="text-warning"> web Developer </span>
              </h1>
              <p className="lead my-4">
                we focus on teaching our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role.
              </p>
              <button className="btn btn-primary btn-lg">
                Start The Enrollment
              </button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src="/img/showcase.svg"
              alt="Showcase"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}

      <section className="bg-primary text-light p-5">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <h3 className="mb-3 mb-md-0">Sign Up For Our New letter</h3>

            <div class="input-group news-input">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email"
              />
              <button className="btn btn-dark btn-lg" type="button">
                button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
