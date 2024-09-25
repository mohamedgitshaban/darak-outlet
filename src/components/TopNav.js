import { Link } from "react-router-dom";
function TopNav() {
    return   	<header className="navbar pcoded-header navbar-expand-lg navbar-light header-dark">
		
			
    <div className="m-header">
      <Link to="/" className="b-brand">
        darak outlet
      </Link>
      <button className="mobile-menu" id="mobile-collapse" ><span></span></button>

      <Link  className="mob-toggler">
        <i className="feather icon-more-vertical"></i>
      </Link>
    </div>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/#!" className="pop-search"><i className="feather icon-search"></i></Link>
          <div className="search-bar">
            <input type="text" className="form-control border-0 shadow-none" placeholder="Search hear"/>
            <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </li>
        <li className="nav-item">
          <div className="dropdown">
            <Link className="dropdown-toggle h-drop" to="/" data-toggle="dropdown">
              Category
            </Link>
            <div className="dropdown-menu profile-notification ">
              <ul className="pro-body">
                <li><Link to="/accessories" className="dropdown-item"><i className="fas fa-circle"></i> accessories</Link></li>
                <li><Link to="/fuacets" className="dropdown-item"><i className="fas fa-circle"></i> faucets</Link></li>
                <li><Link to="/mirror" className="dropdown-item"><i className="fas fa-circle"></i> mirrors</Link></li>
                <li><Link to="/sinks" className="dropdown-item"><i className="fas fa-circle"></i> sinks</Link></li>
                <li><Link to="/vanities" className="dropdown-item"><i className="fas fa-circle"></i> vanities</Link></li>
              </ul>
            </div>
          </div>
        </li>
     
      </ul>
      <ul className="navbar-nav ml-auto">
        
        <li>
          <div className="dropdown drp-user">
            <Link to="/" className="dropdown-toggle" data-toggle="dropdown">
              <i className="feather icon-user"></i>
            </Link>
            <div className="dropdown-menu dropdown-menu-right profile-notification">
              <div className="pro-head">
                <img src={require("../assets/images/user/avatar-1.jpg")} className="img-radius" alt="User-Profile-Image"/>
                <span>John Doe</span>
                <Link to="/auth-signin.html" className="dud-logout" title="Logout">
                  <i className="feather icon-log-out"></i>
                </Link>
              </div>
              <ul className="pro-body">
                <li><Link to="/user-profile.html" className="dropdown-item"><i className="feather icon-user"></i> Profile</Link></li>
                <li><Link to="/email_inbox.html" className="dropdown-item"><i className="feather icon-mail"></i> My Messages</Link></li>
                <li><Link to="/auth-signin.html" className="dropdown-item"><i className="feather icon-lock"></i> Lock Screen</Link></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    
  
</header>
}
export default TopNav;