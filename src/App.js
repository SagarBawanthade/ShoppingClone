import './App.css';
import mainLogo from './images/mainLogo.jpg';


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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="sagar.com">Login</a></li>
              <li className="nav-item"><a className="nav-link" href="sagar.com">Become a seller</a> </li>
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="sagar.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">More</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item text-white" href="sagar.com">Signup</a></li>
                  <li><a className="dropdown-item text-white" href="sagar.com">My account</a></li>
                  <li><hr className="dropdown-divider text-white" /></li>
                  <li><a className="dropdown-item bg-white" href="sagar.com">More</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    </>
  );
}

export default App;
