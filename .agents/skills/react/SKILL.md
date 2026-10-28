---
name: react-developer
description: >-
  Use this skill when developing, refactoring, or architecting React applications,
  components, custom hooks, and state management in this project.
---

# React Development Skill & Best Practices

This skill provides workflow runbooks, component architectures, and best practices for developing and maintaining React applications in this workspace.

---

## 1. Component Architecture & Conventions

- **Component File Structure**:
  - Keep components modular and single-purpose inside `src/components/`.
  - Use `src/pages/` for top-level view orchestrators.
  - Use `src/context/` for application-wide reactive state providers.
- **Naming Conventions**:
  - Components: `PascalCase.jsx` (e.g., `QuickAddModal.jsx`, `InventoryLedger.jsx`).
  - Hooks: `camelCase.js` prefixed with `use` (e.g., `useInventory.js`).
  - Contexts: `PascalCaseContext.jsx` (e.g., `InventoryContext.jsx`).

---

## 2. State Management Guidelines

- **Local UI State**: Use `useState` for local toggles (modals, dropdowns, input buffers, tab selections).
- **Domain State**: Use React Context (`InventoryContext`) with custom hook consumer (`useInventory()`) for shared entities (e.g., items, categories, activity logs, user profile).
- **Derived State**: Compute metrics and filtered lists directly during render or with `useMemo` when expensive, avoiding duplicated state variables.

```jsx
// Example: Derived filtering pattern
const filteredGadgets = gadgets.filter((g) => {
  const matchesSearch = g.name.toLowerCase().includes(search.toLowerCase());
  const matchesCategory = selectedCategory === 'all' || g.category === selectedCategory;
  return matchesSearch && matchesCategory;
});
```

---

## 3. Styling & Tokens

- Rely on pre-configured design tokens (e.g., `#bc4800` primary accent, `#006a61` teal secondary, `#f8f9ff` surface background).
- Use Tailwind utility classes for layout, flexbox, grid, and spacing.
- Ensure high-contrast text ratios for dark and light surfaces.

---

## 4. Development Workflow

- Run dev server: `npm run dev`
- Build validation: `npm run build`
- Preview production build: `npm run preview`
