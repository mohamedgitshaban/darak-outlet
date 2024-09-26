import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import NiceSelect from '../components/NiceSelect/NiceSelect';
function CheckOutPage() {
    const [openpaypal, setOpenpaypal] = useState(false);
    const [opencash, setOpencash] = useState(false);
    const [opencard, setOpencard] = useState(false);
    const [openbank, setOpenbank] = useState(false);

    return<>
        <div className="breadcumb_area breadcumb_area_img bg-img" >
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <div className="page-title text-center">
                        <h2>Checkout</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="checkout_area section-padding-80">
        <div className="container">
            <div className="row">

                <div className="col-12 col-md-6">
                    <div className="checkout_details_area mt-50 clearfix">

                        <div className="cart-page-heading mb-30">
                            <h5>Billing Address</h5>
                        </div>

                        <form action="#" method="post">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="first_name">First Name <span>*</span></label>
                                    <input type="text" className="form-control" id="first_name" value="" required/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="last_name">Last Name <span>*</span></label>
                                    <input type="text" className="form-control" id="last_name" value="" required/>
                                </div>
                                <div className="col-12 mb-3">
                                    <label for="company">Company Name</label>
                                    <input type="text" className="form-control" id="company" value=""/>
                                </div>
                                <div className="col-12 mb-3">
                                    <label for="country">Country <span>*</span></label>
                                    <select id="demo" name="demo w-100">
                                    <option value="Select...">Select...</option>
                                    <option value="Html5">egypt</option>
                                    <option value="CSS3">canada</option>
                                    <option value="Javascript">ksa</option>
                                    <option value="Ruby">dubai</option>
                                    <option value="Python">chiness</option>
                                    <option value="C++">ur</option>
                                    </select>

                                </div>
                                <div className="col-12 mb-3">
                                    <label for="street_address">Address <span>*</span></label>
                                    <input type="text" className="form-control mb-3" id="street_address" value=""/>
                                    <input type="text" className="form-control" id="street_address2" value=""/>
                                </div>
                                <div className="col-12 mb-3">
                                    <label for="postcode">Postcode <span>*</span></label>
                                    <input type="text" className="form-control" id="postcode" value=""/>
                                </div>
                                <div className="col-12 mb-3">
                                    <label for="city">Town/City <span>*</span></label>
                                    <input type="text" className="form-control" id="city" value=""/>
                                </div>
                                <div className="col-12 mb-3">
                                    <label for="state">Province <span>*</span></label>
                                    <input type="text" className="form-control" id="state" value=""/>
                                </div>
                                <div className="col-12 mb-3">
                                    <label for="phone_number">Phone No <span>*</span></label>
                                    <input type="number" className="form-control" id="phone_number" min="0" value=""/>
                                </div>
                                <div className="col-12 mb-4">
                                    <label for="email_address">Email Address <span>*</span></label>
                                    <input type="email" className="form-control" id="email_address" value=""/>
                                </div>

                                <div className="col-12">
                                    <div className="custom-control custom-checkbox d-block mb-2">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                        <label className="custom-control-label" for="customCheck1">Terms and conitions</label>
                                    </div>
                                    <div className="custom-control custom-checkbox d-block mb-2">
                                        <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                        <label className="custom-control-label" for="customCheck2">Create an accout</label>
                                    </div>
                                    <div className="custom-control custom-checkbox d-block">
                                        <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                        <label className="custom-control-label" for="customCheck3">Subscribe to our newsletter</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-5 ml-lg-auto">
                    <div className="order-details-confirmation">

                        <div className="cart-page-heading">
                            <h5>Your Order</h5>
                            <p>The Details</p>
                        </div>

                        <ul className="order-details-form mb-4">
                            <li><span>Product</span> <span>Total</span></li>
                            <li><span>Cocktail Yellow dress</span> <span>$59.90</span></li>
                            <li><span>Subtotal</span> <span>$59.90</span></li>
                            <li><span>Shipping</span> <span>Free</span></li>
                            <li><span>Total</span> <span>$59.90</span></li>
                        </ul>

                        <div id="accordion" role="tablist" className="mb-4">
                            <div className="card">
                                <div className="card-header" role="tab" id="headingOne">
                                    <h6 className="mb-0">
                                        <a onClick={() => setOpenpaypal(!openpaypal)}
                                            aria-controls="paypal"
                                            aria-expanded={openpaypal}><i className="ti-credit-card mr-3"></i>Paypal</a>
                                    </h6>
                                </div>

                                <Collapse in={openpaypal}>
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</p>
                                    </div>
                                </Collapse>
                            </div>
                            <div className="card">

                            <div className="card-header" role="tab" id="headingOne">
                                    <h6 className="mb-0">
                                        <a onClick={() => setOpencash(!opencash)}
                                            aria-controls="paypal"
                                            aria-expanded={opencash}><i className="ti-money mr-3"></i>cash</a>
                                    </h6>
                                </div>

                                <Collapse in={opencash}>
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</p>
                                    </div>
                                </Collapse>
                            </div>
                            <div className="card">

                            <div className="card-header" role="tab" id="headingOne">
                                    <h6 className="mb-0">
                                        <a onClick={() => setOpencard(!opencard)}
                                            aria-controls="paypal"
                                            aria-expanded={opencard}><i className="ti-credit-card mr-3"></i>credit card</a>
                                    </h6>
                                </div>

                                <Collapse in={opencard}>
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</p>
                                    </div>
                                </Collapse>
                            </div>
                            <div className="card">

                            <div className="card-header" role="tab" id="headingOne">
                                    <h6 className="mb-0">
                                        <a onClick={() => setOpenbank(!openbank)}
                                            aria-controls="paypal"
                                            aria-expanded={openbank}><i className="ti-home mr-3"></i>direct with bank</a>
                                    </h6>
                                </div>

                                <Collapse in={openbank}>
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</p>
                                    </div>
                                </Collapse>
                            </div>
                        </div>

                        <a href="#" className="btn essence-btn">Place Order</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default CheckOutPage;