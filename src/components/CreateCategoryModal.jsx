import React, { useState } from 'react';
import { useInventory } from '../context/InventoryContext';

export default function CreateCategoryModal() {
  const { isCategoryModalOpen, setIsCategoryModalOpen, addCategory } = useInventory();
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('keyboard');
  const [zone, setZone] = useState('Zone G-1');

  if (!isCategoryModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addCategory({
      name: title,
      icon,
      zone
    });

    setTitle('');
    setIsCategoryModalOpen(false);
  };

  const icons = [
    { id: 'keyboard', label: 'Keys' },
    { id: 'memory', label: 'Chips' },
    { id: 'battery_charging_full', label: 'Power' },
    { id: 'router', label: 'Network' }
  ];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-200">
        <div className="p-5 bg-slate-50 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#bc4800] text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-xl">add_box</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900">New Category</h3>
              <p className="text-xs text-slate-500">Step 1 of 1: Fast Name & Icon</p>
            </div>
          </div>
          <button
            onClick={() => setIsCategoryModalOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Category Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Mechanical Keyboards"
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#bc4800] focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Category Symbol
            </label>
            <div className="grid grid-cols-4 gap-2">
              {icons.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIcon(item.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all border ${
                    icon === item.id
                      ? 'bg-[#bc4800] text-white border-[#bc4800] shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl">{item.id}</span>
                  <span className="text-[11px] font-semibold mt-1">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Default Shelf Zone
            </label>
            <select
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#bc4800]"
            >
              <option value="Zone G-1">Zone G-1 (Specialty Gear)</option>
              <option value="Zone A-2">Zone A-2 (Mobile Rack)</option>
              <option value="Zone B-4">Zone B-4 (Heavy Cabinets)</option>
              <option value="Zone C-2">Zone C-2 (Bench Lockers)</option>
            </select>
          </div>

          <div className="pt-3 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsCategoryModalOpen(false)}
              className="flex-1 h-11 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 h-11 rounded-xl bg-[#bc4800] text-white font-semibold text-sm hover:bg-[#943700] transition-colors shadow-sm"
            >
              Create Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
