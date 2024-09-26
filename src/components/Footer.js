import { Link } from "react-router-dom";
function Footer() {
    return    <footer class="footer_area clearfix">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="single_widget_area d-flex mb-30">
                    <div class="footer-logo ">
                        <Link to="/"><img src={require("../img/final-08.png")}/></Link>
                        {/* <a href="#"><img src="img/core-img/logo2.png" alt=""/></a> */}
                    </div>
                    <div class="footer_menu">
                        <ul>
                            <li><Link to="/aboutus">about us</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="single_widget_area mb-30">
                    <ul class="footer_widget_menu">
                        <li><Link to="#">Order Status</Link></li>
                        <li><Link to="#">Payment Options</Link></li>
                        <li><Link to="#">Shipping and Delivery</Link></li>
                        <li><Link to="#">Guides</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Terms of Use</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="row align-items-end">
            <div class="col-12 col-md-6">
                <div class="single_widget_area">
                    <div class="footer_heading mb-30">
                        <h6>Subscribe</h6>
                    </div>
                    <div class="subscribtion_form">
                        <form action="#" method="post">
                            <input type="email" name="mail" class="mail" placeholder="Your email here"/>
                            <button type="submit" class="submit"><i class="ti-arrow-right" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="single_widget_area">
                    <div class="footer_social_area">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="ti-facebook" aria-hidden="true"></i></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i class="ti-instagram" aria-hidden="true"></i></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="ti-twitter" aria-hidden="true"></i></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i class="ti-pinterest" aria-hidden="true"></i></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i class="ti-youtube-play" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
        
      
        
    </div>



</footer>
}
export default Footer;