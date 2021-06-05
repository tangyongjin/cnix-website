import React, { Component } from 'react';
 
import Pageheader  from '../public/pageheader'
import Footer    from '../public/footer'
  
 
 
import Solution_header    from './solution_header'
import Solution_detail    from './solution_detail'
 


class Solution extends Component {
  render() {
    return (
    <div>
        <div id="wrapper">
           <Pageheader/>
           <Solution_header/>
           <Solution_detail/>
           <Footer/>
        </div>
    </div>
    );
  }
}

export default Solution;