export type InvoiceLineItem = {
  name: string;
  quantity: number;
  unitPrice: number;
};

export type InvoiceTotalsInput = {
  items: InvoiceLineItem[];
  discount?: number;
  gstRate?: number;
  shipping?: number;
  roundOff?: boolean;
};

export type InvoiceTotals = {
  subtotal: number;
  discount: number;
  taxableAmount: number;
  tax: number;
  shipping: number;
  total: number;
};

const toCurrency = (amount: number) => Number(amount.toFixed(2));

export function calculateInvoiceTotals(input: InvoiceTotalsInput): InvoiceTotals {
  const subtotal = input.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const discount = input.discount ?? 0;
  const shipping = input.shipping ?? 0;
  const taxableAmount = Math.max(subtotal - discount, 0);
  const tax = taxableAmount * ((input.gstRate ?? 0) / 100);
  const totalBeforeRoundOff = taxableAmount + tax + shipping;
  const total = input.roundOff ? Math.round(totalBeforeRoundOff) : totalBeforeRoundOff;

  return {
    subtotal: toCurrency(subtotal),
    discount: toCurrency(discount),
    taxableAmount: toCurrency(taxableAmount),
    tax: toCurrency(tax),
    shipping: toCurrency(shipping),
    total: toCurrency(total)
  };
}
