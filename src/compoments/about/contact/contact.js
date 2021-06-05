import React, { Component } from 'react';
 
import Pageheader  from '../../public/pageheader'
import Footer    from '../../public/footer'
 

import Contact_1    from './contact_1'
import Contact_2    from './contact_2'


class Contact extends Component {
  render() {
    return (
    <div>
      
      
        <div id="wrapper">
           <Pageheader/>
           <Contact_1/>
           <Contact_2/>
           <Footer/>
        </div>
    </div>
    );
  }
}

export default Contact;

 