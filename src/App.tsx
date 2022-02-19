import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {processList} from './utils';

function App() {
  const [list, setList] = useState<string>(
    `1 Imported bottle of perfume at 47.50
1 Book at 12.49
1 Book at 12.49
1 Music CD at 14.99
1 Chocolate bar at 0.85 
1 Bottle of perfume at 18.99
1 Packet of headache pills at 9.75`
  );
  const [result, setResult] = useState<string[]>(['']);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = e.target;
    setList(value);
    setResult(processList(value));
  };
  return (
    <main className="App">
      <textarea
        name="productsList"
        id="products-list"
        cols={30}
        rows={10}
        onChange={handleChange}
        value={list}
      />
      <textarea
        name="result"
        readOnly
        id="result"
        cols={30}
        rows={10}
        value={result}
      />
    </main>
  );
}

export default App;
