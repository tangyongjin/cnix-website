import React, { Component } from 'react';
 
 
import Pageheader  from '../../public/pageheader'
import Footer    from '../../public/footer'
 
import Ccx_service    from './ccx_service'
import Ccx_pic    from './ccx_pic'
import Ccx_steps    from './ccx_steps'


class Ccx extends Component {
  render() {
    return (
    <div>
      
      
        <div id="wrapper">
           <Pageheader/>
          
           <Ccx_service/>
           <Ccx_pic/>
           <Ccx_steps/>
          
           <Footer/>
        </div>
    </div>
    );
  }
}

export default Ccx;
