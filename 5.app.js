webpackJsonp([5],{425:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=l(1),r=a(i),n=l(21),o=r["default"].createClass({displayName:"Notifications",getInitialState:function(){return{alertVisibleA:!0,alertVisibleB:!0,alertVisibleC:!0,alertVisibleD:!0,showModal:!1}},close:function(){this.setState({showModal:!1})},open:function(){this.setState({showModal:!0})},render:function(){return r["default"].createElement("div",null,r["default"].createElement("div",{className:"row"},r["default"].createElement("div",{className:"col-lg-12"},r["default"].createElement(n.PageHeader,null,"Notifications"))),r["default"].createElement("div",{className:"row"},r["default"].createElement("div",{className:"col-lg-6"},r["default"].createElement(n.Panel,{header:r["default"].createElement("span",null,"Alert Styles")},r["default"].createElement(n.Alert,{bsStyle:"success"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",r["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."),r["default"].createElement(n.Alert,{bsStyle:"info"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",r["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."),r["default"].createElement(n.Alert,{bsStyle:"warning"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",r["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."),r["default"].createElement(n.Alert,{bsStyle:"danger"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",r["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."))),r["default"].createElement("div",{className:"col-lg-6"},r["default"].createElement(n.Panel,{header:r["default"].createElement("span",null,"Dismissable Alerts")},this.state.alertVisibleA?r["default"].createElement(n.Alert,{bsStyle:"success",onDismiss:this.handleAlertDismiss.bind(this,"A")},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",r["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."):null,this.state.alertVisibleB?r["default"].createElement(n.Alert,{bsStyle:"info",onDismiss:this.handleAlertDismiss.bind(this,"B")},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",r["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."):null,this.state.alertVisibleC?r["default"].createElement(n.Alert,{bsStyle:"warning",onDismiss:this.handleAlertDismiss.bind(this,"C")},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",r["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."):null,this.state.alertVisibleD?r["default"].createElement(n.Alert,{bsStyle:"danger",onDismiss:this.handleAlertDismiss.bind(this,"D")},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",r["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."):null))),r["default"].createElement("div",{className:"row"},r["default"].createElement("div",{className:"col-lg-6"},r["default"].createElement(n.Panel,{header:r["default"].createElement("span",null,"Modals")},r["default"].createElement(n.Button,{bsStyle:"primary",bsSize:"large",onClick:this.open},"Launch Demo Modal"),r["default"].createElement(n.Modal,{show:this.state.showModal,onHide:this.close},r["default"].createElement(n.Modal.Header,{closeButton:!0},r["default"].createElement(n.Modal.Title,null,"Modal Title")),r["default"].createElement(n.Modal.Body,null,r["default"].createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r["default"].createElement(n.Modal.Footer,null,r["default"].createElement(n.Button,{onClick:this.close},"Close"),r["default"].createElement(n.Button,{bsStyle:"primary"}," Save changes"))))),r["default"].createElement("div",{className:"col-lg-6"},r["default"].createElement(n.Panel,{header:r["default"].createElement("span",null,"Tooltips and Popovers")},r["default"].createElement("h4",null,"Tooltip Demo"),r["default"].createElement("div",null,r["default"].createElement(n.OverlayTrigger,{placement:"left",overlay:r["default"].createElement(n.Tooltip,null,"Check this out!")},r["default"].createElement(n.Button,null,"Tooltip on left")),r["default"].createElement(n.OverlayTrigger,{placement:"top",overlay:r["default"].createElement(n.Tooltip,null,"Check this out!")},r["default"].createElement(n.Button,null,"Tooltip on top")),r["default"].createElement(n.OverlayTrigger,{placement:"bottom",overlay:r["default"].createElement(n.Tooltip,null,"Check this out!")},r["default"].createElement(n.Button,null,"Tooltip on bottom")),r["default"].createElement(n.OverlayTrigger,{placement:"right",overlay:r["default"].createElement(n.Tooltip,null,"Check this out!")},r["default"].createElement(n.Button,null,"Tooltip on right"))),r["default"].createElement("br",null),r["default"].createElement("h4",null,"Clickable Popover Demo"),r["default"].createElement("div",null,r["default"].createElement(n.OverlayTrigger,{trigger:"click",placement:"left",overlay:r["default"].createElement(n.Popover,{title:"Popover left"},r["default"].createElement("strong",null,"Hello!")," Check this info.")},r["default"].createElement(n.Button,null,"Popover on left")),r["default"].createElement(n.OverlayTrigger,{trigger:"click",placement:"top",overlay:r["default"].createElement(n.Popover,{title:"Popover top"},r["default"].createElement("strong",null,"Hello!")," Check this info.")},r["default"].createElement(n.Button,null,"Popover on top")),r["default"].createElement(n.OverlayTrigger,{trigger:"click",placement:"bottom",overlay:r["default"].createElement(n.Popover,{title:"Popover bottom"},r["default"].createElement("strong",null,"Hello!")," Check this info.")},r["default"].createElement(n.Button,null,"Popover on bottom")),r["default"].createElement(n.OverlayTrigger,{trigger:"click",placement:"right",overlay:r["default"].createElement(n.Popover,{title:"Popover right"},r["default"].createElement("strong",null,"Hello!")," Check this info.")},r["default"].createElement(n.Button,null,"Popover on right")))))))},handleAlertDismiss:function(e){switch(e){case"A":this.setState({alertVisibleA:!1});break;case"B":this.setState({alertVisibleB:!1});break;case"C":this.setState({alertVisibleC:!1});break;case"D":this.setState({alertVisibleD:!1})}}});t["default"]=o,e.exports=t["default"]}});