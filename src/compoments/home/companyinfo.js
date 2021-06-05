import React, { Component } from "react"


class Companyinfo extends Component {

 
  render() {
    return (

      <section>

    

        <div className="container">
           <header className="text-center mb-60"><h2>我们是谁</h2></header>
          <div className="row">  
          
            {/* LEFT */}
            <div className="col-md-9">
              
              <img className="float-left" src="/demo_files/images/0haokuan/portal.jpg" />
              
              <p>

               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;北京皓宽网络科技有限公司（CNIX: China Internet Exchange）成立于2016年，是伴随着互联网数据业务的兴起应势而生的高科技信息企业,
               公司使命打造中国领先的互联网通信基础设施平台。 
               <br/><br/>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNIX秉承中立，专业，专注的经营理念，一方面为中小型运营商与内容提供商之间提供对等互联，
               让终端用户更加快捷与高效的访问内容提供商的资源，提升网络品质并节省组网成本；
               另一方面利用自主机房优势打造新型通信基础设施，使运营商、互联网服务提供商、云计算供应商等在此找到所需的网络资源，
               是助力混合云组网、合作伙伴直连等关键业务所需的基础设施。



              </p>
       

              <div className="mt-60">
     
              </div>


            </div>
          
          
          </div>
        </div>

         
        <br/><br/><br/><br/><br/>

        <div className="container">

        <div className="row">
          <div className="col-md-4">
            <div className="heading-title heading-border-bottom heading-color">
            <header className="text-center"><h3>中立</h3></header>
	</div>
            <p>
              皓宽开放生态数据中心完全由自有资金投资建设，拥有绝对的中立地位，秉承开放态度，与各行业客户合作共赢。
            </p>
          </div>
          <div className="col-md-4">
            <div className="heading-title heading-border-bottom heading-color">
              <header className="text-center"><h3>专业</h3></header>
            </div>
            <p>管理团队来自世纪互联、万国数据、蓝汛等国内知名的上市公司高管，经营及运维团队行业经验丰富，拥有多名CCIE。</p>
          </div>
          <div className="col-md-4">
            <div className="heading-title heading-border-bottom heading-color">
              <header className="text-center"><h3>专注</h3></header>
            </div>
            <p>皓宽致力于打造中国领先的互联网通信基础设施平台，专注于为客户提供优质连接通信基础设施服务。</p>
          </div>
        </div>
      </div>


      </section>
    );
  }
}

export default Companyinfo;
