import './App.css';
import mainLogo from './images/mainLogo.jpg';
import HomeScreen from './screens/HomeScreen.js';
import { Route, Routes } from 'react-router-dom';


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
    </>
  );
}

export default App;
