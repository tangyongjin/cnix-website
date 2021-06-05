var Pageheader = React.createClass({
  render: function() {
    return (

      <header id="topNav">
        <div className="full-container">
          {/* Mobile Menu Button */}
          <button className="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
            <i className="fa fa-bars" />
          </button>
          {/* Logo */}
          <a className="logo float-left" href="index.html">
            <img src="assets/images/_smarty/logo_light.png" /> 
            <img src="assets/images/_smarty/logo_dark.png"  /> 
          </a>
          <div className="navbar-collapse collapse float-right nav-main-collapse submenu-dark">
            <nav id="top_menu_nav" className="nav-main">
            </nav>
          </div>
        </div>
      </header>
    );
  }
});

  ReactDOM.render(<Pageheader/>, document.getElementById('header') );
 