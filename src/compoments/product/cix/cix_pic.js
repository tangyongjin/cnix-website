import React, { Component } from "react"

class Cix_pic extends Component {
	render() {
		return (
			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-4">
							<figure className="mb-20">
								{" "}
								<img className="img-fluid" src="/demo_files/images/0haokuan/moreclient.jpg" alt="" />{" "}
							</figure>
							<h4 className="mb-0">接入成员多</h4>
							<p className="text-muted fs-14">
								目前百度、阿里、腾讯、爱奇艺、搜狐、金山云、UCloud、乐视云、天地祥云、互联港湾、光环新网等知名的互联网公司、云服务提供商、IDC服务提供商以及众多ISP均已接入
							</p>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4">
							<figure className="mb-20">
								{" "}
								<img className="img-fluid" src="/demo_files/images/0haokuan/traffic3.jpg" alt="" />{" "}
							</figure>
							<h4 className="mb-0">交换流量大</h4>
							<p className="text-muted fs-14">
								皓宽流量优化平台，为客户提供一跳直达50家以上BGP资源以及高品质端到端网络连接，目前已承载近300Gbps交换流量.<br />
 								<br />
								<br />	
							</p>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4">
							<figure className="mb-20">
								{" "}
								<img className="img-fluid" src="/demo_files/images/0haokuan/newtech.jpg" alt="" />{" "}
							</figure>
							<h4 className="mb-0">技术领先</h4>

							<p className="text-muted fs-14">
								通过软件定义，提供客户自助开通业务，有效监控管理。部署广播风暴抑制以及业界领先的DDos防范等机制，有效保护CIX网络环境
							</p>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
export default Cix_pic
