import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GetAllfusets from "../apis/GetAllfusets";
import DeleteFaucets from "../apis/DeleteFusets";

function FuacetsTable() {
    const id=useParams().id;
    const [data,setdata]=useState(null);
    useEffect(()=>{
        GetAllfusets().then((res)=>{
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
                                <h5>faucets Table</h5>
                                </div>
                                <div className="col-xl-6 col-xs-12">
                                <Link to="/fuacets/add" className="btn btn-primary" style={{float:"right"}}>Add product</Link>
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
                                            <th>Finish</th>
                                            <th>Faucet Holes</th>
                                            <th>Handles</th>
                                            <th>Handle Style</th>
                                            <th>spout Height</th>
                                            <th>spout reach</th>
                                            <th>Overall Height</th>
                                            <th>Style</th>
                                            <th>Certifications</th>
                                            <th>price</th>
                                            <th>active</th>
                                            <th>discount</th>
                                            <th>installation</th>
                                            <th>sub</th>
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
                                            <td>{item.Finish}</td>
                                            <td>{item.FaucetHoles}</td>
                                            <td>{item.Handles}</td>
                                            <td>{item.HandleStyle}</td>
                                            <td>{item.SpoutHeight}</td>
                                            <td>{item.SpoutReach}</td>
                                            <td>{item.OverallHeight}</td>
                                            <td>{item.Style}</td>
                                            <td>{item.Certifications}</td>
                                            <td>{item.price}</td>
                                            <td>{item.active}</td>
                                            <td>{item.discount}</td>
                                            <td>{item.install}</td>
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
                                                                    <li className="dropdown-item close-card"><button className="btn btn-danger" onClick={()=>DeleteFaucets(item.id)}><i className="feather icon-trash"></i> remove</button></li>
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
    </section>:null
    }
    </>  
}
export default FuacetsTable;