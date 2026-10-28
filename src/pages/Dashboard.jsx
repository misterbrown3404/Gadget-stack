import React from 'react';
import { useInventory } from '../context/InventoryContext';

export default function Dashboard() {
  const {
    totalGadgets,
    categories,
    lowStockCount,
    totalValue,
    activities,
    setIsQuickAddOpen,
    setCurrentPage,
    setSelectedCategoryFilter
  } = useInventory();

  const categoryShortcuts = [
    { name: 'Smartphones', filter: 'Smartphones', units: '320 Units', icon: 'smartphone' },
    { name: 'Laptops & Tabs', filter: 'Laptops & Tablets', units: '194 Units', icon: 'laptop' },
    { name: 'Gaming Gear', filter: 'Gaming Gear', units: '410 Units', icon: 'sports_esports' },
    { name: 'Audio & Wear', filter: 'Audio & Wearables', units: '356 Units', icon: 'headphones' }
  ];

  const stockFamilies = [
    { name: 'Smartphones', count: 320, pct: 80, color: 'bg-[#bc4800]' },
    { name: 'Gaming Consoles', count: 410, pct: 92, color: 'bg-[#006a61]' },
    { name: 'Audio & Sound', count: 245, pct: 65, color: 'bg-[#bc4800]' },
    { name: 'Drones & Aerial', count: 115, pct: 42, color: 'bg-[#006a61]' },
    { name: 'Smartwatches', count: 190, pct: 55, color: 'bg-[#bc4800]' }
  ];

  return (
    <div className="flex flex-col w-full gap-6 pb-12">
      {/* Welcome Action Banner */}
      <section className="w-full bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div className="flex flex-col gap-1 max-w-xl">
          <h1 className="text-[28px] font-bold text-slate-900 tracking-tight leading-tight">
            Welcome, Alex
          </h1>
          <p className="text-sm text-slate-500">
            Here is your gadget stash overview today. Everything is ready.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <button
            onClick={() => setIsQuickAddOpen(true)}
            className="h-11 px-5 rounded-xl bg-[#bc4800] hover:bg-[#943700] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer w-full sm:w-auto"
          >
            <span className="material-symbols-outlined text-lg">add_circle</span>
            <span>Add Gadget</span>
          </button>
          <button
            onClick={() => alert('Barcode Scanner ready! Connect camera or USB scanner.')}
            className="h-11 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer w-full sm:w-auto"
          >
            <span className="material-symbols-outlined text-lg text-slate-600">qr_code_scanner</span>
            <span>Scan Barcode</span>
          </button>
        </div>
      </section>

      {/* 4 Large Friendly Stat Metric Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Gadgets */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 flex items-center justify-between shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Gadgets</span>
            <span className="text-[28px] font-extrabold text-slate-900 tracking-tight mt-1">
              {totalGadgets.toLocaleString()}
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#bc4800]">
            <span className="material-symbols-outlined text-2xl">devices</span>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 flex items-center justify-between shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Categories</span>
            <span className="text-[28px] font-extrabold text-slate-900 tracking-tight mt-1">
              {categories.length}
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#006a61]">
            <span className="material-symbols-outlined text-2xl">folder_open</span>
          </div>
        </div>

        {/* Low Stock */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 flex items-center justify-between shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Low Stock</span>
            <span className="text-[28px] font-extrabold text-red-600 tracking-tight mt-1">
              {lowStockCount}
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
            <span className="material-symbols-outlined text-2xl">warning</span>
          </div>
        </div>

        {/* Total Value */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 flex items-center justify-between shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Value</span>
            <span className="text-[28px] font-extrabold text-slate-900 tracking-tight mt-1">
              ${totalValue.toLocaleString()}
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#bc4800]">
            <span className="material-symbols-outlined text-2xl">attach_money</span>
          </div>
        </div>
      </section>

      {/* Quick Category Fast-Picks */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900">Category Shortcuts</h2>
          <span className="text-xs font-medium text-slate-400">Tap to filter inventory</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categoryShortcuts.map((cat, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedCategoryFilter(cat.filter);
                setCurrentPage('products');
              }}
              className="h-16 px-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#bc4800]/50 hover:shadow-md transition-all flex items-center gap-3 text-left cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-[#bc4800]/10 flex items-center justify-center text-slate-600 group-hover:text-[#bc4800] transition-colors flex-shrink-0">
                <span className="material-symbols-outlined text-xl">{cat.icon}</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-xs sm:text-sm text-slate-900 truncate">{cat.name}</span>
                <span className="text-[11px] text-slate-500">{cat.units}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Split Grid: Visual Breakdown Bar Chart + Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visual Stock Breakdown Tracker */}
        <section className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between shadow-sm">
          <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Gadget Stock Level</h2>
              <p className="text-xs text-slate-500">Stock units by family</p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[11px] bg-teal-50 text-teal-700 font-semibold border border-teal-200">
              Synced
            </span>
          </div>

          <div className="flex flex-col gap-4 my-4">
            {stockFamilies.map((item, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>{item.name}</span>
                  <span className="text-slate-600 font-bold">{item.count} ({item.pct}%)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-500`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs text-slate-400 text-center pt-3 border-t border-slate-100">
            All categories within normal operating parameters
          </div>
        </section>

        {/* Recent Gadget Activity List */}
        <section className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-base font-bold text-slate-900">Recent Activity</h2>
              <p className="text-xs text-slate-500">Latest stock movements</p>
            </div>
            <button
              onClick={() => setCurrentPage('products')}
              className="text-xs font-semibold text-[#bc4800] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="flex flex-col divide-y divide-slate-100">
            {activities.map((act) => (
              <div key={act.id} className="py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 text-slate-600">
                    <span className="material-symbols-outlined text-xl">devices</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                      {act.name}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {act.category} • {act.bin}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    act.isPositive ? 'text-teal-700 bg-teal-50' : 'text-red-600 bg-red-50'
                  }`}>
                    {act.delta}
                  </span>
                  <span className="text-[11px] text-slate-400">{act.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Showing live records</span>
            <span>Refreshed live</span>
          </div>
        </section>
      </div>
    </div>
  );
}
