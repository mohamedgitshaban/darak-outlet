import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Addsink from "../apis/AddSink";
import GetAllSink from "../apis/GetAllSink";

function SinksAdd() {
    
    const [subselect , Setsubselect]=useState(null);
    const [formData , SetFormData]=useState({
    name :""
    ,Type :""
    ,Color :""
    ,Style :""
    ,Material :""
  
    ,Shape :""
    ,OverallHeight :0
    ,OverallLength :0
    ,OverallWidth:0
    ,Features :""
    ,Size :0
    ,FaucetHoles :0
    ,BasinDepth :0
    ,BasinWidth :0
    ,BasinLength:0 
    ,Certifications :""
    ,coverimg :null
    ,model :null
    ,price :0
    ,numofstock :1000
    ,active :1
    ,sub :0
    ,install :""
    ,discount :0
    ,description :""
});
useEffect(()=>{
    GetAllSink().then((res)=>{
        Setsubselect(res.data);
    })
},[])
const handleChange = (e) => {
    if(e.target.name=="sub"||
    e.target.name=="discount"||
    e.target.name=="price"||
    e.target.name=="numofstock"||
    e.target.name=="OverallHeight"||
    e.target.name=="OverallLength"||
    e.target.name=="OverallWidth"||
    e.target.name=="FaucetHoles"||
    e.target.name=="BasinDepth"||
    e.target.name=="BasinWidth"||
    e.target.name=="BasinLength"){
        SetFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
    }
    else{
        SetFormData({ ...formData, [e.target.name]: e.target.value });
        
    }
  };
  const handleimageChange = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.files[0].name });
  };
  const SubmitData=(e)=>{
    e.preventDefault();
    console.log(formData);

    try {
        Addsink(formData).then((response)=>{
           console.log(response); // Handle the response as needed
          // Reset the form

          SetFormData({
            name :""
            ,Type :""
            ,Color :""
            ,Style :""
            ,Material :""
            ,Shape :""
            ,OverallHeight :0
            ,OverallLength :0
            ,OverallWidth:0
            ,Features :""
            ,Size :""
            ,FaucetHoles :0
            ,BasinDepth :0
            ,BasinWidth :0
            ,BasinLength:0 
            ,Certifications :""
            ,coverimg :null
            ,model :null
            ,price :0
            ,numofstock :1000
            ,active :1
            ,sub :0
            ,install :""
            ,discount :0
            ,description :""});
        });
        
      } catch (error) {
        console.log(error.response.data); // Handle the error response
      }
    
 
}   

    return   <>
    {
        subselect?  <section className="pcoded-main-container">
        <div className="pcoded-content">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Add Sinks</h5>
                            </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/"><i className="feather icon-home"></i></Link></li>
                                <li className="breadcrumb-item"><Link to="/sinks">Sinks</Link></li>
                                <li className="breadcrumb-item"><Link to="/sinks/add">Add</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
  <div className="col-sm-12">
    <div className="card">

        <div className="card-body">
        <form onSubmit={SubmitData} >
             
             <div className="form-group">
                 <label for="inputAddress">name</label>
                 <input type="text"  name="name"
        value={formData.name}
        onChange={handleChange} className="form-control" id="inputAddress" placeholder="24 Bathroom Vanity, Modern, Wall Mounted, Brown Oak"/>
             </div>
                <div className="form-group">
                    <select className="custom-select"  name="sub"
        value={formData.sub}
        onChange={handleChange}>
                        <option value="0">Choose Accessory sub product</option>
                        {subselect.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                       
                    </select>
                </div>
                <div className="form-group">    
                    <select  name="Type"
        value={formData.Type}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Sinks type</option>
                        <option value="Console">Console</option>
                        <option value="Double">Double</option>
                        <option value="ADACompliant">ADA Compliant</option>
                        <option value="Trough">Trough</option>
                    </select>
                    <div className="invalid-feedback">Example invalid custom select feedback</div>
                </div>
                <div className="form-group">
                     <select  name="Color"
        value={formData.Color}
        onChange={handleChange}  className="custom-select" required>
                        <option value="">Choose Sinks Color</option>
                        <option value="BeigeTravertine">Beige Travertine</option>
                        <option value="Marble">Marble</option>
                        <option value="NaturalBrownOak">Natural Brown Oak</option>
                        <option value="MatteBlack">Matte Black</option>
                        <option value="White">White</option>
                        


                    </select>
                </div>
                <div className="form-group">
                     <select name="Style"
        value={formData.Style}
        onChange={handleChange}  className="custom-select" required>
                        <option value="">Choose Sinks style</option>
                        <option value="Modern">Modern</option>
                        <option value="Contemporary">Contemporary</option>
                        <option value="Classic">Classic</option>
                    </select>
                </div>
                <div className="form-group">
                     <select  name="Material"
        value={formData.Material}
        onChange={handleChange}  className="custom-select" required>
                        <option value="">Choose Sinks Material</option>
                        <option value="Brass">Brass</option>
                        <option value="StainlessSteel">Stainless Steel</option>
                        <option value="ThermoplasticResins">Thermoplastic Resins</option>
                        <option value="Metal">Metal</option>
                        <option value="FrostedGlass">Frosted Glass</option>
                    </select>
                </div>
                <div className="form-group">
                     <select  name="OverallHeight"
        value={formData.OverallHeight}
        onChange={handleChange}  className="custom-select" required>
                        <option value="">Choose Sinks OVERALL HEIGHT</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="36">36</option>
                    </select>
                </div>
                <div className="form-group">
                     <select name="OverallWidth"
        value={formData.OverallWidth}
        onChange={handleChange}  className="custom-select" required>
                        <option value="">Choose Sinks OVERALL WIDTH</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19 </option>

                    </select>
                </div>
                <div className="form-group">
                     <select name="install"
        value={formData.install}
        onChange={handleChange}  className="custom-select" required>
                        <option value="">Choose Sinks install</option>
                        <option value="console">console</option>
                        <option value="wallMounted">wall Mounted</option>
                        <option value="vessel">vessel </option>
                        <option value="dropin">drop in </option>

                    </select>
                </div>
                <div className="form-group">
                     <select  name="OverallLength"
        value={formData.OverallLength}
        onChange={handleChange}  className="custom-select" required>
                        <option value="">Choose Sinks OVERALL LENGTH</option>
                        <option value="24">24</option>
                        <option value="32">32</option>
                        <option value="35">35</option>
                        <option value="40">40</option>
                        <option value="48">48</option>
                    </select>
                </div>
                <div className="form-group">
                     <select name="Features"
        value={formData.Features}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Sinks FEATURES</option>
                        <option value="Overflow">Overflow</option>
                        <option value="CounterSpace">Counter Space</option>
                        <option value="TowelBar">Towel Bar</option>
                    </select>
                </div>

                <div className="form-group">
                     <select  name="Size"
        value={formData.Size}
        onChange={handleChange}  className="custom-select" required>
                        <option value="">Choose Sinks size</option>
                        <option value="Small">Small</option>
                        <option value="Large">Large</option>
                        <option value="Wide">Wide</option>
                        <option value="Oversized">Oversized</option>
                        <option value="Narrow">Narrow</option>
                    </select>
                </div>
                
                <div className="form-group">
                     <select  name="FaucetHoles"
        value={formData.FaucetHoles}
        onChange={handleChange}  className="custom-select" required>
                        <option value="">Choose Sinks FAUCET HOLES</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="6">6</option>
                    </select>
                </div>
                




                <div className="form-group">
                     <select  name="Shape"
        value={formData.Shape}
        onChange={handleChange}  className="custom-select" required>
                        <option value="">Choose Sinks Shape</option>
                        <option value="Rectangular">Rectangular</option>
                        <option value="Rectangle">Rectangle</option>
                        <option value="Square">Square</option>
                        <option value="Round">Round</option>
                        <option value="Oval">Oval</option>
                    </select>
                </div>
                <div className="form-group">
                     <select name="BasinDepth"
        value={formData.BasinDepth}
        onChange={handleChange}  className="custom-select" required>
                        <option value="">Choose Sinks BASIN DEPTH</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <div className="form-group">
                     <select name="BasinWidth"
        value={formData.BasinWidth}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Sinks BASIN WIDTH</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                    </select>
                </div>
                <div className="form-group">
                     <select name="BasinLength"
        value={formData.BasinLength}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Sinks BASIN LENGTH</option>
                        <option value="13">13</option>
                        <option value="16">16</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="24">24</option>
                    </select>
                </div>
                <div className="form-group">
                     <select  name="Certifications"
        value={formData.Certifications}
        onChange={handleChange}  className="custom-select" required>
            
                        <option value="">Choose Fuacets CERTIFICATIONS</option>
                        <option value="upc">upc</option>
                        <option value="CUPC">CUPC</option>
                        <option value="IAPMO">IAPMO</option>
                    </select>
                </div>
                <div class="form-group">
                        <label for="exampleFormControlTextarea1" >description</label>
                        <textarea  name="description"
        value={formData.description}
        onChange={handleChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                <div className="input-group">
                    <input type="file"  name="model"
        onChange={handleimageChange} className="custom-file-input" id="validatedCustomFile" required/>
                    <label className="custom-file-label" for="validatedCustomFile">{formData.model?formData.model:<>Choose model file...</>}</label>
                    <div className="invalid-feedback">Example invalid custom file feedback</div>
                </div>
                <div className="input-group">
                    <input  name="coverimg"
        onChange={handleimageChange} type="file" className="custom-file-input" id="validatedCustomFile" required/>
                    <label className="custom-file-label"  for="validatedCustomFile">{formData.coverimg?formData.coverimg:<>Choose cover image file...</>}</label>
                    <div className="invalid-feedback">Example invalid custom file feedback</div>
                </div>
                <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text  ti-stats-down"></span>
                            </div>
                            <input type="number"  name="price"
        value={formData.price}
        onChange={handleChange}class="form-control" placeholder="enter price" aria-label="Amount (to the nearest dollar)"/>
                           
                        </div>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text ti-money"></span>
                            </div>
                            <input type="number"  name="discount"
        value={formData.discount}
        onChange={handleChange} class="form-control" placeholder="enter discount" aria-label="Amount (to the nearest dollar)"/>
                           
                        </div>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text ti-truck"></span>
                            </div>
                            <input type="number" name="numofstock"
        value={formData.numofstock}
        onChange={handleChange} class="form-control" placeholder="enter number of stock" aria-label="Amount (to the nearest dollar)"/>
                           
                        </div>
                <button onClick={SubmitData}  className="btn  btn-primary">add accessory</button>
            </form>
          

        </div>
    </div>
</div>

            </div>
    
        </div>
    </section>:null
    }
    </>
}
export default SinksAdd;
