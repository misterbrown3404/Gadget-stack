import React, { useState } from 'react';
import { useInventory } from '../context/InventoryContext';

export default function Header() {
  const { user, setCurrentPage, setIsMobileMenuOpen } = useInventory();
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-white/95 backdrop-blur-xl shadow-sm z-30 px-4 sm:px-6 lg:px-8 flex items-center justify-between border-b border-slate-200 transition-all">
      {/* Left Area: Mobile Hamburger + Search */}
      <div className="flex items-center gap-3 flex-1 max-w-md mr-3">
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors flex-shrink-0"
          aria-label="Open navigation menu"
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>

        {/* Search Bar */}
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">
            search
          </span>
          <input
            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 h-10 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#bc4800] focus:bg-white transition-all"
            placeholder="Search gadgets, cables..."
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
      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            aria-label="Notifications"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors relative"
          >
            <span className="material-symbols-outlined text-xl">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#006a61]"></span>
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 z-50 animate-in fade-in zoom-in-95 duration-100">
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
        <div className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-3 border-l border-slate-200">
          <img
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200"
            src={user.avatar}
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-semibold text-slate-900 leading-none">
              {user.name}
            </span>
            <span className="text-[11px] text-[#006a61] font-medium leading-none mt-1">
              {user.role}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
