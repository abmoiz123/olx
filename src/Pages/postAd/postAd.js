import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import './postAd.css'
import { selectcategoryitem, selectitem } from '../../Store/Action/Action'



class PostAd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check: '',
        }
    }
    backtohome = () => {
        this.props.history.push('/')
    }
    componentDidUpdate() {
        if (this.state.check === '') {
            this.setState({
                check: this.props.categoryitem
            })
            // this.props.history.push('/')
            console.log('hello')
        } else {
            console.log('nothello')
        }
    }

    render() {
        let selectedcategory = this.props.selectedcategory
        // console.log(this.props.categoryitem)
        return (
            <div>
                <div className="Header">
                    <button className="back" onClick={this.backtohome}><i className="fa fa-arrow-left"></i></button>
                    <h2 className="olxname"><b>OLX</b></h2>
                </div>
                <div className="postadcon container">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3 className="postaddiv"><b>POST YOUR AD</b></h3>
                    </div>
                    <div className=" row">
                        <div className="col-lg-1 col-md-0 col-sm-0"></div>
                        <div className="choosecategory col-lg-10 col-md-12 col-sm-12">
                            <h6 className="choosecategory2"><b>CHOOSE A CATEGORY</b></h6>
                            <div className="itemlistcol2 row">
                                <div className="itemlistcol col-lg-6 col-md-6 col-sm-6 col-6">
                                    <div id="mobile" className="chooseitem" onClick={(e) => this.props.selectitem(e.target.id)}>
                                        <i id="mobile" className="itemicon fa fa-mobile"></i>
                                        <p id="mobile" className="itemname">Mobiles</p>
                                        <i id="mobile" className="itemicon fa fa-angle-right"></i>
                                    </div>
                                    <div id="vehicle" className="chooseitem" onClick={(e) => this.props.selectitem(e.target.id)}>
                                        <i id="vehicle" className="itemicon fa fa-car"></i>
                                        <p id="vehicle" className="itemname">Vehicles</p>
                                        <i id="vehicle" className="itemicon fa fa-angle-right"></i>
                                    </div>
                                    <div id="pfs" className="chooseitem" onClick={(e) => this.props.selectitem(e.target.id)}>
                                        <i id="pfs" className="itemicon fa fa-building-o"></i>
                                        <p id="pfs" className="itemname">Property for Sale</p>
                                        <i id="pfs" className="itemicon fa fa-angle-right"></i>
                                    </div>
                                    <div id="pfr" className="chooseitem" onClick={(e) => this.props.selectitem(e.target.id)}>
                                        <i id="pfr" className="itemicon fa fa-building-o"></i>
                                        <p id="pfr" className="itemname">Property for Rent</p>
                                        <i id="pfr" className="itemicon fa fa-angle-right"></i>
                                    </div>
                                    <div id="homeapp" className="chooseitem" onClick={(e) => this.props.selectitem(e.target.id)}>
                                        <i id="homeapp" className="itemicon fa fa-television"></i>
                                        <p id="homeapp" className="itemname">Electronis & Home Appliances</p>
                                        <i id="homeapp" className="itemicon fa fa-angle-right"></i>
                                    </div>
                                    <div id="bike" className="chooseitem" onClick={(e) => this.props.selectitem(e.target.id)}>
                                        <i id="bike" className="itemicon fa fa-bicycle"></i>
                                        <p id="bike" className="itemname">Bikes</p>
                                        <i id="bike" className="itemicon fa fa-angle-right"></i>
                                    </div>
                                    <div id="Business" className="chooseitem" onClick={(e) => this.props.selectitem(e.target.id)}>
                                        <i id="Business" className="itemicon fa fa-industry"></i>
                                        <p id="Business" className="itemname">Business, Industrial & Agriculture</p>
                                        <i id="Business" className="itemicon fa fa-angle-right"></i>
                                    </div>
                                    <div id="Services" className="chooseitem" onClick={(e) => this.props.selectitem(e.target.id)}>
                                        <i id="Services" className="itemicon fa fa-wrench"></i>
                                        <p id="Services" className="itemname">Services</p>
                                        <i id="Services" className="itemicon fa fa-angle-right"></i>
                                    </div>
                                    <div id="Jobs" className="chooseitem" onClick={(e) => this.props.selectitem(e.target.id)}>
                                        <i id="Jobs" className="itemicon fa fa-suitcase"></i>
                                        <p id="Jobs" className="itemname">Jobs</p>
                                        <i id="Jobs" className="itemicon fa fa-angle-right"></i>
                                    </div>
                                    <div id="Animals" className="chooseitem" onClick={(e) => this.props.selectitem(e.target.id)}>
                                        <i id="Animals" className="itemicon fa fa-paw"></i>
                                        <p id="Animals" className="itemname">Animals</p>
                                        <i id="Animals" className="itemicon fa fa-angle-right"></i>
                                    </div>
                                    <div id="Furniture" className="chooseitem" onClick={(e) => this.props.selectitem(e.target.id)}>
                                        <i id="Furniture" className="itemicon fa fa-bed"></i>
                                        <p id="Furniture" className="itemname">Furniture & Home Decor</p>
                                        <i id="Furniture" className="itemicon fa fa-angle-right"></i>
                                    </div>
                                    <div id="Fashion" className="chooseitem" onClick={(e) => this.props.selectitem(e.target.id)}>
                                        <i id="Fashion" className="itemicon fa fa-female"></i>
                                        <p id="Fashion" className="itemname">Fashion & Beauty</p>
                                        <i id="Fashion" className="itemicon fa fa-angle-right"></i>
                                    </div>
                                    <div id="Books" className="chooseitem" onClick={(e) => this.props.selectitem(e.target.id)}>
                                        <i id="Books" className="itemicon fa fa-book"></i>
                                        <p id="Books" className="itemname">Books, Sports & Hobbies</p>
                                        <i id="Books" className="itemicon fa fa-angle-right"></i>
                                    </div>
                                    <div id="Kids" className="chooseitem2" onClick={(e) => this.props.selectitem(e.target.id)}>
                                        <i id="Kids" className="itemicon fa fa-child"></i>
                                        <p id="Kids" className="itemname">Kids</p>
                                        <i id="Kids" className="itemicon fa fa-angle-right"></i>
                                    </div>
                                </div>
                                <div className="itemlistcol col-lg-6 col-md-6 col-sm-6 col-6">
                                    {selectedcategory === "mobile" ? (
                                        <div>
                                            <div id="Tablets" onClick={(e) => this.props.selectcategoryitem(e.target.id)} className="chooseitem3">
                                                <p id="Tablets" className="itemname2">Tablets</p>
                                            </div>
                                            <div id="Accessories" onClick={(e) => this.props.selectcategoryitem(e.target.id)} className="chooseitem3">
                                                <p id="Accessories" className="itemname2">Accessories</p>
                                            </div>
                                            <div id="Mobile Phones" onClick={(e) => this.props.selectcategoryitem(e.target.id)} className="chooseitem4">
                                                <p id="Mobile Phones" className="itemname2">Mobile Phones</p>
                                            </div>
                                        </div>
                                    ) : null}
                                    {selectedcategory === "vehicle" ? (
                                        <div>
                                            <div id="Cars" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Cars" className="itemname2">Cars</p>
                                            </div>
                                            <div id="Cars On Installments" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Cars On Installments" className="itemname2">Cars On Installments</p>
                                            </div>
                                            <div id="Cars Accessories" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Cars Accessories" className="itemname2">Cars Accessories</p>
                                            </div>
                                            <div id="Spare Parts" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Spare Parts" className="itemname2">Spare Parts</p>
                                            </div>
                                            <div id="Buses, Vans & Trucks" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Buses, Vans & Trucks" className="itemname2">Buses, Vans & Trucks</p>
                                            </div>
                                            <div id="Rickshaw & chingchi" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Rickshaw & chingchi" className="itemname2">Rickshaw & chingchi</p>
                                            </div>
                                            <div id="Other Vehicles" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Other Vehicles" className="itemname2">Other Vehicles</p>
                                            </div>
                                            <div id="Boats" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Boats" className="itemname2">Boats</p>
                                            </div>
                                            <div id="Tractors & Trailers" className="chooseitem4" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Tractors & Trailers" className="itemname2">Tractors & Trailers</p>
                                            </div>
                                        </div>
                                    ) : null}
                                    {selectedcategory === 'pfs' ? (
                                        <div>
                                            <div id="Lands & Plots" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Lands & Plots" className="itemname2">Lands & Plots</p>
                                            </div>
                                            <div id="Houses" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Houses" className="itemname2">Houses</p>
                                            </div>
                                            <div id="Appartments & Flats" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Appartments & Flats" className="itemname2">Appartments & Flats</p>
                                            </div>
                                            <div id="Shops-Offices-Commercial Space" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Shops-Offices-Commercial Space" className="itemname2">Shops-Offices-Commercial Space</p>
                                            </div>
                                            <div id="Portions & Floors" className="chooseitem4" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Portions & Floors" className="itemname2">Portions & Floors</p>
                                            </div>
                                        </div>
                                    ) : null}
                                    {selectedcategory === 'pfr' ? (
                                        <div>
                                            <div id="Houses" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Houses" className="itemname2">Houses</p>
                                            </div>
                                            <div id="Appartments & Flats" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Appartments & Flats" className="itemname2">Appartments & Flats</p>
                                            </div>
                                            <div id="Portions & Floors" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Portions & Floors" className="itemname2">Portions & Floors</p>
                                            </div>
                                            <div id="Shops-Offices-Commercial Space" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Shops-Offices-Commercial Space" className="itemname2">Shops-Offices-Commercial Space</p>
                                            </div>
                                            <div id="Rooms" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Rooms" className="itemname2">Rooms</p>
                                            </div>
                                            <div id="Roommates & Paying Guests" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Roommates & Paying Guests" className="itemname2">Roommates & Paying Guests</p>
                                            </div>
                                            <div id="Vacation Rentals - Guest Houses" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Vacation Rentals - Guest Houses" className="itemname2">Vacation Rentals - Guest Houses</p>
                                            </div>
                                            <div id="Land & Plots" className="chooseitem4" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Land & Plots" className="itemname2">Land & Plots</p>
                                            </div>
                                        </div>
                                    ) : null}
                                    {selectedcategory === 'homeapp' ? (
                                        <div>
                                            <div id="Computers & Accessories" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Computers & Accessories" className="itemname2">Computers & Accessories</p>
                                            </div>
                                            <div id="TV - Video - Audio" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="TV - Video - Audio" className="itemname2">TV - Video - Audio</p>
                                            </div>
                                            <div id="Cameras & Accessories" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Cameras & Accessories" className="itemname2">Cameras & Accessories</p>
                                            </div>
                                            <div id="Games & Entertainment" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Games & Entertainment" className="itemname2">Games & Entertainment</p>
                                            </div>
                                            <div id="Other Home Appliances" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Other Home Appliances" className="itemname2">Other Home Appliances</p>
                                            </div>
                                            <div id="Generators, UPS & Power Stations" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Generators, UPS & Power Stations" className="itemname2">Generators, UPS & Power Stations</p>
                                            </div>
                                            <div id="Kitchen Appliances" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Kitchen Appliances" className="itemname2">Kitchen Appliances</p>
                                            </div>
                                            <div id="AC & Coolers" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="AC & Coolers" className="itemname2">AC & Coolers</p>
                                            </div>
                                            <div id="Fridges & Freezers" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Fridges & Freezers" className="itemname2">Fridges & Freezers</p>
                                            </div>
                                            <div id="Washing Machines & Dryers" className="chooseitem4" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Washing Machines & Dryers" className="itemname2">Washing Machines & Dryers</p>
                                            </div>
                                        </div>
                                    ) : null}
                                    {selectedcategory === 'bike' ? (
                                        <div>
                                            <div id="Motorcycles" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Motorcycles" className="itemname2">Motorcycles</p>
                                            </div>
                                            <div id="Spare Parts" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Spare Parts" className="itemname2">Spare Parts</p>
                                            </div>
                                            <div id="Bicycles" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Bicycles" className="itemname2">Bicycles</p>
                                            </div>
                                            <div id="ATV & Quads" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="ATV & Quads" className="itemname2">ATV & Quads</p>
                                            </div>
                                            <div id="Scooters" className="chooseitem4" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Scooters" className="itemname2">Scooters</p>
                                            </div>
                                        </div>
                                    ) : null}
                                    {selectedcategory === 'Business' ? (
                                        <div>
                                            <div id="Business For Sale" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Business For Sale" className="itemname2">Business For Sale</p>
                                            </div>
                                            <div id="Food & Restaurants" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Food & Restaurants" className="itemname2">Food & Restaurants</p>
                                            </div>
                                            <div id="Trade & Industrial" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Trade & Industrial" className="itemname2">Trade & Industrial</p>
                                            </div>
                                            <div id="Construction & Heavy Machinery" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Construction & Heavy Machinery" className="itemname2">Construction & Heavy Machinery</p>
                                            </div>
                                            <div id="Agriculture" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Agriculture" className="itemname2">Agriculture</p>
                                            </div>
                                            <div id="Other Business & Industry" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Other Business & Industry" className="itemname2">Other Business & Industry</p>
                                            </div>
                                            <div id="Medical & Pharma" className="chooseitem4" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Medical & Pharma" className="itemname2">Medical & Pharma</p>
                                            </div>
                                        </div>
                                    ) : null}
                                    {selectedcategory === 'Services' ? (
                                        <div>
                                            <div id="Education & Classes" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Education & Classes" className="itemname2">Education & Classes</p>
                                            </div>
                                            <div id="Travel & Visa" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Travel & Visa" className="itemname2">Travel & Visa</p>
                                            </div>
                                            <div id="Car Rental" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Car Rental" className="itemname2">Car Rental</p>
                                            </div>
                                            <div id="Drivers & Taxi" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Drivers & Taxi" className="itemname2">Drivers & Taxi</p>
                                            </div>
                                            <div id="Web Development" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Web Development" className="itemname2">Web Development</p>
                                            </div>
                                            <div id="Other Services" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Other Services" className="itemname2">Other Services</p>
                                            </div>
                                            <div id="Electronics & Computers Repair" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Electronics & Computers Repair" className="itemname2">Electronics & Computers Repair</p>
                                            </div>
                                            <div id="Event Services" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Event Services" className="itemname2">Event Services</p>
                                            </div>
                                            <div id="Health & Beauty" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Health & Beauty" className="itemname2">Health & Beauty</p>
                                            </div>
                                            <div id="Maids & Domestic Help" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Maids & Domestic Help" className="itemname2">Maids & Domestic Help</p>
                                            </div>
                                            <div id="Movers & Packers" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Movers & Packers" className="itemname2">Movers & Packers</p>
                                            </div>
                                            <div id="Home & Office Repair" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Home & Office Repair" className="itemname2">Home & Office Repair</p>
                                            </div>
                                            <div id="Catering & Restaurant" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Catering & Restaurant" className="itemname2">Catering & Restaurant</p>
                                            </div>
                                            <div id="Medical & Pharma" className="chooseitem4" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Medical & Pharma" className="itemname2">Medical & Pharma</p>
                                            </div>
                                        </div>
                                    ) : null}
                                    {selectedcategory === 'Jobs' ? (
                                        <div>
                                            <div id="Online" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Online" className="itemname2">Online</p>
                                            </div>
                                            <div id="Marketing" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Marketing" className="itemname2">Marketing</p>
                                            </div>
                                            <div id="Advertising & PR" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Advertising & PR" className="itemname2">Advertising & PR</p>
                                            </div>
                                            <div id="Education" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Education" className="itemname2">Education</p>
                                            </div>
                                            <div id="Customer Service" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Customer Service" className="itemname2">Customer Service</p>
                                            </div>
                                            <div id="Sales" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Sales" className="itemname2">Sales</p>
                                            </div>
                                            <div id="IT & Networking" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="IT & Networking" className="itemname2">IT & Networking</p>
                                            </div>
                                            <div id="Hotels & Tourism" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Hotels & Tourism" className="itemname2">Hotels & Tourism</p>
                                            </div>
                                            <div id="Clerical & Administration" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Clerical & Administration" className="itemname2">Clerical & Administration</p>
                                            </div>
                                            <div id="Accounting & Finance" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Accounting & Finance" className="itemname2">Accounting & Finance</p>
                                            </div>
                                            <div id="Manufacturing" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Manufacturing" className="itemname2">Manufacturing</p>
                                            </div>
                                            <div id="Medical" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Medical" className="itemname2">Medical</p>
                                            </div>
                                            <div id="Domestic Staff" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Domestic Staff" className="itemname2">Domestic Staff</p>
                                            </div>
                                            <div id="Part-Time" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Part-Time" className="itemname2">Part-Time</p>
                                            </div>
                                            <div id="Other Jobs" className="chooseitem4" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Other Jobs" className="itemname2">Other Jobs</p>
                                            </div>
                                        </div>
                                    ) : null}
                                    {selectedcategory === 'Animals' ? (
                                        <div>
                                            <div id="Fish Aquariums" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Fish Aquariums" className="itemname2">Fish Aquariums</p>
                                            </div>
                                            <div id="Birds" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Birds" className="itemname2">Birds</p>
                                            </div>
                                            <div id="Hens & Aseel" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Hens & Aseel" className="itemname2">Hens & Aseel</p>
                                            </div>
                                            <div id="Cats" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Cats" className="itemname2">Cats</p>
                                            </div>
                                            <div id="Dogs" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Dogs" className="itemname2">Dogs</p>
                                            </div>
                                            <div id="Livestock" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Livestock" className="itemname2">Livestock</p>
                                            </div>
                                            <div id="Hourses" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Hourses" className="itemname2">Hourses</p>
                                            </div>
                                            <div id="Pet Food & Accessories" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Pet Food & Accessories" className="itemname2">Pet Food & Accessories</p>
                                            </div>
                                            <div id="Other Animals" className="chooseitem4" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Other Animals" className="itemname2">Other Animals</p>
                                            </div>
                                        </div>
                                    ) : null}
                                    {selectedcategory === 'Furniture' ? (
                                        <div>
                                            <div id="Sofa & Chairs" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Sofa & Chairs" className="itemname2">Sofa & Chairs</p>
                                            </div>
                                            <div id="Beds & Wardrobes" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Beds & Wardrobes" className="itemname2">Beds & Wardrobes</p>
                                            </div>
                                            <div id="Home Decoration" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Home Decoration" className="itemname2">Home Decoration</p>
                                            </div>
                                            <div id="Tables & Dining" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Tables & Dining" className="itemname2">Tables & Dining</p>
                                            </div>
                                            <div id="Garden & Outdoor" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Garden & Outdoor" className="itemname2">Garden & Outdoor</p>
                                            </div>
                                            <div id="Painting & Mirrors" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Painting & Mirrors" className="itemname2">Painting & Mirrors</p>
                                            </div>
                                            <div id="Rugs & Carpets" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Rugs & Carpets" className="itemname2">Rugs & Carpets</p>
                                            </div>
                                            <div id="Certain & Blinds" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Certain & Blinds" className="itemname2">Certain & Blinds</p>
                                            </div>
                                            <div id="Office Furniture" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Office Furniture" className="itemname2">Office Furniture</p>
                                            </div>
                                            <div id="Other Household Items" className="chooseitem4" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Other Household Items" className="itemname2">Other Household Items</p>
                                            </div>
                                        </div>
                                    ) : null}
                                    {selectedcategory === 'Fashion' ? (
                                        <div>
                                            <div id="Accessories" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Accessories" className="itemname2">Accessories</p>
                                            </div>
                                            <div id="Clothes" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Clothes" className="itemname2">Clothes</p>
                                            </div>
                                            <div id="Footwear" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Footwear" className="itemname2">Footwear</p>
                                            </div>
                                            <div id="Jewellery" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Jewellery" className="itemname2">Jewellery</p>
                                            </div>
                                            <div id="Make Up" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Make Up" className="itemname2">Make Up</p>
                                            </div>
                                            <div id="Skin & Hair" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Skin & Hair" className="itemname2">Skin & Hair</p>
                                            </div>
                                            <div id="Watches" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Watches" className="itemname2">Watches</p>
                                            </div>
                                            <div id="Wedding" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Wedding" className="itemname2">Wedding</p>
                                            </div>
                                            <div id="Lawn & Pret" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Lawn & Pret" className="itemname2">Lawn & Pret</p>
                                            </div>
                                            <div id="Couture" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Couture" className="itemname2">Couture</p>
                                            </div>
                                            <div id="Other Fashion" className="chooseitem4" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Other Fashion" className="itemname2">Other Fashion</p>
                                            </div>
                                        </div>
                                    ) : null}
                                    {selectedcategory === 'Books' ? (
                                        <div>
                                            <div id="Books & Megazines" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Books & Megazines" className="itemname2">Books & Megazines</p>
                                            </div>
                                            <div id="Musical Instruments" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Musical Instruments" className="itemname2">Musical Instruments</p>
                                            </div>
                                            <div id="Sports Equipments" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Sports Equipments" className="itemname2">Sports Equipments</p>
                                            </div>
                                            <div id="Jym & Fitness" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Jym & Fitness" className="itemname2">Jym & Fitness</p>
                                            </div>
                                            <div id="Other Hobbies" className="chooseitem4" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Other Hobbies" className="itemname2">Other Hobbies</p>
                                            </div>
                                        </div>
                                    ) : null}
                                    {selectedcategory === 'Kids' ? (
                                        <div>
                                            <div id="Kids Furniture" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Kids Furniture" className="itemname2">Kids Furniture</p>
                                            </div>
                                            <div id="Toys" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Toys" className="itemname2">Toys</p>
                                            </div>
                                            <div id="Prams & Walkers" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Prams & Walkers" className="itemname2">Prams & Walkers</p>
                                            </div>
                                            <div id="Swing & Slides" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Swing & Slides" className="itemname2">Swing & Slides</p>
                                            </div>
                                            <div id="Kids Bikes" className="chooseitem3" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Kids Bikes" className="itemname2">Kids Bikes</p>
                                            </div>
                                            <div id="Kids Accessories" className="chooseitem4" onClick={(e) => this.props.selectcategoryitem(e.target.id)}>
                                                <p id="Kids Accessories" className="itemname2">Kids Accessories</p>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-0 col-sm-0"></div>
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
    current_user: state.current_user,
    users: state.users,
    userloginconform: state.userloginconform,
    selectedcategory: state.selectedcategory,
    categoryitem: state.categoryitem
})

const mapDispatchToProps = (dispatch) => ({
    // selectitem: (term) => {
    //     dispatch({
    //         type: "selectcategory",
    //         payload: term,
    //     });
    // },
    // selectcategoryitem: (term) => {
    //     dispatch({
    //         type: "categoryitem",
    //         payload: term,

    //     });
    // },
    selectcategoryitem: (term) => dispatch(selectcategoryitem(term)),
    selectitem: (term) => dispatch(selectitem(term)),
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostAd))