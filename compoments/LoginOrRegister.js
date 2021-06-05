import React, { Component } from "react"
import Pageheader from './public/pageheader'
import Footer from './public/footer'
import LoginAndRegister from './LoginAndRegister'

class Main extends Component {
  render() {
    return (
      <div>
        
        <div id="wrapper">
           <Pageheader/>
    
           <LoginAndRegister/>
           <Footer/>
        </div>
    </div>
    );
  }
}

export default Main;