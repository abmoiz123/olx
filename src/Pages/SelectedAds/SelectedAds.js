import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Images from '../../Project Images/ProjectImages'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Link } from 'react-router-dom'
// import './Ads.css'

class SelectedAds extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favourite: true
        }
        this.handlegotoitems = this.handlegotoitems.bind(this)
    }
    favourite = () => {
        if (this.state.favourite === true) {
            this.setState({
                favourite: false
            })
        } else {
            this.setState({
                favourite: true
            })
        }
    }
    handlegotoitems = () => {
        this.props.history.push('/Login')
    }
    render() {
        return (
            <div>
                <div className="adscon container-fluid">
                    <div className="adsro row">
                        <div className="basedonsearch col-lg-12 col-md-12 col-sm-12">
                            <p className="basedonsearch1">Based on your last search</p>
                            <p><Link to="/Items" className="basedonsearchlink">View more</Link></p>
                        </div>
                        {/* <div className="basedonsearchitems col-lg-3 col-md-4 col-sm-6">
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
                            <Link to="/Items" className="basedonsearchitemslink">
                                <div className="featureditems">
                                    <img className="featureditemspic" src={Images.Home} alt="Pic1" />
                                </div>
                                <div className="itemdiscription">
                                    <p className="itemprice">RS 17,500,000</p>
                                    <p className="itemprice2">3 Bds - 4 Ba - 120 Square Yards</p>
                                    <p className="itemprice3">120 Sq yard G+1 House in Haris Bunglows Safora Chowrangi</p>
                                    <div className="dateandlocation">
                                        <p className="itemprice4">gujjhsadjahsdjkhajkdhkajgujjhsadjahsdjkhajkdhkaj</p>
                                        <p className="itemprice5">Yesterday</p>
                                    </div>
                                </div>
                            </Link>
                        </div> */}
                        <div className="basedonsearchitems col-lg-3 col-md-4 col-sm-6">
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
                                        <p className="itemprice4">gujjhsadjahsdjkhajkdhkajgujjhsadjahsdjkhajkdhkaj</p>
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
export default withRouter(SelectedAds)