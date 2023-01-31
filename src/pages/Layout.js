import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
  <div className="container">
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand"><img src="/logo.png"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">insurance</a>
        </li><li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Media
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Photos</a></li>
            <li><a className="dropdown-item" href="#">Videos</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Social</a></li>
          </ul>
        </li>
      </ul>
      <a className="navbar-btn btn btn-lg btn-primary lift ms-auto" href="#" target="_blank">
        Get a quote
      </a>
    </div>
  </div>
</nav>
</div>
</header>

      <Outlet />

      <footer>
  <div className="container">
    <div className="row">
     <div className="col-md-3">
       <h4>Information</h4>
       <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Overview</a></li>
       </ul>
     </div>
     <div className="col-md-3">
      <h4>Our Insurance</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Overview</a></li>
       </ul>
     </div>
     <div className="col-md-3">
      <h4>Our Plans</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Overview</a></li>
       </ul>

     </div>
     <div className="col-md-3">
      <h4>Contact Us</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Overview</a></li>
       </ul>

     </div>
    </div>
  </div>
</footer>
    </>
  )
};

export default Layout;