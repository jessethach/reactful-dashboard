import React from "react";
import Router, { Link, RouteHandler } from "react-router";

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jquery";
import classNames from "classnames";

var HomePage = React.createClass({

  componentWillMount: function() {
    this.setState({Height: $(window).height()});
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function(){

    $(window).unbind('resize',this.adjustResize);

  },

  getInitialState: function(){

    return {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true
    };

  },

  toggleMenu: function(){
    if($(".navbar-collapse").hasClass('collapse')){
      $(".navbar-collapse").removeClass('collapse');
    }
    else{
      $(".navbar-collapse").addClass('collapse');
    }
  },

  render: function() {

    return (
        <div id="wrapper" className="content">

          <Navbar brand={<span>
            <span>Studio<strong>HQ</strong></span>
            <button type="button" className="navbar-toggle" onClick={this.toggleMenu} style={{position: 'absolute', right: 0, top: 0}}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            </span>} fluid={true}  style={ {margin: 0} } >
            <ul className="nav navbar-top-links navbar-left navbar-main">
              <Nav style={ {margin: 0} }>

                <NavItem>
                  <span>Happy Dance & Music</span>
                </NavItem>

                <NavDropdown title="Seattle, 4th & Pike">
                  <MenuItem eventKey="1" style={ {width: 300} }>
                    <div> <span className="text-muted small">Seattle, 3rd & Jackson</span></div>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2" style={ {width: 300} }>
                    <div> <span className="text-muted small">Seattle, 5th & Pine</span></div>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="3" style={ {width: 300} }>
                    <div> <span className="text-muted small">Seattle, 1st & Cherry</span></div>
                  </MenuItem>
                  <MenuItem divider />
                </NavDropdown>

              </Nav>
            </ul>
            <div className="navbar-default sidebar" style={ { 'marginLeft': '-20px' } } role="navigation">
              <div className="sidebar-nav navbar-collapse">

                <ul className="nav in" id="side-menu">

                  <li>
                    <Link to="dashboard.blank">
                      <svg width="22px" height="19px" viewBox="-1 -1 22 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <path d="M10,3.33333333 C10,1.5 8.5,0 6.66666667,0 L0.416666667,0 L0.416666667,13.3333333 L6.70833333,13.3333333 C10,13.3333333 10,16.6666667 10,16.6666667 C10,16.6666667 10,13.3333333 13.3333333,13.3333333 L19.5833333,13.3333333 L19.5833333,0 L13.3333333,0 C11.5,0 10,1.5 10,3.33333333" id="Shape" stroke="#508DB4" stroke-width="1" fill="none"></path>
                          <path d="M11.875,16.4583333 C12.2916667,15.5833333 13.2083333,15 14.1666667,15 L20,15" id="Shape" stroke="#508DB4" stroke-width="1" fill="none"></path>
                          <path d="M8.125,16.4583333 C7.70833333,15.5833333 6.83333333,15 5.83333333,15 L0,15" id="Shape" stroke="#508DB4" stroke-width="1" fill="none"></path>
                          <path d="M10,3.33333333 L10,16.6666667" id="Shape" stroke="#508DB4" stroke-width="1" fill="none"></path>
                      </svg>
                      &nbsp;Dashboard</Link>
                  </li>

                  <li>
                    <Link to="dashboard.classes">
                      <svg width="22px" height="18px" viewBox="-1 -1 22 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect id="Rectangle-path" stroke="#3A405B" stroke-width="1" fill="none" x="0" y="0" width="20" height="15.6521739"></rect>
                        <path d="M0,5 L20,5" id="Shape" stroke="#3A405B" stroke-width="1" fill="none"></path>
                        <path d="M6,5.2173913 L6,15.6521739" id="Shape" stroke="#3A405B" stroke-width="1" fill="none"></path>
                    </svg>
                      &nbsp;Classes</Link>
                  </li>

                  <li>
                    <Link to="dashboard.blank">
                      <svg width="22px" height="16px" viewBox="-1 -1 22 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M9.53571429,2.64285714 C9.57142857,1.21428571 8.39285714,0 6.96428571,0 L6.85714286,0 C5.39285714,0 4.10714286,1.17857143 4.17857143,2.64285714 C4.17857143,2.92857143 4.46428571,4.42857143 4.46428571,4.42857143 C4.67857143,5.71428571 5.53571429,6.78571429 6.85714286,6.78571429 C8.17857143,6.78571429 9,5.71428571 9.25,4.42857143 C9.25,4.42857143 9.53571429,2.96428571 9.53571429,2.64285714 L9.53571429,2.64285714 Z" id="Shape" stroke="#3A405B" stroke-width="1" fill="none"></path>
                      <path d="M13.4642857,13.5714286 L0.25,13.5714286 L0.464285714,11 C0.571428571,10.0357143 1.57142857,9.35714286 2.57142857,9.17857143 L6.85714286,8.60714286 L11.1785714,9.17857143 C12.2857143,9.39285714 13.25,10 13.3214286,11.1071429 L13.4642857,13.5714286 L13.4642857,13.5714286 Z" id="Shape" stroke="#3A405B" stroke-width="1" fill="none"></path>
                      <path d="M16.5,4.42857143 C16.5,3.25 15.5357143,2.28571429 14.3571429,2.28571429 C13.1785714,2.28571429 12.2142857,3.25 12.2142857,4.42857143 C12.2142857,4.67857143 12.4642857,5.82142857 12.4642857,5.82142857 C12.6428571,6.82142857 13.3214286,7.67857143 14.3571429,7.67857143 C15.3928571,7.67857143 16.0714286,6.82142857 16.25,5.82142857 C16.2857143,5.82142857 16.5,4.64285714 16.5,4.42857143 L16.5,4.42857143 Z" id="Shape" stroke="#3A405B" stroke-width="1" fill="none"></path>
                      <path d="M14.3571429,9.28571429 L17.8928571,9.71428571 C18.75,9.85714286 19.5357143,10.3571429 19.6071429,11.2857143 L19.7142857,13.5714286 L15.6071429,13.5714286" id="Shape" stroke="#3A405B" stroke-width="1" fill="none"></path>
                  </svg>
                      &nbsp;Students</Link>
                  </li>

                  <li>
                    <Link to="dashboard.blank">
                      <svg width="22px" height="20px" viewBox="-1 -1 22 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M0,3.04347826 L0,14.7826087 C0,16.6956522 1.56521739,18.2608696 3.47826087,18.2608696 L16.5217391,18.2608696 C18.4347826,18.2608696 20,16.6956522 20,14.7826087 L20,4.34782609 L1.39130435,4.34782609 C0.608695652,4.34782609 0,3.73913043 0,3 L0,3 L0,3 C0,2.30434783 0.52173913,1.69565217 1.2173913,1.65217391 L18.2608696,0 L18.2608696,4.34782609" id="Book" stroke="#3A405B" stroke-width="1" fill="none"></path>
                      <path d="M15.6521739,8.26086957 L20,8.26086957 L20,8.26086957 L20,13.4782609 L20,13.4782609 L15.6521739,13.4782609 C14.2173913,13.4782609 13.0434783,12.3043478 13.0434783,10.8695652 L13.0434783,10.8695652 C13.0434783,9.43478261 14.2173913,8.26086957 15.6521739,8.26086957 L15.6521739,8.26086957 Z" id="Shape" stroke="#3A405B" stroke-width="1" fill="none"></path>
                      <circle id="Oval" stroke="none" fill="#3A405B" fill-rule="evenodd" cx="16.0869565" cy="10.8695652" r="0.869565217"></circle>
                  </svg>
                      &nbsp;Payments</Link>
                  </li>

                  <li>
                    <Link to="dashboard.blank">
                      <svg width="22px" height="22px" viewBox="-1 -1 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M14.1304348,4.08695652 C14.2173913,1.7826087 12.2608696,0 10,0 C7.73913043,0 5.73913043,1.82608696 5.86956522,4.08695652 C5.91304348,4.56521739 6.34782609,6.82608696 6.34782609,6.82608696 C6.69565217,8.7826087 8,10.4347826 10,10.4347826 C12,10.4347826 13.3043478,8.7826087 13.6521739,6.7826087 C13.6521739,6.7826087 14.0869565,4.52173913 14.1304348,4.08695652 L14.1304348,4.08695652 Z" id="Shape" stroke="#3A405B" stroke-width="1" fill="none"></path>
                      <path d="M20,20 L0,20 L0.47826087,16.4347826 C0.695652174,15.2608696 1.73913043,14.5652174 2.91304348,14.3043478 L10,13.0434783 L17.0869565,14.3043478 C18.2608696,14.5652174 19.3043478,15.2608696 19.4782609,16.4347826 L20,20 L20,20 Z" id="Shape" stroke="#3A405B" stroke-width="1" fill="none"></path>
                  </svg>
                      &nbsp;Staff</Link>
                  </li>

                  <li>
                    <Link to="dashboard.blank">
                      <svg width="22px" height="22px" viewBox="-1 -1 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <circle id="Oval" stroke="#3A405B" stroke-width="1" fill="none" cx="10" cy="10" r="3.04347826"></circle>
                      <path d="M20,11.4347826 L20,8.45652174 L18.2608696,8.33043478 C17.5628376,8.27943829 16.9535255,7.83844444 16.6869565,7.19130435 L16.6869565,7.16956522 C16.4178569,6.52218798 16.5373411,5.77835681 16.9956522,5.24782609 L18.1347826,3.94347826 L16.0173913,1.82173913 L14.7130435,2.96086957 C14.1825128,3.41918065 13.4386816,3.53866484 12.7913043,3.26956522 L12.7695652,3.26956522 C12.1251472,3.01385854 11.6829735,2.41304237 11.6304348,1.72173913 L11.4869565,0 L8.50869565,0 L8.3826087,1.71304348 C8.33083067,2.40770075 7.88925573,3.01275954 7.24347826,3.27391304 L7.24347826,3.27391304 C6.59610102,3.54301266 5.85226985,3.42352847 5.32173913,2.96521739 L4.0173913,1.82608696 L1.87391304,3.91304348 L3.01304348,5.2173913 C3.47135456,5.74792203 3.59083875,6.4917532 3.32173913,7.13913043 L3.32173913,7.13913043 C3.06959035,7.80933321 2.45293129,8.27352163 1.73913043,8.33043478 L0,8.45652174 L0,11.4347826 L1.73913043,11.5652174 C2.43716242,11.6162139 3.04647454,12.0572077 3.31304348,12.7043478 L3.31304348,12.726087 C3.5821431,13.3734642 3.46265891,14.1172954 3.00434783,14.6478261 L1.86521739,15.9521739 L3.96956522,18.0565217 L5.27391304,16.9173913 C5.80444377,16.4590802 6.54827494,16.339596 7.19565217,16.6086957 L7.2173913,16.6086957 C7.86793969,16.8875165 8.30775047,17.5069446 8.35652174,18.2130435 L8.50869565,20 L11.4869565,20 L11.6130435,18.2391304 C11.6642198,17.5380591 12.1043187,16.9249443 12.7521739,16.6521739 L12.773913,16.6521739 C13.4204863,16.381899 14.1642321,16.4996868 14.6956522,16.9565217 L16,18.0913043 L18.1043478,15.9826087 L16.9652174,14.6782609 C16.5069063,14.1477301 16.3874221,13.403899 16.6565217,12.7565217 L16.6565217,12.7347826 C16.9186579,12.0663384 17.5442777,11.6102632 18.2608696,11.5652174 L20,11.4347826 Z" id="Shape" stroke="#3A405B" stroke-width="1" fill="none"></path>
                  </svg>
                      &nbsp;Settings</Link>
                  </li>

                  <li>
                    <Link to="dashboard.blank">
                      <svg width="20px" height="22px" viewBox="-1 -1 20 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M12.173913,13.0434783 L12.173913,17.3913043 C12.173913,18.826087 11,20 9.56521739,20 L0,20 L0,0 L9.56521739,0 C11,0 12.173913,1.17391304 12.173913,2.60869565 L12.173913,6.95652174" id="Shape" stroke="#000000" stroke-width="1" fill="none"></path>
                      <path d="M6.95652174,10 L18.2608696,10" id="Shape" stroke="#000000" stroke-width="1" fill="none"></path>
                      <polyline id="Shape" stroke="#000000" stroke-width="1" fill="none" points="14.5652174 13.6956522 18.2608696 10 14.5652174 6.30434783"></polyline>
                  </svg>
                      &nbsp;Log Out</Link>
                  </li>

                </ul>

              </div>
            </div>

          </Navbar>

          <div id="page-wrapper" className="page-wrapper" ref="pageWrapper" style={{minHeight: this.state.Height}}>
            <RouteHandler {...this.props} />
          </div>

        </div>

    );
  },

  statics: {
    fetchData: function(params) {
      }
  }

});

export default HomePage;
