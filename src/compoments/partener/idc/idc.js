import React, { Component } from 'react';
import Pageheader  from '../../public/pageheader'
import Footer    from '../../public/footer'
 
import Partner_header    from './partner_header'
import Partner_list    from './partner_list'
 

class Idc extends Component {
  render() {
    return (
    <div>
      
      
        <div id="wrapper">
           <Pageheader/>
          
           <Partner_header/>
           <Partner_list/>
          
          
           <Footer/>
        </div>
    </div>
    );
  }
}

export default Idc;