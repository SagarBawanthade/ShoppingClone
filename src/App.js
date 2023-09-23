import './App.css';
import mainLogo from './images/mainLogo.png';
import HomeScreen from './screens/HomeScreen.js';
import { Route, Routes } from 'react-router-dom';
import products from './products.js';


function App() {
  return (
    <>
      <nav className="navbar bg-primary navbar-expand-lg ">
        <div className="container">
          <a className=" navbar-brand" href="sagar.com" ><img src={mainLogo} alt="mainLogo"></img></a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input className="customsearchbox bg-light  form-control me-" type="search" placeholder="Search" aria-label="Search" />
              <button className=" bg-light custombtn" type="submit">Search</button>
            </form>
          </div>

          <div className="navbaritems">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0">
              <li className="nav-item "><a className="nav-link navcustom" href="sagar.com">Login</a></li>
              <li className="nav-item"><a className="nav-link navcustom " href="sagar.com">Sign up</a> </li>
              <li className="nav-item"><a className="nav-link navcustom " href="sagar.com">Cart</a> </li>
            </ul>
          </div>
        </div>
      </nav >

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>

      <div className='product-list'>
        {products.map((product) => (
          <div key={product} className='product'>
            <img src={product.image} alt='productImage' />
            <h2>{product.name}</h2>
            <p>Price: Ru.{product.price}</p>
            <p>Rating: {product.price}</p>

          </div>
        ))}

      </div>

      <footer>
        <div className='text-center' style={{ color: "wheat", backgroundColor: "black" }} >All rights reserved @2023</div>
      </footer>
    </>
  );
}

export default App;
