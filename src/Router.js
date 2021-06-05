
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import  Main  from './compoments/home/main'
import  Cix   from './compoments/product/cix/cix.js'
import  Ccx   from './compoments/product/ccx/ccx.js'
import  Cdc   from './compoments/product/cdc/cdc.js'
import  Intro   from './compoments/about/intro/intro.js'
import  Invest  from './compoments/about/invest/invest.js'
import  Contact  from './compoments/about/contact/contact.js'
import  Cloud  from './compoments/partener/cloud/cloud.js'
import  Idc  from './compoments/partener/idc/idc.js'
import  Icp from './compoments/partener/icp/icp.js'
import  Trans  from './compoments/partener/trans/trans.js'
import  Service  from './compoments/service/service.js'
import  Solution from './compoments/solution/solution.js'
import  Ccx_deploy   from './compoments/deploy/ccx/ccx_deploy.js'
import  LoginOrRegister from './compoments/LoginOrRegister'

import  Myprofile from './compoments/myprofile/myprofile.js'


import {   Redirect } from 'react-router'
import {checkLogin} from './publicFunction'




export default class Router extends Component {
  render() {
    const supportsHistory = 'pushState' in window.history
    return (
      <BrowserRouter forceRefresh={!supportsHistory}>
        <div>
          <Route  exact path="/" component={Main} />
          <Route  path="/product/cix" component={Cix} />
          <Route  path="/product/ccx" component={Ccx} />
          <Route  path="/product/cdc" component={Cdc} />
          <Route  path="/about/intro" component={Intro} />
          <Route  path="/about/invest" component={Invest} />
          <Route  path="/about/contact" component={Contact} />
          <Route  path="/partener/cloud" component={Cloud} />
          <Route  path="/partener/idc" component={Idc} />
          <Route  path="/partener/trans" component={Trans} />
          <Route  path="/partener/icp" component={Icp} />
          <Route  path="/service" component={Service} />
          <Route  path="/solution" component={Solution} />
          <Route  path="/login" component={LoginOrRegister} />
          <Route  path="/deploy/ccx" component={Ccx_deploy} />
          
          <Route  path="/myprofile" component={Myprofile} />

        </div>
      </BrowserRouter>
    )
  }
}

 
        
