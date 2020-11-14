import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './postAd2.css'
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux'


class PostAd2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedcity: '',
            selectedstate: '',
            selectedmobilebrand: '',
            selectedcarbrand: '',
            selectedcarmodel: '',
            Azadkashmircity: false,
            Balochistancity: false,
            IslamabadCapitalTerritorycity: false,
            KhyberPakhtukhwacity: false,
            NorthernAreascity: false,
            Punjabcity: false,
            Sindhcity: false,
            checkedA: true,
            Tablet: false,
            Accessories: false,
            MobilePhones: false,
            cars: true,
            carModel: false,
        }
    }


    shownumberornot = (event) => {
        this.setState({
            [event.target.name]: event.target.checked
        })
    };
    chooselocation = (e) => {
        this.setState({ selectedstate: e.target.value }, () => {
            const { selectedstate } = this.state
            if (selectedstate === 'Azad Kashmir') {
                this.setState({
                    Azadkashmircity: true,
                })
            } else {
                this.setState({
                    Azadkashmircity: false,
                })
            }
            if (selectedstate === 'Balochistan') {
                this.setState({
                    Balochistancity: true,
                })
            } else {
                this.setState({
                    Balochistancity: false,
                })
            }
            if (selectedstate === 'Islamabad Capital Territory') {
                this.setState({
                    IslamabadCapitalTerritorycity: true,
                })
            } else {
                this.setState({
                    IslamabadCapitalTerritorycity: false,
                })
            }
            if (selectedstate === 'Khyber Pakhtukhwa') {
                this.setState({
                    KhyberPakhtukhwacity: true,
                })
            } else {
                this.setState({
                    KhyberPakhtukhwacity: false,
                })
            }
            if (selectedstate === 'Northern Areas') {
                this.setState({
                    NorthernAreascity: true,
                })
            } else {
                this.setState({
                    NorthernAreascity: false,
                })
            }
            if (selectedstate === 'Punjab') {
                this.setState({
                    Punjabcity: true,
                })
            } else {
                this.setState({
                    Punjabcity: false,
                })
            }
            if (selectedstate === 'Sindh') {
                this.setState({
                    Sindhcity: true,
                })
            } else {
                this.setState({
                    Sindhcity: false,
                })
            }
        });
    }
    choosecity = (e) => {
        this.setState({ selectedcity: e.target.value }, () => {
        });
    }
    choosemobilebrand = (e) => {
        this.setState({ selectedmobilebrand: e.target.value }, () => {
            console.log(this.state.selectedmobilebrand)
        })
    }
    choosecarbrand = (e) => {
        this.setState({ selectedcarbrand: e.target.value }, () => {
            if (this.state.selectedcarbrand !== '') {
                this.setState({
                    carModel: true
                })
            }
            else {
                this.setState({
                    carModel: false
                })
            }
            console.log(this.state.selectedcarbrand)
        })
    }
    choosecarmodel = (e) => {
        this.setState({ selectedcarmodel: e.target.value }, () => {
            console.log(this.state.selectedcarmodel)
        })
    }
    backtohome = () => {
        this.props.history.push('/postAd')
    }
    submitad = () => {
        this.props.history.push('/adcongrat')
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="Header">
                    <button className="back" onClick={this.backtohome}><i className="fa fa-arrow-left"></i></button>
                    <h2 className="olxname"><b>OLX</b></h2>
                </div>
                <div className="postadcon container">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h4 className="postaddiv"><b>POST YOUR AD</b></h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-0 col-sm-0"></div>
                        <div className="choosecategory col-lg-8 col-md-12 col-sm-12">
                            <div className="selectcategory">
                                <h6><b>SELECTED CATEGORY</b></h6>
                                {/* <p><span>hello</span> / <span>hello</span></p> */}
                            </div>
                            <div className="includedetails">
                                <h6><b>INCLUDE SOME DETAILS</b></h6>
                                {this.state.cars ? (
                                    <div>
                                        <p className="condition">Make *</p>
                                        <select onChange={this.choosecarbrand} className="chooselocation3">
                                            <option></option>
                                            <option>Audi</option>
                                            <option>BMW</option>
                                            <option>Changhan</option>
                                            <option>Chevrolet</option>
                                            <option>Classic & Antiques</option>
                                            <option>Daewoo</option>
                                            <option>Daihatsu</option>
                                            <option>FAW</option>
                                            <option>Honda</option>
                                            <option>Hyundai</option>
                                            <option>Isuzu</option>
                                            <option>JAC</option>
                                            <option>KIA</option>
                                            <option>Land Rover</option>
                                            <option>Lexus</option>
                                            <option>Mazda</option>
                                            <option>Mercedes</option>
                                            <option>Mitsubishi</option>
                                            <option>Nissan</option>
                                            <option>Porsche</option>
                                            <option>Proton</option>
                                            <option>Prince</option>
                                            <option>Range Rover</option>
                                            <option>Renault</option>
                                            <option>Subaru</option>
                                            <option>Suzuki</option>
                                            <option>Toyota</option>
                                            <option>Volkswagen</option>
                                            <option>United</option>
                                            <option>Other Brands</option>
                                        </select>
                                        {this.state.carModel ? (
                                            <div>
                                                <p className="condition">Model *</p>
                                                <select onChange={this.choosecarmodel} className="chooselocation3">
                                                    <option></option>
                                                    <option>1300</option>
                                                    <option>323</option>
                                                    <option>626</option>
                                                    <option>808</option>
                                                    <option>929</option>
                                                    <option>Atenza Sport</option>
                                                    <option>Atenza Wagon</option>
                                                    <option>Axela</option>
                                                    <option>Azwagon</option>
                                                    <option>B2200</option>
                                                    <option>Bongo</option>
                                                    <option>Carol</option>
                                                    <option>Carol Eco</option>
                                                    <option>Demio</option>
                                                    <option>Familia Van</option>
                                                    <option>Flair</option>
                                                    <option>Flair Custom</option>
                                                    <option>Flair Wagon</option>
                                                    <option>Luce</option>
                                                    <option>RX8</option>
                                                    <option>Scrum</option>
                                                    <option>Scrum Wagon</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                        ) : null}
                                        <p className="condition">Year *</p>
                                        <input type="number" className="caryear"></input>
                                        <div className="buttonsdiv">
                                            <p className="condition">KMs driven *</p>
                                            <input type="number" minLength={0} className="caryear"></input>
                                            <p className="titlealerts">
                                                <span className="titlealerts2">0 / 6</span>
                                            </p>
                                        </div>
                                        <div className="buttonsdiv">
                                            <p className="condition">Fuel *</p>
                                            <button className="detailbutton">CNG</button>
                                            <button className="detailbutton">Diesel</button>
                                            <button className="detailbutton">Hybrid</button>
                                            <button className="detailbutton">LPG</button>
                                            <button className="detailbutton">Petrol</button>
                                        </div>
                                    </div>
                                ) : null}
                                {this.state.MobilePhones ? (
                                    <div>
                                        <p className="condition">Make *</p>
                                        <select onChange={this.choosemobilebrand} className="chooselocation3">
                                            <option></option>
                                            <option>Acer</option>
                                            <option>Alcatel</option>
                                            <option>Apple</option>
                                            <option>Asus</option>
                                            <option>BlackBerry</option>
                                            <option>Calme</option>
                                            <option>Club</option>
                                            <option>G'five</option>
                                            <option>Google</option>
                                            <option>Gright</option>
                                            <option>Haier</option>
                                            <option>Honor</option>
                                            <option>HTC</option>
                                            <option>Huawei</option>
                                            <option>INew</option>
                                            <option>Infinix</option>
                                            <option>Lava</option>
                                            <option>Lenovo</option>
                                            <option>LG</option>
                                            <option>Meizu</option>
                                            <option>Mobilink JazzX</option>
                                            <option>Motorola</option>
                                            <option>Nokia</option>
                                            <option>One Plus</option>
                                            <option>OPPO</option>
                                            <option>Panasonic</option>
                                            <option>Qmobile</option>
                                            <option>RealMe</option>
                                            <option>Rivo</option>
                                            <option>Samsung</option>
                                            <option>Sony</option>
                                            <option>Sony Ericsson</option>
                                            <option>Tecno</option>
                                            <option>Vivo</option>
                                            <option>VOICE</option>
                                            <option>Xiaomi</option>
                                            <option>Zte</option>
                                            <option>Other Mobiles</option>
                                        </select>
                                    </div>
                                ) : null}
                                <div className="buttonsdiv">
                                    <p className="condition">Condition *</p>
                                    <button className="detailbutton">New</button>
                                    <button className="detailbutton">Used</button>
                                </div>
                                {this.state.cars ? (
                                    <div>
                                        <p className="condition">Registered In</p>
                                        <select onChange={this.chooseregistry} className="chooselocation3">
                                            <option></option>
                                            <option>Abottabad</option>
                                            <option>Ahmadpur East</option>
                                            <option>Ali Masjid</option>
                                            <option>Arif Wala</option>
                                            <option>Askoley</option>
                                            <option>Unregistered</option>
                                        </select>
                                    </div>
                                ) : null}
                                {this.state.Tablet ? (
                                    <div className="buttonsdiv">
                                        <p className="condition">Type *</p>
                                        <button className="detailbutton">Apple</button>
                                        <button className="detailbutton">Danny Tabs</button>
                                        <button className="detailbutton">Q Tabs</button>
                                        <button className="detailbutton">Samsung</button>
                                        <button className="detailbutton">Other Tablets</button>
                                    </div>
                                ) : null}
                                {this.state.Accessories ? (
                                    <div className="buttonsdiv">
                                        <p className="condition">Type *</p>
                                        <button className="detailbutton">Mobile</button>
                                        <button className="detailbutton">Tablets</button>
                                    </div>
                                ) : null}
                                <div className="buttonsdiv">
                                    <p className="condition">Ad title *</p>
                                    <input type="text" maxLength="70" className="title"></input>
                                    <p className="titlealerts">Mention the key features of your item (e.g. brand, model, age, type)
                                        <span className="titlealerts2">0 / 70</span>
                                    </p>
                                </div>
                                <div className="buttonsdiv">
                                    <p className="condition">Ad title *</p>
                                    <input type="text" maxLength="4096" className="title2"></input>
                                    <p className="titlealerts">Include condition, features and reason for selling
                                        <span className="titlealerts2">0 / 4096</span>
                                    </p>
                                </div>
                            </div>
                            <div className="forborder">
                                <div className="includedetails2">
                                    <h6><b>SET A PRICE</b></h6>
                                    <div>
                                        <p className="titlealerts">Price *</p>
                                        <div className="pricediv">
                                            <p className="price2">Rs</p>
                                            <input type="text" maxLength="30" className="price" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {this.state.MobilePhones ? (

                                <div className="forborder">
                                    <div className="includedetails2">
                                        <h6><b>UPLOAD UP TO 12 PHOTOS</b></h6>
                                        <div className="uploaditempic">
                                            <button className="uploaditempic2">
                                                <i className="cameraicon fa fa-camera"></i>
                                        Add Photo
                                    </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                        </div>
                                        <p className="mandatoryfield">This field is mandatory</p>
                                    </div>
                                </div>
                            ) : null}

                            {this.state.cars ? (

                                <div className="forborder">
                                    <div className="includedetails2">
                                        <h6><b>UPLOAD UP TO 20 PHOTOS</b></h6>
                                        <div className="uploaditempic">
                                            <button className="uploaditempic2">
                                                <i className="cameraicon fa fa-camera"></i>
                                                Add Photo
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                            <button className="uploaditempic3">
                                                <i className="cameraicon fa fa-camera"></i>
                                            </button>
                                        </div>
                                        <p className="mandatoryfield">This field is mandatory</p>
                                    </div>
                                </div>
                            ) : null}
                            <div className="forborder">
                                <div className="includedetails2">
                                    <h6><b>CONFIRM YOUR LOCATION</b></h6>
                                    <div className="chooselocationdiv">
                                        <div className="chooselocationdiv2">
                                            <p className="chooselocation">LIST</p>
                                            <p className="chooselocation2">CURRENT LOCATION</p>
                                        </div>
                                    </div>
                                    <p className="condition">State *</p>
                                    <select onChange={this.chooselocation} className="chooselocation3">
                                        <option></option>
                                        <option>Azad Kashmir</option>
                                        <option>Balochistan</option>
                                        <option>Islamabad Capital Territory</option>
                                        <option>Khyber Pakhtukhwa</option>
                                        <option>Northern Areas</option>
                                        <option>Punjab</option>
                                        <option>Sindh</option>
                                    </select>
                                    {this.state.Azadkashmircity ? (
                                        <div>
                                            <p className="condition">City *</p>
                                            <select onChange={this.choosecity} className="chooselocation3">
                                                <option></option>
                                                <option>Bagh</option>
                                                <option>Bimber</option>
                                                <option>Hajira</option>
                                                <option>Kotli</option>
                                                <option>Mirpur</option>
                                                <option>Muzaffarabad</option>
                                                <option>Palandari</option>
                                                <option>Rawalkot</option>
                                            </select>
                                        </div>
                                    ) : null}
                                    {this.state.Balochistancity ? (
                                        <div>
                                            <p className="condition">City *</p>
                                            <select onChange={this.choosecity} className="chooselocation3">
                                                <option></option>
                                                <option>Bela</option>
                                                <option>Gawadar</option>
                                                <option>Jiwani</option>
                                                <option>Kalat</option>
                                                <option>Khuzdar</option>
                                                <option>Lasbela</option>
                                                <option>Loralai</option>
                                                <option>Orama</option>
                                                <option>Pasni</option>
                                                <option>Quetta</option>
                                                <option>Zhob</option>
                                            </select>
                                        </div>
                                    ) : null}
                                    {this.state.IslamabadCapitalTerritorycity ? (
                                        <div>
                                            <p className="condition">City *</p>
                                            <select onChange={this.choosecity} className="chooselocation3">
                                                <option></option>
                                                <option>Islamabad</option>
                                            </select>
                                        </div>
                                    ) : null}
                                    {this.state.KhyberPakhtukhwacity ? (
                                        <div>
                                            <p className="condition">City *</p>
                                            <select onChange={this.choosecity} className="chooselocation3">
                                                <option></option>
                                                <option>Abottabad</option>
                                                <option>Ali Masjid</option>
                                                <option>Bannu</option>
                                            </select>
                                        </div>
                                    ) : null}
                                    {this.state.NorthernAreascity ? (
                                        <div>
                                            <p className="condition">City *</p>
                                            <select onChange={this.choosecity} className="chooselocation3">
                                                <option></option>
                                                <option>Askoley</option>
                                                <option>Chilas</option>
                                                <option>Ghanche</option>
                                            </select>
                                        </div>
                                    ) : null}
                                    {this.state.Punjabcity ? (
                                        <div>
                                            <p className="condition">City *</p>
                                            <select onChange={this.choosecity} className="chooselocation3">
                                                <option></option>
                                                <option>Lahore</option>
                                                <option>Multan</option>
                                                <option>Faislabad</option>
                                            </select>
                                        </div>
                                    ) : null}
                                    {this.state.Sindhcity ? (
                                        <div>
                                            <p className="condition">City *</p>
                                            <select onChange={this.choosecity} className="chooselocation3">
                                                <option></option>
                                                <option>Karachi</option>
                                                <option>Hyderabad</option>
                                                <option>Sukkur</option>
                                            </select>
                                        </div>
                                    ) : null}
                                    <p className="mandatoryfield">This field is mandatory</p>
                                </div>
                            </div>

                            <div className="forborder">
                                <div className="includedetails2">
                                    <h6><b>REVIEW YOUR DETAILS</b></h6>
                                    <div className="uploaditempic">
                                        <div className="usernamediv">
                                            <p className="usernamealpha">g</p>
                                            <div className="usernamediv2">
                                                <span>Name</span>
                                                <input type="text" maxLength="50" className="usernameinput" />
                                                <span className="usernameinputmax">10 / 30</span>
                                            </div>
                                        </div>
                                        <div className="verifyaccountdiv">
                                            <h6><b>Let's Verify Your Account</b></h6>
                                            <p>We will send you a confirmation code by sms on the next step.</p>
                                            <p className="condition">Mobile Phone Number *</p>
                                            <div>
                                                <div className="pricediv">
                                                    <p className="price2">+92</p>
                                                    <input type="number" maxLength={9} className="phonenumber" />
                                                </div>
                                            </div>
                                            <div className="shownumber">
                                                <p className="shownumber2">Show My Phone Number On My Ads</p>
                                                <Switch
                                                    checked={this.state.checkedA}
                                                    onChange={this.shownumberornot}
                                                    name="checkedA"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="forborder">
                                <div className="includedetails2">
                                    <button type="button" onClick={this.submitad} className="postsalead">Post now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-0 col-sm-0"></div>
                    </div>
                </div>
                <div className="footercontainer2">
                    <div className="footercountry2">
                        <p className="footercountry"><Link to="/Home" className="footeritemslink2"> Sitemap </Link></p>
                    </div>
                    <div>
                        <p className="footercountry4"><b>Free ClassNameifieds in Pakistan</b> . <i className="fa fa-copyright"></i> 2006-2020 OLX</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    categoryitem: state.categoryitem
})

// const mapDispatchToProps = (dispatch) => ({
//     selectcategoryitem: (term) => dispatch(selectcategoryitem(term)),
//     selectitem: (term) => dispatch(selectitem(term)),
// })
export default connect(mapStateToProps, null)(withRouter(PostAd2))

