import React, { useState } from 'react';
import { useInventory } from '../context/InventoryContext';

export default function Categories() {
  const {
    categories,
    totalGadgets,
    setIsCategoryModalOpen,
    setSelectedCategoryFilter,
    setCurrentPage
  } = useInventory();

  const [categorySearch, setCategorySearch] = useState('');
  const [filterMode, setFilterMode] = useState('all'); // 'all' or 'restock'

  const filteredCategories = categories.filter((cat) => {
    const matchesSearch =
      cat.name.toLowerCase().includes(categorySearch.toLowerCase()) ||
      cat.zone.toLowerCase().includes(categorySearch.toLowerCase()) ||
      cat.shelf.toLowerCase().includes(categorySearch.toLowerCase());

    const matchesFilter =
      filterMode === 'all' ||
      (filterMode === 'restock' && cat.status.toLowerCase().includes('restock'));

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col w-full pb-12">
      {/* Header Bar & Primary Call to Action */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#bc4800]/10 text-[#bc4800] uppercase tracking-wider">
              Storage Matrix
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#bc4800]" />
            <span className="text-xs text-slate-500 font-medium">Live Sync Active</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Gadget Categories
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Organize, track zones, and group your tech fleet in one clean place.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined text-base absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              filter_list
            </span>
            <input
              type="text"
              value={categorySearch}
              onChange={(e) => setCategorySearch(e.target.value)}
              placeholder="Filter categories..."
              className="pl-9 pr-3 py-2 text-sm bg-white border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#bc4800] transition-colors w-52"
            />
          </div>

          <button
            onClick={() => setIsCategoryModalOpen(true)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#bc4800] hover:bg-[#943700] text-white font-semibold text-sm transition-all shadow-sm active:scale-95 cursor-pointer w-full sm:w-auto"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            <span>Create Category</span>
          </button>
        </div>
      </div>

      {/* Quick Overview Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 flex items-center justify-between shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Catalog Breadth
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-slate-900">{categories.length}</span>
              <span className="text-xs text-slate-500 font-medium">Active Categories</span>
            </div>
            <span className="text-xs text-[#bc4800] font-semibold mt-1">All zones mapped</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#bc4800]/10 flex items-center justify-center text-[#bc4800]">
            <span className="material-symbols-outlined text-2xl">category</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 flex items-center justify-between shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Total Stashed
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-slate-900">{totalGadgets.toLocaleString()}</span>
              <span className="text-xs text-slate-500 font-medium">Gadgets Assigned</span>
            </div>
            <span className="text-xs text-slate-400 font-medium mt-1">Active fleet stock</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700">
            <span className="material-symbols-outlined text-2xl">all_inbox</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 flex items-center justify-between shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Top Fleet Hub
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-extrabold text-slate-900">Gaming Gear</span>
            </div>
            <span className="text-xs text-slate-400 font-medium mt-1">450 units in stock</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
            <span className="material-symbols-outlined text-2xl">sports_esports</span>
          </div>
        </div>
      </div>

      {/* Category Explorer Cards */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-bold text-slate-900">Category Explorer</h2>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
            {filteredCategories.length} Hubs
          </span>
        </div>
        <span className="text-xs text-slate-400">Overview of categorized inventory hubs</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {filteredCategories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => {
              setSelectedCategoryFilter(cat.name);
              setCurrentPage('products');
            }}
            className="group bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:border-[#bc4800] hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#bc4800] group-hover:bg-[#bc4800] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                  {cat.zone}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#bc4800] transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {cat.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>
                  <strong className="text-slate-900 font-semibold">{cat.models}</strong> Models
                </span>
                <span>•</span>
                <span>
                  <strong className="text-[#bc4800] font-semibold">{cat.items}</strong> Items
                </span>
              </div>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-[#bc4800] group-hover:translate-x-0.5 transition-all text-sm">
                arrow_forward
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Category Management Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200/80">
        <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">Inventory Category Directory</h3>
            <p className="text-xs text-slate-500">Detailed shelf assignments, stock levels, and zone health.</p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Filter:</span>
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                filterMode === 'all'
                  ? 'bg-[#bc4800] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Zones ({categories.length})
            </button>
            <button
              onClick={() => setFilterMode('restock')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                filterMode === 'restock'
                  ? 'bg-[#bc4800] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Restock Needed
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50">
                <th className="py-3.5 px-6">Category Name</th>
                <th className="py-3.5 px-6">Assigned Gadgets</th>
                <th className="py-3.5 px-6">Stock Health</th>
                <th className="py-3.5 px-6">Storage Zone</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-900">
              {filteredCategories.map((cat) => {
                const isRestock = cat.status.toLowerCase().includes('restock');
                return (
                  <tr key={cat.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#bc4800]">
                          <span className="material-symbols-outlined text-lg">{cat.icon}</span>
                        </div>
                        <div>
                          <span className="font-semibold block text-slate-900">{cat.name}</span>
                          <span className="text-xs text-slate-400">{cat.models} active models</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-bold text-slate-900">{cat.items}</span>
                      <span className="text-xs text-slate-400 ml-1">items</span>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                          isRestock
                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${isRestock ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                        {cat.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-500">
                      <span className="font-semibold text-slate-800">{cat.shelf}</span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => {
                            setSelectedCategoryFilter(cat.name);
                            setCurrentPage('products');
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-[#bc4800] hover:bg-slate-100 transition-colors"
                          title="View items"
                        >
                          <span className="material-symbols-outlined text-base">visibility</span>
                        </button>
                        <button
                          onClick={() => alert(`Editing category: ${cat.name}`)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined text-base">edit</span>
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
    </div>
  );
}
