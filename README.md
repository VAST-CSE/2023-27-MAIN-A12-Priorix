# Priorix — support intelligence prototype

A presentation-ready React/Vite prototype for the Priorix B.Tech CSE semester project.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal. For a production check:

```bash
npm run build
```

## Included in this first pass

- Responsive Priorix application shell with deep navy sidebar and demo-mode indicator.
- Dashboard with calculated KPI cards, ticket-volume chart, priority distribution, recent tickets and activity.
- Ticket inbox with combined search, status/priority filters, sortable-ready table layout and ticket detail editor.
- Create-ticket form with required fields, processing state, deterministic local analysis and editable suggested response.
- Analytics and Workflow / About pages.
- Realistic seeded ticket dataset covering payments, refunds, account access, technical issues, billing, orders, product inquiries and general requests.
- Ticket state and edits persisted to localStorage.

## Honest prototype boundary

`src/simulation.ts` is a deterministic rule-based placeholder for the proposed NLP/BERT workflow. It does not call an external model, claim confidence scores, or send customer replies. A future backend integration can replace that service without changing the UI contract.
