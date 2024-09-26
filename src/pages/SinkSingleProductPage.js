
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { For } from 'react-loops';
import ReactOwlCarousel from 'react-owl-carousel';
import { useParams } from 'react-router';
import GetSink from '../apis/GetSingleSink';
import GetSingleSink from '../apis/GetSingleSink';
import Addtocart from '../apis/Addtocart';

function SinkSingleProductPage() {

    const [openpaypal, setOpenpaypal] = useState(true);
    const [opencash, setOpencash] = useState(true);
    const [openFeatures, setOpenFeatures] = useState(true);
    const [openInformation, setOpenInformation] = useState(true);
    const [openAvailability , setOpenAvailability ] = useState(true);
    const [data , Setdata ] = useState(null);
    const param=useParams().id;
     useEffect(()=>{
        GetSingleSink(param).then((res)=>{
        Setdata(res.data[0]);
        })
     },[])
     const [formData , SetFormData]=useState({
        userid :1,
        producttype :4,
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
    <p className="product-price"><span className="old-price">$500.00</span>${data.price}</p>
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
                   
                      {/* <For of={data.gallary}>
                        {
                            item=>  <div className="single-product-wrapper">
                            <div className="product-img">
                                <img src={require("../img/product/sinks/"+item)} alt=""/>
                               
                            </div>
                           
                        </div>
                      
                        }
                      </For> */}
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
                                    
	<div class="cereal-book" >Description</div>
	<div class="vpadbottom20">A timeless, classic style makes this wall mounted or self rimming bathroom sink the perfect addition to any traditionally styled bathroom. With over 31.6" of length and a unique curved rectangular design, this sink gives a unique feel to any bathroom. With space for a single faucet hole, included overflow, and ample counter space, this sink makes any bathroom better.</div>
	
	<div class="cereal-book" >Product Details</div>
	<ul >
	
	
	<li >ADA Compliant</li>
	
	
	<li >Curved rectangular white ceramic sink</li>
	
	
	<li >Wall mounted or self-rimming bathroom sink</li>
	
	
	<li >Single faucet hole</li>
	
	
	<li >With overflow</li>
	
	
	<li >Standard drain size</li>
	
	
	<li >Made and designed by well known brand CeraStyle</li>
	
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
	<td class="productMoreInfoLeft cereal-book">Overall Width:</td>
	<td class="productMoreInfoRight">
	
	
	
	
	<div class="lidescription">{data.OverallWidth}</div>
	</td>
	</tr>

<tr>
	<td class="productMoreInfoLeft cereal-book">Overall length:</td>
	<td class="productMoreInfoRight">
	
		
	
	
	<div class="lidescription">{data.OverallLength}</div>
	</td>
	</tr>

<tr>
	<td class="productMoreInfoLeft cereal-book">Overall Height:</td>
	<td class="productMoreInfoRight">
	<div class="lidescription">{data.OverallHeight}</div>
	</td>
	</tr>

<tr>
	<td class="productMoreInfoLeft cereal-book">Weight:</td>
	<td class="productMoreInfoRight">
	
	
	<div class="lidescription">2.33 Lbs</div>
	</td>
	</tr>



	
</tbody></table>                                    </div>
                                </Collapse>
                            </div>
                            <div className="card">

                        <div className="card-header" role="tab" id="headingOne">
                                <h6 onClick={() => setOpenFeatures(!openFeatures)}
                                        aria-controls="paypal"
                                        aria-expanded={openFeatures} className="mb-0">
                                    Features
                                </h6>
                            </div>

                            <Collapse in={openFeatures}>
                                <div className="card-body">
                                <table >

                                <tbody><tr>

		
<td class="productMoreInfoLeft cereal-book">Material:</td>
<td class="productMoreInfoRight">



<div class="lidescription">Ceramic </div>

</td>
</tr>











<tr>


<td class="productMoreInfoLeft cereal-book">Color:</td>
<td class="productMoreInfoRight">



<div class="lidescription">White </div>

</td>
</tr>











<tr>


<td class="productMoreInfoLeft cereal-book">Style:</td>
<td class="productMoreInfoRight">



<div class="lidescription">Classic, Traditional </div>

</td>
</tr>











<tr>


<td class="productMoreInfoLeft cereal-book">Installation:</td>
<td class="productMoreInfoRight">

    <div class="infomarkButton floatleft"><img class=" ls-is-cached lazyloaded" data-src="/static/media/assets/2021-11-23/greyInfoIcon.svg" width="17" height="17" alt="info icon" src="/static/media/assets/2021-11-23/greyInfoIcon.svg"/></div>
    <div class="infomarkWrapper displaynone" >
        <div class="info_box">
        <div class="tboArrow"></div>
        <div class="cereal-book font-black font-35 hpadleft20 vpad20">Installation</div>
        <div class="infomark_close_link"><a href="#" class="infomark_close">x</a></div>
        <div class="info_img hpad20 vpad10"><img data-pin-no-hover="true" class="info_img lazyload" data-src="/static/media/assets/2018-09-06/sink-installation-F7703.jpg" width="100%" alt="Installation"/></div>
        </div>
    </div>



<div class="lidescription">Wall Mounted, Drop In </div>

</td>
</tr>

<tr>


<td class="productMoreInfoLeft cereal-book">Features:</td>
<td class="productMoreInfoRight">

    <div class="infomarkButton floatleft"><img class=" ls-is-cached lazyloaded" data-src="/static/media/assets/2021-11-23/greyInfoIcon.svg" width="17" height="17" alt="info icon" src="/static/media/assets/2021-11-23/greyInfoIcon.svg"/></div>
    <div class="infomarkWrapper displaynone" >
        <div class="info_box">
        <div class="tboArrow"></div>
        <div class="cereal-book font-black font-35 hpadleft20 vpad20">Features</div>
        <div class="infomark_close_link"><a href="#" class="infomark_close">x</a></div>
        <div class="info_img hpad20 vpad10"><img data-pin-no-hover="true" class="info_img lazyload" data-src="/static/media/assets/2018-09-06/sink-features-X6MF4.jpg" width="100%" alt="Features"/></div>
        </div>
    </div>



<div class="lidescription">Has Overflow, With Counter Space </div>

</td>
</tr>

<tr>


<td class="productMoreInfoLeft cereal-book">Faucet Holes:</td>
<td class="productMoreInfoRight">

    <div class="infomarkButton floatleft"><img class=" ls-is-cached lazyloaded" data-src="/static/media/assets/2021-11-23/greyInfoIcon.svg" width="17" height="17" alt="info icon" src="/static/media/assets/2021-11-23/greyInfoIcon.svg"/></div>
    <div class="infomarkWrapper displaynone">
        <div class="info_box">
        <div class="tboArrow"></div>
        <div class="cereal-book font-black font-35 hpadleft20 vpad20">Faucet Holes</div>
        <div class="infomark_close_link"><a href="#" class="infomark_close">x</a></div>
        <div class="info_img hpad20 vpad10"><img data-pin-no-hover="true" class="info_img lazyload" data-src="/static/media/assets/2018-09-07/sink-holes-NAS78.jpg" width="100%" alt="Faucet Holes"/></div>
        </div>
    </div>



<div class="lidescription">One Hole, Three Hole </div>

</td>
</tr>

<tr>


<td class="productMoreInfoLeft cereal-book">Shape:</td>
<td class="productMoreInfoRight">

    <div class="infomarkButton floatleft"><img class=" ls-is-cached lazyloaded" data-src="/static/media/assets/2021-11-23/greyInfoIcon.svg" width="17" height="17" alt="info icon" src="/static/media/assets/2021-11-23/greyInfoIcon.svg"/></div>
    <div class="infomarkWrapper displaynone">
        <div class="info_box">
        <div class="tboArrow"></div>
        <div class="cereal-book font-black font-35 hpadleft20 vpad20">Shape</div>
        <div class="infomark_close_link"><a href="#" class="infomark_close">x</a></div>
        <div class="info_img hpad20 vpad10"><img data-pin-no-hover="true" class="info_img lazyload" data-src="/static/media/assets/2018-09-06/sink-shape-1L086.jpg" width="100%" alt="Shape"/></div>
        </div>
    </div>



<div class="lidescription">Rectangular </div>

</td>
</tr>

<tr>


<td class="productMoreInfoLeft cereal-book">Type:</td>
<td class="productMoreInfoRight">

    <div class="infomarkButton floatleft"><img class=" ls-is-cached lazyloaded" data-src="/static/media/assets/2021-11-23/greyInfoIcon.svg" width="17" height="17" alt="info icon" src="/static/media/assets/2021-11-23/greyInfoIcon.svg"/></div>
    <div class="infomarkWrapper displaynone" >
        <div class="info_box">
        <div class="tboArrow"></div>
        <div class="cereal-book font-black font-35 hpadleft20 vpad20">Type</div>
        <div class="infomark_close_link"><a href="#" class="infomark_close">x</a></div>
        <div class="info_img hpad20 vpad10"><img data-pin-no-hover="true" class="info_img lazyload" data-src="/static/media/assets/2018-09-06/sink-type-6T881.jpg" width="100%" alt="Type"/></div>
        </div>
    </div>



<div class="lidescription">ADA Compliant </div>

</td>
</tr>


<tr>


<td class="productMoreInfoLeft cereal-book">Drain Hole Size:</td>
<td class="productMoreInfoRight">



<div class="lidescription">Standard,  1.75 Inch </div>

</td>
</tr>











<tr>


<td class="productMoreInfoLeft cereal-book">Faucet Hole Size:</td>
<td class="productMoreInfoRight">



<div class="lidescription">Standard,  1.38 Inch </div>

</td>
</tr>











<tr>


<td class="productMoreInfoLeft cereal-book">Compatible Drain SKU:</td>
<td class="productMoreInfoRight">



<div class="lidescription">S2077 </div>

</td>
</tr>











<tr>


<td class="productMoreInfoLeft cereal-book">Compatible P-Trap SKU:</td>
<td class="productMoreInfoRight">



<div class="lidescription">HT32 </div>

</td>
</tr>

<tr>


<td class="productMoreInfoLeft cereal-book">Mounting Hardware Included:</td>
<td class="productMoreInfoRight">



<div class="lidescription">Yes </div>

</td>
</tr>











<tr>


<td class="productMoreInfoLeft cereal-book">Faucet Included:</td>
<td class="productMoreInfoRight">



<div class="lidescription">No </div>

</td>
</tr>











<tr>


<td class="productMoreInfoLeft cereal-book">Angle Valves Included:</td>
<td class="productMoreInfoRight">



<div class="lidescription">No </div>

</td>
</tr>











<tr>


<td class="productMoreInfoLeft cereal-book">P-trap Included:</td>
<td class="productMoreInfoRight">



<div class="lidescription">No </div>

</td>
</tr>











<tr>


<td class="productMoreInfoLeft cereal-book">Pop-up Drain Included:</td>
<td class="productMoreInfoRight">



<div class="lidescription">No </div>

</td>
</tr>





















<tr>


<td class="productMoreInfoLeft cereal-book">Overflow Hole:</td>
<td class="productMoreInfoRight">



<div class="lidescription">Yes </div>

</td>
</tr>











<tr>


<td class="productMoreInfoLeft cereal-book">Back Side Glazed:</td>
<td class="productMoreInfoRight">



<div class="lidescription">No </div>

</td>
</tr>
















<tr>


<td class="productMoreInfoLeft cereal-book">ADA Compliant:</td>
<td class="productMoreInfoRight">



<div class="lidescription">Yes </div>

</td>
</tr>








</tbody></table>                                    </div>
                            </Collapse>
                        </div>
                        <div className="card">

<div className="card-header" role="tab" id="headingOne">
        <h6 onClick={() => setOpenInformation(!openInformation)}
                aria-controls="paypal"
                aria-expanded={openInformation} className="mb-0">
            More Information

        </h6>
    </div>

    <Collapse in={openInformation}>
        <div className="card-body">
        <table >
        <tbody><tr>
		<td class="productMoreInfoLeft cereal-book">Short Description:</td>
		<td class="productMoreInfoRight"><div class="lidescription">Classic-style 31.6 inch wall mounted or self-rimming bathroom sink with one hole or three hole with overflow. This beautiful sink is made out of high quality ceramic, and designed by high-end, and well known Turkish brand CeraStyle.</div></td>
	</tr>


							
<tr>
		<td class="productMoreInfoLeft cereal-book">Product Name:</td>
		<td class="productMoreInfoRight"><div class="lidescription">Rectangular White Ceramic Wall Mounted or Drop In Bathroom Sink</div></td>
</tr>

<tr>
		<td class="productMoreInfoLeft cereal-book">SKU:</td>
		<td class="productMoreInfoRight"><div class="lidescription">CeraStyle 081200-U</div></td>
</tr>





	<tr>
		<td class="productMoreInfoLeft cereal-book">Type:</td>
		<td class="productMoreInfoRight"><div class="lidescription"><a href="/Bathroom-Sinks/">Bathroom Sinks</a></div></td>
	</tr>





	

	<tr>
		<td class="productMoreInfoLeft cereal-book">Collection Name:</td>
		<td class="productMoreInfoRight"><div class="lidescription">
	
	
	
	
		<a href="/CeraStyle-Yeni-Klasik-By-Nameeks/">Yeni Klasik</a>
		</div>
</td>
</tr>



	

	<tr>
		<td class="productMoreInfoLeft cereal-book">Brand Name:</td>
	<td class="productMoreInfoRight"><div class="lidescription">
	
		CeraStyle by Nameeks
		
		</div>
	</td>
	</tr>




<tr>
		<td class="productMoreInfoLeft cereal-book">Country of Origin:</td>
		<td class="productMoreInfoRight"><div class="lidescription">Turkey</div></td>
		</tr>




<tr>
		<td class="productMoreInfoLeft cereal-book">Categories:</td>
<td class="productMoreInfoRight"><div class="lidescription">

		
		<a href="/Bathroom-Fixtures/c5">Bathroom Fixtures</a> › 

		<a href="/Bathroom-Sinks/c36">Bathroom Sinks</a> › 

		<a href="/Wall-Mounted-Bathroom-Sinks/">
		Wall Mounted Bathroom Sinks</a>
	
	
	</div>
</td>
</tr>

	<tr>
		<td class="productMoreInfoLeft cereal-book">California Prop 65:</td>
	<td class="productMoreInfoRight"><div class="lidescription">
		<span class="tooltip-bottom" data-tooltip="This product may contain chemicals known to the State of California to cause cancer and birth defects or other reproductive harm. For more information, go to www.p65warnings.ca.gov">Yes</span>
	</div></td>
	</tr>

</tbody>
       </table>                                    
       </div>
    </Collapse>
</div>
<div className="card">

<div className="card-header" role="tab" id="headingOne">
        <h6 onClick={() => setOpenAvailability (!openAvailability )}
                aria-controls="paypal"
                aria-expanded={openAvailability } className="mb-0">
            Availability & Shipping
 
        </h6>
    </div>

    <Collapse in={openAvailability }>
        <div className="card-body">
        <table >

        <tbody><tr>
	<td class="productMoreInfoLeft cereal-book">Availability:</td>
	<td class="productMoreInfoRight"><div class="lidescription">In Stock.</div></td>
	</tr>





	<tr>
	<td class="productMoreInfoLeft cereal-book">Shipping Method:</td>
	<td class="productMoreInfoRight"><div class="lidescription">Ships with FedEx.</div></td>



</tr></tbody></table>                                    </div>
    </Collapse>
</div>
                        </div>
    </section></>:null}
    </>
}
export default SinkSingleProductPage;