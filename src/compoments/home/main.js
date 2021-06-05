import React, {
  Component
} from 'react';

import Companyinfo from './companyinfo'
import PageheaderIndex from '../public/pageheader_index'
 
import Slider from './slider'
import Client from './client'
import Footer from '../public/footer'
 



class Main extends Component {
  render() {
    return (
      <div>
        
        <div id="wrapper">
           <PageheaderIndex/>
    
    
           <Slider/>
    
         
           <Companyinfo/>
  		     <Client/>
   
           <Footer/>
           
        </div>
    </div>
    );
  }
}

export default Main;
