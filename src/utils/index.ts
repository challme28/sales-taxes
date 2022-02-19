const r = /(1 )(.+?)( at )(\d+\.?\d*)/i;
export function processList(list: string): string[] {
  const products = list.split('\n').filter((s) => !!s);
  const productRes = [];
  products.forEach((productLine: string) => {
    const match = productLine.match(r);
    if (match && match.length > 0) {
      productRes.push({
        name: match[2],
        price: parseFloat(match[4]),
        tax: calculateTax(match[2], parseFloat(match[4])),
      });
    }
  });
  return products;
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

function calculateTax(name: string, price: number): string {
  let tax = 0;
  const lowerName = name.toLowerCase();
  if (lowerName.includes('imported')) {
    tax = roundNearestFiveCent(price * 0.05);
  }
  if (!isProductExempt(lowerName)) {
    tax += roundNearestFiveCent(price * 0.1);
  }
  return tax.toFixed(2);
}

function roundNearestFiveCent(price: number): number {
  return parseFloat((Math.ceil(price / 0.05) * 0.05).toFixed(2));
}

function isProductExempt(name: string): boolean {
  return exceptions.some((exception: string) => name.includes(exception));
}
