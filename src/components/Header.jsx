import React, { useState } from 'react';
import { useInventory } from '../context/InventoryContext';

export default function Header() {
  const { user, setCurrentPage } = useInventory();
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-xl flex items-center justify-between border-b border-outline-variant/20 px-8">
      {/* Search Bar */}
      <div className="flex items-center gap-space-sm flex-1 max-w-md">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-slate-400 text-lg pointer-events-none">
            search
          </span>
          <input
            className="w-full pl-10 pr-space-md py-space-xs h-10 rounded-lg bg-surface-container-low border border-outline-variant/40 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:bg-white transition-all bg-slate-50 border-slate-200"
            placeholder="Search gadgets, cables, batteries..."
            type="text"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setCurrentPage('products');
              }
            }}
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-space-md gap-4">
        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            aria-label="Notifications"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors relative hover:bg-slate-100"
          >
            <span className="material-symbols-outlined text-slate-600">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-secondary bg-[#006a61]"></span>
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-50 animate-in fade-in zoom-in-95 duration-100">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Notifications</span>
                <span className="text-[11px] text-teal-600 font-semibold bg-teal-50 px-2 py-0.5 rounded-full">3 New</span>
              </div>
              <div className="flex flex-col gap-2.5 mt-3 text-xs">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <p className="font-semibold text-slate-800">PlayStation 5 restocked</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">5 units added to Bin G-04</p>
                </div>
                <div className="p-2 rounded-lg bg-orange-50/50 border border-orange-100">
                  <p className="font-semibold text-orange-700">Steam Deck low stock warning</p>
                  <p className="text-orange-600 text-[11px] mt-0.5">Only 2 units remaining</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-space-sm pl-space-sm border-l border-outline-variant/30 pl-4 border-slate-200">
          <img
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200"
            src={user.avatar}
          />
          <div className="flex flex-col">
            <span className="font-label-md text-xs font-semibold text-on-surface leading-none text-slate-900">
              {user.name}
            </span>
            <span className="font-body-sm text-[11px] text-secondary leading-none mt-1 text-[#006a61] font-medium">
              {user.role}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
