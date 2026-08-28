# UI Architecture & Component Decision Rules

## Stack Priority & Hierarchy

1. **Primary Foundation**: `shadcn/ui`
   - Use for main design system, dashboard blocks, sidebars, data tables, dialogs, forms, and core SaaS architecture.
   - Provides clean, inspectable source primitives designed for AI composition.
   - Setup / integration tooling:
     - MCP server: `pnpm dlx shadcn@latest mcp init`
     - AI skill: `pnpm dlx skills add shadcn/ui`

2. **Visual & Animation Layer**: `Aceternity UI`
   - Use to make UIs visually distinctive and avoid generic "AI-generated" appearance.
   - Selected primitives: Animated hero sections, parallax, bento grids, glowing cards, text reveal, moving borders, infinite moving cards, floating docks, aurora backgrounds, animated tabs.
   - Utilizes machine-readable component catalogs for LLM reasoning.

3. **Component Marketplace**: `21st.dev`
   - Use for discovering community-made React primitives, AI interface elements, special docks, cards, or background shaders when specialized UI is needed.

4. **Interactive Landing Effects**: `Magic UI`
   - Use for subtle landing page interactive effects and animated primitives.

5. **Layout Systems**: `Tailwind Plus`
   - Use for production-oriented layouts and structural blueprints.

---

## Architectural Decision Framework

When tasked with building or refactoring UI:

1. **Product Categorization**:
   Classify product category (e.g. SaaS, AI Tool, Developer Tool, Dashboard, Portfolio, E-commerce, Landing Page) and map required component primitives.

2. **Visual System Selection**:
   - SaaS / Dashboard → `shadcn/ui` dashboard blocks + sidebar + charts + data tables.
   - Landing / Hero → `Aceternity UI` animated hero + bento grids + glowing card accents.
   - Transitions → `Framer Motion` / subtle CSS keyframes.

3. **Design System Constraints**:
   - Enforce single typography family (e.g. Inter, Outfit, Roboto).
   - Enforce single spacing scale.
   - Enforce uniform border radius (e.g., `rounded-xl` consistently, not mixed with `rounded-full` or sharp edges arbitrarily).
   - Enforce accessible contrast ratios and harmonious color tokens.

---

## UI Quality & UX Audit Protocol

Always run the UI audit prior to finalizing UI implementations:
1. Verify interaction states (hover, focus, active, disabled).
2. Verify dynamic state coverage (loading states, empty states, error fallbacks).
3. Ensure no overused gradients or unnecessary animated fluff.
4. Test responsiveness across viewport widths.
