import React, { useState } from 'react';
import {unstable_createResource as createResource} from 'react-cache';

import Input from './Input';
import ListItem from './ListItem'

const catsResource = createResource(
  () => fetch('https://cat-fact.herokuapp.com/facts')
    .then(blob => blob.json())
    .then(data => data.all)
);

const CatFactsFromFuture = () => {
  const [inputValue, setInputValue] = useState()
  const [catFacts, setCatFacts] = useState(catsResource.read() || [])

  return (
    <>
      <Input 
        initialValue=""
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
        onSubmit={() => setCatFacts([{text: inputValue}, ...catFacts])}
      />
      <ul>
        {catFacts.map((fact, i) => <ListItem key={i} fact={fact} />)}
      </ul>
    </>
  );
}

export default CatFactsFromFuture;
