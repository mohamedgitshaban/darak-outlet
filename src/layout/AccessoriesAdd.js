import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetAllAccessories from "../apis/GetAllAccessories";
import AddAccessory from "../apis/AddAccessory";

function AccessoriesAdd() {

    const [subselect , Setsubselect]=useState(null);
    const [formData , SetFormData]=useState({
        name :"",
        Type :"",
        Color :"",
        Style :"",
        Material:"",
        Shape :"",
        coverimg:"",
        model :"",
        price :0,
        numofstock :1000,
        active :1,
        sub :0,
        install :"",
        discount :0,
        description:"",
    });
    
useEffect(()=>{
    GetAllAccessories().then((res)=>{
        Setsubselect(res.data);
    })
},[])
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      AddAccessory(formData).then((response)=>{
         console.log(response); // Handle the response as needed
        // Reset the form
        SetFormData({
          name :"",
          Type :"",
          Color :"",
          Style :"",
          Material:"",
          Shape :"",
          coverimg:"",
          model :"",
          price :0,
          numofstock :1000,
          active :1,
          sub :0,
          install :"",
          discount :0,
          description:"",
          // Reset other fields
        });
      });
      
    } catch (error) {
      console.log(error.response.data); // Handle the error response
    }
  };
  const handleChange = (e) => {
    if(e.target.name=="sub"||e.target.name=="discount"||e.target.name=="price"||e.target.name=="numofstock"){
        SetFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
    }
    else{
        SetFormData({ ...formData, [e.target.name]: e.target.value });
        
    }
  };
  const handleimageChange = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.files[0].name });
  };

    return    <>
    {subselect!=null? <section className="pcoded-main-container">
        <div className="pcoded-content">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Add Accessory</h5>
                            </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/"><i className="feather icon-home"></i></Link></li>
                                <li className="breadcrumb-item"><Link to="/accessories">Accessory</Link></li>
                                <li className="breadcrumb-item"><Link to="/accessories/add">Add</Link></li>
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
                    <input type="text" name="name"
        value={formData.name}
        onChange={handleChange} className="form-control" id="inputAddress" placeholder="24 Bathroom Vanity, Modern, Wall Mounted, Brown Oak"/>
                </div>
                <div className="form-group">
                    <select className="custom-select" name="Type"
        value={formData.Type}
        onChange={handleChange} required>
                        <option value="">Choose Accessory type</option>
                        <option value="ToiletPaperHolders">Toilet Paper Holders</option>
                        <option value="SoapDispensers">Soap Dispensers</option>
                        <option value="ToilerBrushes">Toiler Brushes</option>
                        <option value="Hooks">Hooks</option>
                        <option value="SoapDishes">Soap Dishes</option>
                    </select>
                    <div className="invalid-feedback">Example invalid custom select feedback</div>
                </div>
                <div className="form-group">
                    <select className="custom-select"  name="Color"
        value={formData.Color}
        onChange={handleChange} required>
                        <option value="">Choose Accessory Color</option>
                        <option value="Chrome">Chrome</option>
                        <option value="Gold">Gold</option>
                        <option value="SatinNickel">Satin Nickel</option>
                        <option value="MatteBlack">Matte Black</option>
                        <option value="White">White</option>
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
                    <select className="custom-select"name="Style"
        value={formData.Style}
        onChange={handleChange} required>
                        <option value="">Choose Accessory style</option>
                        <option value="Modern">Modern</option>
                        <option value="Contemporary">Contemporary</option>
                        <option value="Classic">Classic</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="custom-select" name="Material"
        value={formData.Material}
        onChange={handleChange} required>
                        <option value="">Choose Accessory Material</option>
                        <option value="Brass">Brass</option>
                        <option value="StainlessSteel">Stainless Steel</option>
                        <option value="ThermoplasticResins">Thermoplastic Resins</option>
                        <option value="Metal">Metal</option>
                        <option value="FrostedGlass">Frosted Glass</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="custom-select" name="Shape"
        value={formData.Shape}
        onChange={handleChange} required>
                        <option value="">Choose Accessory SHAPE</option>
                        <option value="Round">Round</option>
                        <option value="Square">Square</option>
                        <option value="Rectangle">Rectangle</option>
                        <option value="Corner">Corner</option>
                        <option value="Triangle">Triangle</option>
                    </select>
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
                <div class="form-group">
                        <label for="exampleFormControlTextarea1" >description</label>
                        <textarea name="description"
        value={formData.description}
        onChange={handleChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                <div className="input-group">
                    <input type="file"  onChange={handleimageChange}name="model" className="custom-file-input" id="validatedCustomFile" required/>
                    <label className="custom-file-label" for="validatedCustomFile">{formData.model!=""?formData.model:<>Choose model file...</>}</label>
                    <div className="invalid-feedback">Example invalid custom file feedback</div>
                </div>
                <div className="input-group">
                    <input onChange={handleimageChange} name="coverimg" type="file" className="custom-file-input" id="validatedCustomFile" required/>
                    <label className="custom-file-label"  for="validatedCustomFile">{formData.coverimg!=""?formData.coverimg:<>Choose cover image file...</>}</label>
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
    </section>:null}
    </>
}
export default AccessoriesAdd;
