import "bootstrap/dist/css/bootstrap.min.css";
import { FaSignInAlt, FaUserPlus, FaGithub } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Nav from "./nav";
import Fotter from "./fotter";

const Contact = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form action="">
              <div className="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Password">Message</label>
                <textarea
                  name=""
                  className="form-control"
                  id="Password"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                >
                  Send
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
export default Contact;
