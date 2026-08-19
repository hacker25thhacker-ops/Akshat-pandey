# Phase 2 — Working Billing Engine

This phase turns the static MVP scaffold into a usable billing workflow without weakening the AI safety model.

## Build order

1. Add a database-backed repository implementation for businesses, customers, products, subscriptions, and documents.
2. Add authentication and resolve the active business from the signed-in user.
3. Build customer CRUD and product CRUD before invoice persistence.
4. Create invoice drafts through the billing engine, not directly from the AI response.
5. Persist confirmed invoices, generate PDFs, and show invoice history.

## Usage and pricing rule

Plan limits must be stored as configurable subscription fields instead of being treated as unlimited in code. The billing system should check `monthly_ai_limit`, `monthly_voice_limit`, and `monthly_documents_limit` before consuming paid resources.

## AI safety rule

Gemini and Sarvam outputs should produce structured document commands only. The backend validates those commands, creates a draft, and waits for user confirmation before saving or generating a PDF.
