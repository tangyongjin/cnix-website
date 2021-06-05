import React, {
  Component
} from 'react';
import $ from 'jquery';



class Oneuser  extends  Component {

  render(){
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

}
 

class Serivce6  extends  Component{

 


  componentWillMount() {

    this.serverRequest = $.getJSON("http://39.106.54.108:8964/backend/index.php/user/listuser", function(result) {
      this.setState({
        users: result
      });
    }.bind(this));
  }



  render() {

    // var self = this;
    // console.log(this.state);
    // var Users = this.state.users.map(function(p) {
    //   return <Oneuser key={p.id}   id={p.id}   title={p.name}   />
    // });
    


    return (
      <section  id="Services6">
      <div className="container">
        <div className="row"> 
           AAAA
        </div>
      </div>
    </section>
    );
  }

};



export default Serivce6;