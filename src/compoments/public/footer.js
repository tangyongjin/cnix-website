import React, {Component} from 'react';
import { Link } from "react-router-dom"
 

 


class Footer1  extends  Component {
	render(){
      return (

        <div id="footer_main1" className="container">
		  <div className="row">
                        <div className="col-md-3">
                            
                            <address>
                                <ul className="list-unstyled">
                                    <li className="footer-sprite address">
                                        北京市丰台区<br />
                                        久敬庄路甲56号院7号楼<br />
                                     
                                    </li>
                                    <li className="footer-sprite phone">
                                        电话: 010-67973600
                                    </li>
                                    <li className="footer-sprite email">
                                        <a href="mailto: 技术中心：noc@cnix.com.cn">技术中心: cnix-noc@cnix.com.cn</a>
                                    </li>                                      
                                    <li className="footer-sprite email">
                                        <a href="mailto: 销售中心：sales@cnix.com.cn">销售中心: sales@cnix.com.cn</a>
                                    </li>
                                </ul>
                            </address>
                        </div>

                       
                        <div className="col-md-3">

                            <h4 className="letter-spacing-1">产品服务</h4>
                            <ul className="footer-links list-unstyled">
                                <li>
					<a href="/product/cix#">CIX</a>
				</li>
                                <li>
					<a href="/product/ccx#">CCX</a>
				</li>
                                <li>
					<a href="/product/cdc#">CDC</a>
				</li>
                     		<li>
					<a href="/solution#">混合云解决方案</a>
                                  
				</li>
                            </ul>
                        </div>
                        <div className="col-md-3">

                            <h4 className="letter-spacing-1">皓宽生态</h4>
                            <ul className="footer-links list-unstyled">
                                <li><a href="/partener/cloud#">云合作伙伴</a></li>
                                <li><a href="/partener/trans#">传输合作伙伴</a></li>
                                <li><a href="/partener/idc#">IDC合作伙伴</a></li>
                                <li><a href="/partener/icp#">ICP合作伙伴</a></li>
                            </ul>
                        </div>


                     
         
                        <div className="col-md-3">

                            <h4 className="letter-spacing-1">关注我们</h4>
                            <img alt=""  src="/demo_files/images/0haokuan/hklogo2.jpg" />
                        </div>
                        



                    </div>
            </div>
 	)}
}

class Footer2  extends  Component {


    render(){
      return (
        <div id="footer_copyright" className="copyright">
                    <div className="container">
                        <ul className="float-right m-0 list-inline mobile-block">
                            <li><a href="https://beian.miit.gov.cn/">网站备案号:京ICP备15054904号-1</a></li>
                        </ul>
                        &copy;皓宽网络科技有限公司,版权所有
                    </div>

       </div>

    )}
}

class Footer  extends  Component {

    render(){
      return (
                    <footer id="footer">
                       <Footer1/>
                       <Footer2/>
                    </footer>

    )
  }
}

export default Footer;


 
