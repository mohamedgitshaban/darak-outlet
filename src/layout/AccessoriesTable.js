import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetAllAccessories from "../apis/GetAllAccessories";
import DeleteAccessory from "../apis/DeleteAccessory";

function AccessoriesTable() {
    const [data,setdata]=useState(null);
    useEffect(()=>{
        GetAllAccessories().then((res)=>{
            setdata(res.data);
        })
    },[]);
    return<>
    {
        data?<section className="pcoded-main-container">
        <div className="pcoded-content">
            
    
            <div className="row">
    
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-xl-6 col-xs-12">
                                <h5>Accessories Table</h5>
                                </div>
                                <div className="col-xl-6 col-xs-12">
                                <Link to="/accessories/add" className="btn btn-primary" style={{float:"right"}}>Add accessory</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-body table-border-style">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>model</th>
                                            <th>description</th>   
                                            <th>Type</th>
                                            <th>Color</th>
                                            <th>Style</th>
                                            <th>Material</th>
                                            <th>Shape</th>
                                            <th>price</th>
                                            <th>cover img</th>
                                            <th>active</th>
                                            <th>sub product</th>
                                            <th>installation</th>
                                            <th>discount</th>
                                            <th>action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        data.map((item)=><tr key={item.id}>
                                        <td >{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.model}</td>
                                        <td>{item.description}</td>
                                        <td>{item.Type}</td>
                                        <td>{item.Color}</td>
                                        <td>{item.Style}</td>
                                        <td>{item.Material}</td>
                                        <td>{item.Shape}</td>
                                        <td>{item.price}</td>
                                        <td>{item.coverimg}</td>
                                        <td>{item.active}</td>
                                        <td>{item.sub}</td>
                                        <td>{item.install}</td>
                                        <td>{item.discount}</td>                                        
                                        <td colSpan={2}>  
                                                    <div className="card-header-right">
                                                        <div className="btn-group card-option">
                                                            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="feather icon-more-horizontal"></i>
                                                            </button>
                                                            <ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                                                <li className="dropdown-item reload-card"><a href="#!"><i className="feather icon-refresh-cw"></i> update</a></li>
                                                                <li className="dropdown-item close-card"><button className="btn btn-danger" onClick={()=>DeleteAccessory(item.id)}><i className="feather icon-trash"></i> remove</button></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    </td>
                                    </tr>)
                                    }
                                      
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </section> :null
    }
    </> 
}
export default AccessoriesTable;