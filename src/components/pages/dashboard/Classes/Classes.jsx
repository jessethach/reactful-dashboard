import React, { PropTypes, Component } from 'react';

import Router, { Link } from "react-router";
import {
  PageHeader,
  Nav,
  NavBar,
  NavItem,
  Panel,
  PanelGroup,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

var ClassCategory = React.createClass({

  render: function() {
    return (

    	<div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <PageHeader>Studio Settings</PageHeader>
            </div>
          </div>
          <div className="row navbr-content">
            <div className="col-lg-12">
              <ul className="nav navbar-top-links navbar-left navbar-inner">
                <nav className="navbar-content">
                  <NavItem eventKey={1}>
                    <Link to="dashboard.blank">
                      Company
                    </Link>
                  </NavItem>
                  <NavItem eventKey={2}>
                    <Link to="dashboard.classes">
                      Location
                    </Link>
                  </NavItem>
                  <NavItem eventKey={3}>
                    <Link to="dashboard.blank">
                      Class Types
                    </Link>
                  </NavItem>
                  <NavItem eventKey={4}>
                    <Link to="dashboard.blank">
                      Managers
                    </Link>
                  </NavItem>
                  <NavItem eventKey={5}>
                    <Link to="dashboard.blank">
                      Billing Info
                    </Link>
                  </NavItem>
                  <NavItem eventKey={6}>
                    <Link to="dashboard.blank">
                      Merchant Account
                    </Link>
                  </NavItem>
                </nav>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <PanelGroup defaultActiveKey="1" accordion>
                <Panel header="Seattle, 4th & Pike" eventKey="1">
                  <div>
                    <form>
                      <div className="row">
                        <div className="col-md-7">
                          <label>
                            Location name
                            <br />
                            <input value="Seattle, 4th & Pike" className="input-content" type="text" placeholder="Enter Location" />
                          </label>
                        </div>
                        <div>
                          <label>
                            <br />
                            <div className="col-md-4">
                              <input type="text" placeholder="Contact Email" />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <label>
                            Address
                            <br />
                            <input type="text" placeholder="Enter Address" />
                          </label>
                        </div>
                        <div className="col-md-4">
                          <label>
                            Address 2
                            <br />
                            <input type="text" placeholder="Enter Address 2" />
                          </label>
                        </div>
                        <div className="col-md-4">
                          <label>
                            <br />
                            <input type="text" placeholder="Reply to Email" />
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <label>
                            <br />
                              <input type="text" value="Seattle" placeholder="City" />
                          </label>
                        </div>
                        <div className="col-md-2">
                          <label>
                            State
                            <br />
                            <select style={ {margin: 0} } name="select-state">
                              <option value="wa" selected>WA</option>
                              <option value="section1">Section 1</option>
                              <option value="section2">Section 2</option>
                              <option value="section3">Section 3</option>
                              <option value="section4">Section 4</option>
                              <option value="section5">Section 5</option>
                            </select>
                          </label>
                        </div>
                        <div className="col-md-2">
                          <label>
                            <br />
                            <input type="text" placeholder="Zip" />
                          </label>
                        </div>
                        <div className="col-md-4">
                          <label>
                            <br />
                            <input type="text" placeholder="Phone" />
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </Panel>
                <Panel header="Seattle, 3rd & Jackson" eventKey="2">Seattle, 3rd & Jackson</Panel>
                <Panel header="Seattle, 5th & Pine" eventKey="3">Seattle, 5th & Pine</Panel>
                <Panel header="Seattle, 1st & Cherry" eventKey="4">Seattle, 1st & Cherry</Panel>
              </PanelGroup>
              <div className="create-button-container">
                <button className="create-button">
                  <svg width="22px" height="23px" viewBox="-1 -1 22 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M0,10.5555556 L20,10.5555556" id="Shape" stroke="#508DB4" stroke-width="2" fill="none"></path>
                      <path d="M10,20.5555556 L10,0.5" id="Shape" stroke="#508DB4" stroke-width="2" fill="none"></path>
                  </svg>
                  &nbsp;Create New Location
                </button>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="cancel-button">Cancel</button>
            <button className="submit-button">Save Changes</button>
          </div>
        </div>
    	</div>

    );
  }

});

export default ClassCategory;

// <form>
//   <FormGroup controlId="formControlsText">
//     <ControlLabel>Location Name</ControlLabel>
//     <FormControl type="text" placeholder="Enter Location" />
//   </FormGroup>
// </form>
