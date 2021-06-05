var Slider = React.createClass({
  componentWillMount() {
        const script = document.createElement("script");
        script.src = "assets/plugins/effects/canvas.particles.js";
        script.async = true;
        document.body.appendChild(script);
    },

  render: function() {
    return (
      <section id="slider" className="fullheight" style={{background: 'url("demo_files/images/particles_bg.jpg")'}}>
        <span className="overlay dark-2">{/* dark overlay [0 to 9 opacity] */}</span>
        <canvas id="canvas-particle" data-rgb="156,217,249">{/* CANVAS PARTICLES */}</canvas>
        <div className="display-table">
          <div className="display-table-cell vertical-align-middle">
            <div className="container text-center">
              <h1 className="m-0 wow fadeInUp" data-wow-delay="0.4s">
                WE ARE 
                {/*
                                    TEXT ROTATOR
                                    data-animation="fade|flip|flipCube|flipUp|spin"
                                */}
                <span className="rotate " data-animation="fade" data-speed={1500}>
                  SMARTY, MULTIPURPOSE, POWERFUL
                </span>
              </h1>
              <p className="lead font-lato fs-30 wow fadeInUp" data-wow-delay="0.7s">
                Over <span className="countTo" data-speed={4000}>550</span> html files! 
                <span className="theme-color fw-400 font-style-italic">Admin included</span> &amp; RTL
              </p>
              <a className="btn btn-default btn-lg" href="#">PURCHASE NOW</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
});


ReactDOM.render(<Slider/>, document.getElementById('slider_container') );