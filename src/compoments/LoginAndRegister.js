import React, { Component } from "react"
// import {Button} from 'antd'
class LoginAndRegister extends Component {


	componentDidMount() {
		let loginBtn = document.getElementById('login')
		let registerBtn = document.getElementById('register')
		loginBtn.onclick = (e) => {
			e.preventDefault()
			let loginemail = document.getElementById('loginEmail').value
			let loginpwd = document.getElementById('loginPwd').value

			var loginData = new FormData()
			loginData.append('email', loginemail)
			loginData.append('password', loginpwd)

			// console.log(loginemail)
			// console.log(loginpwd)
			let loginUrl = 'http://39.106.54.108:3001/user/login'
 
			// "username="+data.username+"&password="+data.password
			fetch(loginUrl, {
				method: "POST",
				mode: "cors",
				headers: {},
				body: loginData
			}).then((response) => {
				return response.text()
			}).then((responseText) => {
				if (JSON.parse(responseText)['code'] === 0) {
					alert('登录成功')
					const data = JSON.parse(responseText)
					localStorage.s = data.sid
					localStorage.p = data.pid
					localStorage.t_s = data.token_s
					localStorage.t_t = data.token_t
					localStorage.name = data.custname
					window.location.href='/'
					// console.log(localStorage)
					// console.log(JSON.parse(responseText)['custname'])
				}
				if (JSON.parse(responseText)['code'] === 1) {
					alert(JSON.parse(responseText)['errmsg'])
				}
				if (JSON.parse(responseText)['code'] === 2) {
					alert(JSON.parse(responseText)['errmsg'])
				}

				console.log(responseText)
			}).catch((error) => {
				alert(error)
			});
		}

		registerBtn.onclick = (e) => {
			e.preventDefault()
		}
	}


	render() {

		return (

			<section>
				<div className="container">
					<div className="row">
						<div className="col-md-6 offset-md-3">
							<div className="toggle toggle-transparent toggle-accordion toggle-noicon">
								<div className="toggle active">
									<label className="fs-20"><i className="fa fa-leaf"></i> &nbsp; 已有账号，现在登录</label>
									<div className="toggle-content">
										{/* <div className="alert alert-mini alert-danger mb-30">
											<strong>Oh snap!</strong> Login Incorrect!
										</div> */}
										<form className="sky-form" method="post" action="#" autoComplete="off" >
											<div className="clearfix">
												<label>邮箱</label>
												<label className="input mb-10">
													<i className="ico-append fa fa-envelope"></i>
													<input required="" type="email" id='loginEmail' />
													<b className="tooltip tooltip-bottom-right">请输入邮箱</b>
												</label>
												<label>密码</label>
												<label className="input mb-10">
													<i className="ico-append fa fa-lock"></i>
													<input required="" type="password" id='loginPwd' />
													<b className="tooltip tooltip-bottom-right">请输入密码</b>
												</label>
											</div>
											<div className="row">
												<div className="col-md-6 col-sm-6 col-xs-6">
													<div className="form-tip pt-20">
														<a className="no-text-decoration fs-13 mt-10 block bold" href="#">忘记密码？</a>
													</div>
												</div>
												<div className="col-md-6 col-sm-6 col-xs-6 text-right">
													<button id='login' className="btn btn-primary"><i className="fa fa-check"></i> 登录</button>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div className="toggle">
									<label className="fs-20"><i className="glyphicon glyphicon-user"></i> &nbsp; 未有账号，马上注册</label>
									<div className="toggle-content">
										<div className="alert alert-mini alert-danger mb-30">
											<strong>Oh snap!</strong> Password do not match!
										</div>
										<form className="m-0 sky-form" action="#" method="post" formEncType="multipart\/form-data">
											<fieldset>
												<div className="row">
													<div className="col-md-6 col-sm-6">
														<label>用户名 *</label>
														<label className="input mb-10">
															<i className="ico-append fa fa-user"></i>
															<input required="" type="text" />
															<b className="tooltip tooltip-bottom-right">请输入用户名</b>
														</label>
													</div>
													{/* <div className="col-md-6 col-sm-6">
														<label htmlFor="register:last_name">Last Name *</label>
														<label className="input mb-10">
															<i className="ico-append fa fa-user"></i>
															<input required="" type="text" />
															<b className="tooltip tooltip-bottom-right">Your Last Name</b>
														</label>
													</div> */}
												</div>
												<div className="row">
													<div className="col-md-6 col-sm-6">
														<label htmlFor="register:email">邮箱 *</label>
														<label className="input mb-10">
															<i className="ico-append fa fa-envelope"></i>
															<input required="" type="text" />
															<b className="tooltip tooltip-bottom-right">请输入邮箱</b>
														</label>
													</div>
													<div className="col-md-6 col-sm-6">
														<label htmlFor="register:phone">手机号</label>
														<label className="input mb-10">
															<i className="ico-append fa fa-phone"></i>
															<input type="text" />
															<b className="tooltip tooltip-bottom-right">请输入手机号</b>
														</label>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6 col-sm-6">
														<label htmlFor="register:pass1">密码 *</label>
														<label className="input mb-10">
															<i className="ico-append fa fa-lock"></i>
															<input required="" type="password" className="err" />
															<b className="tooltip tooltip-bottom-right">请输入密码</b>
														</label>
													</div>
													<div className="col-md-6 col-sm-6">
														<label htmlFor="register:pass2">再次输入密码 *</label>
														<label className="input mb-10">
															<i className="ico-append fa fa-lock"></i>
															<input required="" type="password" className="err" />
															<b className="tooltip tooltip-bottom-right">请输入密码</b>
														</label>
													</div>
												</div>
												<hr />
												{/* <label className="checkbox m-0"><input className="checked-agree" type="checkbox" name="checkbox" /><i></i>I agree to the <a href="#" data-toggle="modal" data-target="#termsModal">Terms of Service</a></label> */}
												{/* <label className="checkbox m-0"><input type="checkbox" name="checkbox" /><i></i>I want to receive news and  special offers</label> */}
											</fieldset>
											<div className="row">
												<div className="col-md-12">
													<button type="submit" id='register' className="btn btn-primary"><i className="fa fa-check"></i> 注册</button>
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

		);
	}
}

export default LoginAndRegister;