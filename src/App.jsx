import React from 'react';
import { useInventory } from './context/InventoryContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Login from './pages/Login';
import QuickAddModal from './components/QuickAddModal';
import CreateCategoryModal from './components/CreateCategoryModal';

export default function App() {
  const { currentPage } = useInventory();

  if (currentPage === 'login') {
    return <Login />;
  }

  return (
    <div className="bg-[#f8f9ff] min-h-screen text-[#0b1c30]">
      {/* Responsive Navigation Rail & Drawer */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="pl-0 lg:pl-64 transition-all duration-300">
        <Header />
        <main className="w-full pt-20 px-4 sm:px-6 lg:px-8 py-6 min-h-screen">
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'products' && <Products />}
          {currentPage === 'categories' && <Categories />}
        </main>
      </div>

      {/* Global Interactive Modals */}
      <QuickAddModal />
      <CreateCategoryModal />
    </div>
  );
}
