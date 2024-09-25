import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import GetAllMirror from "../apis/GetAllMirror";
import AddMirror from "../apis/AddMirror";
function MirrorAdd() {
    
    const [subselect , Setsubselect]=useState(null);
    const [formData , SetFormData]=useState({
    name :"",
    Type :"",
    Color :"",
    Style :"",
    Material :"",
    Shape :"",
    coverimg:null,
    ExtensionLength :0,
    Width :0,
    Height :0,
    model :null,
    Specification :"Lighted",
    Magnification :0,
    MirrorOrientation :"",
    MirrorLightType :"",
    Features :"",
    price :0,
    numofstock :1000,
    active :1,
    sub :0,
    install :"",
    discount :0,
    description :""});
useEffect(()=>{
    GetAllMirror().then((res)=>{
        Setsubselect(res.data);
    })
},[])
const handleChange = (e) => {
    if(e.target.name=="sub"||e.target.name=="discount"||e.target.name=="price"||e.target.name=="ExtensionLength"||e.target.name=="Width"||e.target.name=="Height"||e.target.name=="Magnification"||e.target.name=="numofstock"){
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
        AddMirror(formData).then((response)=>{
           console.log(response); // Handle the response as needed
          // Reset the form

          SetFormData({
            name :"",
            Type :"",
            Color :"",
            Style :"",
            Material :"",
            Shape :"",
            coverimg:null,
            ExtensionLength :0,
            Width :0,
            Height :0,
            model :null,
            Specification :"Lighted",
            Magnification :0,
            MirrorOrientation :"",
            MirrorLightType :"",
            Features :"",
            price :0,
            numofstock :1000,
            active :1,
            sub :0,
            install :"",
            discount :0,
            description :""});
        });
        
      } catch (error) {
        console.log(error.response.data); // Handle the error response
      }
    
 
}   
    return    <>
    {
        subselect? <section className="pcoded-main-container">
        <div className="pcoded-content">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Add Mirror</h5>
                            </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/"><i className="feather icon-home"></i></Link></li>
                                <li className="breadcrumb-item"><Link to="/mirror">Mirror</Link></li>
                                <li className="breadcrumb-item"><Link to="/mirror/add">Add</Link></li>
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
                 <input type="text" name="name"
        value={formData.name}
        onChange={handleChange} className="form-control" id="inputAddress" placeholder="24 Bathroom Vanity, Modern, Wall Mounted, Brown Oak"/>
             </div>
             <div className="form-group">
                    <select className="custom-select"  name="sub"
        value={formData.sub}
        onChange={handleChange}>
                        <option value="0">Choose fuacets sub product</option>
                        {subselect.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                       
                    </select>
                </div>
                <div className="form-group">
                    <select  name="Type"
        value={formData.Type}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Mirror type</option>
                        <option value="Make-Up">Make-Up</option>
                        <option value="Med">Med</option>
                        <option value="Cabinet">Cabinet</option>
                        <option value="Vanity">Vanity</option>
                    </select>
                    <div className="invalid-feedback">Example invalid custom select feedback</div>
                </div>
                <div className="form-group">
                    <select  name="Color"
        value={formData.Color}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Mirror Color</option>
                        <option value="Chrome">Chrome</option>
                        <option value="Gold">Gold</option>
                        <option value="SatinNickel">Satin Nickel</option>
                        <option value="MatteBlack">Matte Black</option>
                        <option value="Chrome&Gold">Chrome & Gold</option>
                    </select>
                </div>
                <div className="form-group">
                    <select  name="Style"
        value={formData.Style}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Mirror Style</option>
                        <option value="Modern">Modern</option>
                        <option value="Contemporary">Contemporary</option>
                    </select>
                </div>
                <div className="form-group">
                    <select  name="Material"
        value={formData.Material}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Mirror Material</option>
                        <option value="Brass">Brass</option>
                        <option value="StainlessSteel">Stainless Steel</option>
                        <option value="EngineeringWood">Engineering Wood</option>
                        <option value="ThermoplasticResign">Thermoplastic Resign</option>
                        <option value="Glass">Glass</option>
                    </select>
                </div>
                <div className="form-group">
                    <select  name="ExtensionLength"
        value={formData.ExtensionLength}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Mirror EXTENSION LENGTH</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                    </select>
                </div>
                <div className="form-group">
                    <select  name="Width"
        value={formData.Width}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Mirror WIDTH</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="24">24</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                    </select>
                </div>
                <div className="form-group">
                    <select  name="Height"
        value={formData.Height}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Mirror HEIGHT</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="24">24</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                    </select>
                </div>
                



                <div className="form-group">
                    <select  name="Specification"
        value={formData.Specification}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Mirror SPECIFICATION</option>
                        <option value="Extendable">Extendable</option>
                        <option value="Lighted">Lighted</option>
                        <option value="SingleFace">Single Face</option>
                        <option value="Double Face">Double Face</option>
                        <option value="Hardwire">Hardwire</option>
                    </select>
                </div>
                <div className="form-group">
                    <select  name="Magnification"
        value={formData.Magnification}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Mirror MAGNIFICATION</option>
                        <option value="3X">3X</option>
                        <option value="5X">5X</option>
                        <option value="7X">7X</option>
                        <option value="5Xop">5Xop</option>
                        <option value="7Xop">7Xop</option>
                    </select>
                </div>
                <div className="form-group">
                    <select  name="MirrorOrientation"
        value={formData.MirrorOrientation}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Mirror MIRROR ORIENTATION</option>
                        <option value="Vertical">Vertical</option>
                        <option value="Horizontal">Horizontal</option>
                        <option value="Both">Both</option>
                    </select>
                </div>
                <div className="form-group">
                    <select   name="Features"
        value={formData.Features}
        onChange={handleChange}className="custom-select" required>
                        <option value="">Choose Mirror FEATURES</option>
                        <option value="Med">Med</option>
                        <option value="Cabinet">Cabinet</option>
                        <option value="FogFree">Fog Free</option>
                        <option value="Frameless">Frameless</option>
                        <option value="Lighted">Lighted</option>
                        <option value="Frame">Frame</option>
                    </select>
                </div>
                <div className="form-group">
                    <select  name="Shape"
        value={formData.Shape}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Mirror SHAPE</option>
                        <option value="Rectangle">Rectangle</option>
                        <option value="Round">Round</option>
                    </select>
                </div>
                <div className="form-group">
                    <select  name="MirrorLightType"
        value={formData.MirrorLightType}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose Mirror LIGHT TYPE</option>
                        <option value="LED">LED</option>
                        <option value="Incandescent">Incandescent</option>
                        <option value="Fluorescent">Fluorescent</option>
                        <option value="ColdLED">Cold LED</option>
                        <option value="Warm LED">WarmLED</option>
                    </select>
                </div>
                <div class="form-group">
                        <label for="exampleFormControlTextarea1" >description</label>
                        <textarea  name="description"
        value={formData.description}
        onChange={handleChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                <div className="input-group">
                    <input type="file"   name="model"
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
        onChange={handleChange} class="form-control" placeholder="enter price" aria-label="Amount (to the nearest dollar)"/>
                           
                        </div>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text ti-money"></span>
                            </div>
                            <input type="number"  name="discount"
        value={formData.discount}
        onChange={handleChange}class="form-control" placeholder="enter discount" aria-label="Amount (to the nearest dollar)"/>
                           
                        </div>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text ti-truck"></span>
                            </div>
                            <input type="number" name="numofstock"
        value={formData.numofstock}
        onChange={handleChange} class="form-control" placeholder="enter number of stock" aria-label="Amount (to the nearest dollar)"/>
                           
                        </div>
                <button onClick={SubmitData}  className="btn  btn-primary">add mirror</button>
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
export default MirrorAdd;
