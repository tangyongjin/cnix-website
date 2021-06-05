
import React, { Component } from "react"



class  Service_price extends Component {

   render() {
    return (

      <section id="pricing">
        <div className="container">
          <header className="text-center mb-60">
            <h2>Our Pricing</h2>
            <p className="lead font-lato">Lorem ipsum dolor sit amet adipiscium elit</p>
            <hr />
          </header>
          <div className="row">
            <div className="col-md-3 col-sm-3">
              <div className="price-clean">                                
                <h4>
                  <sup>$</sup>15<em>/month</em>
                </h4>
                <h5> Starter </h5>
                <hr />
                <p>For individuals looking for something simple to get started.</p>
                <hr />
                <a href="#" className="btn btn-3d btn-teal">Learn More</a>
              </div>
            </div>
            <div className="col-md-3 col-sm-3">
              <div className="price-clean">                                
                <h4>
                  <sup>$</sup>25<em>/month</em>
                </h4>
                <h5> BUSINESS </h5>
                <hr />
                <p>For individuals looking for something simple to get started.</p>
                <hr />
                <a href="#" className="btn btn-3d btn-teal">Learn More</a>
              </div>
            </div>
            <div className="col-md-3 col-sm-3">
              <div className="price-clean price-clean-popular"> 
                <div className="ribbon"> 
                  <div className="ribbon-inner">POPULAR</div>
                </div>
                <h4>
                  <sup>$</sup>35<em>/month</em>
                </h4>
                <h5> DEVELOPER </h5>
                <hr />
                <p>For individuals looking for something simple to get started.</p>
                <hr />
                <a href="#" className="btn btn-3d btn-primary">Learn More</a>
              </div>
            </div>
            <div className="col-md-3 col-sm-3">
              <div className="price-clean">                                
                <h4>
                  <sup>$</sup>50<em>/month</em>
                </h4>
                <h5> VIP </h5>
                <hr />
                <p>For individuals looking for something simple to get started.</p>
                <hr />
                <a href="#" className="btn btn-3d btn-teal">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}



export default Service_price;