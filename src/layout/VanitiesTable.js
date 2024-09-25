import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetAllVanities from "../apis/GetAllVanities";
import DeleteVanity from "../apis/DeleteVanity";

function VanitiesTable() {
    const [data,setdata]=useState(null);
    useEffect(()=>{
        GetAllVanities().then((res)=>{
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
                                <h5>Vanities Table</h5>
                                </div>
                                <div className="col-xl-6 col-xs-12">
                                <Link to="/vanities/add" className="btn btn-primary" style={{float:"right"}}>Add product</Link>
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
                                            <th>Overall Width</th>
                                            <th>Finish</th>
                                            <th>Sinks</th>
                                            <th>Sink Type</th>
                                            <th>Features</th>
                                            <th>Overall Depth</th>
                                            <th>Shape</th>
                                            <th>Size</th>
                                            <th>Overall Height</th>
                                            <th>Mirror Type</th>
                                            <th>Style</th>
                                            <th>top Material</th>
                                            <th>color</th>
                                            <th>Top Finish</th>
                                            <th>Doors</th>
                                            <th>Drawers</th>
                                            <th>Vanity Material</th>
                                            <th>Sink Material</th>
                                            <th>Sink Finish</th>
                                            <th>price</th>
                                            <th>installation</th>
                                            <th>active</th>
                                            <th>discount</th>
                                            <th>sub product</th>
                                           
                                            <th>image</th>
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
                                            <td>{item.OverallWidth}</td>
                                            <td>{item.Finish}</td>
                                            <td>{item.Sinks}</td>
                                            <td>{item.SinkType}</td>
                                            <td>{item.Features}</td>
                                            <td>{item.OverallDepth}</td>
                                            <td>{item.Shape}</td>
                                            <td>{item.Size}</td>
                                            <td>{item.OverallHeight}</td>
                                            <td>{item.MirrorType}</td>
                                            <td>{item.Style}</td>
                                            <td>{item.TopMaterial}</td>
                                            <td>{item.Color}</td>
                                            <td>{item.TopFinish}</td>
                                            <td>{item.Doors}</td>
                                            <td>{item.Drawers}</td>
                                            <td>{item.VanityMaterial}</td>
                                            <td>{item.SinkMaterial}</td>
                                            <td>{item.SinkFinish}</td>
                                            <td>{item.price}</td>
                                                <td>{item.install}</td>
                                                <td>{item.active}</td>
                                                <td>{item.discount}</td>
                                                <td>{item.sub}</td>
                                                <td>{item.coverimg}</td>
                                            <td colSpan={2}>  
                                                        <div className="card-header-right">
                                                            <div className="btn-group card-option">
                                                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="feather icon-more-horizontal"></i>
                                                                </button>
                                                                <ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                                                    <li className="dropdown-item reload-card"><a href="#!"><i className="feather icon-refresh-cw"></i> update</a></li>
                                                                    <li className="dropdown-item close-card"><button className="btn btn-danger" onClick={()=>DeleteVanity(item.id)}><i className="feather icon-trash"></i> remove</button></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        </td>
                                        </tr>)}
                                      
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </section>  :null
    }
    </>
}
export default VanitiesTable;