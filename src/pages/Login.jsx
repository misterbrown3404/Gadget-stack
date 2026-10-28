import React, { useState } from 'react';
import { useInventory } from '../context/InventoryContext';

export default function Login() {
  const { setCurrentPage } = useInventory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setToastMessage('Connecting to inventory database...');

    setTimeout(() => {
      setToastMessage('Access Granted! Loaded 24 physical gadgets. Redirecting...');
      setTimeout(() => {
        setIsLoading(false);
        setCurrentPage('dashboard');
      }, 700);
    }, 900);
  };

  const fillDemoAccount = () => {
    setEmail('alex.maker@gadgetstash.com');
    setPassword('StashHero2025!');
    setToastMessage('Demo credentials loaded! Authenticating...');
    setTimeout(() => {
      handleLogin();
    }, 400);
  };

  return (
    <div className="min-h-screen w-full bg-[#f8f9ff] flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        {/* Main Card Container */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          {/* Top Energetic Accent Stripe */}
          <div className="h-1.5 w-full bg-[#bc4800]" />

          <div className="p-8 sm:p-10 flex flex-col">
            {/* Brand Header Section */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-4 text-[#bc4800] shadow-sm">
                <img src="/logo.svg" alt="GadgetStash" className="w-9 h-9 object-contain" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Sign In
              </h1>
              <p className="text-sm text-slate-500 mt-1 font-normal">
                Welcome back to GadgetStash
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-6">
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Email
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-lg pointer-events-none">
                    mail
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@gadgetstash.com"
                    className="w-full h-11 pl-11 pr-4 bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:outline-none focus:border-[#bc4800] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => alert('Password reset link sent to registered email.')}
                    className="text-xs font-semibold text-[#bc4800] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-lg pointer-events-none">
                    key
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-11 pl-11 pr-11 bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:outline-none focus:border-[#bc4800] focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 p-1 text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-[#bc4800] accent-[#bc4800] cursor-pointer"
                  />
                  <span className="text-xs text-slate-600 font-medium">Remember me</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 mt-2 rounded-xl text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer bg-[#bc4800] hover:bg-[#943700] active:scale-98 disabled:opacity-80"
              >
                {isLoading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
                    <span>Unlocking Stash Locker...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick Demo Login Option */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={fillDemoAccount}
                className="w-full h-10 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base text-[#bc4800]">bolt</span>
                <span>1-Click Demo Login (Alex Stash)</span>
              </button>
            </div>

            {/* Toast feedback */}
            {toastMessage && (
              <div className="mt-4 p-3 rounded-xl bg-orange-50 border border-orange-200 text-[#bc4800] text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-200">
                <span className="material-symbols-outlined text-sm">info</span>
                <span>{toastMessage}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
