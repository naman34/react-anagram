'use strict';

var React = require('react');
var d = React.DOM;

module.exports = React.createClass({

  getInitialState: function(){
    return {
      a: 1
    };
  },


  render: function(){
    return d.div({
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        minHeight: 10,
        minWidth: 10,
        WebkitTransform: `translateX(${this.props.left}px)`,
        WebkitTransition: '5s ease'
      }
    }, this.props.char);
  }
});
