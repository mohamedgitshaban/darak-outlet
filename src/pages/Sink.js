import CategoryFilter from "../components/CategoryFilter";
import { Link } from "react-router-dom";

import { For } from 'react-loops'
import { useEffect,useState } from "react";
import GetSinks from "../apis/Sinkapi";

function Sink() {
    const [data, setData] = useState(null);


    useEffect(()=>{
        GetSinks().then((res)=>{
            setData(res.data);
        });
    },[])
    const filtterdata=[
        {
            name:"Installation",
            filter:["Console"," Wall Mounted", "Vessel",  "Drop in"]
        },
        {
            name:"Overall Length",
            filter:["32I", "24I", "35I", "48I", "40I"]
        },
        {
            name:"Overall Width",
            filter:["17I", "18I", "19I"]
        },
        {
            name:"Overall Height",
            filter:["6I", "7I", "8I", "36I"]
        },
        {
            name:"Type",
            filter:["Console", "Double", "ADA Compliant", "Trough"]
        },
        {
            name:"Features",
            filter:["Overflow", "Counter Space", "Towel Bar"]
        },
        {
            name:"Size",
            filter:["Small"," Large", "Wide",  "Oversized",  "Narrow"]
        },
        {
            name:"Faucet Holes",
            filter:["0 hole","1 hole","2 hole","3 hole","6 hole",]
        },
        {
            name:"Shape",
            filter:["Rectangular", "Rectangle", "Square", "Round", "Oval"]
        },
        {
            name:"Style",
            filter:["Modern", "Contemporary", "Traditional","Classic"]
        },
        {
            name:"Basin Depth",
            filter:["2I", "3I", "4I","5I","6I"]
        },
        {
            name:"Basin Width",
            filter:["13I", "12I", "11I","14I","15I"]
        },
        {
            name:"Basin Length",
            filter:["16I","20I","13I","19I","24I"]
        },
        {
            name:"Color",
            filter:["White","Matte Black","Beige Travertine","Marble","Natural Brown Oak"]
        },
        {
            name:"Material",
            filter:["Ceramic"]
        },
        {
            name:"Certifications",
            filter:["IAMPO","UPC", "cUPC"]
        },
    ]
    return<>
           <div class="breadcumb_area bg-img breadcumb_area_img" >
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="page-title text-center">
                        <h2>Sink</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="shop_grid_area section-padding-80">
        <div class="container-flu">
            <div class="row">
                <div class="col-12 col-md-4 col-lg-3">
                    <div class="shop_sidebar_area">

                        <div class="widget catagory mb-50">
                            <h6 class="widget-title mb-30">Catagories</h6>

                            <div class="catagories-menu">
                                <ul id="menu-content2" class="menu-content collapse show">
                                   <For of={filtterdata}>
                                            {item =>
                                   <CategoryFilter name={item.name} data={item.filter}/>
                                }
                                        </For>
                                </ul>
                            </div>
                        </div>

                        <div class="widget price mb-50">
                            <h6 class="widget-title mb-30">Filter by</h6>
                            <p class="widget-title2 mb-30">Price</p>

                            <div class="widget-desc">
                                <div class="slider-range">
                                    <div data-min="49" data-max="360" data-unit="$" class="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="49" data-value-max="360" data-label-result="Range:">
                                        <div class="ui-slider-range ui-widget-header ui-corner-all"></div>
                                        <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                        <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                    </div>
                                    <div class="range-price">Range: $49.00 - $360.00</div>
                                </div>
                            </div>
                        </div>

                        <div class="widget color mb-50">
                            <p class="widget-title2 mb-30">Color</p>
                            <div class="widget-desc">
                                <ul class="d-flex">
                                    <li><a href="#" class="color1"></a></li>
                                    <li><a href="#" class="color2"></a></li>
                                    <li><a href="#" class="color3"></a></li>
                                    <li><a href="#" class="color4"></a></li>
                                    <li><a href="#" class="color5"></a></li>
                                    <li><a href="#" class="color6"></a></li>
                                    <li><a href="#" class="color7"></a></li>
                                    <li><a href="#" class="color8"></a></li>
                                    <li><a href="#" class="color9"></a></li>
                                    <li><a href="#" class="color10"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-8 col-lg-9">
                    <div class="shop_grid_product_area">
                        <div class="row">
                            <div class="col-12">
                                <div class="product-topbar d-flex align-items-center justify-content-between">
                                    <div class="total-products">
                                        <p><span>186</span> products found</p>
                                    </div>
                                    <div class="product-sorting d-flex">
                                        <p>Sort by:</p>
                                        <form action="#" method="get">
                                            <select name="select" id="sortByselect">
                                                <option value="value">Highest Rated</option>
                                                <option value="value">Newest</option>
                                                <option value="value">Price: $$ - $</option>
                                                <option value="value">Price: $ - $$</option>
                                            </select>
                                            <input type="submit" class="d-none" value=""/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                        <For of={data}>

                      {
                        item=>  <div class="col-12 col-sm-6 col-lg-4">
                        <div class="single-product-wrapper">
                            <div class="product-img">
                                <img src={require("../img/product-img/"+item.coverimg)} alt=""/>
                                <div class="product-favourite">
                                    <a href="#" class="favme ti-heart"></a>
                                </div>
                            </div>

                            <div class="product-description">
                                <span>{item.install}</span>
                                <Link to={"/sinks/"+item.id}>
                                    <h6>{item.name}</h6>
                                </Link>
                                <p class="product-price">{item.price} $</p>

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
                        <ul class="pagination mt-50 mb-70">
                            <li class="page-item"><a class="page-link" href="#"><i class="ti-angle-left"></i></a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">...</a></li>
                            <li class="page-item"><a class="page-link" href="#">21</a></li>
                            <li class="page-item"><a class="page-link" href="#"><i class="ti-angle-right"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    </>
}
export default Sink;