import React, { Component } from 'react';
import './Header.css';
import { withRouter } from 'react-router-dom'
import Images from '../Project Images/ProjectImages'
import { Modal, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Firebase from '../Service/Service'
// import firebase from 'firebase'
import { connect } from 'react-redux'
import { facebooklogin, getuser, authuser, logout } from '../Store/Action/Action'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      useraccountdet: false,
      userloginconform: false,
      searchitem: '',
      show: false,
      setShow: false,
      showprovince: false,
      display: [],
      country: "Pakistan",
      countryProvince: [{
        id: "province1",
        provinceName: "Punjab"
      },
      {
        id: "province2",
        provinceName: "Islamabad Capital Territory"
      },
      {
        id: "province3",
        provinceName: "Sindh"
      },
      {
        id: "province4",
        provinceName: "Khyber Pakhtunkhwa"
      },
      ],
    }
  }
  componentDidMount() {
    // Firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     console.log('hello', user)
    //     console.log('hello', user.displayName)
    //     this.setState({
    //       userloginconform: true
    //     });

    //   }
    //   else {
    //     console.log('no')
    //   }
    // })
    // this.props.getuser()
    this.props.authuser()
  }
  useraccountdet2 = () => {
    if (this.state.useraccountdet === false) {
      this.setState({
        useraccountdet: true
      })
    } else {

      this.setState({
        useraccountdet: false
      })
    }
  }
  changeProvince = () => {
    const provinces = this.state.countryProvince;
    if (this.state.country) {
      const mapprovinces = provinces.map((item) => (
        <p
          onClick={() => {
            this.selectprovince(item.provinceName)
          }}
          key={item.id}
          className="popularlocation1"
        >
          <i className="popularlocationicon fa fa-map-marker" aria-hidden="true"></i>
          {item.provinceName}
        </p>
      ));
      this.setState({
        display: mapprovinces,
        showprovince: true
      })
    }
  };

  changeProvincehide = () => {
    if (this.state.showprovince === false) {
      this.setState({
        showprovince: true
      })
      this.changeProvince()
    } else {
      this.setState({
        showprovince: false
      })
    }
  }
  selectprovince = (itemprovinceName) => {
    console.log(itemprovinceName)
    this.setState({
      country: itemprovinceName
    })
  }

  showLogin = () => {
    this.setState({
      setShow: true,
      show: true
    })
  }

  hideLogin = () => {
    this.setState({
      setShow: false,
      show: false
    })
  }
  // updatevalue = (e) => {
  //   this.setState({
  //     searchitem: e.target.value
  //   })
  // }
  // firebasevalue = () => {
  //   let value1 = { title: this.state.searchitem }
  //   firebase.database().ref('/').child("moiz").push(value1)
  //   this.setState({
  //     searchitem: '',
  //   })
  // }
  sellitem = () => {
    this.props.history.push('/postAd')
  }
  myadbtn = () => {
    this.props.history.push('/Adpreview2')
  }
  render() {
    return (
      <div>
        {/* {this.props.users.map((v,i)=>{
          console.log("usersarray===>", v,i)
        })} */}
        <div className="navcon container-fluid">
          <div className="row navbar-expand-lg">
            <div className="navbrand1 col-lg-1 col-md-1 col-sm-12">
              <h2 className="navbrand2">OLX</h2>
            </div>
            <div className="col-lg-11 col-md-11 col-sm-12">
              <div className="row">
                <div className="searchprovince col-lg-3 col-md-3 col-sm-12">
                  <div>
                    <i className="search1 fa fa-search"></i>
                    <input onClick={this.changeProvince} className="searchprovince1" value={this.state.country} />
                    <i onClick={this.changeProvincehide} className="angledown fa fa-angle-down"></i>
                  </div>
                  {this.state.showprovince ? (
                    <div className="location">
                      <div className="currrentLocation">
                        <div className="forhoverchange">
                          <p className="delmarginp">
                            <i className="locationicon fa fa-map-marker" aria-hidden="true"></i></p>
                          <p className="delmarginp"><span className="usecrntlink">Use Current Location <br /></span> Location blocked. Check browser/phone settings.</p></div>
                      </div>
                      <hr className="locationhr" />
                      <div>
                        <p className="popularlocation">POPULAR LOCATIONS</p>
                        {this.state.display}
                      </div>
                      <hr className="locationhr" />
                    </div>
                  ) : null}
                </div>
                <div className="searchitem col-lg-6 col-md-6 col-sm-12">
                  <input value={this.state.searchitem} onChange={this.updatevalue} className="searchitem2" placeholder="Find Cars, Mobile Phones and more..." />
                  <button onClick={this.firebasevalue} className="search3"><i className="search2 fa fa-search"></i></button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="row">
                    <div className="btnlog2 col-lg-6 col-md-6 col-sm-6">
                      {this.props.userloginconform ? (
                        <div className="btnlog2 row">
                          <p className="message"><i className="comment fa fa-comment" aria-hidden="true"></i></p>
                          <p className="message"><i className="comment fa fa-bell" aria-hidden="true"></i></p>
                          <p className="account">{this.props.current_user.username[0]}</p>
                          <p className="account2" onClick={this.useraccountdet2}><i className="fa fa-angle-down" aria-hidden="true"></i></p>
                          {this.state.useraccountdet ? (

                            <div className="userlogoutdiv">
                              <button className="myadsbtn" onClick={this.myadbtn}>My Ads</button>
                              <button className="myadsbtn" onClick={this.logout}>LogOut</button>
                            </div>
                          ) : null}
                        </div>
                      ) : (
                          <div className="btnlog col-lg-12 col-md-12 col-sm-12">
                            <button className="logbtn" onClick={this.showLogin}>
                              Login
                          <i className="logicon fa fa-sign-in"></i>
                            </button>
                          </div>
                        )}
                    </div>
                    <div className="btnlog col-lg-6 col-md-6 col-sm-6">
                      <button className="sellbtn" onClick={this.sellitem}>
                        <span className="sellbtn2">
                          <i className="plusicon fa fa-plus"></i>
                          SELL
                      </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Modal className="slidepicbody" show={this.state.show} onHide={this.hideLogin}>
            <p onClick={this.hideLogin}><i className="close1 fa fa-close"></i></p>
            <Modal.Body>
              <Carousel activeIndex={this.stateindex} onSelect={this.handleSelect}>
                <Carousel.Item>
                  <img
                    className="slidepic d-block w-100"
                    src={Images.loginpic1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="slidepic d-block w-100"
                    src={Images.loginpic3}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="slidepic d-block w-100"
                    src={Images.loginpic2}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <button className="selectlogin">Continue with phone</button>
              <button onClick={() => this.props.facebooklogin()} className="selectlogin"><i className="selectloginicon fa fa-facebook"></i>Continue with facebook</button>
              <button className="selectlogin"><i className="selectloginicon fa fa-google"></i>Continue with google</button>
              <button className="selectlogin">Continue with email</button>
              <div className="modalfooter">
                <p className="modalfooter1">We won't share your personal details with anyone</p>
                <p>If you continue, you are accepting <Link to="/">OLX Terms and Conditions and Privacy Policy</Link></p>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    )
  }
} 

const mapStateToProps = (state) => ({
  current_user: state.current_user,
  users: state.users,
  userloginconform: state.userloginconform
})

const mapDispatchToProps = (dispatch) => ({
  facebooklogin: () => dispatch(facebooklogin()),
  getuser: () => dispatch(getuser()),
  authuser: () => dispatch(authuser()),
  logout: () => dispatch(logout()),
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))