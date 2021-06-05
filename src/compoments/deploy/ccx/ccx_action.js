import React, { Component } from "react"
import { Cascader, Radio, Spin } from 'antd';
// import 'antd/dist/antd.css'
import '../../../ant.css'
import { checkLogin } from '../../../publicFunction'
const RadioGroup = Radio.Group;
const options = [{
	value: '阿里云',
	label: '阿里云',
	children: [{
		value: '节点1',
		label: '节点1',
	}, {
		value: '节点2',
		label: '节点2',
	}],
}, {
	value: '青云',
	label: '青云',
	children: [{
		value: '节点1',
		label: '节点1',
	}, {
		value: '节点2',
		label: '节点2',
	}],
}];
const spinLoading = {
	textAlign: 'center',
	background: 'rgba(0,0,0,0.05)',
	borderRadius: '4px',
	marginBottom: '20px',
	padding: '30px 50px',
	margin: '20px 0'

}
class Ccx_action extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bandwidth: 1,
			timeValue: 3,
			loading: true,
			options: ''
		}
	}
	onChangeM = (e) => {
		// console.log(e.target.value);
		this.setState({
			bandwidth: e.target.value,
		});
	}
	onChangeT = (e) => {
		// console.log(e.target.value);
		this.setState({
			timeValue: e.target.value,
		});
	}
	onChange = (value) => {
		this.setState({
			serviceProvider: value[0],
			locationpid: value[1]
		})
		// console.log(value);
	}
	componentDidMount() {
		checkLogin() ? '' : window.location.href='/login'
		let getCloudUrl = 'http://39.106.54.108:3001/ccx/listCloudProviderAndLocation'
		fetch(getCloudUrl, {
			method: "POST",
			mode: "cors",
			headers: {},
			body: ''
		}).then((response) => {
			//console.log(response)
			return response.text()
		}).then((responseText) => {
			// console.log(responseText)
			if (responseText === '') {
				alert('请检查您的网络')
				window.location.reload()
			}
			// console.log(JSON.parse(responseText))
			this.setState({ options: JSON.parse(responseText), loading: false })
		}).catch((error) => {
			alert(error)
		});


		let cxxBtn = document.getElementById('cxx_submit')
		let addProductUrl = 'http://39.106.54.108:3001/ccx/addProduct'
		cxxBtn.onclick = (e) => {
			e.preventDefault()
			let cloudid = document.getElementById('cloudid').value
			var cxxData = new FormData()
			cxxData.append('cloud_oauth_account', cloudid)
			cxxData.append('locationpid', this.state.locationpid)
			cxxData.append('bandwidth', this.state.bandwidth)
			cxxData.append('months', this.state.timeValue)
			cxxData.append('userid', localStorage.p)
			cxxData.append('userSid', localStorage.s)
			cxxData.append('token_s', localStorage.t_s)
			cxxData.append('token_t', localStorage.t_t)

			// console.log(cxxData.get('time'))
			// console.log(this.state.options)
			fetch(addProductUrl, {
				method: "POST",
				mode: "cors",
				headers: {},
				body: cxxData
			}).then((response) => {
				return response.text()
			}).then((responseText) => {
				if (responseText === '') {
					alert('部署失败')
				}
				if (JSON.parse(responseText)['code'] === 0) {
					alert(JSON.parse(responseText)['errmsg'])
					window.location.reload()
				}
				if (JSON.parse(responseText)['code'] !== 0) {
					alert(JSON.parse(responseText)['errmsg'])
				}
			}).catch((error) => {
				alert(error)
			});

		}
	}
	render() {
		return (
			<section>
				{" "}
				<div className="container">
					{" "}
					<header className="text-center">
						{" "}
						<h2 className="m-0">连接向导 or 快速上云!</h2>{" "}
						<p className="font-lato fs-20 m-0">
							国内第一家一跳上多云中立节点
						</p>{" "}
					</header>{" "}
					<div className="divider divider-center">
						{" "}
						<i className="fa fa-chevron-down" />{" "}
					</div>{" "}



				</div>{" "}

				<div className="container">
					<div className="row">
						<div className="col-md-6 offset-md-3">
							<div className="toggle toggle-transparent toggle-accordion toggle-noicon">
								<div className="toggle active">
									<div className="toggle-content">
										<form className="sky-form" method="post" action="#" autoComplete="off" >
											<div className="clearfix">
												<label style={{ fontSize: '15px' }}>云节点</label>
												<label className="input mb-10">

													{this.state.loading ? <Spin />
														: <Cascader options={this.state.options} onChange={this.onChange} placeholder="Please select" />}
													<b className="tooltip tooltip-bottom-right">请输入邮箱</b>
												</label>
												<div style={{ margin: '10px' }}></div>

												<label style={{ fontSize: '15px' }}>带宽</label>
												<label className="input mb-10">

													<RadioGroup onChange={this.onChangeM} value={this.state.bandwidth}>
														<Radio value={1}>1Mps</Radio>
														<Radio value={2}>2Mps</Radio>
													</RadioGroup>
													<b className="tooltip tooltip-bottom-right">请选择带宽</b>
												</label>
												<div style={{ margin: '10px' }}></div>

												<label style={{ fontSize: '15px' }}>时间</label>
												<label className="input mb-10">
													<RadioGroup onChange={this.onChangeT} value={this.state.timeValue}>
														<Radio value={3}>3个月</Radio>
														<Radio value={6}>6个月</Radio>
														<Radio value={12}>12个月</Radio>
													</RadioGroup>
													<b className="tooltip tooltip-bottom-right">请选择带宽</b>
												</label>
												<div style={{ margin: '10px' }}></div>

												<label style={{ fontSize: '15px' }}>云账号</label>
												<label className="input mb-10">
													<input required="" type="text" id='cloudid' />
													<b className="tooltip tooltip-bottom-right">请输入云服务商账号</b>
												</label>




											</div>
											<div className="row">
												<div className="col-md-12" align="center">

													<button id='cxx_submit' className="btn btn-primary" style={{ marginLeft: '0' }}><i className="fa fa-check"></i> 提交</button>

												</div>
											</div>
										</form>
									</div>
								</div>

							</div>
						</div>
					</div>

				</div>


			</section>
		)
	}
}
export default Ccx_action

// {/* <ul className="process-steps nav nav-tabs nav-justified mt-100">
// 						{" "}
// 						<li className="nav-item">
// 							{" "}
// 							<a
// 								className="nav-link active"
// 								href="#step1"
// 								data-toggle="tab">
// 								1
// 							</a>{" "}
// 							<h5>提出申请</h5>{" "}
// 						</li>{" "}
// 						<li className="nav-item">
// 							{" "}
// 							<a
// 								className="nav-link"
// 								href="#step2"
// 								data-toggle="tab">
// 								2
// 							</a>{" "}
// 							<h5>后台审核</h5>{" "}
// 						</li>{" "}
// 						<li className="nav-item">
// 							{" "}
// 							<a
// 								className="nav-link"
// 								href="#step3"
// 								data-toggle="tab">
// 								3
// 							</a>{" "}
// 							<h5>业务开通</h5>{" "}
// 						</li>{" "}
// 						<li className="nav-item">
// 							{" "}
// 							<a
// 								className="nav-link"
// 								href="#step4"
// 								data-toggle="tab">
// 								4
// 							</a>{" "}
// 							<h5>自助管理</h5>{" "}
// 						</li>{" "}

// 					</ul>{" "} */}
// 					{/* <div className="tab-content mt-30">
// 						{" "}
// 						<div className="tab-pane active" id="step1">
// 							{" "}
// 提出申请
// 							{" "}
// 						</div>{" "}
// 						<div className="tab-pane" id="step2">
// 							{" "}
// 							后台审核
// 							{" "}
// 						</div>{" "}
// 						<div className="tab-pane" id="step3">
// 							{" "}
// 							业务开通
// 							{" "}
// 						</div>{" "}
// 						<div className="tab-pane" id="step4">
// 							{" "}
// 							自助管理
// 							{" "}
// 						</div>{" "}

// 					</div>{" "} */}