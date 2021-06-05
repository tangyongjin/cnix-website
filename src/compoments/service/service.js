import React, { Component } from 'react';
 
import Pageheader  from '../public/pageheader'
import Footer    from '../public/footer'
  
 
import Service_header    from './service_header'
import Service_feature    from './service_feature'
import Service_price    from './service_price'


class Cix extends Component {
  render() {
    return (
    <div>
      
      
        <div id="wrapper">
           <Pageheader/>
           <Service_header/>
           <Service_feature/>
           <Service_price/>
          
           <Footer/>
        </div>
    </div>
    );
  }
}

export default Cix;