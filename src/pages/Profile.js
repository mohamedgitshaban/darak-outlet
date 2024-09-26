import { useEffect, useState } from "react"
import GetUserinformation from "../apis/GetUserinformation";
import GetCart from "../apis/GetCart";
import Preloader from "./Preloader";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import DeleteCart from "../apis/DeleteCart";

import { Link } from "react-router-dom";
import GetActive from "../apis/GetActive";
export default function Profile(params) {
  const [active,setactive]=useState(0);
  const[userinfo,setUserInfo]=useState(null);
    const[cartData , setCartDate]=useState(null);
    const[FavData , setFavDate]=useState(null);
    useEffect(()=>{
      GetActive().then(Response=>{
        setactive(Response.data);
        GetUserinformation(1).then( (res)=>{
          setUserInfo(res.data[0]);
        
      });
      GetCart(1).then((resp)=>{
          setCartDate(resp.data)
      });
    })
       

    },[]);
   
    return<>
    {
        active&&cartData?<>
          <Tab.Container id="left-tabs-example"  defaultActiveKey="first">
      <Row className="profile">
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">profile information</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second"> cart order </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="therd"> favourite product </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth"> order history </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first"> <div className="profileData container">
                <h1>Account overview</h1>
                <div className="row">
              
                    <div className="profileImg col-lg-6 col-md-6 col-xs-12">
                        <img  src={userinfo.img?require("../img/profile/"+userinfo.img):require("../img/profile/author_1.png")}/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                    <h2><span>Name :{userinfo.name}</span></h2>
                    <h2><span>email :</span> {userinfo.email}</h2>
                    <h2><span>age :</span> {userinfo.age}</h2>
                    <h2><span>nationality : {userinfo.nationality}</span></h2>
                    <h2><span>address : {userinfo.address}</span></h2>
                    <h2><span>gender : {userinfo.gender}</span></h2>
                </div>
                </div>
            </div></Tab.Pane>
            <Tab.Pane eventKey="second">
                <div className="profileData container">
                <h1>cart product</h1>
               <div className="container">
                <div className="row">
                 {
                    cartData?cartData.map((item)=>{
                      return  <div class="col-12 col-sm-6 col-lg-4">
                        
                    <div class="single-product-wrapper">
                    <div class="product-img">
                        <img src={require("../img/product-img/"+item.coverimg)} alt=""/>
                        <div class="product-favourite">
                        <button className="deletecart" onClick={()=>{
                                DeleteCart(item.id).then(()=>{
                                    alert("item deleted");
                                })
                            }}>x</button>
                        </div>
                    </div>

                    <div class="product-description">
                        <span>{item.install}</span>
                        <Link to={"/ACCESSORIES/"+item.Productid}>
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
                    })
                      :<h1>there is no item</h1>
                    }
                </div>
               </div>
            </div></Tab.Pane>
            <Tab.Pane eventKey="therd">there is no favoret item</Tab.Pane>
            <Tab.Pane eventKey="fourth">there is no cheack out item</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
           
        </>:<Preloader/>
    }
    </>
}
