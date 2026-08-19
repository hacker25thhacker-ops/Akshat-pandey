import { z } from "zod";

export const documentCommandSchema = z.object({
  action: z.enum(["create_invoice", "create_quotation", "create_estimate", "create_receipt"]),
  customerName: z.string().min(1),
  gstRate: z.number().min(0).max(28).optional(),
  items: z.array(
    z.object({
      name: z.string().min(1),
      quantity: z.number().positive(),
      unitPrice: z.number().nonnegative()
    })
  ).min(1),
  notes: z.string().optional()
});

export type DocumentCommand = z.infer<typeof documentCommandSchema>;
