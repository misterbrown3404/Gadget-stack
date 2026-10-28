# GadgetStash - Gadget Inventory Manager (React + Vite)

Translated directly from your Stitch project **Gadget Inventory Manager** into a high-performance **React** single-page application (SPA).

---

## Architecture & Structure

```
Gadget-stack/
├── index.html                   # HTML entry point with custom theme & fonts
├── vite.config.js               # Vite + React configuration
├── package.json                 # Dependencies & scripts
├── public/                      # Static assets
├── logo.svg                     # Official GadgetStash brand logo
├── src/
│   ├── main.jsx                 # Application root mounting with Context Provider
│   ├── App.jsx                  # Main layout orchestrator & page routing
│   ├── index.css                # Global CSS & scrollbar styling
│   ├── context/
│   │   └── InventoryContext.jsx # Central state (gadgets, categories, activities, user)
│   ├── components/
│   │   ├── Sidebar.jsx          # Left navigation bar (Dashboard, Products, Categories, Sign Out)
│   │   ├── Header.jsx           # Top app bar (Search, Notifications dropdown, Profile)
│   │   ├── QuickAddModal.jsx    # Pop-up modal with tactile unit steppers & category selection
│   │   └── CreateCategoryModal.jsx # Category creator modal with icon chooser & zone mapping
│   └── pages/
│       ├── Dashboard.jsx        # Stat metric cards, stock progress bars, activity feed
│       ├── Products.jsx         # Full ledger with search, category/stock filters, Table/Card views
│       ├── Categories.jsx       # Category explorer cards & detailed storage directory table
│       └── Login.jsx            # Sign in portal with password toggle & 1-Click Demo login
└── legacy_html/                 # Original HTML screens backed up for reference
```

---

## Interactive Features

1. **Reactive Inventory State**:
   - Stock counts dynamically update in real time when you click **+ Restock** or **- 1**.
   - Low stock warnings trigger automatically when quantity drops below 5 units.
   - Quick Add Gadget creates new items instantly and updates overall valuations and recent activity logs.
2. **Table & Card Grid View Toggle**:
   - In the **Products** screen, toggle seamlessly between a dense tabular inventory list and visual product cards.
3. **Category Explorer & Filter Integration**:
   - Clicking category shortcuts in the Dashboard or Categories page immediately navigates and filters the Products view.
4. **Authentication Experience**:
   - Includes 1-Click Demo Login (`alex.maker@gadgetstash.com`) with animated unlocking sequence.

---

## Running the Application

### Development Server:
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

### Production Build:
```bash
npm run build
npm run preview
```
