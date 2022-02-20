# Sales Taxes

This project is a `react` based web application compliant with a code assessment provided by [number8](https://www.number8.com/)
for the client [DealerOn](https://www.dealeron.com/). It uses `redux` to handle internal state management and `react-redux`
to obtain desired sections of our state three. However, the solution did not require the uses of states.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the 
[Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Problem
There are a variety of items for sale at a store. When a customer purchases items, they receive a receipt. The receipt 
lists of all the items purchased, the sales price of each item (with taxes included), the total sales taxes for all items,
and the total sales price.<br/>
Basic sales tax applies to all items at a rate of 10% of the item’s list price, except books, food, and
medical products, which are exempt from basic sales tax. An import duty (import tax) applies to all imported items at
a rate of 5% of the shelf price, with no exceptions.<br/>
Write an application that takes input for shopping baskets and returns receipts in the format shown below, calculating
all taxes and totals correctly. When calculating the sales tax, round the value up to the nearest 5 cents. For example, if
a taxable item costs $5.60, an exact 10% tax would be $0.56, and the final price after adding the rounded tax of $0.60
should be $6.20.

### Examples

| Input 1                                                                              | Output 1                                                                                               |
|:-------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| 1 Book at 12.49<br>1 Book at 12.49<br>1 Music CD at 14.99<br>1 Chocolate bar at 0.85 | Book: 24.98 (2 @ 12.49)<br>Music CD: 16.49<br>Chocolate bar: 0.85<br>Sales Taxes: 1.50<br>Total: 42.32 |

| Input 2                                                                        | Output 2                                                                                                    |
|--------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| 1 Imported box of chocolates at 10.00<br>1 Imported bottle of perfume at 47.50 | Imported box of chocolates: 10.50<br>Imported bottle of perfume: 54.65<br>Sales Taxes: 7.65<br>Total: 65.15 |

| Input 1                                                                                                                                                                                       | Output 1                                                                                                                                                                              |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 Imported bottle of perfume at 27.99<br>1 Bottle of perfume at 18.99<br>1 Packet of headache pills at 9.75<br>1 Imported box of chocolates at 11.25<br>1 Imported box of chocolates at 11.25 | Imported bottle of perfume: 32.19<br>Bottle of perfume: 20.89<br>Packet of headache pills: 9.75<br>Imported box of chocolates: 23.70 (2 @ 11.85)<br>Sales Taxes: 7.30<br>Total: 86.53 |

## Installation
To install peer and dev dependencies simply run:

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
