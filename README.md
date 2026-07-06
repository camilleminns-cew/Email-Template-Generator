# CEW Stakeholder Email Generator

A small web tool for CEW colleagues to generate a starting email draft based on
a stakeholder's profile. You pick four things — **outreach type**, **stakeholder
type**, **VSDP stage**, and **topic** — and it assembles a mechanism-first draft
in CEW's voice, with the right register for the audience.

The drafts are starting points, not verbatim copy. Fill in the `[bracketed]`
placeholders and tailor to the person before sending.

## How it works

An email is stitched together from building blocks:

| Selection | Controls |
|---|---|
| **Outreach type** | Subject line, opener, sign-off (how warm the relationship is) |
| **Stakeholder type** | The *register* — technical (utility/reg) vs. plain (community). Sets the "who we are" and "how IUI works" paragraphs. |
| **VSDP stage** | The *ask* — the one forward-moving action, from Aware → Champion |
| **Topic** | The specific subject block + resource links |

Two voice rules are enforced automatically:
- **Plain register never says "tariff"** — it uses "a small charge on the utility
  bill." If that word slips into a community-facing draft, the tool flags it.
- **Anti-AI vocabulary** (delve, pivotal, fostering, etc.) is flagged if present.

## Editing the content (no coding needed for most edits)

Everything the tool says lives in **`src/data/content.js`**. It's heavily
commented. To change copy, add an audience, add a topic, or update resource
links, edit that one file. Keep the short `id` keys stable — the app references
them.

## Running it locally

```bash
npm install
npm run dev      # opens a local preview, hot-reloads as you edit content.js
```

## Publishing it so colleagues can use it from a URL

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds and publishes to **GitHub Pages** on every push to `main`.

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages → Source → "GitHub Actions."**
3. After the first workflow run, your live URL is
   `https://<org-or-user>.github.io/<repo-name>/`

Share that URL with the team. Any edit pushed to `main` redeploys automatically.

## Project layout

```
src/
  data/content.js   ← EDIT THIS: all copy, audiences, stages, topics, links
  assemble.js       ← assembly logic + voice-rule checks (pure function)
  App.jsx           ← the UI
  main.jsx          ← React entry point
.github/workflows/deploy.yml  ← auto-deploy to GitHub Pages
```

## Provenance

Content derived from CEW's Strategic Communications Plan (VSDP stages,
audience segments, four-part messaging framework: barrier breaker → ask →
benefit → reinforce) and the redlined CBO/Utility intro templates. Voice rules
follow CEW's anti-AI writing style guide.
