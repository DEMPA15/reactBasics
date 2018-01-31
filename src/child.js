import React, { Component } from 'react';


class Child extends Component {

  render() {
    return(
      <div>         
          <button onClick={this.props.stuff}>{this.props.abc}</button> 
      </div>
    )
  }
}

export default Child;
