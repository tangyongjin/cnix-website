var Oneuser = React.createClass({
    render: function(){
        console.log(this)
        return (
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="box-icon box-icon-left">
              <a className="box-icon-title" href="#">
                <i className="et-flag" />
                <h2> {this.props.title} </h2>
              </a>
              <p className="text-muted">Lorem definitiones ei pri per recteque hendrerit scriptorem in errem scribentur mel fastidii.</p>
            </div>
          </div>
        );
    }
});

var Serivce6 = React.createClass(
{

 getInitialState: function(){
        return{users:[]};
    },


  componentDidMount: function() {
    this.serverRequest = $.getJSON(this.props.url, function (result) {
       this.setState({
        users: result 
      });
    }.bind(this));
  },



 render: function() {
        var self = this;
        console.log(this.state);
        var Users = this.state.users.map(function(p){
            return <Oneuser id={p.id}   title={p.name}   />
        });
    return (
      <div className="container">
        <div className="row"> 
           {Users}
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Serivce6 url="http://114.113.88.2:8888/backend/index.php/user/listuser"/>, document.getElementById('Services6') );
 