import "bootstrap/dist/css/bootstrap.min.css";
import { FaSignInAlt, FaUserPlus, FaGithub,FaArrowLeft } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Nav from "./nav";
import Fotter from "./fotter";

const Cart = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        <div className="container">
            <div className="row">
                <div className="col-md-12 py-5 bg-light text-center">
                    <h4 className="p-3 display-5">Your Cart is Empty</h4>
                    <a href="" className="btn  btn-outline-dark mx-4"><FaArrowLeft style={{marginBottom:'3px'}} /> Continue Shopping</a>
                </div>
            </div>
        </div>
      </div>
      <Fotter></Fotter>
    </div>
  );
};
export default Cart;
