
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useParams } from 'react-router';
import { useState,useEffect, useContext } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import ReactOwlCarousel from 'react-owl-carousel';
import Getsingleaccessory from '../apis/GetsingleAccessory';
import { data } from 'yup';
import Addtocart from '../apis/Addtocart';
function AccessoriesSingleProductPage() {
    const [openpaypal, setOpenpaypal] = useState(true);
    const [opencash, setOpencash] = useState(true);
    const [data , Setdata ] = useState(null);
    const param=useParams().id;
    
     useEffect(()=>{
        Getsingleaccessory(param).then((res)=>{
        Setdata(res.data[0]);
        })
     },[])
     const [formData , SetFormData]=useState({
        userid :1,
        producttype :1,
        Productid : parseInt(param),
        quantity :0,
       
    });
    const handleChange = (e) => {
            SetFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
      
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          Addtocart(formData).then((response)=>{
             alert("item add to cart"); // Handle the response as needed
            // Reset the form
          });
          
        } catch (error) {
          console.log(error.response.data); // Handle the error response
        }
      };
    return<>
{data?<>        <section className="single_product_details_area d-flex align-items-center">

<div className="single_product_thumb clearfix">
<ReactOwlCarousel items={1}   className="product_thumbnail_slides owl-carousel">
        <img src={require("../img/product-img/"+data.coverimg)} alt=""/>
        <img src={require("../img/product-img/"+data.coverimg)} alt=""/>
        <img src={require("../img/product-img/"+data.coverimg)} alt=""/>
    </ReactOwlCarousel>
</div>

<div className="single_product_desc clearfix">
    <span>{data.install}</span>
    <a href="cart.html">
        <h2>{data.name}</h2>
    </a>
    <p className="product-price"><span className="old-price">$150.00</span>${data.price}</p>
    <p className="product-desc">{data.description}</p>

    <form className="cart-form clearfix" onSubmit={handleSubmit}>
        <div className="select-box d-flex mt-50 mb-30">
            <select name="quantity" id="productSize" className="mr-5" value={formData.quantity}
        onChange={handleChange}>
                <option value="value">Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
         
        </div>
        <div className="cart-fav-box d-flex align-items-center">
            <button type="submit" name="addtocart" value="5" className="btn essence-btn">Add to cart</button>
            <div className="product-favourite ml-4">
                <a href="#" className="favme fa fa-heart"></a>
            </div>
        </div>
    </form>
</div>

</section>
<section className="new_arrivals_area section-padding-80 clearfix">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                        <h2>real Product image</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ReactOwlCarousel items={4}  
          className="owl-theme popular-products-slides owl-carousel" loop nav > 
                   
                        <div className="single-product-wrapper">
                            <div className="product-img">
                                <img src={require("../img/product-img/NameeksNFA009-main.jpg")} alt=""/>
                            </div>
                           
                        </div>
                        <div className="single-product-wrapper">
                            <div className="product-img">
                                <img src={require("../img/product-img/7630.jpg")} alt=""/>
                            </div>
                           
                        </div>
                        <div className="single-product-wrapper">
                            <div className="product-img">
                                <img src={require("../img/product-img/NameeksNFA009-main.jpg")} alt=""/>
                            </div>
                           
                        </div>
                        <div className="single-product-wrapper">
                            <div className="product-img">
                                <img src={require("../img/product-img/7630.jpg")} alt=""/>
                            </div>
                           
                        </div>
                        <div className="single-product-wrapper">
                            <div className="product-img">
                                <img src={require("../img/product-img/NameeksNFA009-main.jpg")} alt=""/>
                            </div>
                           
                        </div>
                    </ReactOwlCarousel>

                </div>
            </div>
        </div>
        <div id="accordion" role="tablist" className="mb-4">
                            <div className="card">
                                <div className="card-header" role="tab" id="headingOne">
                                    <h6 onClick={() => setOpenpaypal(!openpaypal)}
                                            aria-controls="paypal"
                                            aria-expanded={openpaypal} className="mb-0">
                                       Product Details
                                    </h6>
                                </div>

                                <Collapse in={openpaypal}>
                                    <div className="card-body">
                                    <ul >
                                            
                                            <li  >Wall mounted towel rack</li>
                                            
                                            
                                            <li  >Three adjustable towel bars</li>
                                            
                                            
                                            <li  >Made out of brass and metal</li>
                                            
                                            
                                            <li  >Polished chrome finish</li>
                                            
                                            
                                            <li  >3 16" polished chrome sliding towel rails</li>
                                            
                                            
                                            <li  >From the Gedy Bridge Collection</li>
                                            
                                            </ul>
                                    </div>
                                </Collapse>
                            </div>
                            <div className="card">

                            <div className="card-header" role="tab" id="headingOne">
                                    <h6 onClick={() => setOpencash(!opencash)}
                                            aria-controls="paypal"
                                            aria-expanded={opencash} className="mb-0">
                                        Technical Specifications
                                    </h6>
                                </div>

                                <Collapse in={opencash}>
                                    <div className="card-body">
                                    <table >

<tbody>
    <tr>
	<td class="productMoreInfoLeft cereal-book">Download:</td>
	<td class="productMoreInfoRight">
	<div class="lidescription">
		<a href="/static/media2/specs/specs_square/7630-13.jpg" target="_blank" rel="nofollow">Technical Specifications Picture</a>
	</div>
	</td>
</tr>
	


<tr>
	<td class="productMoreInfoLeft cereal-book">PDF:</td>
	<td class="productMoreInfoRight"><div class="lidescription">
		<a href="/static/media2/specs/specs_square/ISTRMON_BRIDGE.pdf" target="_new" rel="nofollow">Download PDF</a>
	</div>
	</td>
</tr>

<tr>
	<td class="productMoreInfoLeft cereal-book">Type:</td>
	<td class="productMoreInfoRight">
	
	
	
	
	<div class="lidescription">{data.Type}</div>
	</td>
	</tr>

<tr>
	<td class="productMoreInfoLeft cereal-book">Color:</td>
	<td class="productMoreInfoRight">
	
		
	
	
	<div class="lidescription">{data.Color}</div>
	</td>
	</tr>

<tr>
	<td class="productMoreInfoLeft cereal-book">Style:</td>
	<td class="productMoreInfoRight">
	<div class="lidescription">{data.Style}</div>
	</td>
	</tr>

<tr>
	<td class="productMoreInfoLeft cereal-book">Material:</td>
	<td class="productMoreInfoRight">
	
	
	<div class="lidescription">{data.Material}</div>
	</td>
	</tr>



	
</tbody></table>                                    </div>
                                </Collapse>
                            </div>
                          
                        </div>
    </section></>:null}
    </>
}
export default AccessoriesSingleProductPage;