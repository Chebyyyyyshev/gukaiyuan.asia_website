# Project Rules

This repository is the `redesign` branch for the personal website `gukaiyuan.asia`.

- Positioning: personal homepage, project portfolio, research archive, and technical knowledge base.
- Production safety: `main` is production; `redesign` is the redesign branch and Netlify Branch Deploy source. Do not commit, push, merge, create pull requests, deploy, or change DNS/Netlify settings without explicit instruction.
- Do not invent personal information, contact details, research output, datasets, affiliations, project experience, metrics, or skill percentages.
- Do not delete or rewrite legacy site content. `legacy-site/` is the read-only migration source.
- Content boundaries: Projects contains verified projects and future tools/demos; Research requires real research evidence; Notes contains reusable technical knowledge; Blog contains narrative posts and retrospectives; About contains verified bio and contact information.
- Design: modern editorial layout, restrained technical feel, complete light/dark themes, no fake metrics, no unnecessary animations, no gradient-heavy decoration.
- TypeScript and components: keep components typed, small, and reusable. Prefer centralized config and design variables over hard-coded page values.
- Prefer React Server Components. Use `"use client"` only for interaction such as theme switching and mobile navigation.
- Accessibility and performance: semantic landmarks, skip link, keyboard navigation, visible focus, responsive layouts from 320px, `prefers-reduced-motion`, and no avoidable client JavaScript.
- Required checks before handoff: `npm run lint`, `npm run typecheck`, `npm run build`, `npm run check`, and `git diff --check`.
- Detailed requirements and migration decisions live in `docs/`.
