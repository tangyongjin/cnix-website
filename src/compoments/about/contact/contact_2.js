import React, { Component } from "react"




class Contact_2 extends Component {


  componentDidMount() {
    let contactBtn = document.getElementById('contact_submit')
    let contactUrl = 'http://39.106.54.108:3001/user/collectConcat'

    contactBtn.onclick = (e) => {
      e.preventDefault()
      let name = document.getElementById('contact:name').value
      let email = document.getElementById('contact:email').value
      let phone = document.getElementById('contact:phone').value
      let company = document.getElementById('contact:subject').value
      let dept = document.getElementById('contact:select').value
      let message = document.getElementById('contact:message').value

      let contactData = new FormData()
      contactData.append('name',name)
      contactData.append('email',email)
      contactData.append('phone',phone)
      contactData.append('company',company)
      contactData.append('dept',dept)
      contactData.append('message',message)

      fetch(contactUrl, {
        method: "POST",
        mode: "cors",
        headers: {},
        body: contactData
      }).then((response) => {
        return response.text()
      }).then((responseText) => {
        console.log(responseText)
        if (responseText === '') {
					alert('提交失败，请检查网络')
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
        <div className="container">

          <div id="map3" className="h-300 mb-60" style={{ position: 'relative', overflow: 'hidden' }}>

            <iframe src="http://39.106.54.108:80/assets/map.html" frameBorder="0" height="900" width="1200" scrolling="no">

            </iframe>

          </div>



          <div className="row">
            {/* FORM */}
            <div className="col-md-9 col-sm-9">

              {/* Alert Success */}
              <div id="alert_success" className="alert alert-success mb-30">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                <strong>Thank You!</strong> Your message successfully sent!
              </div>{/* /Alert Success */}
              {/* Alert Failed */}
              <div id="alert_failed" className="alert alert-danger mb-30">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                <strong>[SMTP] Error!</strong> Internal server error!
              </div>{/* /Alert Failed */}
              {/* Alert Mandatory */}
              <div id="alert_mandatory" className="alert alert-danger mb-30">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                <strong>Sorry!</strong> You need to complete all mandatory (*) fields!
              </div>{/* /Alert Mandatory */}
              <form action="php/contact.php" method="post" encType="multipart/form-data">
                <fieldset>
                  <input type="hidden" name="action" defaultValue="contact_send" />
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="contact:name">姓名 *</label>
                      <input required type="text" className="form-control" name="contact[name][required]" id="contact:name" />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="contact:email">邮箱地址 *</label>
                      <input required type="email" className="form-control" name="contact[email][required]" id="contact:email" />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="contact:phone">电话</label>
                      <input type="text" className="form-control" name="contact[phone]" id="contact:phone" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <label htmlFor="contact:subject">公司 *</label>
                      <input required type="text" className="form-control" name="contact[subject][required]" id="contact:subject" />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="contact_department">部门</label>
                      <select className="form-control pointer" name="contact[department]" id="contact:select">
                        <option value>--- 选择 ---</option>
                        <option value="管理部">管理部</option>
                        <option value="销售部">销售部</option>
                        <option value="技术部">技术部</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="contact:message">留言 *</label>
                      <textarea required maxLength={10000} rows={8} className="form-control" name="contact[message]" id="contact:message" defaultValue={""} />
                    </div>
                  </div>
                </fieldset>
                <div className="row">
                  <div className="col-md-12">
                    <button type="submit" className="btn btn-primary" id='contact_submit'><i className="fa fa-check" /> 提交</button>
                  </div>
                </div>
              </form>
            </div>
            {/* /FORM */}
            {/* INFO */}
            <div className="col-md-3 col-sm-3">
              <h2>访问我们</h2>
              <hr />
              <p>
                <span className="block"><strong><i className="fa fa-map-marker" /> 地址:</strong> 北京市丰台区久敬庄路甲56号院7号楼</span>
                <span className="block"><strong><i className="fa fa-phone" /> 电话:</strong> <a href="tel:010-51103600">010-51103600</a></span>
                <span className="block"><strong><i className="fa fa-envelope" /> 邮箱:</strong><br />
                  <a href="mailto:技术中心: noc@noc@cnix.com.cn">技术中心: cnix-noc@cnix.com.cn</a><br />
                  <a href="mailto:销售中心: sales@cnix.com.cn">销售中心: sales@cnix.com.cn</a>
                </span>
              </p>
              <hr />

            </div>

          </div>
        </div>
      </section>



    );
  }
}

export default Contact_2;
