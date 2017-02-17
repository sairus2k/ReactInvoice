import React from 'react';
import { NavBar } from './NavBar';

export class Main extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
