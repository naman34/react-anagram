'use strict';

require('es6-shim');

var React = require('react');
var d = React.DOM;

var Character = React.createFactory(require('./character'));

module.exports = React.createClass({

  getDefaultProps: function(){
    return {
      lineLimit : 55,
      text: 'Allo Allo!'
    };
  },

  render: function(){

    // var chars = [for (char in this.props.text.split('')) Character({char})]

    var cache = {};

    var charData = this.props.text.split('')
        .map(function(char, i){
          var key;
          if(cache[char]){
            key = char + cache[char];
            cache[char] ++;
          } else {
            key = char + '0';
            cache[char] = 1;
          }
          return {
            char, 
            key,
            left: i*10
          };
        });

    charData = charData.sort(function(objA, objB){
      return objA.char.charCodeAt() - objB.char.charCodeAt();
    });

    var chars = charData.map(function(charObj){
      return Character(charObj);
    });

    return d.div({style: {fontFamily: 'courier', fontSize: 16}}, 
      chars
    );
  }
});
