import type { CreateDocumentDraftInput, DocumentDraft } from "@/lib/billing/types";
import type { PlanCode } from "@/lib/subscriptions/plans";

export type BusinessProfile = {
  id: string;
  ownerId: string;
  name: string;
  gstin?: string;
  address?: string;
  phone?: string;
  email?: string;
};

export type SubscriptionUsage = {
  businessId: string;
  planCode: PlanCode;
  monthlyAiLimit: number;
  monthlyVoiceLimit: number;
  monthlyDocumentsLimit: number;
  aiRequestsUsed: number;
  voiceMinutesUsed: number;
  documentsCreated: number;
  usageResetDate: string;
};

export type BilltyRepository = {
  getBusinessProfile(businessId: string): Promise<BusinessProfile | null>;
  getSubscriptionUsage(businessId: string): Promise<SubscriptionUsage | null>;
  createDocumentDraft(input: CreateDocumentDraftInput): Promise<DocumentDraft>;
};
