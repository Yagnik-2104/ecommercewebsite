import "bootstrap/dist/css/bootstrap.min.css";
import { FaSignInAlt, FaUserPlus, FaGithub } from "react-icons/fa";

const Fotter=()=>{
    return(
        <div className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">
              Made with ❤️ by{" "}
              <a
                href="https://github.com/Yagnik-2104"
                className="text-decoration-underline text-dark fs-5"
              >
                Yagnik parmar
              </a>
            </p>
            <a
              href="https://github.com/Yagnik-2104"
              target="_blank"
              className="text-dark fs-4"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    )
}
export default Fotter;