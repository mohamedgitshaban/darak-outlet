import CategoryFilter from "../components/CategoryFilter";
import { For } from 'react-loops';
import { Link } from "react-router-dom";
import GetAccessories from "../apis/Accessoriesapi";
import { useState,useEffect } from "react";
import Preloader from "./Preloader";
function ACCESSORIES() {
    const filtterdata=[
        {
            name:"Installation",
            filter:[" Wall Mounted", "Floor Standing","Free Standing"]
        },
       
        {
            name:"Color",
            filter:["Chrome", "Gold", "Satin Nickel", "Matte Black", "White"]
        },
        
        {
            name:"Type",
            filter:["Towel Bars", "Toilet Paper Holders", "Soap Dispensers", "Toiler Brushes", "Hooks","Soap Dishes"]
        },
        
        {
            name:"Material",
            filter:["Brass", "Stainless Steel", "Thermoplastic Resins", "Metal", "Frosted Glass"]
        },
        
        {
            name:"Shape",
            filter:["Round", "Square", "Rectangle", "Corner","Triangle"]
        },
       
       
       
        {
            name:"Style",
            filter:["Modern", 'Contemporary', "Classic"]
        },
       
    ]
    const [data, setData] = useState(null);


    useEffect(()=>{
        GetAccessories().then((res)=>{
            setData(res.data);
            console.log(res);
        });
    },[])
    return<>
    {
        data?<>
        <div className="breadcumb_area bg-img breadcumb_area_img" >
     <div className="container h-100">
         <div className="row h-100 align-items-center">
             <div className="col-12">
                 <div className="page-title text-center">
                     <h2>ACCESSORIES</h2>
                 </div>
             </div>
         </div>
     </div>
 </div>
 <section className="shop_grid_area section-padding-80">
     <div className="container-flu">
         <div className="row">
             <div className="col-12 col-md-4 col-lg-3">
                 <div className="shop_sidebar_area">

                     <div className="widget catagory mb-50">
                         <h6 className="widget-title mb-30">Catagories</h6>

                         <div className="catagories-menu">
                             <ul id="menu-content2" className="menu-content collapse show">
                             <For of={filtterdata}>
                                         {item =>
                                <CategoryFilter name={item.name} data={item.filter}/>
                             }
                                     </For>
                             </ul>
                         </div>
                     </div>

                     <div className="widget price mb-50">
                         <h6 className="widget-title mb-30">Filter by</h6>
                         <p className="widget-title2 mb-30">Price</p>

                         <div className="widget-desc">
                             <div className="slider-range">
                                 <div data-min="49" data-max="360" data-unit="$" className="slider-range-price accessory-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="49" data-value-max="360" data-label-result="Range:">
                                     <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                                     <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                     <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                 </div>
                                 <div className="range-price">Range: $49.00 - $360.00</div>
                             </div>
                         </div>
                     </div>

                     <div className="widget color mb-50">
                         <p className="widget-title2 mb-30">Color</p>
                         <div className="widget-desc">
                             <ul className="d-flex">
                                 <li><a href="#" className="color1"></a></li>
                                 <li><a href="#" className="color2"></a></li>
                                 <li><a href="#" className="color3"></a></li>
                                 <li><a href="#" className="color4"></a></li>
                                 <li><a href="#" className="color5"></a></li>
                                 <li><a href="#" className="color6"></a></li>
                                 <li><a href="#" className="color7"></a></li>
                                 <li><a href="#" className="color8"></a></li>
                                 <li><a href="#" className="color9"></a></li>
                                 <li><a href="#" className="color10"></a></li>
                             </ul>
                         </div>
                     </div>

                   
                 </div>
             </div>

             <div className="col-12 col-md-8 col-lg-9">
                 <div className="shop_grid_product_area">
                     <div className="row">
                         <div className="col-12">
                             <div className="product-topbar d-flex align-items-center justify-content-between">
                                 <div className="total-products">
                                     <p><span>186</span> products found</p>
                                 </div>
                                 <div className="product-sorting d-flex">
                                     <p>Sort by:</p>
                                     <form action="#" method="get">
                                         <select name="select" id="sortByselect">
                                             <option value="value">Highest Rated</option>
                                             <option value="value">Newest</option>
                                             <option value="value">Price: $$ - $</option>
                                             <option value="value">Price: $ - $$</option>
                                         </select>
                                         <input type="submit" className="d-none" value=""/>
                                     </form>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div className="row">

                     <For of={data}>

{
item=>  <div class="col-12 col-sm-6 col-lg-4">
<div class="single-product-wrapper">
   <div class="product-img">
       <img src={require("../img/product-img/"+item.coverimg)} alt=""/>
       <img class="hover-img" src={require("../img/product-img/"+item.coverimg)} alt=""/>

       <div class="product-favourite">
           <a href="#" class="favme ti-heart"></a>
       </div>
   </div>

   <div class="product-description">
       <span>{item.install}</span>
       <Link to={"/ACCESSORIES/"+item.id}>
                                 <h6>{item.name}</h6>
                             </Link>
       <p class="product-price">{item.price}$</p>

       <div class="hover-content">
           <div class="add-to-cart-btn">
               <button class="btn essence-btn">Add to Cart</button>
           </div>
       </div>
   </div>
</div>
</div>
}
</For>

                     </div>
                 </div>
                 <nav aria-label="navigation">
                     <ul className="pagination mt-50 mb-70">
                         <li className="page-item"><a className="page-link" href="#"><i className="ti-angle-left"></i></a></li>
                         <li className="page-item"><a className="page-link" href="#">1</a></li>
                         <li className="page-item"><a className="page-link" href="#">2</a></li>
                         <li className="page-item"><a className="page-link" href="#">3</a></li>
                         <li className="page-item"><a className="page-link" href="#">...</a></li>
                         <li className="page-item"><a className="page-link" href="#">21</a></li>
                         <li className="page-item"><a className="page-link" href="#"><i className="ti-angle-right"></i></a></li>
                     </ul>
                 </nav>
             </div>
         </div>
     </div>
 </section>
 </>:<Preloader/>
    }
    </>
}
export default ACCESSORIES;