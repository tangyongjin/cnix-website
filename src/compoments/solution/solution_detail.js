
import React, { Component } from "react"



  class Solution_detail extends Component {


  render() {
    return (

      <section>
        <div className="container">
          
          <div className="row m-0">
            <div className="col-md-8 col-sm-8">
              {/* Subtitle */}
              <div className="heading-title heading-border">
              <h2><span>皓宽混合云解决方案</span></h2>
                 
              </div>
              {/* /Subtitle */}
 <p className="text-muted fs-14">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;安全 —— 相较租用第三方基础设施以及没有基础设施的混合云服务提供商，皓宽有完全属于自己的高标准基础设施，确保从基础设施层面开始的数据以及业务安全、可控、稳定。<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开通周期短 —— 阿里云、金山云、百度云、青云等国内知名公有云服务提供商均已接入皓宽云交换平台，用户通过自助服务页面可实时开通相关混合云资源。<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;成本低 —— 减少中间环节、云上云下一跳连接<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;适合客户的解决方案 —— 结合多方云供应商能力，为客户选择最适合客户自身业务需要的混合云资源。</p>
            </div>
            <div className="col-md-4 col-sm-4">
            </div>
          </div>

         {/*---------------------------------------------------*/}

         
          <div className="row m-0">
            <div className="col-md-8 col-sm-8">
              {/* Subtitle */}
              <div className="heading-title heading-border">
                 
              <h2><span>皓宽云专线</span></h2>
                 
              </div>
              {/* /Subtitle */}
<p className="text-muted fs-14">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;帮助不同网络环境间实现高速、稳定、安全的私网通信，包括云上跨地域/跨用户的VPC内网互通、云下IDC专线接入云上等场景，提高网络拓扑灵活性和跨网通信质量。通信数据依托于皓宽IX平台，不经公网，不担心私密数据被窃取。如果您的VPC需要与自有机房进行私网通信，您可以使用皓宽云专线的接入功能实现两侧的私网通信，既可以避免绕行公网带来的网络质量不稳定问题，也可以免去数据在传输过程中被窃取的风险。</p>
            </div>
            <div className="col-md-4 col-sm-4">
            </div>
          </div>

         {/*---------------------------------------------------*/}
          <div className="row m-0">
            <div className="col-md-8 col-sm-8">
              {/* Subtitle */}
              <div className="heading-title heading-border">
              <h2><span>皓宽云带宽</span></h2>
                 
              </div>
              {/* /Subtitle */}
<p className="text-muted fs-14">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;皓宽云带宽产品为客户提供高性价比的上云服务体验。<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;优势：一跳连接多云，带宽成本低廉，开通速度快。</p>              
            </div>
            <div className="col-md-4 col-sm-4">
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default Solution_detail;
