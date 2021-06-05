import React, { Component } from "react"
import { Link } from "react-router-dom"
import Menu from "./menu"




class Pageheader  extends  Component {
  render() {
    return (
      <div id="header" className="navbar-toggleable-md sticky clearfix">
        <header data-reactroot id="topNav">
          <div className="full-container">
            <button className="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
              <i className="fa fa-bars" />{" "}
            </button>

            <a className="logo float-left" href="/">
 
              
              <img style={{padding:'10px'}} src="/assets/images/_smarty/logo_dark.png" />
            </a>
            <div className="navbar-collapse collapse float-right nav-main-collapse submenu-dark">
              <nav id="top_menu_nav" className="nav-main">
                <Menu />
              </nav>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
export default Pageheader