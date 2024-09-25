import { Link } from "react-router-dom";

function SideNav() {
    return    	<nav className="pcoded-navbar  ">
		<div className="navbar-wrapper  ">
			<div className="navbar-content scroll-div " >
				
				<div className="">
					<div className="main-menu-header">
						<img className="img-radius" src={require("../assets/images/user/avatar-2.jpg")} alt="User-Profile-Image"/>
						<div className="user-details">
							<span>John Doe</span>
							<div id="more-details">UX Designer</div>
						</div>
					</div>
					
				</div>
				
				<ul className="nav pcoded-inner-navbar ">
					<li className="nav-item pcoded-menu-caption">
						<label>Navigation</label>
					</li>
					<li className="nav-item">
					    <Link to="/" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></Link>
					</li>
					<li className="nav-item">
					    <Link to="/order" className="nav-link "><span className="pcoded-micon"><i className="ti-money"></i></span><span className="pcoded-mtext">payment order</span></Link>
					</li>


					<li className="nav-item pcoded-menu-caption">
					    <label>Forms &amp; table</label>
					</li>
					<li className="nav-item">
					    <Link to="/contactus" className="nav-link "><span className="pcoded-micon"><i className="ti-email"></i></span><span className="pcoded-mtext">emails</span></Link>
					</li>
				</ul>
				
			
			</div>
		</div>
	</nav>
}
export default SideNav;