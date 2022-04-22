import React, { Component } from "react";

class Header extends Component {
  state = {};
  // style=" background-color: #e3f2fd;"
  // <nav className="navbar navbar-light fixed-top flex-md-nowrap p-0 shadow">
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            target="_blank"
            href="/"
          >
                 <img src="https://cdn2.iconfinder.com/data/icons/circular-economy-dazzle-vol-1/256/Circular_Supply_Chain-512.png" height="60" alt="logo"/>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              
            </ul>
          </div>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small>
                <a className="nav-link" href="#">
                  <span id="account">{this.props.address}</span>
                </a>
              </small>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
