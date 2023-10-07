import './App.css';
import mainLogo from './images/mainLogo.png';
import HomeScreen from './screens/HomeScreen.js';
import { NavLink, Route, Routes } from 'react-router-dom';
import CartScreen from './screens/CartScreen.js';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import GroceryScreen from './screens/GroceryScreen';
import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { Store } from './Store';

function App() {

  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <>
      <nav className="navbar bg-primary navbar-expand-lg ">
        <div className="container">
          <a className=" navbar-brand" href="/" ><img src={mainLogo} alt="mainLogo"></img></a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input className="customsearchbox bg-light  form-control me-" type="search" placeholder="Search" aria-label="Search" />
              <button className=" bg-light custombtn" type="submit">Search</button>
            </form>
          </div>

          <div className="navbaritems">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0">
              <li className="nav-item "><a className="nav-link navcustom" href='/' >Login</a></li>
              <li className="nav-item"><a className="nav-link navcustom " href='/' >Sign up</a> </li>
              <li className="nav-item"><NavLink className="nav-link navcustom " to='/cartscreen'>Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav >

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/groceryscreen" element={<GroceryScreen />} />
          <Route path="/cartscreen" element={<CartScreen />} />
          <Route path="/product/:slug" element={<ProductDetailsScreen />} />


        </Routes>
      </main>



      <footer>
        <div className='text-center' style={{ color: "wheat", backgroundColor: "black" }} >All rights reserved @2023</div>
      </footer>
    </>
  );
}

export default App;
