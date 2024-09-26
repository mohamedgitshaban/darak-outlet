import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import GetCart from '../apis/GetCart';
import Getprice from '../apis/GetPrice';
import { useState,useEffect } from "react";
import DeleteCart from "../apis/DeleteCart";
import Preloader from "../pages/Preloader";
import GetActive from "../apis/GetActive";

function Header() {
    const [authin,setauthen]=useState([]);
    const [price,setprice]=useState(0);
    const [active,setactive]=useState(0);
    const [inputValue, setInputValue] = useState('');

    useEffect(()=>{
        GetActive().then(Response=>{
            setactive(Response.data);

        })
    },[])
    
    const handleSubmit=(e)=>{
        e.preventDefault();
       console.log(inputValue);
       window.location.href="/"+inputValue;
    }
   const Cart=()=>{
    if(active.length==0){
      
    }
    else{
        const interval = setInterval(()=>{
            GetCart(active[0].userid).then((res)=>{
       
                setauthen(res.data);
           
        });
        Getprice(active[0].userid).then((res)=>{
        
        if(res.data[0]==null){
            setprice(0);
        }
        else{
            setprice(res.data[0].total);
        }
    
        
      })
        }, 2000);


    }
 

   }
    return  <>
   
               <header className="header_area">
            <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
                <nav className="classy-navbar" id="essenceNav">
                    <Link className="nav-brand" to="/"><img src={require("../img/final-08.png")}/></Link >
                    <div className="classy-navbar-toggler">
                        <span className="navbarToggler"><span></span><span></span><span></span></span>
                    </div>
                    <div className="classy-menu">
                        <div className="classycloseIcon">
                            <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                        </div>
                        <div className="classynav">
                            <ul>
                                <li><Link className="navlin" to="/sinks">SINKS</Link >
                                    <div className="megamenu">
                                        <ul className="single-mega cn-col-4">
                                            <li className="title">SINKS BY TYPE</li>
                                            <li><Link to="/sinks">Wall Mounted Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks">ADA Compliant Bathroom Sinks </Link ></li>
                                            <li><Link to="/sinks">Console Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks">Trough Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks">Undermount Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks">Small Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks">Vessel Sinks</Link ></li>
                                            <li><Link to="/sinks">Drop In Bathroom Sinks</Link ></li>
    
                                        </ul>
                                       
    
    
                                        <ul className="single-mega cn-col-4">
                                            <li><Link to="/sinks"> Pedestal Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks">Corner Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks">Double Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks"> <br/> </Link ></li>
    
                                            <li className="title">SINKS BY COLOR</li>
                                            <li><Link to="/sinks">White Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks">Black Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks">Beige Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks">Marble Design Bathroom Sinks</Link ></li>
                                        </ul>          
                                     <ul className="single-mega cn-col-4">
                                            <li className="title">SINKS BY STYLE</li>
                                            <li><Link to="/sinks">Modern Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks">Traditional Bathroom Sinks</Link ></li>
                                            <li className="title">SINKS BY SIZE</li>
                                            <li><Link to="/sinks">18 Inch Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks">24 Inch Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks">32 Inch Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks">40 Inch Bathroom Sinks</Link ></li>
                                            <li><Link to="/sinks">48 Inch Bathroom Sinks  </Link ></li>
                                        </ul>
                                        <div className="single-mega cn-col-4">
                                            <img src={require("../img/feature/sinks-UZF8Z.jpg")} alt=""/>
                                            <Link to="/sinks" style={{color:"black",fontSize:"14px"}}>New and trending bathroom sinks</Link >
                                        </div>
                                    </div>
                                </li>
                                <li><Link className="navlin" to="/VANITIES">VANITIES</Link >
                                <div className="megamenu">
                                        <ul className="single-mega cn-col-4">
                                            <li className="title">VANITIES BY TYPE</li>
                                            <li><Link to="/VANITIES">Wall Mounted Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES">Console Bathroom Vanities </Link ></li>
                                            <li><Link to="/VANITIES">Free Standing Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES">Single Sink Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES">Double Sink Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES">Small Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES">Bathroom Vanities With Tops</Link ></li>
                                            <li><Link to="/VANITIES">Bathroom Cabinets Without Tops</Link ></li>
                                            <li><Link to="/VANITIES">Floating Bathroom Vanities</Link ></li>
    
                                        </ul>
                                        <ul className="single-mega cn-col-4">
                                            <li className="title">VANITIES BY WIDTH</li>
                                            <li><Link to="/VANITIES">24 Inch Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES">32 Inch Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES">40 Inch Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES">48 Inch Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES"> <br/> </Link ></li>
                                            <li className="title">VANITIES BY  STYLE</li>
                                            <li><Link to="/VANITIES">Modern Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES">Traditional Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES">Transitional Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES">Marble Design Bathroom Vanities</Link ></li>
    
                                        </ul>
                                        <ul className="single-mega cn-col-4">
                                            <li className="title">VANITIES BY COLOR</li>
                                            <li><Link to="/VANITIES">White Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES">Gray Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES">Black Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES">Brown Bathroom Vanities</Link ></li>
                                            <li><Link to="/VANITIES"> <br/> </Link ></li>
                                            <li className="title">COMPLETE YOUR BATHROOM</li>
                                            <li><Link to="/VANITIES">Bathroom Sink Faucets</Link ></li>
                                            <li><Link to="/VANITIES">Bathroom Mirrors</Link ></li>
                                            <li><Link to="/VANITIES">Bathroom Accessories</Link ></li>
                                            <li><Link to="/VANITIES">Bathroom Sinks</Link ></li>
                                        </ul>
                                        <div className="single-mega cn-col-4">
                                            <img src={require("../img/feature/vanities-047U4.jpg")} alt=""/>
                                            <Link to="/VANITIES" style={{color:"black",fontSize:"14px"}}>New and trending bathroom vanities</Link >
                                        </div>
                                    </div>
                                </li>
                                <li><Link className="navlin"to="/Mirror">MIRROR</Link >
                                <div className="megamenu">
                                        <ul className="single-mega cn-col-3">
                                            <li className="title">MIRROR BY TYPE</li>
                                            <li><Link to="/Mirror">Makeup Mirrors</Link ></li>
                                            <li><Link to="/Mirror">Wall Mounted Makeup Mirrors</Link ></li>
                                            <li><Link to="/Mirror">Tabletop Makeup Mirrors</Link ></li>
                                            <li><Link to="/Mirror">Lighted Makeup Mirrors</Link ></li>
                                            <li><Link to="/Mirror">Hardwired Makeup Mirrors</Link ></li>
                                            <li><Link to="/Mirror">LED Makeup Mirrors</Link ></li>
                                            <li><Link to="/Mirror">Bathroom Vanity Mirrors</Link ></li>
                                            <li><Link to="/Mirror">Medicine Cabinets</Link ></li>
                                            
                                         
    
    
    
    
    
                                        </ul>
                                        <ul className="single-mega cn-col-3">
                                            <li className="title">MIRROR BY FINISH</li>
                                            <li><Link to="/Mirror">Black Makeup Mirrors</Link ></li>
                                            <li><Link to="/Mirror">Chrome Makeup Mirrors</Link ></li>
                                            <li><Link to="/Mirror">Satin Nickel Makeup Mirrors</Link ></li>
                                           
                                            <li><Link to="/Mirror"> <br/> </Link ></li>
                                            <li className="title">MIRROR BY  MAGNIFICATION</li>
                                            <li><Link to="/Mirror">3x Makeup Mirrors</Link ></li>
                                            <li><Link to="/Mirror">5x Makeup Mirrors</Link ></li>
                                            <li><Link to="/Mirror">7x Makeup Mirrors</Link ></li>
                                            <li><Link to="/Mirror">10x Makeup Mirrors</Link ></li>
                                        </ul>
                                        <div className="single-mega cn-col-3">
                                            <img src={require("../img/feature/mirrors-06P9L.jpg")} alt=""/>
                                            <Link to="/Mirror" style={{color:"black",fontSize:"14px"}}>New and trending bathroom vanities</Link >
                                        </div>
                                    </div>
                                </li>
                                <li><Link className="navlin"to="/ACCESSORIES">ACCESSORIES</Link >
                                <div className="megamenu">
                                        <ul className="single-mega cn-col-4">
                                            <li className="title">ACCESSORIES BY TYPE</li>
                                            <li><Link to="/ACCESSORIES">Towel Bars</Link ></li>
                                            <li><Link to="/ACCESSORIES">Towel Racks </Link ></li>
                                            <li><Link to="/ACCESSORIES">Toilet Paper Holders</Link ></li>
                                            <li><Link to="/ACCESSORIES">Bathroom Hooks</Link ></li>
                                            <li><Link to="/ACCESSORIES">Towel Stands</Link ></li>
                                            <li><Link to="/ACCESSORIES">Makeup Mirrors</Link ></li>
                                            <li><Link to="/ACCESSORIES">Soap Dispensers</Link ></li>
                                            <li><Link to="/ACCESSORIES">Soap Dishes</Link ></li>
                                            <li><Link to="/ACCESSORIES">Shower Baskets</Link ></li>
                                        </ul>
                                        <ul className="single-mega cn-col-4">
                                            <li><Link to="/ACCESSORIES">Toilet Brushes</Link ></li>
                                            <li><Link to="/ACCESSORIES">Bathroom Accessory Sets</Link ></li>
                                            <li><Link to="/ACCESSORIES">Towel Rings</Link ></li>
                                            <li><Link to="/ACCESSORIES">Tissue Box Covers</Link ></li>
                                            <li><Link to="/ACCESSORIES">Waste Baskets</Link ></li>
                                            <li><Link to="/ACCESSORIES">Bathroom Shelves</Link ></li>
                                            <li><Link to="/ACCESSORIES">Toothbrush Holders</Link ></li>
                                            <li><Link to="/ACCESSORIES">Bathroom Butlers</Link ></li>
                                            <li><Link to="/ACCESSORIES">Laundry Baskets</Link ></li>
                                            <li><Link to="/ACCESSORIES">Grab Bars</Link ></li>
                                        </ul>    
      
                                     <ul className="single-mega cn-col-4">
                                            <li className="title">ACCESSORIES BY COLOR</li>
                                            <li><Link to="/ACCESSORIES">Black Bathroom Accessories</Link ></li>
                                            <li><Link to="/ACCESSORIES">Chrome Bathroom Accessories</Link ></li>
                                            <li><Link to="/ACCESSORIES">Gold Bathroom Accessories</Link ></li>
                                            </ul>
                                        <div className="single-mega cn-col-4">
                                            <img src={require("../img/feature/accessories-77D41.jpg")} alt=""/>
                                            <Link to="/ACCESSORIES" style={{color:"black",fontSize:"14px"}}>New and trending accessories</Link >
                                        </div>
                                    </div>
                                </li>
                                <li><Link className="navlin"to="/FAUCETS">FAUCETS</Link >
                                <div className="megamenu">
                                        <ul className="single-mega cn-col-3">
                                            <li className="title">FAUCETS BY TYPE</li>
                                            <li><Link to="/FAUCETS">Bathroom Sink Faucets</Link ></li>
                                            <li><Link to="/FAUCETS">Vessel Sink Faucets</Link ></li>
                                            <li><Link to="/FAUCETS">Shower Faucets</Link ></li>
                                            <li><Link to="/FAUCETS">Bathtub Faucets</Link ></li>
                                            <li><Link to="/FAUCETS">Single Hole Bathroom Faucets</Link ></li>
                                        </ul>
                                        <ul className="single-mega cn-col-3">
                                            <li className="title">FAUCETS BY COLOR</li>
                                            <li><Link to="/FAUCETS">Chrome Bathroom Sink Faucets</Link ></li>
                                            <li><Link to="/FAUCETS">Black Bathroom Sink Faucets</Link ></li>
                                            <li><Link to="/FAUCETS">Brushed Nickel Bathroom Sink Faucets</Link ></li>
                                            <li><Link to="/FAUCETS"> <br/> </Link ></li>
                                            <li className="title">COMPLETE YOUR FAUCET</li>
                                            <li><Link to="/FAUCETS">Plumbing Parts</Link ></li>
                                            <li><Link to="/FAUCETS">P-Traps</Link ></li>
                                            <li><Link to="/FAUCETS">Drains</Link ></li>
                                        </ul>
                                        <div className="single-mega cn-col-3">
                                            <img src={require("../img/feature/faucets-T6ESW.jpg")} alt=""/>
                                            <Link to="/FAUCETS" style={{color:"black",fontSize:"14px"}}>New and trending bathroom vanities</Link >
                                        </div>
                                    </div>
                                </li>
    
                            </ul>
                        </div>
                    </div>
                </nav>
    
              {
                active.length==0? <div className="header-meta d-flex clearfix justify-content-end">
                <div className="search-area">
                    <form  onSubmit={handleSubmit}>
                        <input type="text" name="search" id="headerSearch"autoComplete="off" placeholder="Type for search"/>
                        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
              
                <div className="user-login-info">
                    <Link to="/login"><i className="ti-user" aria-hidden="true"></i></Link >
                </div>
                
            </div> :  <div className="header-meta d-flex clearfix justify-content-end">
                <div className="search-area">
                <form  onSubmit={handleSubmit}>
                        <input type="text" name="search" onChange={e=>{setInputValue(e.target.value)}} id="headerSearch"autoComplete="off" placeholder="Type for search"/>
                        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
                <Dropdown >
                <Dropdown.Toggle className="favourite-area " variant="" id="dropdown-basic">
<i className="ti-heart" aria-hidden="true"></i></Dropdown.Toggle>
<Dropdown.Menu>
    <Dropdown.Item href="#">
        
    </Dropdown.Item>
    <Dropdown.Item href="#">Another action</Dropdown.Item>
    <Dropdown.Item href="#">Something else</Dropdown.Item>
  </Dropdown.Menu>
                </Dropdown>
                <div className="user-login-info">
                    <Link to="/profile"><i className="ti-user" aria-hidden="true"></i></Link >
                </div>
                <div className="cart-area">
                    <Link to="#" onClick={Cart} id="essenceCartBtn"><i className="ti-bag" aria-hidden="true"></i> <span>{authin.length}</span></Link >
                </div>
            </div>

              }
            </div>
        </header>
        <div className="cart-bg-overlay"></div>
    
    <div className="right-side-cart-area">
    
        <div className="cart-button">
            <Link to="#" id="rightSideCart"><i className="ti-bag" aria-hidden="true"></i> <span>{authin.length}</span></Link >
        </div>
    
        <div className="cart-content d-flex">
        { authin?
            <div className="cart-list">
                {
                    authin.map((item)=>{

                        return <div className="single-cart-item">
                        <Link to="#" className="product-image">
                            <button className="deletecart" onClick={()=>{
                                DeleteCart(item.id).then(()=>{
                                    alert("item deleted");
                                })
                            }}>x</button>
                            <img src={require("../img/product-img/"+item.coverimg)} className="cart-thumb" alt=""/>
                            <div className="cart-item-desc">
                              <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
                                <span className="badge">{item.install}</span>
                                <h6>{item.name}</h6>
                                <p className="color">{item.quantity} item</p>
                                <p className="price">price ${item.price}</p>
                            </div>
                        </Link >
                    </div>
                    })
                }
               
             
            </div>:null
}
            <div className="cart-amount-summary">
    
                <h2>Summary</h2>
                <ul className="summary-table">
                    <li><span>subtotal:</span> <span>${price}.00</span></li>
                    <li><span>delivery:</span> <span>Free</span></li>
                    <li><span>discount:</span> <span>0%</span></li>
                    <li><span>total:</span> <span>${price}.00</span></li>
                </ul>
                <div className="checkout-btn mt-100">
                    <a href="/checkout" id="checkout" className="btn essence-btn">check out</a >
                </div>
            </div>
        </div>
    </div>
       
    </>
}
export default Header;