import React, { useState } from 'react';
import { useInventory } from '../context/InventoryContext';

export default function QuickAddModal() {
  const { isQuickAddOpen, setIsQuickAddOpen, addGadget } = useInventory();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Gaming Gear');
  const [units, setUnits] = useState(1);
  const [bin, setBin] = useState('');
  const [price, setPrice] = useState('299');

  if (!isQuickAddOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    addGadget({
      name,
      category,
      stock: units,
      bin: bin.trim() || 'Bin G-12',
      price: Number(price) || 299
    });

    setName('');
    setUnits(1);
    setBin('');
    setPrice('299');
    setIsQuickAddOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-space-md animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 flex flex-col gap-5 border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-tertiary-container text-white flex items-center justify-center bg-[#bc4800]">
              <span className="material-symbols-outlined text-[22px]">bolt</span>
            </div>
            <h3 className="font-bold text-lg text-slate-900">Quick Add Gadget</h3>
          </div>
          <button
            onClick={() => setIsQuickAddOpen(false)}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">Gadget Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Nintendo Switch OLED"
              className="w-full h-11 px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#bc4800] focus:bg-white transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#bc4800] cursor-pointer"
              >
                <option value="Gaming Gear">Gaming Gear</option>
                <option value="Smartphones">Smartphones</option>
                <option value="Laptops & Tablets">Laptops & Tablets</option>
                <option value="Audio & Wearables">Audio & Wearables</option>
                <option value="Drones & Cameras">Drones & Cameras</option>
                <option value="Smart Home & IoT">Smart Home & IoT</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">Price ($)</label>
              <input
                type="number"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#bc4800] focus:bg-white"
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">Initial Units</label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setUnits(Math.max(1, units - 1))}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold flex items-center justify-center text-slate-800 transition-colors"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={units}
                  onChange={(e) => setUnits(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 h-10 text-center rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-900"
                />
                <button
                  type="button"
                  onClick={() => setUnits(units + 1)}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold flex items-center justify-center text-slate-800 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">Bin Location</label>
              <input
                type="text"
                value={bin}
                onChange={(e) => setBin(e.target.value)}
                placeholder="e.g. Bin G-12"
                className="w-full h-10 px-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#bc4800]"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-3 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsQuickAddOpen(false)}
              className="flex-1 h-11 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 h-11 rounded-xl bg-[#bc4800] text-white font-semibold text-sm hover:bg-[#943700] transition-colors shadow-sm"
            >
              Save Gadget
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
