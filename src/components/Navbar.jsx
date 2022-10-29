import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Container>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close ms-auto"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/business">
                    BUSINESS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/science">
                    SCIENCE
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/entertainment">
                    ENTERTAINMENT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/technology">
                    TECHNOLOGY
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sports">
                    SPORTS
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  font-family: "Fira-sans", sans-serif;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.7);
  margin: 15px 0 20px;
  .navbar-toggler {
    border: none;
    &:focus {
      box-shadow: none;
    }
  }
  .btn-close {
    &:focus {
      box-shadow: none;
    }
  }

  .nav-item {
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    padding: 0 5px 5px;
    border: none;
    position: relative;

    &:hover {
      border: none;
    }

    &::after{
      content: "";
      position: absolute;
      width: 0px;
      height: 3px;
      left: 50%;
      bottom: 0;
      background-color: #DC2F2F;
      transition: all ease-in-out 0.2s;
    }
    &:hover::after{
      width: 100%;
      left: 0;
    }
  }

  .active{
      background-color: #DC2F2F;
  }
`;
