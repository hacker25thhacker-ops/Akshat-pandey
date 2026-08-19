export type DocumentType = "invoice" | "quotation" | "estimate" | "receipt";
export type PaymentStatus = "draft" | "unpaid" | "partial" | "paid";

export type CustomerInput = {
  id?: string;
  name: string;
  phone?: string;
  email?: string;
  gstin?: string;
  address?: string;
};

export type BillingLineItemInput = {
  productId?: string;
  name: string;
  quantity: number;
  unitPrice: number;
  gstRate?: number;
};

export type CreateDocumentDraftInput = {
  businessId: string;
  documentType: DocumentType;
  customer: CustomerInput;
  items: BillingLineItemInput[];
  discount?: number;
  shipping?: number;
  paymentStatus?: PaymentStatus;
  notes?: string;
};

export type BillingLineItem = BillingLineItemInput & {
  gstRate: number;
  lineSubtotal: number;
  lineTax: number;
  lineTotal: number;
};

export type DocumentDraft = {
  businessId: string;
  documentType: DocumentType;
  customer: CustomerInput;
  items: BillingLineItem[];
  subtotal: number;
  discount: number;
  taxableAmount: number;
  tax: number;
  shipping: number;
  total: number;
  paymentStatus: PaymentStatus;
  notes?: string;
};
