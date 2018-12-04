import React from 'react';
import {v1 as uuidv1} from 'uuid'

const verySlowUuid = () => Array.from({length: 1000}, () => uuidv1())[Math.random() * 1000]

class ListItem extends React.Component {
  render() {
    const {text} = this.props.fact;

    return (
      <li className="list-item" key={verySlowUuid()}>
        {text}
      </li>
    );
  }
}

export default ListItem;
