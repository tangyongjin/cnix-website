
import React, {Component} from 'react';


class Slider  extends  Component {

  componentWillMount(){
        const script = document.createElement("script");
        script.src = "/assets/plugins/effects/canvas.particles.js";
        script.async = true;
        document.body.appendChild(script);
  }

 render() {

      return (

     <div id="slider_container"> 
      <section id="slider" className="fullheight" style={{background: 'url("/demo_files/images/particles_bg.jpg")'}}>
        <span className="overlay dark-2">{/* dark overlay [0 to 9 opacity] */}</span>
        <canvas id="canvas-particle" data-rgb="156,217,249">{/* CANVAS PARTICLES */}</canvas>
        <div className="display-table">
          <div className="display-table-cell vertical-align-middle">
            <div className="container text-center">
              <h1 className="m-0 wow fadeInUp" data-wow-delay="0.4s">
                
            

                <span className="rotate " data-animation="fade" data-speed={1500}>
                  让网络变得简单，轻松连接世界
                </span>
              </h1>
              <p className="lead font-lato fs-30 wow fadeInUp" data-wow-delay="0.7s">
              </p>
            {/*  <a className="btn btn-default btn-lg" href="#">PURCHASE NOW</a>  */}
            </div>
          </div>
        </div>
      </section>
      </div>
    );

 }
}
export default Slider;

