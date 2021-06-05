
import React, { Component } from "react"
import { Spin } from 'antd'
import MyprofileTable from './myprofileTable'
import { checkLogin } from '../../publicFunction'

class Myprofile_detail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      myprofile: '',
      loading: true
    }
  }

  componentDidMount() {
    checkLogin() ? '' : window.location.href='/login'
    let myprofileUrl = 'http://39.106.54.108:3001/user/listMyProducts'
    let myprofileData = new FormData()
    myprofileData.append('custid', localStorage.p)
    myprofileData.append('custsid', localStorage.s)
    myprofileData.append('token_t', localStorage.t_t)
    myprofileData.append('token_s', localStorage.t_s)
    fetch(myprofileUrl, {
      method: "POST",
      mode: "cors",
      headers: {},
      body: myprofileData
    }).then((response) => {
      return response.text()
    }).then((responseText) => {
      // console.log(responseText)
      if (responseText === '') {
        alert('请检查网络')
      }
      this.setState({ myprofile: JSON.parse(responseText)['ccx'], loading: false })
      // console.log(JSON.parse(responseText)['ccx'])
    }).catch((error) => {
      alert(error)
    });
  }
  render() {
    return (
      <section>
        <div className="container">
          <header className="text-left mb-60">
            <h2>CCX产品</h2>
            <p className="lead font-lato"></p>
            <div className="divider"></div>
          </header>
          <div className="table-responsive">
            {this.state.loading ?
              <Spin />
              :
                <MyprofileTable value={this.state.myprofile} />
            }
          </div>
          <br /><br />
          <div className="text-center">
            <h2 className="wow fadeInUp m-0 " data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>DOES SMARTY CONVINCED YOU?</h2>
            <p className="lead font-lato fs-30 wow fadeInUp mb-60 " data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>Building a Landing Page was never so Easy &amp; Interactive.</p>
            <div className="mt-30">
            <a href="/deploy/ccx" className="btn btn-3d btn-lg btn-primary   fadeInUp btn-teal "><i className="glyphicon glyphicon-th-large" />现在开通CCX</a>
              {/* <a href="/deploy/ccx" className="btn btn-3d btn-lg btn-primary   fadeInUp btn-teal animated" data-wow-delay="0.7" style={{ visibility: 'visible', animationName: 'fadeInUp' }}><i className="glyphicon glyphicon-th-large" />
                现在开通CCX
                </a> */}
            </div>
          </div>
        </div>

        <div className="divider"></div>
        {/* <div className="container">
          <header className="text-left mb-60">
            <h2>CDC产品</h2>
            <p className="lead font-lato"></p>
            <div className="divider"></div>
          </header>

          <div className="text-center">
            <h2 className="wow fadeInUp m-0 animated" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>DOES SMARTY CONVINCED YOU?</h2>
            <p className="lead font-lato fs-30 wow fadeInUp mb-60 animated" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>Building a Landing Page was never so Easy &amp; Interactive.</p>
            <div className="mt-30">
              <a href="#" className="btn btn-3d btn-lg btn-primary  fadeInUp btn-teal animated" data-wow-delay="0.7" style={{ visibility: 'visible', animationName: 'fadeInUp' }}><i className="glyphicon glyphicon-th-large" />
                现在开通CDC
                </a>
            </div>
          </div>
        </div> */}

      </section>
    );
  }
}


export default Myprofile_detail;
