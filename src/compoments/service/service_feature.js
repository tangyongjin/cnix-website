

import React, { Component } from "react"


class  Service_feature extends Component {

 
  render() {
    return (

      <section id="features">
        <div className="container">
          <header className="text-center mb-60">
            <h2>Our Features</h2>
            <p className="lead font-lato">Lorem ipsum dolor sit amet adipiscium elit</p>
            <hr />
          </header>
          {/* FEATURED BOXES 3 */}
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <div className="text-center">
                <i className="ico-light ico-lg ico-rounded ico-hover et-circle-compass" />
                <h4>Pixel Perfect</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus.</p>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="text-center">
                <i className="ico-light ico-lg ico-rounded ico-hover et-piechart" />
                <h4>Graphs</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus.</p>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="text-center">
                <i className="ico-light ico-lg ico-rounded ico-hover et-strategy" />
                <h4>Startegy</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus.</p>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="text-center">
                <i className="ico-light ico-lg ico-rounded ico-hover et-streetsign" />
                <h4>SEO Optimized</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus. </p>
              </div>
            </div>
          </div>
          {/* /FEATURED BOXES 3 */}
          {/* FEATURED BOXES 3 */}
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <div className="text-center">
                <i className="ico-light ico-lg ico-rounded ico-hover et-trophy" />
                <h4>Winners</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus.</p>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="text-center">
                <i className="ico-light ico-lg ico-rounded ico-hover et-gears" />
                <h4>Responsive</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus.</p>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="text-center">
                <i className="ico-light ico-lg ico-rounded ico-hover et-tools" />
                <h4>Costomizable</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus.</p>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="text-center">
                <i className="ico-light ico-lg ico-rounded ico-hover et-layers" />
                <h4>Easy to Modify</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus. </p>
              </div>
            </div>
          </div>
          {/* /FEATURED BOXES 3 */}
        </div>
      </section>
    );
  }
}


export default Service_feature;