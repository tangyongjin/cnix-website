import React, { Component } from 'react';
 
import Pageheader  from '../public/pageheader'
import Footer    from '../public/footer'
  
 
 
import Myprofile_header    from './myprofile_header'
import Myprofile_detail    from './myprofile_detail'
 


class Myprofile extends Component {
  render() {
    return (
    <div>
        <div id="wrapper">
           <Pageheader/>
           <Myprofile_header/>
           <Myprofile_detail/>
           <Footer/>
        </div>
    </div>
    );
  }
}

export default Myprofile;