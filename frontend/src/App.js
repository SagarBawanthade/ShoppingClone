import './App.css';
import mainLogo from './images/mainLogo.png';
import HomeScreen from './screens/HomeScreen.js';
import { Route, Routes } from 'react-router-dom';
import GroceryScreen from './screens/GroceryScreen';
import FashionsScreen from './screens/FashionsScreen';
import MobilesScreen from './screens/MobilesScreen';
import ElectronicsScreen from './screens/ElectronicsScreen';
import Packages from './datascreen/Packages';
import Fruits from './datascreen/Fruits';
import Vegetables from './datascreen/Vegetables';
import ProductRenderScreen from './screens/ProductRenderScreen';



function App() {
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
              <li className="nav-item"><a className="nav-link navcustom " href='/' >Cart</a> </li>
            </ul>
          </div>
        </div>
      </nav >

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/groceryscreen" element={<GroceryScreen />} />
          <Route path="/fashionsscreen" element={<FashionsScreen />} />
          <Route path="/mobilesscreen" element={<MobilesScreen />} />
          <Route path="/electronicsscreen" element={<ElectronicsScreen />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/productrenderscreen/:slug" element={<ProductRenderScreen />} />

        </Routes>
      </main>



      <footer>
        <div className='text-center' style={{ color: "wheat", backgroundColor: "black" }} >All rights reserved @2023</div>
      </footer>
    </>
  );
}

export default App;
