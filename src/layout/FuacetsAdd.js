import { Link } from "react-router-dom";
import AddFusets from "../apis/AddFusets";
import { useEffect, useState } from "react";
import GetAllfusets from "../apis/GetAllfusets";

function FuacetsAdd() {
    const [subselect , Setsubselect]=useState(null);
    const [formData , SetFormData]=useState({
    name :""
    ,coverimg :null
    ,model :null
    ,Type :""
    ,Style :""
    ,FaucetHoles :1
    ,Finish :""
    ,HandleStyle :""
    ,Handles :1
    ,SpoutReach :""
    ,SpoutHeight :""
    ,OverallHeight:""

    ,price :0
    ,numofstock :1000
    ,active :1
    ,sub :0
    ,Certifications :""
    ,install :"bathroom-fusets"
    ,discount :0
    ,description :""});
useEffect(()=>{
    GetAllfusets().then((res)=>{
        Setsubselect(res.data);
    })
},[])
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);

    try {
        AddFusets(formData).then((response)=>{
           console.log(response); // Handle the response as needed
          // Reset the form

          SetFormData({
            name :""
            ,coverimg :null
            ,model :null
            ,Type :""
            ,Style :""
            ,FaucetHoles :1
            ,Finish :""
            ,HandleStyle :""
            ,Handles :1
            ,SpoutReach :""
            ,SpoutHeight :""
            ,OverallHeight:""
        
            ,price :0
            ,numofstock :1000
            ,active :1
            ,sub :0
            ,Certifications :""
            ,install :"bathroom-fusets"
            ,discount :0
            ,description :""
          });
        });
        
      } catch (error) {
        console.log(error.response.data); // Handle the error response
      }
    
 
}    
 const handleChange = (e) => {
    if(e.target.name=="sub"||e.target.name=="discount"||e.target.name=="price"||e.target.name=="OverallHeight"||e.target.name=="SpoutHeight"||e.target.name=="SpoutReach"||e.target.name=="numofstock"){
        SetFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
    }
    else{
        SetFormData({ ...formData, [e.target.name]: e.target.value });
        
    }
  };
  const handleimageChange = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.files[0].name });
  };
    return  <>
    {
        subselect?   <section className="pcoded-main-container">
        <div className="pcoded-content">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Add Fuacets</h5>
                            </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/"><i className="feather icon-home"></i></Link></li>
                                <li className="breadcrumb-item"><Link to="/fuacets/">Fuacets</Link></li>
                                <li className="breadcrumb-item"><Link to="/fuacets/add">Add</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
  <div className="col-sm-12">
    <div className="card">

        <div className="card-body">
        <form onSubmit={handleSubmit} >
             
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
                        <option value="0">Choose fuacets sub product</option>
                        {subselect.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                       
                    </select>
                </div>
                <div className="form-group">
                    <select className="custom-select" name="Type"
        value={formData.Type}
        onChange={handleChange} required>
                        <option value="">Choose Fuacets type</option>
                        <option value="Tub">Tub</option>
                        <option value="Sink">Sink</option>
                    </select>
                    <div className="invalid-feedback">Example invalid custom select feedback</div>
                </div>
                <div className="form-group">
                    <select   name="Finish"
        value={formData.Finish}
        onChange={handleChange}className="custom-select" required>
                        <option value="">Choose Fuacets FINISH</option>
                        <option value="Chrome">Matte Black</option>
                        <option value="Gold">Brushed Nicke</option>
                        <option value="SatinNickel">Chrome</option>

                    </select>
                </div>
               
                <div className="form-group">
                    <select   name="HandleStyle"
        value={formData.HandleStyle}
        onChange={handleChange}  className="custom-select" required>
                        <option value="">Choose Fuacets HANDLE STYLE</option>
                        <option value="Modern">Knob</option>
                        <option value="Contemporary">Lever</option>
                    </select>
                </div>
                <div className="form-group">
                    <select  name="SpoutReach"
        value={formData.SpoutReach}
        onChange={handleChange}  className="custom-select" required>
                        <option value="">Choose Fuacets SPOUT REACH</option>
                        <option value="7">7</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-group">
                    <select   name="SpoutHeight"
        value={formData.SpoutHeight}
        onChange={handleChange} className="custom-select" required>
            
                        <option value="">Choose Fuacets SPOUT HEIGHT</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="1">11</option>
                    </select>
                </div>
                <div className="form-group">
                    <select  name="OverallHeight"
        value={formData.OverallHeight}
        onChange={handleChange} className="custom-select" required>
            
                        <option value="">Choose Fuacets OVERALL HEIGHT</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="13">12</option>
                        <option value="13">13</option>
                    </select>
                </div>
                <div className="form-group">
                    <select   name="Style"
        value={formData.Style}
        onChange={handleChange}  className="custom-select" required>
            
                        <option value="">Choose Fuacets style</option>
                        <option value="Modern">Modern</option>
                        <option value="Contemporary">Contemporary</option>
                        <option value="Classic">Classic</option>
                    </select>
                </div>
                <div className="form-group">
                    <select  name="Certifications"
        value={formData.Certifications}
        onChange={handleChange} className="custom-select" required>
            
                        <option value="">Choose Fuacets Certifications</option>
                        <option value="CSA">CSA</option>
                        <option value="ADA">ADA</option>
                        <option value="LowLead">LowLead</option>
                        <option value="IAPMO">IAPMO</option>
                        <option value="UPC&CUPC">UPC&CUPC</option>
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
                <button type="submit"  className="btn  btn-primary">add accessory</button>
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
export default FuacetsAdd;
