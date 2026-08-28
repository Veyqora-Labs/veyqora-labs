# UI Architecture & Design System Rules

## Recommended Component & UI Stack Hierarchy

| Tool | Primary Purpose | Rating | Role in Stack |
| :--- | :--- | :---: | :--- |
| **[shadcn/ui](https://ui.shadcn.com)** | Main design system, dashboards, forms, layouts, sidebars, charts, tables | ⭐⭐⭐⭐⭐ | **Primary Foundation** (Inspected, modified & composed source primitives) |
| **[Aceternity UI](https://ui.aceternity.com)** | Premium animations, hero sections, bento grids, glowing effects, moving borders | ⭐⭐⭐⭐⭐ | **Visual/Animation Layer** (Anti-AI visual polish) |
| **[21st.dev](https://21st.dev)** | Community-made modern React components, AI interfaces | ⭐⭐⭐⭐½ | **Component Marketplace** (Specialized primitive discovery) |
| **[Magic UI](https://magicui.design)** | Animated UI, landing pages, interactive effects | ⭐⭐⭐⭐½ | **Additional Animation Inspiration** |
| **[Tailwind Plus](https://tailwindcss.com/plus)** | Production-oriented layouts & templates | ⭐⭐⭐⭐ | **Layout Primitives** |

---

## Component Selection Pipeline

When building or styling a user interface, follow this execution flow:

```
YOUR AI CODING AGENT
       │
       ▼
┌──────────────────┐
│   UI PLANNER     │  <-- Understand product, category, audience, and target aesthetics
└────────┬─────────┘
       │
       ▼
┌──────────────────┐
│  DESIGN SYSTEM   │  <-- Establish shadcn/ui as foundational primitives & architecture
│   (shadcn/ui)    │
└────────┬─────────┘
       │
  ┌────┴────────────┬──────────────────┐
  ▼                 ▼                  ▼
Aceternity UI    Magic UI           21st.dev
 (Animations &   (Interactive       (Specialized
 Visual Polish)    Effects)          Components)
  │                 │                  │
  └────┬────────────┴──────────────────┘
       ▼
┌──────────────────┐
│ UI CONSISTENCY   │  <-- Enforce uniform color palette, typography, spacing, border-radius
│      CHECK       │
└────────┬─────────┘
       ▼
 FINAL INTERFACE
```

---

## UI Architecture Rules (Decision System)

1. **Understand Product & Category First**: Determine product category (SaaS, AI tool, dashboard, portfolio, ecommerce, developer tool, education, social, productivity, landing page) and target audience before writing UI code.
2. **Single Visual Direction**: Choose **ONE** unified aesthetic direction and adhere to it strictly.
3. **Foundation First**: Use `shadcn/ui` as the baseline design system. AI agent must compose primitive components rather than inventing unstructured markup.
4. **Registry Lookup**: Search existing component registries (`shadcn/ui`, `Aceternity UI`, `21st.dev`) before writing custom components from scratch.
5. **Layered Component Usage**:
   - Dashboard / Forms / Sidebars / Tables / Navigation → `shadcn/ui`
   - Hero Sections / Bento Grids / Glowing Cards / Micro-interactions → `Aceternity UI`
   - Interactive Landing Effects → `Magic UI`
   - Specialized AI / Marketplace primitives → `21st.dev`
6. **No Frankenstein UIs**: Never randomly mix contrasting visual styles. Maintain strict consistency in:
   - Spacing system
   - Typography system
   - Border radius
   - Shadow system
   - Color system & palette
   - Icon set
   - Motion / animation language
7. **Purposeful Animation**: Do not add animations everywhere. Every animation must serve a structural or feedback purpose. Prefer subtle micro-interactions over loud, distracting visual clutter.

---

## Mandatory UI Audit Phase

Before considering any UI task finished, conduct a mandatory UI/UX audit:

- [ ] **Anti-Template Check**: Does the interface look generic or obviously AI-generated?
- [ ] **Visual Hierarchy**: Is there a clear, intentional visual hierarchy guide for the eyes?
- [ ] **Typography**: Is typography professional, readable, and properly weighted?
- [ ] **Alignment & Spacing**: Are margins, paddings, and alignment consistent across components?
- [ ] **Card & Gradient Restraint**: Are cards or gradients overused?
- [ ] **Purposeful Motion**: Are animations meaningful and restrained?
- [ ] **Interactive States**: Do hover, active, focus, disabled, loading, empty, and error states exist for all interactive elements?
- [ ] **Responsive Design**: Is mobile and tablet layout properly formatted?
- [ ] **Visual Language Integrity**: Is the color palette and design language unified end-to-end?

*If any important item fails during audit, refactor the UI before completion.*
