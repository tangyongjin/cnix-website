import React, { Component } from "react"
class Chs_steps extends Component {
	render() {
		return (
			<section>
				{" "}
				<div className="container">
					{" "}
					<header className="text-center">
						{" "}
						<h2 className="m-0">连接向导 or 快速上云</h2>{" "}
						<p className="font-lato fs-20 m-0">
							国内第一家一跳上多云中立节点
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
							<h5>Research</h5>{" "}
						</li>{" "}
						<li className="nav-item">
							{" "}
							<a
								className="nav-link"
								href="#step2"
								data-toggle="tab">
								2
							</a>{" "}
							<h5>Prototyping</h5>{" "}
						</li>{" "}
						<li className="nav-item">
							{" "}
							<a
								className="nav-link"
								href="#step3"
								data-toggle="tab">
								3
							</a>{" "}
							<h5>Design</h5>{" "}
						</li>{" "}
						<li className="nav-item">
							{" "}
							<a
								className="nav-link"
								href="#step4"
								data-toggle="tab">
								4
							</a>{" "}
							<h5>Development</h5>{" "}
						</li>{" "}
						<li className="nav-item">
							{" "}
							<a
								className="nav-link"
								href="#step5"
								data-toggle="tab">
								5
							</a>{" "}
							<h5>Result</h5>{" "}
						</li>{" "}
					</ul>{" "}
					<div className="tab-content mt-30">
						{" "}
						<div className="tab-pane active" id="step1">
							{" "}
							<strong>Research</strong> heard of them jean shorts
							Austin. Nesciunt tofu stumptown aliqua, retro synth
							master cleanse. Mustache cliche tempor, williamsburg
							carles vegan helvetica. Reprehenderit butcher retro
							keffiyeh dreamcatcher synth. Cosby sweater eu banh
							mi, qui irure terry richardson ex squid. Aliquip
							placeat salvia cillum iphone. Seitan aliquip quis
							cardigan american apparel, butcher voluptate nisi
							qui.{" "}
						</div>{" "}
						<div className="tab-pane" id="step2">
							{" "}
							<strong>Prototyping</strong> denim you probably
							havent heard of them jean shorts Austin. Nesciunt
							tofu stumptown aliqua, retro synth master cleanse.
							Mustache cliche tempor, williamsburg carles vegan
							helvetica. Reprehenderit butcher retro keffiyeh
							dreamcatcher synth. Cosby sweater eu banh mi, qui
							irure terry richardson ex squid. Aliquip placeat
							salvia cillum iphone. Seitan aliquip quis cardigan
							american apparel, butcher voluptate nisi qui.{" "}
						</div>{" "}
						<div className="tab-pane" id="step3">
							{" "}
							<strong>Design</strong> tofu stumptown aliqua, retro
							synth master cleanse. Mustache cliche tempor,
							williamsburg carles vegan helvetica. Reprehenderit
							butcher retro keffiyeh dreamcatcher synth. Cosby
							sweater eu banh mi, qui irure terry richardson ex
							squid. Aliquip placeat salvia cillum iphone. Seitan
							aliquip quis cardigan american apparel, butcher
							voluptate nisi qui.{" "}
						</div>{" "}
						<div className="tab-pane" id="step4">
							{" "}
							<strong>Development</strong> cliche tempor,
							williamsburg carles vegan helvetica. Reprehenderit
							butcher retro keffiyeh dreamcatcher synth. Cosby
							sweater eu banh mi, qui irure terry richardson ex
							squid. Aliquip placeat salvia cillum iphone. Seitan
							aliquip quis cardigan american apparel, butcher
							voluptate nisi qui.{" "}
						</div>{" "}
						<div className="tab-pane" id="step5">
							{" "}
							<strong>Result</strong> cliche tempor, williamsburg
							carles vegan helvetica. Reprehenderit butcher retro
							keffiyeh dreamcatcher synth. Cosby sweater eu banh
							mi, qui irure terry richardson ex squid. Aliquip
							placeat salvia cillum iphone. Seitan aliquip quis
							cardigan american apparel, butcher voluptate nisi
							qui.{" "}
						</div>{" "}
					</div>{" "}
				</div>{" "}
			</section>
		)
	}
}
export default Chs_steps
