import React, { Component } from 'react';
 
import Pageheader  from '../../public/pageheader'
import Footer    from '../../public/footer'
  
import Cdc_service    from './cdc_service'
import Cdc_pic    from './cdc_pic'
import Cdc_steps    from './cdc_steps'


class Cdc extends Component {
  render() {
    return (
    <div>
      
      
        <div id="wrapper">
           <Pageheader/>
          
           <Cdc_service/>
           <Cdc_pic/>
           <Cdc_steps/>
          
           <Footer/>
        </div>
    </div>
    );
  }
}

export default Cdc;
