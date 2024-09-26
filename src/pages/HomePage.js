
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";

import ReactOwlCarousel from 'react-owl-carousel';
import SaleModel from '../components/SaleModel';
import Box from '../components/Box';
import Popular from '../components/Populer';
import Getall from '../apis/Getall';
function HomePage() {
    Getall();
    return<>
   <Box/> 
   
    <div className="top_catagory_area section-padding-80 clearfix">
    <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                        <h2>Shop Bathroom Fixtures</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="single_catagory_area sink d-flex align-items-center justify-content-center bg-img" >
                        <div className="catagory-content">
                            <Link to="/sinks">sink</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="single_catagory_area VANITIES d-flex align-items-center justify-content-center bg-img">
                        <div className="catagory-content">
                        <Link to="/VANITIES">VANITIES</Link>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="single_catagory_area d-flex Accessories align-items-center justify-content-center bg-img">
                        <div className="catagory-content">
                        <Link to="/ACCESSORIES">Accessories</Link>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="single_catagory_area d-flex faucet align-items-center justify-content-center bg-img">
                        <div className="catagory-content">
                        <Link to="/FAUCETS">faucet</Link>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="single_catagory_area d-flex mirror align-items-center justify-content-center bg-img">
                        <div className="catagory-content">
                        <Link to="/Mirror">mirror</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="cta-area">
            <div className="row">
                <div className="col-12">
                    <div className="cta-content bg-img background-overlay" >
                        <div className="h-100 d-flex align-items-center justify-content-end">
                        <SaleModel/>

                            <div className="cta--text">
                                <h6>-60%</h6>
                                <h2>Global Sale</h2>
                                <a href="#" className="btn essence-btn">Buy Now</a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>

    <section className="new_arrivals_area  clearfix">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                        <h2>Popular Products</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Popular/>
    </>
}
export default HomePage;