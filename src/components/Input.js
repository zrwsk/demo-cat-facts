import React, { Component } from 'react';

class Input extends Component {
  
  handleKeyDown = event => {
    if(event.key === 'Enter')
      this.props.onSubmit(this.props.value);
  }

  render() {
    return (
      <input value={this.props.value} onChange={this.props.onChange} onKeyDown={this.handleKeyDown} />
    );
  }
}

export default Input;
