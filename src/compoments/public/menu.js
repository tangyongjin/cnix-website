import React, { Component } from "react"
import { Link } from "react-router-dom"
import { checkLogin } from '../../publicFunction'
/*

class  类的名字(首字母大写) extends Component {
    render() {
        return (
                <div className="redhat"> 
                    hello,world!        
                </div>


        )
    }
}

export default  类的名字(首字母大写)

*/




class Menu extends Component {
    render() {
        return (
            <ul id="topMain" className="nav nav-pills nav-main">
                <li className="dropdown active">
                    <a href="/">主页</a>

                    <ul className="dropdown-menu" />
                </li>

                <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                        产品服务
                    </a>
                    <ul className="dropdown-menu">
                        <li className="dropdown">

                        </li>

                        <li className="dropdown">
                            <a href="/product/cix" >CIX</a>
                        </li>

                        <li className="dropdown">
                            <a href="/product/ccx" >CCX</a>
                        </li>

                        <li className="dropdown">
                            <a href="/product/cdc" >CDC</a>
                        </li>
                        <li className="dropdown">
                            <a href="/solution" >混合云解决方案</a>
                        </li>
                    </ul>
                </li>

                <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                        皓宽生态
                    </a>
                    <ul className="dropdown-menu">
                        <li className="dropdown">
                            <a href="/partener/cloud">云合作伙伴</a>
                        </li>


                        <li className="dropdown">
                            <a href="/partener/trans">传输合作伙伴</a>
                        </li>

                        <li className="dropdown">
                            <a href="/partener/idc">IDC合作伙伴</a>
                        </li>


                        <li className="dropdown">
                            <a href="/partener/icp">ICP合作伙伴</a>
                        </li>




                    </ul>
                </li>

                <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                        关于
                    </a>

                    <ul className="dropdown-menu">
                        <li className="dropdown">
                            <a href="/about/intro">公司简介</a>
                            <ul className="dropdown-menu" />
                        </li>
                        <li className="dropdown">
                            <a href="/about/contact">联系我们</a>
                            <ul className="dropdown-menu" />
                        </li>
                    </ul>
                </li>

                {checkLogin() ?
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="#">
                            {localStorage.name}
                        </a>
                        <ul className="dropdown-menu">
                            <li className="dropdown">
                                <a href="/deploy/ccx">服务</a>
                                <ul className="dropdown-menu" />
                            </li>
                            
                            <li className="dropdown">
                                <a href="/myprofile">我的产品</a>
                                <ul className="dropdown-menu" />
                            </li>
                            

                            <li className="dropdown">
                                <a href="" onClick={() => { localStorage.clear(); window.location.reload(); }}>退出</a>
                                <ul className="dropdown-menu" />
                            </li>


                        </ul>
                    </li>
                    :
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="#">
                            Portal
                    </a>
                        <ul className="dropdown-menu">
                            <li className="dropdown">
                                <a href="/login">登录</a>
                                <ul className="dropdown-menu" />
                            </li>
                            <li className="dropdown">
                                <a href="/about/contact">注册</a>
                                <ul className="dropdown-menu" />
                            </li>
                        </ul>
                    </li>

                }



            </ul>
        )
    }
}

export default Menu
