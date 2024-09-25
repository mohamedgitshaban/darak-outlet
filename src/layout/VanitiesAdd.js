import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Addvanity from "../apis/Addvanity";
import GetAllVanities from "../apis/GetAllVanities";

function VanitiesAdd() {
    
    const [subselect , Setsubselect]=useState(null);
    const [formData , SetFormData]=useState({
    name :""
    ,Type :""
    ,coverimg :null
    ,model :null
    ,OverallWidth :0
    
    ,Finish :""
    ,Sinks :""
    ,SinkType :""
    ,Size :""
    ,TopMaterial :""
    
    ,MirrorType :""
    ,VanityMaterial :""
    ,SinkMaterial :""
    ,SinkFinish :""
    ,Color :""
    
    ,Doors :0
    ,Drawers :0
    ,TopFinish :""
    ,Shape :""
    ,OverallHeight :0
    
    ,OverallDepth:0
    ,Features :""
    ,Style :""
    ,price :0
    ,numofstock :1000
    ,active :1
    ,sub :0
    ,install :""
    ,discount :0
    ,description :""});
useEffect(()=>{
    GetAllVanities().then((res)=>{
        Setsubselect(res.data);
    })
},[])
const handleChange = (e) => {
    if(e.target.name=="sub"||
    e.target.name=="discount"||
    e.target.name=="price"||
    e.target.name=="numofstock"||
    e.target.name=="OverallHeight"||
    e.target.name=="OverallDepth"||
    e.target.name=="OverallWidth"||
    e.target.name=="Doors"||
    e.target.name=="Drawers"){
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
        Addvanity(formData).then((response)=>{
           console.log(response); // Handle the response as needed
          // Reset the form

          SetFormData({
            name :""
            ,Type :""
            ,coverimg :null
            ,model :null
            ,OverallWidth :0
            ,Finish :""//Vanity finish 
            ,Sinks :""
            ,SinkType :""
            ,Size :""
            ,TopMaterial :""
            ,MirrorType :""
            ,VanityMaterial :""
            ,SinkMaterial :""
            ,SinkFinish :""
            ,Color :""
            ,Doors :0
            ,Drawers :0
            ,TopFinish :""
            ,Shape :""
            ,OverallHeight :0
            ,OverallDepth:0
            ,Features :""
            ,Style :""
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
                                <h5 className="m-b-10">Add vanities</h5>
                            </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/"><i className="feather icon-home"></i></Link></li>
                                <li className="breadcrumb-item"><Link to="/vanities">vanities</Link></li>
                                <li className="breadcrumb-item"><Link to="/vanities/add">Add</Link></li>
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
                    <select className="custom-select" name="sub"
        value={formData.sub}
        onChange={handleChange}>
                        <option value="0">Choose Accessory sub product</option>
                        {subselect.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                       
                    </select>
                </div>
                <div className="form-group">
                    <select className="custom-select" name="Type"
        value={formData.Type}
        onChange={handleChange} required>
                        <option value="">Choose vanities type</option>
                        <option value="console">console</option>
                        <option value="Cabinet">Cabinet</option>
                    </select>
                    <div className="invalid-feedback">Example invalid custom select feedback</div>
                </div>
                <div className="form-group">
                    <select name="OverallWidth"
        value={formData.OverallWidth}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose vanities Overall Width</option>
                        <option value="24">24I</option>
                        <option value="32">32I</option>
                        <option value="35">35I</option>
                        <option value="40">40I</option>
                        <option value="48">48I</option>
                    </select>
                </div>
                <div className="form-group">
                    <select name="Sinks"
        value={formData.Sinks}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose vanities Sink</option>
                        <option value="single">single</option>
                        <option value="double">double</option>
                    </select>
                </div>
                <div className="form-group">
                    <select name="Finish"
        value={formData.Finish}
        
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose vanities Finish</option>
                        <option value="BrownOak">Brown Oak</option>
                        <option value="Chrome">Chrome</option>
                        <option value="GlossyWhite">Glossy White</option>
                        <option value="Matte Black">Matte Black</option>
                    </select>
                </div>
                <div className="form-group">
                    <select  name="SinkType"
        value={formData.SinkType}
        onChange={handleChange}className="custom-select" required>
                        <option value="">Choose Sink type</option>
                        <option value="selfrimming">self rimming</option>
                        <option value="vessel">vessel</option>
                        <option value="trough">trough</option>
                    </select>
                </div>
                <div className="form-group">
                    <select name="Features"
        value={formData.Features}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose vanities features</option>
                        <option value="sink&vanity">sink & vanity</option>
                        <option value="counterspace">counter space</option>
                        <option value="vanitylegs">vanity legs</option>
                        <option value="medCabinet">med Cabinet</option>
                        <option value="Cabinet">Cabinet</option>
                    </select>
                </div>
                <div className="form-group">
                    <select name="Shape"
        value={formData.Shape}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose vanities shape</option>
                        <option value="rectangular">rectangular</option>
                        <option value="square">square</option>
                       
                    </select>
                </div>
                <div className="form-group">
                    <select name="Size"
        value={formData.Size}
        onChange={handleChange}className="custom-select" required>
                        <option value="">Choose vanities size</option>
                        <option value="large">large</option>
                        <option value="wide">wide</option>
                        <option value="oversized">oversized</option>
                        <option value="small">small</option>
                        <option value="narrow">narrow</option>
                    </select>
                </div>
                <div className="form-group">
                    <select name="OverallHeight"
        value={formData.OverallHeight}
        onChange={handleChange}className="custom-select" required>
                        <option value="">Choose vanities over all height</option>
                        <option value="22">22I</option>
                        <option value="24">24I</option>
                        <option value="25">25I</option>
                        <option value="35">35I</option>
                        <option value="36">36I</option>

                    </select>
                </div>
                <div className="form-group">
                    <select name="OverallDepth"
        value={formData.OverallDepth}
        onChange={handleChange}className="custom-select" required>
                        <option value="">Choose vanities over all depth</option>
                        <option value="17">17I</option>
                        <option value="18">18I</option>
                        <option value="19">19I</option>
                        <option value="48">48I</option>

                    </select>
                </div>
                <div className="form-group">
                    <select name="MirrorType"
        value={formData.MirrorType}
        onChange={handleChange}className="custom-select" required>
                        <option value="">Choose vanities mirror type</option>
                        <option value="nomirror">no mirror</option>
                        <option value="medcabinet">med Cabinet</option>
                        <option value="vanitymirror">vanity mirror</option>
                        <option value="lightenedmed">lightened med</option>
                        <option value="Cabinet">Cabinet</option>

                    </select>
                </div>
                <div className="form-group">
                    <select name="Style"
        value={formData.Style}
        onChange={handleChange}className="custom-select" required>
                        <option value="">Choose vanities style</option>
                        <option value="Modern">Modern</option>
                        <option value="contemporary">contemporary</option>
                        <option value="transitional">transitional</option>
                        <option value="traditional">traditional</option>
                        <option value="classic">classic</option>

                    </select>
                </div>
                <div className="form-group">
                    <select name="TopMaterial"
        value={formData.TopMaterial}
        onChange={handleChange}className="custom-select" required>
                        <option value="">Choose vanities top material</option>
                        <option value="ceramic">ceramic</option>
                        <option value="engineeringwood">engineering wood</option>

                    </select>
                </div>
                <div className="form-group">
                    <select name="TopFinish"
        value={formData.TopFinish}
        onChange={handleChange}className="custom-select" required>
                        <option value="">Choose vanities top finish</option>
                        <option value="white">white</option>
                        <option value="matteblack">matte black</option>
                        <option value="beigetravertine">beige travertine</option>
                        <option value="marble">marble</option>
                        <option value="grayoak">gray oak</option>

                    </select>
                </div>
                <div className="form-group">
                    <select name="Doors"
        value={formData.Doors}
        onChange={handleChange} className="custom-select" required>
                        <option value="">Choose vanities door</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <select name="Drawers"
        value={formData.Drawers}
        onChange={handleChange}className="custom-select" required>
                        <option value="">Choose vanities drawer</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <select name="VanityMaterial"
        value={formData.VanityMaterial}
        onChange={handleChange}className="custom-select" required>
                        <option value="">Choose vanities material</option>
                        <option value="engineeringwood">engineering wood</option>
                        <option value="brass">brass</option>
                        <option value="metal">metal</option>
                        <option value="stainlesssteel">stainless steel</option>
                    </select>
                </div>
                <div className="form-group">
                    <select name="SinkFinish"
        value={formData.SinkFinish}
        onChange={handleChange}className="custom-select" required>
                        <option value="">Choose sink finish</option>
                        <option value="white">white</option>
                        <option value="matteblack">matte black</option>
                        <option value="beigetravertine">beige travertine</option>
                        <option value="marble">marble</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="custom-select"  name="install"
        value={formData.install}
        onChange={handleChange} required>
                        <option value="">Choose Accessory installation</option>
                        <option value="wallmaounted">wall maounted</option>
                        <option value="freestanding">free standing</option>
                        <option value="floorstanding">floor standing</option>
                    </select>
                </div>
                <div className="form-group">
                    <select name="SinkMaterial"
        value={formData.SinkMaterial}
        onChange={handleChange}className="custom-select" required>
                        <option value="">Choose sink material</option>
                        <option value="resin">resin</option>
                        <option value="ceramic">ceramic</option>
                    </select>
                </div>
                <div className="form-group">
                        <label for="exampleFormControlTextarea1" >description</label>
                        <textarea name="description"
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
                    <input name="coverimg"
        onChange={handleimageChange} type="file" className="custom-file-input" id="validatedCustomFile" required/>
                    <label className="custom-file-label"  for="validatedCustomFile">{formData.coverimg?formData.coverimg:<>Choose cover image file...</>}</label>
                    <div className="invalid-feedback">Example invalid custom file feedback</div>
                </div>
                <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text  ti-stats-down"></span>
                            </div>
                            <input type="number" name="price"
        value={formData.price}
        onChange={handleChange} class="form-control" placeholder="enter price" aria-label="Amount (to the nearest dollar)"/>
                           
                        </div>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text ti-money"></span>
                            </div>
                            <input type="number" name="discount"
        value={formData.discount}
        onChange={handleChange} class="form-control" placeholder="enter discount" aria-label="Amount (to the nearest dollar)"/>
                           
                        </div>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text ti-truck"></span>
                            </div>
                            <input type="number"name="numofstock"
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
}</>
}
export default VanitiesAdd;
