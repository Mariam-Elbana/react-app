import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="hide-when-mobile">
        <h1>
          <Link to="/"> Courses 4 Arab</Link>
        </h1>

        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>

            <ul className="sub-ul">
              <li>
                <NavLink to="/html">Full Course</NavLink>
              </li>
              <li>
                <NavLink to="/html">Crash Course</NavLink>
              </li>
              <li>
                <NavLink to="/html">learn in 1h</NavLink>
              </li>
            </ul>
          </li>

          <li className="main-list">
            <NavLink className="main-link" to="/css">
              CSS
            </NavLink>

            <ul className="sub-ul">
              <li>
                <NavLink to="/css">Full Course</NavLink>
              </li>
              <li>
                <NavLink to="/css">CSS Examples</NavLink>
              </li>

              <li className="mini-projects">
                <NavLink to="/css">mini projects&nbsp; + </NavLink>

                <ul className="sub-sub-ul">
                  <li>
                    <NavLink to="/css">project 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="/css">project 2</NavLink>
                  </li>
                  <li>
                    <NavLink to="/css">project 3</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              JavaScript
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <NavLink to="/javascript">coming soon&#128293;</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </header>

      <header className="show-when-mobile">
        <h1>Courses 4 Arab</h1>

        <label className="absolute" for="burger">
          <i className="fas fa-bars"></i>
        </label>

        <input id="burger" type="checkbox" />

        <div className="show-on-click">
          <div className="main-div">
            <label for="html">
              HTML <i className="fas fa-plus"></i>
            </label>
            <input id="html" type="checkbox" />

            <ul className="sub-div">
              <li>
                <NavLink to="/html">Full Course</NavLink>
              </li>
              <li>
                <NavLink to="/html">Crash Course</NavLink>
              </li>
              <li>
                <NavLink to="/html">learn in 1h</NavLink>
              </li>
            </ul>
          </div>

          <div className="main-div">
            <label for="css">
              CSS <i className="fas fa-plus"></i>
            </label>
            <input id="css" type="checkbox" />

            <ul className="sub-div">
              <li>
                <NavLink to="/css">Full Course</NavLink>
              </li>
              <li>
                <NavLink to="/css">CSS Examples</NavLink>
              </li>

              <li>
                <label className="mini-projects" for="mini">
                  mini projects <i className="fas fa-plus"></i>
                </label>
                <input id="mini" type="checkbox" />

                <ul className="sub-sub-div">
                  <li>
                    <NavLink to="/css">project 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="/css">project 2</NavLink>
                  </li>
                  <li>
                    <NavLink to="/css">project 3</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="main-div">
            <label for="js">
              JavaScript <i className="fas fa-plus"></i>
            </label>
            <input id="js" type="checkbox" />

            <ul className="sub-div">
              <li>
                <NavLink to="/javascript">coming soon&#128293;</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
