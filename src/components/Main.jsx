import React from 'react';
import { Grid } from 'react-bootstrap';
import { NavBar } from './NavBar';

export class Main extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    )
  }
}
