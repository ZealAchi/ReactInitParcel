/**
 * Utils Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');

const Utils = require('../src');

window.Utils = Utils;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        渲染正常
      </div>
    );
  }
}

module.exports = Demo;
