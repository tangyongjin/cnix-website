import React, { Component } from 'react';
 
import Pageheader  from '../../public/pageheader'
import Footer    from '../../public/footer'

import Cix_service    from './cix_service'
import Cix_pic    from './cix_pic'
import Cix_steps    from './cix_steps'


class Cix extends Component {
  render() {
    return (
    <div>
      
      
        <div id="wrapper">
           <Pageheader/>
          
           <Cix_service/>
           <Cix_pic/>
           <Cix_steps/>
          
           <Footer/>
        </div>
    </div>
    );
  }
}

export default Cix;
