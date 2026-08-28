---
name: ui-architecture
description: >-
  UI Architecture & Design System Skill. Guidelines, component selection pipeline,
  and UX audit rules for building modern web interfaces using shadcn/ui, Aceternity UI,
  21st.dev, Magic UI, and Tailwind Plus.
---

# UI Architecture & Design System Skill

This skill provides instructions for planning, composing, styling, and auditing modern web interfaces using a multi-tiered UI component strategy.

---

## 1. Component Stack Hierarchy

When creating web applications or UI components, follow this hierarchy:

- **Primary Foundation (`shadcn/ui`)**:
  Build dashboards, forms, sidebars, charts, data tables, dialogs, and navigation primitives using `shadcn/ui`.
  *Tip*: Initialize `shadcn` MCP server (`pnpm dlx shadcn@latest mcp init`) or skill (`pnpm dlx skills add shadcn/ui`) when available.

- **Visual & Animation Layer (`Aceternity UI`)**:
  Elevate visual appeal and eliminate generic AI aesthetics. Use `Aceternity UI` for hero sections, bento grids, glowing cards, moving borders, parallax effects, text reveal, floating docks, and aurora backgrounds.

- **Component Marketplace (`21st.dev`)**:
  Use `21st.dev` to discover community React primitives, specialized AI interface components, shaders, and interactive widgets.

- **Interactive Effects (`Magic UI`)**:
  Use for landing page micro-animations, text effects, and interactive primitives.

- **Production Layouts (`Tailwind Plus`)**:
  Use for structural layouts and production-tested page patterns.

---

## 2. Decision Tree & Workflow

```
1. Classify Product Category (SaaS, AI Tool, Dashboard, Developer Tool, Landing Page)
   ↓
2. Establish Single Visual System (Colors, Typography, Radius, Spacing scale)
   ↓
3. Layout & Architecture → shadcn/ui primitives & blocks
   ↓
4. Key Visual Anchors & Animations → Aceternity UI / Magic UI
   ↓
5. Specialized AI/Community Widgets → 21st.dev
   ↓
6. UI/UX Audit Phase → Verify states, accessibility, responsiveness, anti-AI look
```

---

## 3. UI/UX Audit Checklist

Execute this checklist before finishing any UI task:
- [ ] Clear visual hierarchy and focal points
- [ ] Professional typography and harmonious color scheme
- [ ] Consistent spacing, margins, and padding
- [ ] Proper interaction feedback (hover, focus, active, disabled)
- [ ] State coverage (loading, empty, error, active)
- [ ] Restrained, non-distracting animations
- [ ] Fully responsive on mobile, tablet, and desktop
