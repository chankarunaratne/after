# After

**Tagline:** Save now, learn later.

---

## Overview

**After** is a modern "save for later" platform that helps users collect content (articles, PDFs, YouTube links, etc.) and delivers AI-powered summaries at the right time, so they actually consume what they saved instead of forgetting it.

### Vision

The ultimate vision is a **cross-platform app (Web + iOS)** where users can:

- Save content from anywhere (browser, share sheet, forwarding to email).
- Get **clean article views** and **AI-generated summaries**.
- Receive **scheduled learning bites** so they revisit what matters most.

### MVP (Phase 1)

Our first release focuses on **Web only** with:

- Web app (Next.js) where users can view saved items and summaries.
- Chrome extension for 1-click saving.
- Email forwarding to save items via a custom email address.
- AI summaries of saved items, delivered via email.

This MVP helps validate the product with minimal surface area before we expand to iOS.

---

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (hosted on [Vercel](https://vercel.com/))
- **Backend & Database**: [Supabase](https://supabase.com/) (Postgres, Auth, Edge Functions, Storage)
- **AI**: [OpenAI API](https://platform.openai.com/) for text summarisation
- **Email Service**: [Postmark](https://postmarkapp.com/) for email delivery & parsing
- **Chrome Extension**: Standalone project connected to the same backend
- **Hosting**:
  - Frontend → Vercel
  - Backend/DB → Supabase

---

## Getting Started (Development)

### Prerequisites

- Node.js 18+
- npm (default package manager)

### Installation

```bash
# Clone the repo
git clone https://github.com/chankarunaratne/after.git
cd after

# Install dependencies
npm install

# Start dev server
npm run dev
```
