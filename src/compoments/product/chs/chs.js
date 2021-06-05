import React, { Component } from 'react';
 
import Pageheader  from '../../public/pageheader'
import Footer    from '../../public/footer'
  
import Chs_service    from './chs_service'
import Chs_pic    from './chs_pic'
import Chs_steps    from './chs_steps'
import Chs_buy    from './chs_buy'


class Chs extends Component {
  render() {
    return (
    <div>
      
      
        <div id="wrapper">
           <Pageheader/>
          
           <Chs_service/>
           <Chs_pic/>
           <Chs_steps/>
           <Chs_buy/>
          
           <Footer/>
        </div>
    </div>
    );
  }
}

export default Chs;