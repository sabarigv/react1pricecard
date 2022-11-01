
function Pricecard({data}) {
 return ( < div className="col-lg-4" >
        <div className="card mb-5 mb-lg-0">
            <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{data.title}</h5>
                <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                    {
                        data.features.map((list) => {
                            return <li className={list.isEnable ? '' : 'text-muted'}>
                                {/* {
                                    list.isEnable ? <i className={"faCheck"} /> : <i className={"faTimes"} />
                                }  */}
                            <span className="fa-li">
                                <i className="fas fa-check"></i>
                            </span>
                            {list.name}
                            </li>
                        })
                    }
                    {/* <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                        Private Projects</li>
                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                        Phone Support</li>
                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain
                    </li>
                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                        Reports</li> */}
                </ul>
                <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
            </div>
        </div>
  </div >)
}

export default Pricecard;