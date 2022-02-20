import {calculateTax} from './utils';

// 2nd match is the name and 4th match is the price
const r = /(1 )(.+?)( at )(\d+?\.??\d*?)$/i;

type Product = {
  name: string;
  price: number;
  tax: number;
  quantity: number;
};

export function processList(list: string): string[] {
  // split list into lines
  const products = list.split('\n').filter((s) => !!s);
  const productsMap = new Map<string, Product>();
  let line;
  products.some((productLine: string, index: number): boolean => {
    // trim spaces and match with regex
    const match = productLine.trim().match(r);
    if (match && match.length > 0) {
      // same product could have different prices
      const productKey = match[2] + match[4];
      productsMap.set(productKey, {
        name: match[2],
        price: parseFloat(match[4]),
        tax: calculateTax(match[2], parseFloat(match[4])),
        quantity: (productsMap.get(productKey)?.quantity || 0) + 1,
      });
      line = index + 2;
    } else {
      return true;
    }
    return false;
  });
  if (!productsMap.size) {
    return ['Incorrect shopping basket input'];
  }
  if (productsMap.size !== products.length) {
    return [`Incorrect input at line ${line}`];
  }
  return processProductsMap(productsMap);
}

function processProductsMap(productsMap: Map<string, Product>): string[] {
  let totalTax = 0;
  let total = 0;
  const productLines = [];
  for (const product of productsMap.values()) {
    const priceAndTax = product.price + product.tax;
    const totalPrice = priceAndTax * product.quantity;
    let qHelp;
    if (product.quantity > 1) {
      qHelp = `(${product.quantity} @ ${priceAndTax})`;
    }
    productLines.push(
      `${product.name}: ${totalPrice.toFixed(2)} ${qHelp || ''}`
    );
    totalTax += product.tax * product.quantity;
    total += totalPrice;
  }
  // last two lines are taxes and total
  productLines.push(`Sales Taxes: ${totalTax.toFixed(2)}`);
  productLines.push(`Total: ${total.toFixed(2)}`);
  return productLines;
}
