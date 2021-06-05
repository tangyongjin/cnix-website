var Callout = React.createClass({
  render: function() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-12">{/* left text */}
            <h3>Call now at <span><strong>+800-565-2390</strong></span> and get 15% discount!</h3>
            <p className="font-lato fw-300 fs-20 mb-0">
              We truly care about our users and our product.
            </p>
          </div>{/* /left text */}
          <div className="col-md-3 col-sm-12 text-right">{/* right btn */}
            <a href="#purchase" rel="nofollow" target="_blank" className="btn btn-primary btn-lg">PURCHASE NOW</a>
          </div>{/* /right btn */}
        </div>
      </div>
    );
  }
});

 

ReactDOM.render(<Callout/>, document.getElementById('callout') );