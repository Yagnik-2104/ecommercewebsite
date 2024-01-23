import "bootstrap/dist/css/bootstrap.min.css";
import { FaSignInAlt, FaUserPlus, FaGithub } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Nav from "./nav";
import Fotter from "./fotter";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            src="https://reactjs-ecommerce-app.vercel.app/assets/main.png.jpg"
            className="card-img img-fluid"
            alt="card"
            height="500"
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">
                New Season Arrivals
              </h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="buttons text-center py-5">
            <button className="btn btn-outline-dark btn-sm m-2">All</button>
            <button className="btn btn-outline-dark btn-sm m-2">
              Men's Clothing
            </button>
            <button className="btn btn-outline-dark btn-sm m-2">
              Women's Clothing
            </button>
            <button className="btn btn-outline-dark btn-sm m-2">
              Jewelery
            </button>
            <button className="btn btn-outline-dark btn-sm m-2">
              Electronics
            </button>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                className="card-img-top p-3"
                alt="card"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">Bag</h5>
                <p className="card-text">
                  Your perfect pack for everyday use and walks in the forest.
                  Stash your laptop (up to 15 in
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ 109.95</li>
              </ul>
              <div className="card-body">
                <Link to='/Single' className="btn btn-dark m-1">
                  Buy Now
                </Link>
                <button className="btn btn-dark m-1">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                className="card-img-top p-3"
                alt="card"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">Mens Casual ....</h5>
                <p className="card-text">
                  Slim-fitting style, contrast raglan long sleeve, three-button
                  henley placket, light weight .....
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ 22.3</li>
              </ul>
              <div className="card-body">
                <a href="" className="btn btn-dark m-1">
                  Buy Nows
                </a>
                <button className="btn btn-dark m-1">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                className="card-img-top p-3"
                alt="card"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">Mens Cotton ...</h5>
                <p className="card-text">
                  great outerwear jackets for Spring/Autumn/Winter, suitable for
                  many occasions, such as wor ...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ 55.99</li>
              </ul>
              <div className="card-body">
                <a href="" className="btn btn-dark m-1">
                  Buy Nows
                </a>
                <button className="btn btn-dark m-1">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                className="card-img-top p-3"
                alt="card"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">Mens Casual ....</h5>
                <p className="card-text">
                  The color could be slightly different between on the screen
                  and in practice. / Please note ...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ 15.99</li>
              </ul>
              <div className="card-body">
                <a href="" className="btn btn-dark m-1">
                  Buy Nows
                </a>
                <button className="btn btn-dark m-1">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                className="card-img-top p-3"
                alt="card"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">John Hardy W ...</h5>
                <p className="card-text">
                  From our Legends Collection, the Naga was inspired by the
                  mythical water dragon that prote ....
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ 695</li>
              </ul>
              <div className="card-body">
                <a href="" className="btn btn-dark m-1">
                  Buy Nows
                </a>
                <button className="btn btn-dark m-1">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
                className="card-img-top p-3"
                alt="card"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">Solid Gold P ...</h5>
                <p className="card-text">
                  Satisfaction Guaranteed. Return or exchange any order within
                  30 days.Designed and sold by ...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ 168</li>
              </ul>
              <div className="card-body">
                <a href="" className="btn btn-dark m-1">
                  Buy Nows
                </a>
                <button className="btn btn-dark m-1">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
                className="card-img-top p-3"
                alt="card"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">SanDisk SSD ...</h5>
                <p className="card-text">
                  Easy upgrade for faster boot up, shutdown, application load
                  and response (As compared to 5 ...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ 109</li>
              </ul>
              <div className="card-body">
                <a href="" className="btn btn-dark m-1">
                  Buy Nows
                </a>
                <button className="btn btn-dark m-1">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
                className="card-img-top p-3"
                alt="card"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">Silicon Powe ...</h5>
                <p className="card-text">
                  3D NAND flash are applied to deliver high transfer speeds
                  Remarkable transfer speeds that ...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ 109</li>
              </ul>
              <div className="card-body">
                <a href="" className="btn btn-dark m-1">
                  Buy Nows
                </a>
                <button className="btn btn-dark m-1">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
                className="card-img-top p-3"
                alt="card"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">Acer SB220Q ...</h5>
                <p className="card-text">
                  21. 5 inches Full HD (1920 x 1080) widescreen IPS display And
                  Radeon free Sync technology. ...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ 599</li>
              </ul>
              <div className="card-body">
                <a href="" className="btn btn-dark m-1">
                  Buy Nows
                </a>
                <button className="btn btn-dark m-1">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
                className="card-img-top p-3"
                alt="card"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">Lock and Lov ...</h5>
                <p className="card-text">
                  100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER
                  25% COTTON (SWEATER), Faux l ...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ 29.95</li>
              </ul>
              <div className="card-body">
                <a href="" className="btn btn-dark m-1">
                  Buy Nows
                </a>
                <button className="btn btn-dark m-1">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
                className="card-img-top p-3"
                alt="card"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">Rain Jacket ...</h5>
                <p className="card-text">
                  Lightweight perfet for trip or casual wear---Long sleeve with
                  hooded, adjustable drawstrin ...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ 39.99</li>
              </ul>
              <div className="card-body">
                <a href="" className="btn btn-dark m-1">
                  Buy Nows
                </a>
                <button className="btn btn-dark m-1">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
                className="card-img-top p-3"
                alt="card"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">MBJ Women's ...</h5>
                <p className="card-text">
                  95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach,
                  Lightweight fabric with grea ...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ 9.85</li>
              </ul>
              <div className="card-body">
                <a href="" className="btn btn-dark m-1">
                  Buy Nows
                </a>
                <button className="btn btn-dark m-1">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
                className="card-img-top p-3"
                alt="card"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">Opna Women's ....</h5>
                <p className="card-text">
                  100% Polyester, Machine wash, 100% cationic polyester
                  interlock, Machine Wash & Pre Shrunk ...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ 7.95</li>
              </ul>
              <div className="card-body">
                <a href="" className="btn btn-dark m-1">
                  Buy Nows
                </a>
                <button className="btn btn-dark m-1">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
                className="card-img-top p-3"
                alt="card"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">DANVOUY Wome ...</h5>
                <p className="card-text">
                  95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter
                  Print,V-Neck,Fashion Tees, The ...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ 12.99</li>
              </ul>
              <div className="card-body">
                <a href="" className="btn btn-dark m-1">
                  Buy Nows
                </a>
                <button className="btn btn-dark m-1">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default Home;
