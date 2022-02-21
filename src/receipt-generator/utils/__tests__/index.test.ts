import {calculateTax} from '../index';

describe('Utils functions', () => {
  it('should return tax for imported products', () => {
    const tax = calculateTax('Imported bottle of perfume', 10);
    expect(tax).toBe(1.5);
  });

  it('should return no tax for exempt product', () => {
    const tax = calculateTax('Packet of headache pills', 9.75);
    expect(tax).toBe(0);
  });
});
