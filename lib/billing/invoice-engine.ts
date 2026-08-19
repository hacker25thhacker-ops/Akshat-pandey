import { calculateInvoiceTotals } from "@/lib/gst/calculations";
import type { BillingLineItem, CreateDocumentDraftInput, DocumentDraft } from "./types";

const toCurrency = (amount: number) => Number(amount.toFixed(2));

export function createDocumentDraft(input: CreateDocumentDraftInput): DocumentDraft {
  if (input.items.length === 0) {
    throw new Error("At least one line item is required to create a document draft.");
  }

  const items: BillingLineItem[] = input.items.map((item) => {
    const gstRate = item.gstRate ?? 0;
    const lineSubtotal = item.quantity * item.unitPrice;
    const lineTax = lineSubtotal * (gstRate / 100);

    return {
      ...item,
      gstRate,
      lineSubtotal: toCurrency(lineSubtotal),
      lineTax: toCurrency(lineTax),
      lineTotal: toCurrency(lineSubtotal + lineTax)
    };
  });

  const weightedGstRate = getWeightedGstRate(items);
  const totals = calculateInvoiceTotals({
    items: input.items,
    discount: input.discount,
    gstRate: weightedGstRate,
    shipping: input.shipping,
    roundOff: true
  });

  return {
    businessId: input.businessId,
    documentType: input.documentType,
    customer: input.customer,
    items,
    subtotal: totals.subtotal,
    discount: totals.discount,
    taxableAmount: totals.taxableAmount,
    tax: totals.tax,
    shipping: totals.shipping,
    total: totals.total,
    paymentStatus: input.paymentStatus ?? "draft",
    notes: input.notes
  };
}

function getWeightedGstRate(items: BillingLineItem[]): number {
  const subtotal = items.reduce((sum, item) => sum + item.lineSubtotal, 0);

  if (subtotal === 0) {
    return 0;
  }

  const weightedTax = items.reduce((sum, item) => sum + item.lineTax, 0);
  return (weightedTax / subtotal) * 100;
}
