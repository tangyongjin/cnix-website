var Welcome = React.createClass({
  render: function() {
    return (

      <div className="container">
        <div className="text-center">
          <h1>Welcome! World Of <span>Smarty</span>.</h1>
          <h2 className="col-sm-10 offset-sm-1 mb-0 fw-400">Clean, fully responsive, extemly flexible multipurpose template that allows you to create any website you like.</h2>
        </div>
      </div>
    );
  }
});


ReactDOM.render(<Welcome/>, document.getElementById('sec_welcome') );