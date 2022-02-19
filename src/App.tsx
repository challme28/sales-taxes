import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {processList} from './utils';

function App() {
  const [list, setList] = useState<string>(
    `1 Book at 12.49
1 Book at 12.49
1 Music CD at 14.99
1 Chocolate bar at 0.85
1 Imported box of chocolates at 10.00
1 Imported bottle of perfume at 47.50
1 Imported bottle of perfume at 27.99
1 Bottle of perfume at 18.99
1 Packet of headache pills at 9.75
1 Imported box of chocolates at 11.25
1 Imported box of chocolates at 11.25`
  );
  const [result, setResult] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = e.target;
    setList(value);
  };
  const handleClickButton = () => {
    setResult(processList(list).join('\n'));
  };
  return (
    <main className="App">
      <section className="instructions">
        <h3>Please enter your shopping basket with the following format:</h3>
        <p>1 Book at 12.49</p>
        <p>(quantity) (name) at (price)</p>
        <p>1 Imported bottle of perfume at 47.50</p>
        <p>(quantity) (name) at (price)</p>
      </section>
      <textarea
        className="products-list"
        cols={60}
        rows={20}
        onChange={handleChange}
        value={list}
      />
      <button className="button" onClick={handleClickButton}>
        Generate receipt
      </button>
      <span className="result">{result}</span>
    </main>
  );
}

export default App;
