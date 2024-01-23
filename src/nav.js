import "bootstrap/dist/css/bootstrap.min.css";
import { FaSignInAlt, FaUserPlus, FaGithub } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="py-3 sticky-top navbar-expand-lg  navbar bg-light">
      <div className="container">
        <a href="" className="navbar-brand fs-4 fw-bold px-2 ">
          {" "}
          React Ecommerce
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to='/All' className="nav-link">
                Products{" "}
              </Link>
            </li>
            <li>
              <Link to='/About' className="nav-link">
                About{" "}
              </Link>
            </li>
            <li>
              <Link to='/Contact' className="nav-link">
                Contact{" "}
              </Link>
            </li>
          </ul>
          <div className="buttons text-center">
            <Link to='/Login' className="btn btn-outline-dark m-2">
              <FaSignInAlt style={{ marginRight: "0.25rem" }} /> Login
            </Link>
            <Link to='/Register' className="btn btn-outline-dark m-2">
              <FaUserPlus style={{ marginRight: "0.25rem" }} />
              Register
            </Link>
            <Link to='/Cart' className="btn btn-outline-dark m-2">
              <FaCartShopping style={{ marginRight: "0.25rem" }} /> Cart (0)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
