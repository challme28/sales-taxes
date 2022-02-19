import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {processList} from './utils';

function App() {
  const [shoppingBasket, setShoppingBasket] = useState<string>('');
  const [receipt, setReceipt] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = e.target;
    setShoppingBasket(value);
  };
  const handleClickButton = () => {
    if (!shoppingBasket) {
      setReceipt('Empty shopping basket');
      return;
    }
    setReceipt(processList(shoppingBasket).join('\n'));
  };
  return (
    <main className="App">
      <section className="instructions">
        <h3>Please enter your shopping basket with the following format:</h3>
        <p className="product-line">1 Book at 12.49</p>
        <p className="product-example">(quantity) (name) at (price)</p>
        <p className="product-line">1 Imported bottle of perfume at 47.50</p>
        <p className="product-example">(quantity) (name) at (price)</p>
      </section>
      <textarea
        className="products-list"
        rows={15}
        onChange={handleChange}
        value={shoppingBasket}
      />
      <button className="button" onClick={handleClickButton}>
        Generate receipt
      </button>
      <span className="result">{receipt}</span>
    </main>
  );
}

export default App;
