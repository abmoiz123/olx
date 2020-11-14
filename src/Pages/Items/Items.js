import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Items.css'
import { connect } from 'react-redux'


class Items extends Component {
    constructor() {
        super()
        this.state = {
            allitemsshow: false 
        }
    }
    showallitems = () => {
        if (this.state.allitemsshow === false) {
            this.setState({
                allitemsshow: true
            })
        } else {
            this.setState({
                allitemsshow: false
            })
        }
    }
    render() {
        console.log( "itemwala" ,this.props.current_user)
        return (
            <div>
                <div className="container-fluid">
                    <div className="allitemrow row">
                        <div className="col-lg-2 col-md-2 col-sm-12">
                            <button onClick={this.showallitems} className="allitemsbtn">
                                <span>ALL CATEGORIES</span>
                                <i className="allitemslink fa fa-angle-down"></i>
                            </button>
                        </div>
                        <div className="col-lg-10 col-md-12 col-sm-12">
                            <button className="itemslist"><Link to="/" className="itemslistlink">Mobile Phones</Link></button>
                            <button className="itemslist"><Link to="/" className="itemslistlink">Cars</Link></button>
                            <button className="itemslist"><Link to="/" className="itemslistlink">Motorcycles</Link></button>
                            <button className="itemslist"><Link to="/" className="itemslistlink">Houses</Link></button>
                            <button className="itemslist"><Link to="/" className="itemslistlink">TV-Video-Audio</Link></button>
                            <button className="itemslist"><Link to="/" className="itemslistlink">Tablets</Link></button>
                            <button className="itemslist"><Link to="/" className="itemslistlink">Land & Plots</Link></button>
                        </div>
                    </div>
                </div>
                {this.state.allitemsshow ? (
                    <div className="allitemscontainer container-fluid">
                        <div className="allitemsrow row">
                            <div className="allitemscol col-lg-3 col-md-3 col-sm-6">
                                <div className="Vehiclesdiv">
                                    <p className="allitemshedinglinkp"><Link to="/" className="allitemshedinglink">Vehicles</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Tractors & Trailers</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Boats</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Other Vehicles</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Rickshaw & Chingchi</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Buses, Vans & Trucks</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Spare Parts</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Cars Accessories</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Cars On Installments</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Cars</Link></p>
                                </div>
                                <div className="Vehiclesdiv">
                                    <p className="allitemshedinglinkp"><Link to="/" className="allitemshedinglink">Mobiles</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Mobile Phones</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Accessories</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Tablets</Link></p>
                                </div>
                                <div className="Vehiclesdiv">
                                    <p className="allitemshedinglinkp"><Link to="/" className="allitemshedinglink">Electronics & Home Appliances</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Washing Machine & Dryers</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Fridge & Freezers</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">AC & Coolers</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Kitchen Appliances</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Generator, UPS & Power Solutions</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Other Home Appliances</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Games & Entertainment</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Cameras & Accessories</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">TV-Video-Audio</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Computer & Accessories</Link></p>
                                </div>
                                <div className="Vehiclesdiv">
                                    <p className="allitemshedinglinkp"><Link to="/" className="allitemshedinglink">Property For Sale</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Portions & Floors</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Shops-Offices-Commercial Space</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Apartments & Flats</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Houses</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Land & Plots</Link></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="Vehiclesdiv">
                                    <p className="allitemshedinglinkp"><Link to="/" className="allitemshedinglink">Animals</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Others Animals</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Pet Food & Accessories</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Horses</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Livestock</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Dogs</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Cats</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Hens & Aseel</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Birds</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Fish & Aquariums</Link></p>
                                </div>
                                <div className="Vehiclesdiv">
                                    <p className="allitemshedinglinkp"><Link to="/" className="allitemshedinglink">Furniture & Home Decor</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Other Household Items</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Office Furniture</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Curtains & Blinds</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Rugs & Carpets</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Painting & Mirrors</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Garden & Outdoor</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Tables & Dining</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Home Decoration</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Beds & Wardrobes</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Sofa & Chairs</Link></p>
                                </div>
                                <div className="Vehiclesdiv">
                                    <p className="allitemshedinglinkp"><Link to="/" className="allitemshedinglink">Business, Industrial & Agriculture</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Medical & Pharma</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Other Business & Industry</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Agriculture</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Constructions & Heavy Machinery</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Trade & Industrial</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Food & Restaurants</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Business For Sale</Link></p>
                                </div>
                                <div className="Vehiclesdiv">
                                    <p className="allitemshedinglinkp"><Link to="/" className="allitemshedinglink">Bikes</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Scooters</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">ATV & Quads</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Bicycles</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Spare Parts</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Motor Cycles</Link></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="Vehiclesdiv">
                                    <p className="allitemshedinglinkp"><Link to="/" className="allitemshedinglink">Fashion & Beauty</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Other Fashion</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Couture</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Lawn & Pret</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Wedding</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Watches</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Skin & Hair</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Make Up</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Jewellery</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Footwear</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Clothes</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Accessories</Link></p>
                                </div>
                                <div className="Vehiclesdiv">
                                    <p className="allitemshedinglinkp"><Link to="/" className="allitemshedinglink">Property For Rent</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Land & Plots</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Vacation Rentals-Guest Houses</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Roommates & Paying Guests</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Rooms</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Shops-Offices-Commercial Space</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Portions & Floors</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Apartments & Flats</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Houses</Link></p>
                                </div>
                                <div className="Vehiclesdiv">
                                    <p className="allitemshedinglinkp"><Link to="/" className="allitemshedinglink">Jobs</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Other Jobs</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Part-Time</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Domestic Staff</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Medical</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Manufacturing</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Accounting & Finance</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Human Resources</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Clerical & Administration</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Hotels & Tourism</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">IT & Networking</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Sales</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Customer Service</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Education</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Advertising & PR</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Marketing</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Online</Link></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="Vehiclesdiv">
                                    <p className="allitemshedinglinkp"><Link to="/" className="allitemshedinglink">Services</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Farm & Fresh Food</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Catering & Restaurant</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Home & Office Repair</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Movers & Packers</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Maids & Domestic Help</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Health & Beauty</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Event Services</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Electronics & Computer Repair</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Other Services</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Web Development</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Driver & Taxi</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Car Rental</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Travel & Visa</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Education & Classes</Link></p>
                                </div>
                                <div className="Vehiclesdiv">
                                    <p className="allitemshedinglinkp"><Link to="/" className="allitemshedinglink">Books,Sports & Hobbies</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Other Hobbies</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Gym Fitness</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Sports Equipments</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Musical Instruments</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Books & Magazines</Link></p>
                                </div>
                                <div className="Vehiclesdiv">
                                    <p className="allitemshedinglinkp"><Link to="/" className="allitemshedinglink">Kids</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Kids Accessories</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Kids Bikes</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Swings & Slides</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Prams & Walkers</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Toys</Link></p>
                                    <p className="allitemslinkp"><Link to="/" className="allitemslink2">Kids Furniture</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
                {/* <div><img className="olxposter" src={Images.olxposter} alt="olxPoster" /></div> */}

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    current_user: state.current_user,
    users: state.users,
  })

export default connect(mapStateToProps, null)(withRouter(Items))

// export default withRouter(Items)