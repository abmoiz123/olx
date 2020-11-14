import React, { Component } from 'react';
import './Home.css'
import Header from '../../Components/Header';
import Images from '../../Project Images/ProjectImages'

// import Login from '../Login/Login'
import Items from '../Items/Items'
import Footer from '../../Components/Footer';
import Ads from '../Ads/Ads'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="Headerfixed">
                    <Header />
                </div>
                <Items />
                <div><img className="olxposter" src={Images.olxposter} alt="olxPoster" /></div>    
                <Ads />
                <Footer />
            </div>
        )
    }
}
export default Home
