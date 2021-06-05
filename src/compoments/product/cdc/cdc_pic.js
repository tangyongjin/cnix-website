import React, { Component } from "react"

class Cdc_pic extends Component {
	render() {
		return (
			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-4">
							<figure className="mb-20">
								{" "}
								<img className="img-fluid" src="/demo_files/images/mockups/800x553/22-min.jpg" alt="service" />{" "}
							</figure>
							<h4 className="mb-0">T3+基础设施</h4>
							<p className="text-muted fs-14">
								完全按照TIA-942 T3+标准设计和建造，一层净高5.8米，二层净高4.5米，抗震防烈度为8度，耐火防水设计为1级。机房楼板承重设计为大于800kg/㎡,UPS室设计为1000kg/㎡,电池间设计为1600kg/㎡,总建筑面积约为3600㎡,划分有多个独立模块，可提供500机柜
							</p>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4">
							<figure className="mb-20">
								{" "}
								<img className="img-fluid" src="/demo_files/images/mockups/800x553/25-min.jpg" alt="service" />{" "}
							</figure>
							<h4 className="mb-0">专业团队运维</h4>

							<p className="text-muted fs-14">
								7*24*365全天候运维保障，来自业内知名数据中心工程师，专家技术支持。机房智能管理平台实现自动化运维，网络秒级监控，故障实时响应
							</p>
							<br />
 							<br />
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4">
							<figure className="mb-20">
								{" "}
								<img className="img-fluid" src="/demo_files/images/mockups/800x553/23-min.jpg" alt="service" />{" "}
							</figure>
							<h4 className="mb-0">混合云数据中心</h4>

							<p className="text-muted fs-14">
								国内较早成立的中立&开放生态混合云数据中心，自2016年底投入使用，在短短几个月时间里即汇聚了百度、阿里、腾讯、爱奇艺、金山云等知名互联网公司的入驻。
							</p>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
export default Cdc_pic
