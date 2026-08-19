import { NextResponse } from "next/server";
import { createDocumentDraft } from "@/lib/billing/invoice-engine";
import type { CreateDocumentDraftInput } from "@/lib/billing/types";

export async function POST(request: Request) {
  const payload = (await request.json()) as CreateDocumentDraftInput;
  const draft = createDocumentDraft({
    ...payload,
    documentType: "invoice"
  });

  return NextResponse.json({ draft });
}
