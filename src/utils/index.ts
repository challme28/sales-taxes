const r = /(1 )(.+?)( at )(\d+\.?\d*)/i;

type Product = {
  name: string;
  price: number;
  tax: number;
  quantity: number;
};
export function processList(list: string): string[] {
  const products = list.split('\n').filter((s) => !!s);
  const productsMap = new Map<string, Product>();
  products.forEach((productLine: string) => {
    const match = productLine.trim().match(r);
    if (match && match.length > 0) {
      const productKey = match[2] + match[4];
      productsMap.set(productKey, {
        name: match[2],
        price: parseFloat(match[4]),
        tax: calculateTax(match[2], parseFloat(match[4])),
        quantity: (productsMap.get(productKey)?.quantity || 0) + 1,
      });
    }
  });
  if (!productsMap.size) {
    return ['Incorrect shopping basket input'];
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
  productLines.push(`Sales Taxes: ${totalTax.toFixed(2)}`);
  productLines.push(`Total: ${total.toFixed(2)}`);
  return productLines;
}

const exceptions = [
  'book',
  'food',
  'chocolate',
  'medical',
  'products',
  'packet',
  'headache',
  'pill',
];

function calculateTax(name: string, price: number): number {
  let tax = 0;
  const lowerName = name.toLowerCase();
  if (lowerName.includes('imported')) {
    tax = roundNearestFiveCent(price * 0.05);
  }
  if (!isProductExempt(lowerName)) {
    tax += roundNearestFiveCent(price * 0.1);
  }
  return parseFloat(tax.toFixed(2));
}

function roundNearestFiveCent(price: number): number {
  return parseFloat((Math.ceil(price / 0.05) * 0.05).toFixed(2));
}

function isProductExempt(name: string): boolean {
  return exceptions.some((exception: string) => name.includes(exception));
}
