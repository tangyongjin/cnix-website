var Alternate = React.createClass({
  render: function() {
    return (

      <div className="container">
        <div className="row">
          {/* toggle */}
          <div className="col-md-4 col-sm-4">
            <div className="toggle toggle-accordion toggle-transparent toggle-bordered-full">
              <div className="toggle active">
                <label>Lorem ipsum dolor.</label>
                <div className="toggle-content">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
              </div>
              <div className="toggle">
                <label>Sit amet, consectetur.</label>
                <div className="toggle-content">
                  <p>Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc.</p>
                </div>
              </div>
              <div className="toggle">
                <label>Consectetur adipiscing elit.</label>
                <div className="toggle-content">
                  <p>Ut enim massa, sodales tempor convallis et, iaculis ac massa.</p>
                </div>
              </div>
            </div>
          </div>
          {/* /toggle */}
          {/* skills */}
          <div className="col-md-4 col-sm-4">
            <h4>Our Skills</h4>
            <label>
              <span className="float-right">60%</span>
              MARKETING
            </label>
            <div className="progress progress-xxs">
              <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%', minWidth: '2em'}} />
            </div>
            <label>
              <span className="float-right">88%</span>
              SALES
            </label>
            <div className="progress progress-xxs">
              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '88%', minWidth: '2em'}} />
            </div>
            <label>
              <span className="float-right">93%</span>
              DESIGN
            </label>
            <div className="progress progress-xxs">
              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '93%', minWidth: '2em'}} />
            </div>
            <label>
              <span className="float-right">77%</span>
              DEVELOPMENT
            </label>
            <div className="progress progress-xxs">
              <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '77%', minWidth: '2em'}} />
            </div>
            <label>
              <span className="float-right">99%</span>
              OTHER
            </label>
            <div className="progress progress-xxs">
              <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '99%', minWidth: '2em'}} />
            </div>
          </div>
          {/* /skills */}
          {/* recent news */}
          <div className="col-md-4 col-sm-4">
            <h4>Recent News</h4>
            <div className="row tab-post">{/* post */}
              <div className="col-md-2 col-sm-2 col-xs-2">
                <a href="blog-sidebar-left.html">
                  <img src="demo_files/images/people/300x300/1-min.jpg" width={50} alt />
                </a>
              </div>
              <div className="col-md-10 col-sm-10 col-xs-10">
                <a href="blog-sidebar-left.html" className="tab-post-link">Maecenas metus nulla</a>
                <small>June 29 2014</small>
              </div>
            </div>{/* /post */}
            <div className="row tab-post">{/* post */}
              <div className="col-md-2 col-sm-2 col-xs-2">
                <a href="blog-sidebar-left.html">
                  <img src="demo_files/images/people/300x300/2-min.jpg" width={50} alt />
                </a>
              </div>
              <div className="col-md-10 col-sm-10 col-xs-10">
                <a href="blog-sidebar-left.html" className="tab-post-link">Curabitur pellentesque neque eget</a>
                <small>June 29 2014</small>
              </div>
            </div>{/* /post */}
            <div className="row tab-post">{/* post */}
              <div className="col-md-2 col-sm-2 col-xs-2">
                <a href="blog-sidebar-left.html">
                  <img src="demo_files/images/people/300x300/3-min.jpg" width={50} alt />
                </a>
              </div>
              <div className="col-md-10 col-sm-10 col-xs-10"> 	
                <a href="blog-sidebar-left.html" className="tab-post-link">Nam et lacus neque. Ut enim massa</a>
                <small>June 29 2014</small>
              </div>
            </div>{/* /post */}
          </div>
          {/* /recent news */}
        </div>
      </div>
    );
  }
});




ReactDOM.render(<Alternate/>, document.getElementById('sec_alternate') );