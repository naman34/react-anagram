
'use strict';

var React = require('react');
global.React = React;

var Anagram = React.createFactory(require('./../../src'));

React.render(Anagram({lineLimit: 80, text: 'resistance gainly admirer sadder protectional'}), global.document.body);


setTimeout(function(){
  React.render(Anagram({lineLimit: 80, text: 'ancestries laying married dreads lactoprotein'}), global.document.body);
}, 4000);
