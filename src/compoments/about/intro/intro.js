import React, { Component } from 'react';
 
import Pageheader  from '../../public/pageheader'
import Footer    from '../../public/footer'
 

import Intro_1    from './intro_1'
import Intro_2    from './intro_2'


class Intro extends Component {
  render() {
    return (
    <div>
      
      
        <div id="wrapper">
           <Pageheader/>
           <Intro_1/>
           <Intro_2/>
           <Footer/>
        </div>
    </div>
    );
  }
}

export default Intro;

 