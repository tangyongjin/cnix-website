import React, { Component } from "react"
class Cix_steps extends Component {
	render() {
		return (
			<section>
				{" "}
				<div className="container">
					{" "}
					<header className="text-center">
						{" "}
						<h2 className="m-0">CIX接入技术须知</h2>{" "}
						<p className="font-lato fs-20 m-0">
							国内首家同时支持IPV4/IPV6双栈接入
						</p>{" "}
					</header>{" "}
					<div className="divider divider-center">
						{" "}
						<i className="fa fa-chevron-down" />{" "}
					</div>{" "}
					<ul className="process-steps nav nav-tabs nav-justified mt-100">
						{" "}
						<li className="nav-item">
							{" "}
							<a
								className="nav-link active"
								href="#step1"
								data-toggle="tab">
								1
							</a>{" "}
							<h5>端口策略</h5>{" "}
						</li>{" "}
						<li className="nav-item">
							{" "}
							<a
								className="nav-link"
								href="#step2"
								data-toggle="tab">
								2
							</a>{" "}
							<h5>网络对接</h5>{" "}
						</li>{" "}
						<li className="nav-item">
							{" "}
							<a
								className="nav-link"
								href="#step3"
								data-toggle="tab">
								3
							</a>{" "}
							<h5>开放团体属性</h5>{" "}
						</li>{" "}
						<li className="nav-item">
							{" "}
							<a
								className="nav-link"
								href="#step4"
								data-toggle="tab">
								4
							</a>{" "}
							<h5>DDOS防范</h5>{" "}
						</li>{" "}

					</ul>{" "}
					<div className="tab-content mt-30">
						{" "}
						<div className="tab-pane active" id="step1"> 
						<p className="text-muted fs-14">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNIX每个客户接入端口只支持一个IPv4 and/or IPv6地址
CNIX交换机不支持trunk或VLAN mapping，只支持access端口模式
客户与CNIX对接的端口关闭ProxyARP、STP、LLDP/CDP、VTP、UDLD等协议
CNIX支持1G和10G端口速率的链路聚合，聚合模式为静态聚合
客户接入端口默认配置抑制广播风暴策略，一旦收到异常广播和组播报文时，协议会触发关闭端口操作
我们所有客户均在一个大二层环境，客户学到其他客户的路由看到的下一跳均是其他客户的BGP peer地址，一跳到达其他客户网内</p>

<h4>端口安全</h4>
<p className="text-muted fs-14">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客户接入端口默认开启端口安全策略，且每个端口限制MAC地址。客户接入CNIX时，我们会绑定客户当前MAC地址。
如果客户需要变更请提前一个工作日联系 NOC，如果情况紧急建议客户直接发邮件到 noc@cnix.com.cn</p>

<h4>端口策略</h4>
<p className="text-muted fs-14">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNIX网络端口只支持 Ethernet II帧格式，且只有以下帧类型被允许<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.  0x0800 – IPv4 <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.  0x0806 – ARP  <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.  0x86dd – IPv6 <br/>
</p>
</div>{" "}
						<div className="tab-pane" id="step2">
						<p className="text-muted fs-14">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
新客户对接时，CNIX为客户分配互连IP及BGP MD5 KEY，客户使用分配IP和CNIX route-server建立ebgp邻居关系。CNIX默认为客户同时分配IPV4/IPV6互连IP。
以下CNIX BJ节点分配客户互连IP地址段：<br/>
<h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  IPV4    103.216.40.0/23<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  IPV6    2404:E780:F872:A::/64 </h5>

<h4>route-server-1(Platform:Junos)</h4>
   <h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AS:63602    IPv4：103.216.40.1 <br/>      
    	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AS:63602    IPv6：2404:E780:F872:A:1::1/64</h5>
<p></p>
<h4>route-server-2(platform:BIRD)[test phase]</h4> 
    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AS:63602    IPv4：103.216.41.1<br/>       
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AS:63602    IPv6：2404:E780:F872:A:1::2/64</h5> </p> 
						</div>{" "}
						<div className="tab-pane" id="step3">
							{" "}
<h4>For 16-bits ASN   community</h4>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    1:63602     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    advertise to any peer(If customer not defined then Default)<br/>    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    0:63602     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    do not advertise to any peer<br/>    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    1:PEER-AS   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    advertise to PEER-AS<br/>    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    0:PEER-AS   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    do not advertise to PEER-AS<br/>    
<br/>
<br/>

<h4>For 32-bits ASN   ext-community</h4>    

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    1:63602     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    advertise to any peer(If customer not defined then Default)<br/>    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    0:63602     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    do not advertise to any peer<br/>    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    RT:1:PEER-AS   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    advertise to PEER-AS<br/>    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    RT:0:PEER-AS   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    do not advertise to PEER-AS<br/>    
<br />
<br />
<h4>63602:666 &nbsp;&nbsp;&nbsp;&nbsp; CNIX Blackhole community</h4><br/>    
.{" "}
						</div>{" "}
						<div className="tab-pane" id="step4">
							{" "}
<h4>CNIX Blackhole</h4> 
&nbsp;&nbsp;&nbsp;&nbsp;Next-hop : 103.216.40.66  <br/>  
&nbsp;&nbsp;&nbsp;&nbsp;MAC  : 24:4c:07:6d:ac:4e<br/>  
<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.什么是Blackhole?<br/>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Blackhole是一个/32为路由前缀，去往这个目的地的流量将会被丢弃。<br/>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.客户IP地址被攻击时，怎么宣告黑洞路由?<br/>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  黑洞路由必须是/32主机路由，必须是属于客户自治域的路由，必须包含CNIX Blackhole community(63602:66),三个条件同时满足<br/>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.CNIX收到黑洞路由后的动作?<br/>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  CNIX收到客户宣告黑洞路由后，将修改下一跳至103.216.40.66，CNIX在所有客户端口执行L2ACL拒绝destination为24:4c:07:6d:ac:4e的数据帧，从<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而将攻击流量丢弃<br/>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.CNIX需要怎么配合？<br/>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  CINX客户需要收取包含Blackhole community 和下一跳为103.216.40.66的主机路由<br/>  
							{" "}
						</div>{" "}
					
					</div>{" "}
				</div>{" "}
			</section>
		)
	}
}
export default Cix_steps
