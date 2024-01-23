import "bootstrap/dist/css/bootstrap.min.css";
import { FaSignInAlt, FaUserPlus, FaGithub,FaStar  } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Nav from "./nav";
import  "./single.css"
import Fotter from "./fotter";



const Single=()=>{
    return(
        <div>
            <Nav></Nav>
            <div className="container">
                <div className="row">
                    <div className="container my-5 py-2">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 py-3">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="img-fluid" width="400px" height="400px" alt="" />
                            </div>
                            <div className="col-md-6 col-md-6 py-5">
                                <h4 className="text-uppercase text-muted">men's clothing</h4>
                                <h1 className="display-5">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                                <p className="lead">3.9<FaStar style={{marginLeft:'6px',marginBottom:'7px'}} /></p>
                                <h3 className="display-6  my-4">$109.95</h3>
                                <p className="lead">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                                <button className="btn btn-outline-dark">Add to Cart</button>
                                <a href="" className="btn btn-dark mx-3">Go to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5 py-5">
                    <div className="d-none d-md-block">
                        <h2>You may also Like</h2>
                        <div className="marquee-container slid">
                            <div className="marquee slid-1">
                                <div className="initial-child-container">
                                    <div className="child" style={{transform:'none'}}>
                                        <div className="py-4 my-4">
                                            <div className="d-flex">
                                                <div className="card mx-4 text-center">
                                                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="card" className="card-img-top p-3" height="300" width="300" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Fjallraven - Fo ...</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <a href="" className="btn btn-dark m-1">Buy Now</a>
                                                        <button className="btn btn-dark m-1">Add To Cart</button>
                                                    </div>
                                                </div>
                                                <div className="card mx-4 text-center">
                                                    <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="card" className="card-img-top p-3" height="300" width="300" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Mens Casual Pre ...</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <a href="" className="btn btn-dark m-1">Buy Now</a>
                                                        <button className="btn btn-dark m-1">Add To Cart</button>
                                                    </div>
                                                </div>
                                                <div className="card mx-4 text-center">
                                                    <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="card" className="card-img-top p-3" height="300" width="300" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Mens Cotton Jac ...</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <a href="" className="btn btn-dark m-1">Buy Now</a>
                                                        <button className="btn btn-dark m-1">Add To Cart</button>
                                                    </div>
                                                </div>
                                                <div className="card mx-4 text-center">
                                                    <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="card" className="card-img-top p-3" height="300" width="300" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Mens Casual Sli ...</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <a href="" className="btn btn-dark m-1">Buy Now</a>
                                                        <button className="btn btn-dark m-1">Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="marquee slid-1">
                                <div className="initial-child-container">
                                    <div className="child" style={{transform:'none'}}>
                                        <div className="py-4 my-4">
                                            <div className="d-flex">
                                                <div className="card mx-4 text-center">
                                                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="card" className="card-img-top p-3" height="300" width="300" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Fjallraven - Fo ...</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <a href="" className="btn btn-dark m-1">Buy Now</a>
                                                        <button className="btn btn-dark m-1">Add To Cart</button>
                                                    </div>
                                                </div>
                                                <div className="card mx-4 text-center">
                                                    <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="card" className="card-img-top p-3" height="300" width="300" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Mens Casual Pre ...</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <a href="" className="btn btn-dark m-1">Buy Now</a>
                                                        <button className="btn btn-dark m-1">Add To Cart</button>
                                                    </div>
                                                </div>
                                                <div className="card mx-4 text-center">
                                                    <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="card" className="card-img-top p-3" height="300" width="300" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Mens Cotton Jac ...</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <a href="" className="btn btn-dark m-1">Buy Now</a>
                                                        <button className="btn btn-dark m-1">Add To Cart</button>
                                                    </div>
                                                </div>
                                                <div className="card mx-4 text-center">
                                                    <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="card" className="card-img-top p-3" height="300" width="300" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Mens Casual Sli ...</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <a href="" className="btn btn-dark m-1">Buy Now</a>
                                                        <button className="btn btn-dark m-1">Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Fotter />
            </div>
        </div>
    )
}
export default Single;