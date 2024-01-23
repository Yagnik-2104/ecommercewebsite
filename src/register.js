import "bootstrap/dist/css/bootstrap.min.css";
import { FaSignInAlt, FaUserPlus, FaGithub } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Nav from "./nav";
import Fotter from "./fotter";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form action="">
              <div className="form my-3">
                <label htmlFor="Full Name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email address">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Password">Password</label>
                <input
                  type="Password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>Already has an account? <Link to='/Login' className="text-decoration-underline text-info">Login</Link></p>
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Fotter></Fotter>
    </div>
  );
};
export default Register;
