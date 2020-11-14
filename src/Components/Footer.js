import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Images from '../Project Images/ProjectImages'
import { Link } from 'react-router-dom'
import './Footer.css'


class Footer extends Component {

    render() {
        return (
            <div>
                <hr className="footerhr" />
                <div className="footercontainer">
                    <div className="footerlinks">
                        <p className="footerheading">POPULAR CATEGORIES</p>
                        <p className="footeritemsp"><Link to="/Cars" className="footeritemslink">Cars</Link></p>
                        <p className="footeritemsp"><Link to="/Flatsforrent" className="footeritemslink">Flats for rent</Link></p>
                        <p className="footeritemsp"><Link to="/Jobs" className="footeritemslink">Jobs</Link></p>
                        <p className="footeritemsp"><Link to="/Mobiles" className="footeritemslink">Mobile Phones</Link></p>
                    </div>
                    <div className="footerlinks">
                        <p className="footerheading">TRENDING SEARCHES</p>
                        <p className="footeritemsp"><Link to="/Bikes" className="footeritemslink">Bikes</Link></p>
                        <p className="footeritemsp"><Link to="/Watches" className="footeritemslink">Watches</Link></p>
                        <p className="footeritemsp"><Link to="/Books" className="footeritemslink">Books</Link></p>
                        <p className="footeritemsp"><Link to="/Dogs" className="footeritemslink">Dogs</Link></p>
                    </div>
                    <div className="footerlinks">
                        <p className="footerheading">ABOUT US</p>
                        <p className="footeritemsp"><Link to="/Aboutolx" className="footeritemslink">About OLX Group</Link></p>
                        <p className="footeritemsp"><Link to="/Aboutolx" className="footeritemslink">OLX Blog</Link></p>
                        <p className="footeritemsp"><Link to="/Aboutolx" className="footeritemslink">Contact Us</Link></p>
                        <p className="footeritemsp"><Link to="/Aboutolx" className="footeritemslink">OLX for Businesses</Link></p>
                    </div>
                    <div className="footerlinks">
                        <p className="footerheading">OLX</p>
                        <p className="footeritemsp"><Link to="/Helpolx" className="footeritemslink">Help</Link></p>
                        <p className="footeritemsp"><Link to="/Helpolx" className="footeritemslink">Sitemap</Link></p>
                        <p className="footeritemsp"><Link to="/Helpolx" className="footeritemslink">Legal & Privacy Information</Link></p>
                    </div>
                    <div className="footerlinks">
                        <p className="footerheading">FOLLOW US</p>
                        <span className="sociallinkp"><a href="https://www.facebook.com"><i className="sociallinkicon fa fa-facebook"></i></a></span>
                        <span className="sociallinkp"><a href="https://www.facebook.com"><i className="sociallinkicon fa fa-twitter"></i></a></span>
                        <span className="sociallinkp"><a href="https://www.facebook.com"><i className="sociallinkicon fa fa-youtube"></i></a></span>
                        <span className="sociallinkp"><a href="https://www.facebook.com"><i className="sociallinkicon fa fa-instagram"></i></a></span>
                        <div className="appdownloadbtn">
                            <button className="appstorebtn"><img className="appstore" src={Images.Appstore} alt="Appstore" /></button>
                            <button className="appstorebtn"><img className="appstore" src={Images.playstore} alt="Appstore" /></button>
                        </div>
                    </div>
                </div>
                <div className="footercontainer2">
                    <div className="footercountry2">
                        <p className="footercountry">Other Countries</p>
                        <p className="footercountry"><Link to="/Home" className="footeritemslink2"> India </Link></p>
                        <p className="footercountry3"> - </p>
                        <p className="footercountry"><Link to="/Home" className="footeritemslink2"> South Africa </Link></p>
                        <p className="footercountry3"> - </p>
                        <p className="footercountry"><Link to="/Home" className="footeritemslink2"> Indonesia</Link></p>
                    </div>
                    <div>
                        <p className="footercountry4"><b>Free Classifieds in Pakistan</b> . <i className="fa fa-copyright"></i> 2006-2020 OLX</p>
                    </div>
                </div>
            </div>
        )
    }

}
export default withRouter(Footer)
