import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Images from '../../Project Images/ProjectImages'
import './Adpreview.css'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import Header from '../../Components/Header'
import Items from '../Items/Items'
import Footer from '../../Components/Footer'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/Share';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import { connect } from 'react-redux'
// import { set_data } from '../../Store/Action/Action'
class Adpreview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sellerad: true,
        }
    }
    render() {
        // console.log(this.props.name)
        return (
            <div>
                <Header />
                <Items />
                <div className="adpreviewcon container">
                    <div className="row">
                        <div className="addescol col-lg-8 col-md-8 col-sm-12">
                            <div className="picdiv">
                                <Carousel>
                                    <Carousel.Item>
                                        <div className="row">
                                            <div className="picsidediv col-lg-3 col-md-3 col-sm-2"></div>
                                            <div className="adimgdiv col-lg-6 col-md-6 col-sm-8">
                                                <img
                                                    className="adimg d-block w-100"
                                                    src={Images.Ad2}
                                                    alt="Third slide"
                                                />
                                            </div>
                                            <div className="picsidediv col-lg-3 col-md-3 col-sm-2"></div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="row">
                                            <div className="picsidediv col-lg-3 col-md-3 col-sm-2"></div>
                                            <div className="adimgdiv col-lg-6 col-md-6 col-sm-8">
                                                <img
                                                    className="adimg d-block w-100"
                                                    src={Images.Ad3}
                                                    alt="Third slide"
                                                />
                                            </div>
                                            <div className="picsidediv col-lg-3 col-md-3 col-sm-2"></div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="row">
                                            <div className="picsidediv col-lg-3 col-md-3 col-sm-2"></div>
                                            <div className="adimgdiv col-lg-6 col-md-6 col-sm-8">
                                                <img
                                                    className="adimg d-block w-100"
                                                    src={Images.Ad4}
                                                    alt="Third slide"
                                                />
                                            </div>
                                            <div className="picsidediv col-lg-3 col-md-3 col-sm-2"></div>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="detailsdiv col-lg-12 col-md-12 col-sm-12">
                                <h5><b>Details</b></h5>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-4">Condition</div>
                                    <div className="col-lg-9 col-md-9 col-sm-8">New</div>
                                </div>
                                <hr />
                                <h5><b>Description</b></h5>
                                <p className="addescrip">dahdghhashdjashdjahsjdhajskhdkjashdjkashdjashdjasdhajsdhkasjhsdkjdahsjdhajsdhjashdjashdjashdjasdasdhasdjsadjhasdjahdssaj</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="sellerdiv">
                                <div className="sellerdiv2">
                                    <h3 className="saleprice"><b>Rs <span>28080</span></b></h3>
                                    <div className="shareicon"><ShareIcon /></div>
                                    {this.state.sellerad ? (null

                                    ) : (<div className="shareicon2"><FavoriteBorderOutlinedIcon /></div>)}
                                </div>
                                <p>Double bed Wood Bed Set Single bed Wood Furniture Sofa set Factory.</p>
                                <p className="adselllocation">Pakistan <span className="adpostdate">Nov 12</span></p>
                            </div>
                            <div className="sellerdiv">
                                <h6>Seller Description</h6>
                                <div className="accountdetail">
                                    <AccountCircleIcon className="accountcircle" />
                                    {/* <div className="accountcircle"></div> */}
                                    <div className="sellername"><h6><b>AbdulMoiz</b></h6></div>
                                    <div><i className="rightangle11 fa fa-angle-right"></i></div>
                                </div>
                                {this.state.sellerad ? (
                                    <button className="removeadbtn">Remove</button>
                                ) : (
                                        <button className="chatsellerbtn">Chat with Seller</button>
                                    )}
                                <div className="callseller">
                                    <PhoneOutlinedIcon />
                                    ** *** ***
                                    <Link>Show number</Link>
                                </div>
                            </div>
                            <div className="sellerdiv">
                                <h6>Posted In</h6>
                                <p className="adselllocation">Pakistan</p>
                                <img className="userlocationmap" alt="" src={Images.map} />
                            </div>
                            <p className="adid">AD ID 00000000  <span className="reportad">REPORT THIS AD</span></p>
                        </div>
                    </div>
                    {/* <button onClick={() => this.props.set_data()}>hello</button> */}
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    name: state.name
})

// const mapDispatchToProps = (dispatch) => ({
//     set_data: () => dispatch(set_data())
// })



export default connect(mapStateToProps, null)(withRouter(Adpreview))

