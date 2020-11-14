import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Images from '../../Project Images/ProjectImages'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Link } from 'react-router-dom'
import './Ads.css'

class Ads extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favourite: true
        }
        this.handlegotoitems = this.handlegotoitems.bind(this)
    }
    favourite = (event) => {
        if (this.state.favourite === true) {
            this.setState({
                favourite: false
            })
        } else {
            this.setState({
                favourite: true
            })
        }
        console.log(this.favourite)
    }
    handlegotoitems = (e) => {
        console.log(e.target.parent)
        // this.props.history.push('/SelectedAds')
    }
    render() {
        return (
            <div>
                <div className="lastsearch">
                    <div className="lastsearch2 row">
                        <div className="basedonsearch col-lg-12 col-md-12 col-sm-12">
                            <p className="basedonsearch1">Based on your last search</p>
                            <p><Link to="/" className="basedonsearchlink">View more</Link></p>
                        </div>
                        <div className="lastsearch3 col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        <p className="featuredp">FEATURED</p>
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            <p className="featuredp">FEATURED</p>
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Home} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">RS 17,500,000</p>
                                    <p className="itemprice2">3 Bds - 4 Ba - 120 Square Yards</p>
                                    <p className="itemprice3">120 Sq yard G+1 House in Haris Bunglows Safora Chowrangi</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">chakri road, rawalpindi</p>
                                        <p className="itemprice5">Yesterday</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="lastsearch3 col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        <p className="featuredp">FEATURED</p>
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            <p className="featuredp">FEATURED</p>
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Ad2} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">RS 47,000</p>
                                    <p className="itemprice2">SAMSUNG A51 JUST 2 MONTHS USED</p>
                                    <p className="itemprice3">Samsung A51 6/128 GB with box and all packed accessories just 2 months used 10 or 11 months warranty home used.Exchange possible with iphone.</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">Royal 8 Icon, Karachi, Sindh</p>
                                        <p className="itemprice5">Today</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="lastsearch3 col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        <p className="featuredp">FEATURED</p>
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            <p className="featuredp">FEATURED</p>
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Ad3} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">RS 15,000</p>
                                    <p className="itemprice2">PS3 slim(uk imported) with 7 games installed</p>
                                    <p className="itemprice3">PS3 slim 7 games installed with original controller games such as</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">North Karachi Buffer Zone, Karachi, Sindh</p>
                                        <p className="itemprice5">Today</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="lastsearch3 col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        <p className="featuredp">FEATURED</p>
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            <p className="featuredp">FEATURED</p>
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Ad4} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">Rs 1,500,000</p>
                                    <p className="itemprice2">5 Marla plot for sale in Good location in Rachana Town</p>
                                    <p className="itemprice3">Security wall, water, severage, electric, corpate road</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">Rana Town, Lahore, Punjab</p>
                                        <p className="itemprice5">Oct 21</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="lastsearch2b row">
                        <div className="basedonsearch col-lg-12 col-md-12 col-sm-12">
                            <p className="basedonsearch1">Fresh Recommendations</p>
                        </div>
                        <div className="lastsearch3b col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        {/* <p className="featuredp">FEATURED</p> */}
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            {/* <p className="featuredp">FEATURED</p> */}
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Ad5} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">Rs 1,599,000</p>
                                    <p className="itemprice2">Abdullah City Islamabad</p>
                                    <p className="itemprice3">Book your plot today and Get Amazing Discount</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">Chakri Road, Rawalpindi, Punjab</p>
                                        <p className="itemprice5">5 Days Ago</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="lastsearch3b col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        <p className="featuredp">FEATURED</p>
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            <p className="featuredp">FEATURED</p>
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Ad6} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">Rs 2,500</p>
                                    <p className="itemprice2">I PHONE Docking Station By Kit Sound (USED)</p>
                                    <p className="itemprice3">charging stand , radio , clock , Speaker</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">Divine Gardens, Lahore, Punjab</p>
                                        <p className="itemprice5">Yesterday</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="lastsearch3b col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        {/* <p className="featuredp">FEATURED</p> */}
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            {/* <p className="featuredp">FEATURED</p> */}
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Ad7} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">Rs 500,000</p>
                                    <p className="itemprice2">Honda City 2018 model asaan installments pe hasil karein</p>
                                    <p className="itemprice3">2005 se 2020 model apni pasand ki koi bhi new ya used car puray Pakistan me Hum se Finance krwaien</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">Model Town, Lahore, Punjab</p>
                                        <p className="itemprice5">5 Days Ago</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="lastsearch3b col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        <p className="featuredp">FEATURED</p>
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            <p className="featuredp">FEATURED</p>
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Ad8} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">Rs 17,000</p>
                                    <p className="itemprice2">Semi acoustic guitar (Inbuild 6-band equilizer and tuner)</p>
                                    <p className="itemprice3">41 size jumbo professional swift horse semi acoustic guitar. Model no (wG980CE/213Ts)</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">Peshawar, Khyber Pakhtunkhwa, Pakistan</p>
                                        <p className="itemprice5">Today</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="lastsearch3b col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        <p className="featuredp">FEATURED</p>
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            <p className="featuredp">FEATURED</p>
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Ad9} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">Rs 11,000</p>
                                    <p className="itemprice2">Hp z200 workstation i7 870</p>
                                    <p className="itemprice3">i7 870 8 threads</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">Multan, Punjab, Pakistan</p>
                                        <p className="itemprice5">Today</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="lastsearch3b col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        {/* <p className="featuredp">FEATURED</p> */}
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            {/* <p className="featuredp">FEATURED</p> */}
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Ad10} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">Rs 8,000</p>
                                    <p className="itemprice2">Clean and Quite Shared Office</p>
                                    <p className="itemprice3">Hi-speed Internet and Backup</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">OPF Housing Scheme, Lahore, Punjab</p>
                                        <p className="itemprice5">Oct 13</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="lastsearch3b col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        <p className="featuredp">FEATURED</p>
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            <p className="featuredp">FEATURED</p>
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Ad11} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">Rs 22,000</p>
                                    <p className="itemprice2">Electric water cooler</p>
                                    <p className="itemprice3">Electric water cooler Ghar baithe factory rate p hasil Karen Pakistan ka number 1 electric water cooler ab aapko milega factory rate per</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">Ferozepur Road, Lahore, Punjab</p>
                                        <p className="itemprice5">Oct 5</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="lastsearch3b col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        {/* <p className="featuredp">FEATURED</p> */}
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            {/* <p className="featuredp">FEATURED</p> */}
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Ad12} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">Rs 25,000</p>
                                    <p className="itemprice2">Very slightly used sofa's</p>
                                    <p className="itemprice3">Condition is almost brand new . Call for more details</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">Wapda Town, Lahore, Punjab</p>
                                        <p className="itemprice5">Today</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="lastsearch3b col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        {/* <p className="featuredp">FEATURED</p> */}
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            {/* <p className="featuredp">FEATURED</p> */}
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Ad13} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">Rs 1,000</p>
                                    <p className="itemprice2">Winter collection</p>
                                    <p className="itemprice3">8 to 10 design different colours deliver available</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">Shahdara, Lahore, Punjab</p>
                                        <p className="itemprice5">Yesterday</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="lastsearch3b col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        <p className="featuredp">FEATURED</p>
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            <p className="featuredp">FEATURED</p>
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Ad14} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">Rs 44,000</p>
                                    <p className="itemprice2">Vivo v17 pro</p>
                                    <p className="itemprice3">I am selling vivo v17 pro with box condition is 10/10</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">Peshawar, Khyber Pakhtunkhwa, Pakistan</p>
                                        <p className="itemprice5">Today</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="lastsearch3b col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        {/* <p className="featuredp">FEATURED</p> */}
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            {/* <p className="featuredp">FEATURED</p> */}
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Ad15} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">Rs 2,700</p>
                                    <p className="itemprice2">Samsung S 10 Akg white original Boxout Handfree</p>
                                    <p className="itemprice3">100% original Boxout Handfree.</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">Faisalabad, Punjab, Pakistan</p>
                                        <p className="itemprice5">Yesterday</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="lastsearch3b col-lg-3 col-md-4 col-sm-6">
                            {this.state.favourite ? (
                                <div className="featureddiv">
                                    <div className="featureddiv2">
                                        <p className="featuredp">FEATURED</p>
                                    </div>
                                    <div>
                                        <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon2" /></p>
                                    </div>
                                </div>
                            ) : (
                                    <div className="featureddiv">
                                        <div className="featureddiv2">
                                            <p className="featuredp">FEATURED</p>
                                        </div>
                                        <div>
                                            <p onClick={this.favourite} className="favouriteicon"><FavoriteBorderOutlinedIcon className="favouriteicon3" /></p>

                                        </div>
                                    </div>
                                )}
                            <button onClick={this.handlegotoitems} className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Ad16} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">Rs 3,900,000</p>
                                    <p className="itemprice2">1354 Plot is available for sale in bahria orchard phase 4</p>
                                    <p className="itemprice3">plot is available for sale in bahria orchard at good location</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">Bahria Orchard, Lahore, Punjab</p>
                                        <p className="itemprice5">Yesterday</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Ads)