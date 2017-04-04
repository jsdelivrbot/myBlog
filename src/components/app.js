import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="header">My Blog</div>
          {this.props.children}
      </div>
    );
  }
}
