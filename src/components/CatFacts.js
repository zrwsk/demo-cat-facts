import React, { Component } from 'react';

import Input from './Input';
import ListItem from './ListItem'

class CatFacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      catFacts: []
    }
  }

  componentDidMount() {
    fetch('https://cat-fact.herokuapp.com/facts')
      .then(blob => blob.json())
      .then(data => this.setState({catFacts: data.all}))
  }

  handleInputChange = event => {
    this.setState({inputValue: event.target.value});
  }

  handleSubmit = text => this.setState(prevState => ({
    catFacts: [{text}, ...prevState.catFacts],
    inputValue: ''
  }))

  render() {
    return (
      <>
        <Input 
          initialValue=""
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
        />
        <ul>
          {
            this.state.catFacts.map(
              (fact, i) => <ListItem key={i} fact={fact} />
            )
          }
        </ul>
      </>
    );
  }
}

export default CatFacts;
