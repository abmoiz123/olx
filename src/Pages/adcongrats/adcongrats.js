import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './adcongrats.css'


class adcongrat extends Component {
    gotoadpage = () => {
        this.props.history.push('/adpreview')
    }
    render() {
        return (
            <div>
                <div className="Header">
                    <h2 className="olxname"><b>OLX</b></h2>
                </div>
                <div className="congratscon container">
                    <div className="row">
                        <div className="col-lg-4 col-md-3 col-sm-0"></div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <p><i className="circleright fa fa-check-circle"></i></p>
                            <h4><b>Congratulations!</b></h4>
                            <p><b>Your Ad Will Go Live Shortly...</b></p>
                            <button onClick={this.gotoadpage} className="previewadbtn">Priview Ad</button>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-0"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(adcongrat)

