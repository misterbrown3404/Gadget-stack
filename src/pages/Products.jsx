import React, { useState } from 'react';
import { useInventory } from '../context/InventoryContext';

export default function Products() {
  const {
    gadgets,
    updateStock,
    setIsQuickAddOpen,
    totalGadgets,
    totalValue,
    lowStockCount,
    inStockCount,
    selectedCategoryFilter,
    setSelectedCategoryFilter
  } = useInventory();

  const [searchQuery, setSearchQuery] = useState('');
  const [stockFilter, setStockFilter] = useState('all');
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'

  // Filter gadgets
  const filteredGadgets = gadgets.filter((g) => {
    const matchesSearch =
      g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.details.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategoryFilter === 'all' || g.category === selectedCategoryFilter;

    const matchesStock =
      stockFilter === 'all' ||
      (stockFilter === 'in-stock' && g.stock > 5) ||
      (stockFilter === 'low-stock' && g.stock <= 5);

    return matchesSearch && matchesCategory && matchesStock;
  });

  return (
    <div className="flex flex-col w-full pb-12">
      {/* Top Action & Overview Strip */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#bc4800]/10 text-[#bc4800]">
              <span className="material-symbols-outlined text-sm">inventory_2</span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#bc4800]">
              Inventory Catalog
            </span>
          </div>
          <div className="flex items-baseline gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Gadget Products
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
              {gadgets.length} Cataloged
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => setIsQuickAddOpen(true)}
            className="h-11 px-5 rounded-xl bg-[#bc4800] hover:bg-[#943700] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer w-full sm:w-auto"
          >
            <span className="material-symbols-outlined text-lg">add_circle</span>
            <span>Add New Gadget</span>
          </button>
        </div>
      </div>

      {/* Quick Stats Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Total Units</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{totalGadgets}</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
            <span className="material-symbols-outlined text-xl">devices</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">In Stock</p>
            <div className="flex items-baseline gap-2 mt-1">
              <p className="text-2xl font-bold text-slate-900">{inStockCount}</p>
              <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                Ready
              </span>
            </div>
          </div>
          <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
            <span className="material-symbols-outlined text-xl">check_circle</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Low Stock Warning</p>
            <div className="flex items-baseline gap-2 mt-1">
              <p className="text-2xl font-bold text-[#bc4800]">{lowStockCount}</p>
              <span className="text-[11px] font-semibold text-[#bc4800] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                Needs restock
              </span>
            </div>
          </div>
          <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center text-[#bc4800]">
            <span className="material-symbols-outlined text-xl">warning</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Total Value</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">${totalValue.toLocaleString()}</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
            <span className="material-symbols-outlined text-xl">payments</span>
          </div>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="p-4 bg-white rounded-2xl shadow-sm mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border border-slate-200/80">
        <div className="relative flex-1 min-w-[280px]">
          <span className="material-symbols-outlined text-base absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, model, or SKU..."
            className="w-full h-11 pl-10 pr-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#bc4800] focus:bg-white transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Category Filter */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200">
            <span className="material-symbols-outlined text-slate-500 text-base">folder</span>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Category:</label>
            <select
              value={selectedCategoryFilter}
              onChange={(e) => setSelectedCategoryFilter(e.target.value)}
              className="bg-transparent text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer pr-1"
            >
              <option value="all">All Categories</option>
              <option value="Smartphones">Smartphones</option>
              <option value="Gaming Gear">Gaming Gear</option>
              <option value="Audio & Wearables">Audio & Wearables</option>
              <option value="Drones & Cameras">Drones & Cameras</option>
              <option value="Laptops & Tablets">Laptops & Tablets</option>
            </select>
          </div>

          {/* Stock Filter */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200">
            <span className="material-symbols-outlined text-slate-500 text-base">inventory</span>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Stock:</label>
            <select
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
              className="bg-transparent text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer pr-1"
            >
              <option value="all">All Levels</option>
              <option value="in-stock">In Stock (&gt; 5)</option>
              <option value="low-stock">Low Stock (≤ 5)</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 ml-auto sm:ml-0">
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Grid View"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-[#bc4800] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="material-symbols-outlined text-base">grid_view</span>
              <span className="hidden sm:inline">Cards</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              aria-label="Table View"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'table'
                  ? 'bg-white text-[#bc4800] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="material-symbols-outlined text-base">view_list</span>
              <span className="hidden sm:inline">Table</span>
            </button>
          </div>
        </div>
      </div>

      {/* TABLE VIEW */}
      {viewMode === 'table' ? (
        <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Gadget Name & SKU</th>
                  <th className="py-4 px-4">Category</th>
                  <th className="py-4 px-4">Retail Price</th>
                  <th className="py-4 px-4">Current Stock</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-6 text-right">Quick Inventory Controls</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredGadgets.map((gadget) => {
                  const isLow = gadget.stock <= 5;
                  return (
                    <tr key={gadget.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <img
                            alt={gadget.name}
                            className="w-11 h-11 rounded-xl object-cover border border-slate-200 bg-slate-50 flex-shrink-0"
                            src={gadget.image}
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-slate-900 truncate">
                              {gadget.name}
                            </p>
                            <p className="text-xs text-slate-400 mt-0.5">
                              SKU: <span className="text-slate-600 font-medium">{gadget.sku}</span> • {gadget.details}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                          {gadget.category}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm font-bold text-slate-900">${gadget.price}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`text-base font-extrabold ${isLow ? 'text-[#bc4800]' : 'text-slate-900'}`}>
                          {gadget.stock}
                        </span>
                        <span className="text-slate-400 text-xs ml-1 font-normal">units</span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                            isLow
                              ? 'bg-orange-50 text-[#bc4800] border border-orange-200'
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${isLow ? 'bg-[#bc4800]' : 'bg-emerald-500'}`} />
                          {isLow ? 'Low Stock' : 'In Stock'}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* Decrement stock */}
                          <button
                            onClick={() => updateStock(gadget.id, -1)}
                            className="w-8 h-8 rounded-lg border border-slate-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 text-slate-600 flex items-center justify-center transition-colors active:scale-95"
                            title="Remove 1 unit"
                          >
                            <span className="material-symbols-outlined text-sm">remove</span>
                          </button>

                          {/* Restock */}
                          <button
                            onClick={() => updateStock(gadget.id, 5)}
                            className="h-8 px-2.5 rounded-lg border border-slate-200 hover:bg-orange-50 hover:text-[#bc4800] hover:border-orange-200 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors active:scale-95"
                          >
                            <span className="material-symbols-outlined text-sm text-[#bc4800]">add</span>
                            <span>+5</span>
                          </button>

                          {/* Info/Edit */}
                          <button
                            onClick={() => alert(`${gadget.name}\nBin: ${gadget.bin}\nStock: ${gadget.stock}`)}
                            className="w-8 h-8 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 flex items-center justify-center transition-colors active:scale-95"
                            title="Details"
                          >
                            <span className="material-symbols-outlined text-sm">info</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* CARD GRID VIEW */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
          {filteredGadgets.map((gadget) => {
            const isLow = gadget.stock <= 5;
            return (
              <div
                key={gadget.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="relative w-full h-44 rounded-xl bg-slate-50 overflow-hidden mb-3 border border-slate-100">
                    <img
                      alt={gadget.name}
                      className="w-full h-full object-cover"
                      src={gadget.image}
                    />
                    <span
                      className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full backdrop-blur-sm text-xs font-bold flex items-center gap-1 shadow-sm ${
                        isLow
                          ? 'bg-orange-500/90 text-white'
                          : 'bg-emerald-600/90 text-white'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      {isLow ? 'Low Stock' : 'In Stock'}
                    </span>
                    <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-lg bg-white/95 text-xs font-semibold text-slate-700 shadow-sm">
                      {gadget.sku}
                    </span>
                  </div>

                  <p className="text-xs font-bold text-[#bc4800] uppercase tracking-wide mb-1">
                    {gadget.category}
                  </p>
                  <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-1">
                    {gadget.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                    {gadget.details}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wide font-medium">Price</span>
                      <p className="text-lg font-extrabold text-slate-900">${gadget.price}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-slate-400 uppercase tracking-wide font-medium">Available</span>
                      <p className={`text-xl font-black ${isLow ? 'text-[#bc4800]' : 'text-teal-700'}`}>
                        {gadget.stock} <span className="text-xs font-normal text-slate-400">units</span>
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => updateStock(gadget.id, -1)}
                      className="h-9 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-700 text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">remove</span> 1
                    </button>
                    <button
                      onClick={() => updateStock(gadget.id, 5)}
                      className="h-9 rounded-xl bg-[#bc4800] hover:bg-[#943700] text-white text-xs font-bold flex items-center justify-center gap-1 transition-colors shadow-sm"
                    >
                      <span className="material-symbols-outlined text-sm">add</span> Restock
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
