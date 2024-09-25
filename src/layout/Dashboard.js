function Dashboard() {
    return<>
      <div className="pcoded-main-container">
    <div className="pcoded-content">
        <div className="page-header">
            <div className="page-block">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div className="page-header-title">
                            <h5 className="m-b-10">Dashboard Analytics</h5>
                        </div>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html"><i className="feather icon-home"></i></a></li>
                            <li className="breadcrumb-item"><a href="#!">Dashboard Analytics</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12 col-xl-4">
                <div className="card flat-card">
                    <div className="row-table">
                        <div className="col-sm-6 card-body br">
                            <div className="row">
                                <div className="col-sm-4">
                                    <i className="icon feather icon-eye text-c-green mb-1 d-block"></i>
                                </div>
                                <div className="col-sm-8 text-md-center">
                                    <h5>10k</h5>
                                    <span>Visitors</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 card-body">
                            <div className="row">
                                <div className="col-sm-4">
                                    <i className="icon feather icon-music text-c-red mb-1 d-block"></i>
                                </div>
                                <div className="col-sm-8 text-md-center">
                                    <h5>100%</h5>
                                    <span>Volume</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-table">
                        <div className="col-sm-6 card-body br">
                            <div className="row">
                                <div className="col-sm-4">
                                    <i className="icon feather icon-file-text text-c-blue mb-1 d-block"></i>
                                </div>
                                <div className="col-sm-8 text-md-center">
                                    <h5>2000 +</h5>
                                    <span>Files</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 card-body">
                            <div className="row">
                                <div className="col-sm-4">
                                    <i className="icon feather icon-mail text-c-yellow mb-1 d-block"></i>
                                </div>
                                <div className="col-sm-8 text-md-center">
                                    <h5>120</h5>
                                    <span>Mails</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card flat-card widget-primary-card">
                    <div className="row-table">
                        <div className="col-sm-3 card-body">
                            <i className="feather icon-star-on"></i>
                        </div>
                        <div className="col-sm-9">
                            <h4>4000 +</h4>
                            <h6>Ratings Received</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-12 col-xl-4">
                <div className="card flat-card">
                    <div className="row-table">
                        <div className="col-sm-6 card-body br">
                            <div className="row">
                                <div className="col-sm-4">
                                    <i className="icon feather icon-share-2 text-c-blue mb-1 d-block"></i>
                                </div>
                                <div className="col-sm-8 text-md-center">
                                    <h5>1000</h5>
                                    <span>Shares</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 card-body">
                            <div className="row">
                                <div className="col-sm-4">
                                    <i className="icon feather icon-wifi text-c-blue mb-1 d-block"></i>
                                </div>
                                <div className="col-sm-8 text-md-center">
                                    <h5>600</h5>
                                    <span>Network</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-table">
                        <div className="col-sm-6 card-body br">
                            <div className="row">
                                <div className="col-sm-4">
                                    <i className="icon feather icon-rotate-ccw text-c-blue mb-1 d-block"></i>
                                </div>
                                <div className="col-sm-8 text-md-center">
                                    <h5>3550</h5>
                                    <span>Returns</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 card-body">
                            <div className="row">
                                <div className="col-sm-4">
                                    <i className="icon feather icon-shopping-cart text-c-blue mb-1 d-blockz"></i>
                                </div>
                                <div className="col-sm-8 text-md-center">
                                    <h5>100%</h5>
                                    <span>Order</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card flat-card widget-purple-card">
                    <div className="row-table">
                        <div className="col-sm-3 card-body">
                            <i className="fas fa-trophy"></i>
                        </div>
                        <div className="col-sm-9">
                            <h4>17</h4>
                            <h6>Achievements</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-12 col-xl-4">
                <div className="card support-bar overflow-hidden">
                    <div className="card-body pb-0">
                        <h2 className="m-0">350</h2>
                        <span className="text-c-blue">Support Requests</span>
                        <p className="mb-3 mt-3">Total number of support requests that come in.</p>
                    </div>
                    <div id="support-chart"></div>
                    <div className="card-footer bg-primary text-white">
                        <div className="row text-center">
                            <div className="col">
                                <h4 className="m-0 text-white">10</h4>
                                <span>Open</span>
                            </div>
                            <div className="col">
                                <h4 className="m-0 text-white">5</h4>
                                <span>Running</span>
                            </div>
                            <div className="col">
                                <h4 className="m-0 text-white">3</h4>
                                <span>Solved</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-6 col-md-12">
                <div className="card table-card">
                    <div className="card-header">
                        <h5>Projects</h5>
                        <div className="card-header-right">
                            <div className="btn-group card-option">
                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="feather icon-more-horizontal"></i>
                                </button>
                                <ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                    <li className="dropdown-item full-card"><a href="#!"><span><i className="feather icon-maximize"></i> maximize</span><span style={{display:"none"}}><i className="feather icon-minimize"></i> Restore</span></a></li>
                                    <li className="dropdown-item minimize-card"><a href="#!"><span><i className="feather icon-minus"></i> collapse</span><span style={{display:"none"}}><i className="feather icon-plus"></i> expand</span></a></li>
                                    <li className="dropdown-item reload-card"><a href="#!"><i className="feather icon-refresh-cw"></i> reload</a></li>
                                    <li className="dropdown-item close-card"><a href="#!"><i className="feather icon-trash"></i> remove</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"></span>
                                                </label>
                                            </div>
                                            Assigned
                                        </th>
                                        <th>Name</th>
                                        <th>Due Date</th>
                                        <th className="text-right">Priority</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"></span>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={require("../assets/images/user/avatar-4.jpg")} alt="user image" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>John Deo</h6>
                                                    <p className="text-muted m-b-0">Graphics Designer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Able Pro</td>
                                        <td>Jun, 26</td>
                                        <td className="text-right"><label className="badge badge-light-danger">Low</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"></span>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={require("../assets/images/user/avatar-2.jpg")} alt="user image" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>Jenifer Vintage</h6>
                                                    <p className="text-muted m-b-0">Web Designer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Mashable</td>
                                        <td>March, 31</td>
                                        <td className="text-right"><label className="badge badge-light-primary">high</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"></span>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={require("../assets/images/user/avatar-3.jpg")} alt="user image" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>William Jem</h6>
                                                    <p className="text-muted m-b-0">Developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Flatable</td>
                                        <td>Aug, 02</td>
                                        <td className="text-right"><label className="badge badge-light-success">medium</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"></span>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={require("../assets/images/user/avatar-2.jpg")} alt="user image" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>David Jones</h6>
                                                    <p className="text-muted m-b-0">Developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Guruable</td>
                                        <td>Sep, 22</td>
                                        <td className="text-right"><label className="badge badge-light-primary">high</label></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-md-12">
                <div className="card latest-update-card">
                    <div className="card-header">
                        <h5>Latest Updates</h5>
                        <div className="card-header-right">
                            <div className="btn-group card-option">
                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="feather icon-more-horizontal"></i>
                                </button>
                                <ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                    <li className="dropdown-item full-card"><a href="#!"><span><i className="feather icon-maximize"></i> maximize</span><span style={{display:"none"}}><i className="feather icon-minimize"></i> Restore</span></a></li>
                                    <li className="dropdown-item minimize-card"><a href="#!"><span><i className="feather icon-minus"></i> collapse</span><span style={{display:"none"}}><i className="feather icon-plus"></i> expand</span></a></li>
                                    <li className="dropdown-item reload-card"><a href="#!"><i className="feather icon-refresh-cw"></i> reload</a></li>
                                    <li className="dropdown-item close-card"><a href="#!"><i className="feather icon-trash"></i> remove</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="latest-update-box">
                            <div className="row p-t-30 p-b-30">
                                <div className="col-auto text-right update-meta">
                                    <p className="text-muted m-b-0 d-inline-flex">2 hrs ago</p>
                                    <i className="feather icon-twitter bg-twitter update-icon"></i>
                                </div>
                                <div className="col">
                                    <a href="#!">
                                        <h6>+ 1652 Followers</h6>
                                    </a>
                                    <p className="text-muted m-b-0">You’re getting more and more followers, keep it up!</p>
                                </div>
                            </div>
                            <div className="row p-b-30">
                                <div className="col-auto text-right update-meta">
                                    <p className="text-muted m-b-0 d-inline-flex">4 hrs ago</p>
                                    <i className="feather icon-briefcase bg-c-red update-icon"></i>
                                </div>
                                <div className="col">
                                    <a href="#!">
                                        <h6>+ 5 New Products were added!</h6>
                                    </a>
                                    <p className="text-muted m-b-0">Congratulations!</p>
                                </div>
                            </div>
                            <div className="row p-b-0">
                                <div className="col-auto text-right update-meta">
                                    <p className="text-muted m-b-0 d-inline-flex">2 day ago</p>
                                    <i className="feather icon-facebook bg-facebook update-icon"></i>
                                </div>
                                <div className="col">
                                    <a href="#!">
                                        <h6>+1 Friend Requests</h6>
                                    </a>
                                    <p className="text-muted m-b-10">This is great, keep it up!</p>
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <tr>
                                                <td className="b-none">
                                                    <a href="#!" className="align-middle">
                                                        <img src={require("../assets/images/user/avatar-2.jpg")} alt="user image" className="img-radius wid-40 align-top m-r-15"/>
                                                        <div className="d-inline-block">
                                                            <h6>Jeny William</h6>
                                                            <p className="text-muted m-b-0">Graphic Designer</p>
                                                        </div>
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="#!" className="b-b-primary text-primary">View all Projects</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-4 col-md-12">
                <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <h3>$16,756</h3>
                                <h6 className="text-muted m-b-0">Visits<i className="fa fa-caret-down text-c-red m-l-10"></i></h6>
                            </div>
                            <div className="col-6">
                                <div id="seo-chart1" className="d-flex align-items-end"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <h3>49.54%</h3>
                                <h6 className="text-muted m-b-0">Bounce Rate<i className="fa fa-caret-up text-c-green m-l-10"></i></h6>
                            </div>
                            <div className="col-6">
                                <div id="seo-chart2" className="d-flex align-items-end"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <h3>1,62,564</h3>
                                <h6 className="text-muted m-b-0">Products<i className="fa fa-caret-down text-c-red m-l-10"></i></h6>
                            </div>
                            <div className="col-6">
                                <div id="seo-chart3" className="d-flex align-items-end"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-8 col-md-12">
                <div className="card table-card review-card">
                    <div className="card-header borderless ">
                        <h5>Customer Reviews</h5>
                        <div className="card-header-right">
                            <div className="btn-group card-option">
                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="feather icon-more-horizontal"></i>
                                </button>
                                <ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                    <li className="dropdown-item full-card"><a href="#!"><span><i className="feather icon-maximize"></i> maximize</span><span style={{display:"none"}}><i className="feather icon-minimize"></i> Restore</span></a></li>
                                    <li className="dropdown-item minimize-card"><a href="#!"><span><i className="feather icon-minus"></i> collapse</span><span style={{display:"none"}}><i className="feather icon-plus"></i> expand</span></a></li>
                                    <li className="dropdown-item reload-card"><a href="#!"><i className="feather icon-refresh-cw"></i> reload</a></li>
                                    <li className="dropdown-item close-card"><a href="#!"><i className="feather icon-trash"></i> remove</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-body pb-0">
                        <div className="review-block">
                            <div className="row">
                                <div className="col-sm-auto p-r-0">
                                    <img src={require("../assets/images/user/avatar-2.jpg")} alt="user image" className="img-radius profile-img cust-img m-b-15"/>
                                </div>
                                <div className="col">
                                    <h6 className="m-b-15">John Deo <span className="float-right f-13 text-muted"> a week ago</span></h6>
                                    <a href="#!"><i className="feather icon-star-on f-18 text-c-yellow"></i></a>
                                    <a href="#!"><i className="feather icon-star-on f-18 text-c-yellow"></i></a>
                                    <a href="#!"><i className="feather icon-star-on f-18 text-c-yellow"></i></a>
                                    <a href="#!"><i className="feather icon-star f-18 text-muted"></i></a>
                                    <a href="#!"><i className="feather icon-star f-18 text-muted"></i></a>
                                    <p className="m-t-15 m-b-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <a href="#!" className="m-r-30 text-muted"><i className="feather icon-thumbs-up m-r-15"></i>Helpful?</a>
                                    <a href="#!"><i className="feather icon-heart-on text-c-red m-r-15"></i></a>
                                    <a href="#!"><i className="feather icon-edit text-muted"></i></a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-auto p-r-0">
                                    <img src={require("../assets/images/user/avatar-4.jpg")} alt="user image" className="img-radius profile-img cust-img m-b-15"/>
                                </div>
                                <div className="col">
                                    <h6 className="m-b-15">Allina D’croze <span className="float-right f-13 text-muted"> a week ago</span></h6>
                                    <a href="#!"><i className="feather icon-star-on f-18 text-c-yellow"></i></a>
                                    <a href="#!"><i className="feather icon-star f-18 text-muted"></i></a>
                                    <a href="#!"><i className="feather icon-star f-18 text-muted"></i></a>
                                    <a href="#!"><i className="feather icon-star f-18 text-muted"></i></a>
                                    <a href="#!"><i className="feather icon-star f-18 text-muted"></i></a>
                                    <p className="m-t-15 m-b-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <a href="#!" className="m-r-30 text-muted"><i className="feather icon-thumbs-up m-r-15"></i>Helpful?</a>
                                    <a href="#!"><i className="feather icon-heart-on text-c-red m-r-15"></i></a>
                                    <a href="#!"><i className="feather icon-edit text-muted"></i></a>
                                    <blockquote className="blockquote m-t-15 m-b-0">
                                        <h6>Allina D’croze</h6>
                                        <p className="m-b-0 text-muted">Lorem Ipsum is simply dummy text of the industry.</p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="mb-3">Power</h5>
                                <h2>2789<span className="text-muted m-l-5 f-14">kw</span></h2>
                                <div id="power-card-chart1"></div>
                                <div className="row">
                                    <div className="col col-auto">
                                        <div className="map-area">
                                            <h6 className="m-0">2876 <span> kw</span></h6>
                                            <p className="text-muted m-0">month</p>
                                        </div>
                                    </div>
                                    <div className="col col-auto">
                                        <div className="map-area">
                                            <h6 className="m-0">234 <span> kw</span></h6>
                                            <p className="text-muted m-0">Today</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="mb-3">Temperature</h5>
                                <h2>7.3<span className="text-muted m-l-10 f-14">deg</span></h2>
                                <div id="power-card-chart3"></div>
                                <div className="row">
                                    <div className="col col-auto">
                                        <div className="map-area">
                                            <h6 className="m-0">4.5 <span> deg</span></h6>
                                            <p className="text-muted m-0">month</p>
                                        </div>
                                    </div>
                                    <div className="col col-auto">
                                        <div className="map-area">
                                            <h6 className="m-0">0.5 <span> deg</span></h6>
                                            <p className="text-muted m-0">Today</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="card chat-card">
                    <div className="card-header">
                        <h5>Chat</h5>
                        <div className="card-header-right">
                            <div className="btn-group card-option">
                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="feather icon-more-horizontal"></i>
                                </button>
                                <ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                    <li className="dropdown-item full-card"><a href="#!"><span><i className="feather icon-maximize"></i> maximize</span><span style={{display:"none"}}><i className="feather icon-minimize"></i> Restore</span></a></li>
                                    <li className="dropdown-item minimize-card"><a href="#!"><span><i className="feather icon-minus"></i> collapse</span><span style={{display:"none"}}><i className="feather icon-plus"></i> expand</span></a></li>
                                    <li className="dropdown-item reload-card"><a href="#!"><i className="feather icon-refresh-cw"></i> reload</a></li>
                                    <li className="dropdown-item close-card"><a href="#!"><i className="feather icon-trash"></i> remove</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row m-b-20 received-chat">
                            <div className="col-auto p-r-0">
                                <img src={require("../assets/images/user/avatar-2.jpg")} alt="user image" className="img-radius wid-40"/>
                            </div>
                            <div className="col">
                                <div className="msg">
                                    <p className="m-b-0">Nice to meet you!</p>
                                </div>
                                <p className="text-muted m-b-0"><i className="fa fa-clock-o m-r-10"></i>10:20am</p>
                            </div>
                        </div>
                        <div className="row m-b-20 send-chat">
                            <div className="col">
                                <div className="msg">
                                    <p className="m-b-0">Nice to meet you!</p>
                                </div>
                                <p className="text-muted m-b-0"><i className="fa fa-clock-o m-r-10"></i>10:20am</p>
                            </div>
                            <div className="col-auto p-l-0">
                                <img src={require("../assets/images/user/avatar-3.jpg")} alt="user image" className="img-radius wid-40"/>
                            </div>
                        </div>
                        <div className="row m-b-20 received-chat">
                            <div className="col-auto p-r-0">
                                <img src={require("../assets/images/user/avatar-2.jpg")} alt="user image" className="img-radius wid-40"/>
                            </div>
                            <div className="col">
                                <div className="msg">
                                    <p className="m-b-0">Nice to meet you!</p>
                                    <img src={require("../assets/images/widget/dashborad-1.jpg")} alt=""/>
                                    <img src={require("../assets/images/widget/dashborad-3.jpg")} alt=""/>
                                </div>
                                <p className="text-muted m-b-0"><i className="fa fa-clock-o m-r-10"></i>10:20am</p>
                            </div>
                        </div>
                        <div className="input-group m-t-15">
                            <input type="text" name="task-insert" className="form-control" id="Project" placeholder="Send message"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary">
                                    <i className="feather icon-message-circle"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                        <div className="card-body">
                            <h5 className="mb-3">Total Leads</h5>
                            <p className="text-c-green f-w-500"><i className="fa fa-caret-up m-r-15"></i> 18% High than last month</p>
                            <div className="row">
                                <div className="col-4 b-r-default">
                                    <p className="text-muted m-b-5">Overall</p>
                                    <h5>76.12%</h5>
                                </div>
                                <div className="col-4 b-r-default">
                                    <p className="text-muted m-b-5">Monthly</p>
                                    <h5>16.40%</h5>
                                </div>
                                <div className="col-4">
                                    <p className="text-muted m-b-5">Day</p>
                                    <h5>4.56%</h5>
                                </div>
                            </div>
                        </div>
                        <div id="tot-lead" style={{height:"150px"}}></div>
                    </div>
            </div>
        </div>
    </div>
</div>
    </>
}
export default Dashboard;