export type PlanCode = "free" | "pro" | "professional";

export type UsageAllowance = {
  monthlyAiRequests: number;
  monthlyVoiceMinutes: number;
  monthlyDocuments: number;
  storageMb: number;
};

export type PlanDefinition = {
  code: PlanCode;
  name: string;
  monthlyPriceInr: number;
  allowances: UsageAllowance;
  features: string[];
};

export const PLAN_CATALOG: Record<PlanCode, PlanDefinition> = {
  free: {
    code: "free",
    name: "Free",
    monthlyPriceInr: 0,
    allowances: {
      monthlyAiRequests: 10,
      monthlyVoiceMinutes: 5,
      monthlyDocuments: 20,
      storageMb: 100
    },
    features: ["Basic invoices", "Quotations", "GST calculation", "PDF export", "Billty branding"]
  },
  pro: {
    code: "pro",
    name: "Pro",
    monthlyPriceInr: 299,
    allowances: {
      monthlyAiRequests: 500,
      monthlyVoiceMinutes: 120,
      monthlyDocuments: 1000,
      storageMb: 2048
    },
    features: ["High-limit documents", "AI invoice creation", "Voice assistant", "Saved e-signature", "No watermark"]
  },
  professional: {
    code: "professional",
    name: "Professional",
    monthlyPriceInr: 999,
    allowances: {
      monthlyAiRequests: 2500,
      monthlyVoiceMinutes: 600,
      monthlyDocuments: 5000,
      storageMb: 10240
    },
    features: ["Multiple users", "Approval workflows", "Advanced analytics", "API access", "Priority processing"]
  }
};

export function getPlanDefinition(planCode: PlanCode): PlanDefinition {
  return PLAN_CATALOG[planCode];
}
