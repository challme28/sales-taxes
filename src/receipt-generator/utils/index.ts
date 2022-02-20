// exceptions keys were taken from the example inputs
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

export function calculateTax(name: string, price: number): number {
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

export function isProductExempt(name: string): boolean {
  return exceptions.some((exception: string) => name.includes(exception));
}
