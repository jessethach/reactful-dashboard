import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var Classes = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Classes.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default Classes;
