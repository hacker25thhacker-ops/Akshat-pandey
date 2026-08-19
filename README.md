# Billty AI

Billty AI is an AI-powered SaaS assistant for billing, invoices, quotations, and business documents for small businesses, shops, traders, and service providers.

## Product positioning

> Type or speak what you want → Billty AI prepares the bill or document → you review → e-sign → send or download.

## MVP scope

1. Login and business setup
2. Customer and product management
3. Invoice engine with GST calculations
4. AI invoice creation through structured commands
5. PDF generation
6. Basic e-signature
7. Dashboard for sales, pending payments, invoices, and customers

## Planned integrations

- Gemini API for AI reasoning through a backend AI gateway
- Sarvam AI for India-focused speech-to-text voice flows
- PostgreSQL for business data
- Server-side PDF generation and secure object storage for generated documents

## Safety principles

AI responses must be converted into structured commands, validated on the backend, and only then applied to the database. API keys for Gemini, Sarvam, storage, and payments must never be exposed in frontend code.

## Phase 2 development direction

The next implementation layer is the working billing engine: authenticated business profile, customer and product CRUD, invoice draft creation, invoice preview, save flow, PDF generation, and invoice history. Pricing must use configurable monthly usage allowances rather than hard-coded unlimited access for paid plans.
