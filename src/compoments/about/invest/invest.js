import React, { Component } from 'react';
 
import Pageheader  from '../../public/pageheader'
import Footer    from '../../public/footer'
 

import Invest_1    from './invest_1'
import Invest_2    from './invest_2'


class Invest  extends Component {
  render() {
    return (
    <div>
      
      
        <div id="wrapper">
           <Pageheader/>
           <Invest_1/>
           <Invest_2/>
           <Footer/>
        </div>
    </div>
    );
  }
}

export default Invest;

 