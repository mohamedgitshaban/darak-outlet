import ReactOwlCarousel from 'react-owl-carousel';
import { useState,useEffect } from 'react';
function Popular(params) {
    const [cc,Setcc]=useState(4);
    useEffect(()=>{
      if(window.innerWidth>900){
      Setcc(4);
    }
    else if(window.innerWidth>700){
      Setcc(3);
    }
    else if(window.innerWidth>600){
      Setcc(2);
    }
    else{
      Setcc(1);
    }
    },[])
    useEffect(()=>{
     
      window.addEventListener('resize', handleWindowResize);
    
      },[window.innerWidth])
      const handleWindowResize=()=>{
        if(window.innerWidth>900){
          Setcc(4);
        }
        else if(window.innerWidth>700){
          Setcc(3);
        }
        else if(window.innerWidth>600){
          Setcc(2);
        }
        else{
          Setcc(1);
        }
      }
    return  <div className="container-flu pop">
    <div className="row">
        <div className="col-12">
            <ReactOwlCarousel items={cc}         autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
       nav
        loop className="owl-theme popular-products-slides owl-carousel" > 
            <div className="single-product-wrapper">
                    <div className="product-img">
                        <img src={require("../img/product-img/7630.jpg")} alt=""/>
                        <img className="hover-img" src={require("../img/product-img/NameeksNFA009-main.jpg")} alt=""/>

                        <div className="product-badge new-badge">
                            <span>New</span>
                        </div>

                        <div className="product-favourite">
                            <a href="#" className="favme fa fa-heart"></a>
                        </div>
                    </div>
                    <div className="product-description">
                        <span>POLISHED CHROME WALL MOUNTED</span>
                        <a href="single-product-details.html">
                            <h6>Towel Rack With 3 16 Inch Sliding Rails</h6>
                        </a>
                        <p className="product-price">$80.00</p>

                        <div className="hover-content">
                            <div className="add-to-cart-btn">
                                <a href="#" className="btn essence-btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-product-wrapper">
                    <div className="product-img">
                        <img src={require("../img/product-img/8031R60-11.jpg")} alt=""/>
                        <img className="hover-img" src={require("../img/product-img/8031R-60_2.jpg")} alt=""/>

                        <div className="product-badge new-badge">
                            <span>New</span>
                        </div>

                        <div className="product-favourite">
                            <a href="#" className="favme fa fa-heart"></a>
                        </div>
                    </div>
                    <div className="product-description">
                        <span>WALL MOUNTED</span>
                        <a href="single-product-details.html">
                            <h6>Rectangular, White Ceramic</h6>
                        </a>
                        <p className="product-price">$80.00</p>

                        <div className="hover-content">
                            <div className="add-to-cart-btn">
                                <a href="#" className="btn essence-btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-product-wrapper">
                    <div className="product-img">
                        <img src={require("../img/product-img/ANS31-LarchCanapa.jpg")} alt=""/>
                        <img className="hover-img" src={require("../img/product-img/ANS31-GlossyWhite.jpg")} alt=""/>

                        <div className="product-badge new-badge">
                            <span>New</span>
                        </div>

                        <div className="product-favourite">
                            <a href="#" className="favme fa fa-heart"></a>
                        </div>
                    </div>
                    <div className="product-description">
                        <span>Wall Mounted</span>
                        <a href="single-product-details.html">
                            <h6>Modern, 31", Glossy White</h6>
                        </a>
                        <p className="product-price">$80.00</p>

                        <div className="hover-content">
                            <div className="add-to-cart-btn">
                                <a href="#" className="btn essence-btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-product-wrapper">
                    <div className="product-img">
                        <img src={require("../img/product-img/ANS31-LarchCanapa.jpg")} alt=""/>
                        <img className="hover-img" src={require("../img/product-img/ANS31-GlossyWhite.jpg")} alt=""/>

                        <div className="product-badge new-badge">
                            <span>New</span>
                        </div>

                        <div className="product-favourite">
                            <a href="#" className="favme fa fa-heart"></a>
                        </div>
                    </div>
                    <div className="product-description">
                        <span>Wall Mounted</span>
                        <a href="single-product-details.html">
                            <h6>Modern, 31", Glossy White</h6>
                        </a>
                        <p className="product-price">$80.00</p>

                        <div className="hover-content">
                            <div className="add-to-cart-btn">
                                <a href="#" className="btn essence-btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-product-wrapper">
                    <div className="product-img">
                        <img src={require("../img/product-img/ANS31-LarchCanapa.jpg")} alt=""/>
                        <img className="hover-img" src={require("../img/product-img/ANS31-GlossyWhite.jpg")} alt=""/>

                        <div className="product-badge new-badge">
                            <span>New</span>
                        </div>

                        <div className="product-favourite">
                            <a href="#" className="favme fa fa-heart"></a>
                        </div>
                    </div>
                    <div className="product-description">
                        <span>Wall Mounted</span>
                        <a href="single-product-details.html">
                            <h6>Modern, 31", Glossy White</h6>
                        </a>
                        <p className="product-price">$80.00</p>

                        <div className="hover-content">
                            <div className="add-to-cart-btn">
                                <a href="#" className="btn essence-btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>

            </ReactOwlCarousel>

        </div>
    </div>
</div>
}
export default Popular;