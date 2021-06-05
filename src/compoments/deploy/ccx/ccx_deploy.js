import React, { Component } from 'react';
 
 
import Pageheader  from '../../public/pageheader'
import Footer    from '../../public/footer'
 
import Ccx_service    from './ccx_service'
 
import Ccx_action    from './ccx_action'


class ccx_deploy extends Component {
  render() {
    return (
    <div>
      
      
        <div id="wrapper">
           <Pageheader/>
          
           <Ccx_service/>
       
           <Ccx_action/>
          
           <Footer/>
        </div>
    </div>
    );
  }
}

export default ccx_deploy;
