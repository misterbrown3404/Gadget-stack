import React, { createContext, useContext, useState } from 'react';

const InventoryContext = createContext();

const INITIAL_GADGETS = [
  {
    id: '1',
    name: 'Apple iPhone 15 Pro Max',
    sku: 'GAD-101',
    details: '256GB Titanium Edition',
    category: 'Smartphones',
    price: 1199,
    stock: 42,
    maxStock: 50,
    status: 'in-stock',
    bin: 'Bin P-01',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh4EVRYjzC4T6qGsNpv1fNeEtCAppEMX6LIILtLTUIBfsYmZogvzbLK_xnT22-G3N2xNWj1nkPRFLRxd7YQETnyv9CftnacwCtdSEZoL8Ela80i37vCqT3CkFQCnoi-DoAclCcdnJHFA5_Ums-lcFtKWdhJLtpHWgbdihBKw-IWMAOVipFn3WaH7I0vfjFLTp3dv20YTeDzHLkzp7lnoZlWutds-gUqumiyziMnCUW'
  },
  {
    id: '2',
    name: 'PlayStation 5 Digital Edition',
    sku: 'GAD-102',
    details: '1TB SSD Console',
    category: 'Gaming Gear',
    price: 449,
    stock: 3,
    maxStock: 25,
    status: 'low-stock',
    bin: 'Bin G-04',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD54b2Sl2HbN_tUtve1jO6XX4KztQQat-frki2MLKFm2qAjhWt6dFRFLuk5SbrrSSUhg5V40gkya6EcitAWm3kQQVQN3YJ8XOyWTGLbQ8ZhkGJGKE3QPs2owRDEoQg4lAmzJ3loiX1wP01wG_auH0FhTxz8dvg0xOLcvGEeSkrCy_BCPzVEoogNrzGUPbgtTA1j2syjHCi_cSkG7kpAnZ3mq8Bl95h6NlxoCPxmsZFU'
  },
  {
    id: '3',
    name: 'DJI Mini 4 Pro Drone',
    sku: 'GAD-103',
    details: 'RC 2 Controller Pack',
    category: 'Drones & Cameras',
    price: 759,
    stock: 14,
    maxStock: 30,
    status: 'in-stock',
    bin: 'Bin D-09',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA19l-t99POTeQRy22GN9vMRBytrmsNtRR_LFbNZTy10YGdirWIH70BXZmWstp-uPB10jYY1zxjoh2wGcAozTz-pc7Aitru_Cc8o9u9mH7Yaj-MH4o_ABKuXSpFQyXUeGLrJwWnIqBSr4h5XHD4_MzqphWaqABhlh6777fL127cgfjDDBa-G4ir7CkFOiMrlZV9gzU1g6gwt3ybbidnn_pvtogRpvup0adChnLVXUpn'
  },
  {
    id: '4',
    name: 'Bose QuietComfort Ultra',
    sku: 'GAD-104',
    details: 'Spatial Audio Over-Ear',
    category: 'Audio & Wearables',
    price: 379,
    stock: 28,
    maxStock: 40,
    status: 'in-stock',
    bin: 'Bin A-12',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXxhw9QumgRhzInJFFy9Km3-IyoUiCZkZox05NEYeEiJAZfva6OkLogisq1GszTZ1JI6CYVXipdoLOGceSD90idYGR2hWYF6urcdUOtpGBgXWOtOM3RzbtIUiphMa8iIx_TPKWYrf7EeoltaWEjjkVV-k4-jTymggDxBr0VYTtHn7BmBw0e1CEu1OzqlzqmF3qwJOgF5hH4qkEqjOE0zWDFMrOF09dp9OT_HdBB9ar'
  },
  {
    id: '5',
    name: 'Nintendo Switch OLED',
    sku: 'GAD-105',
    details: '64GB White Console',
    category: 'Gaming Gear',
    price: 349,
    stock: 18,
    maxStock: 35,
    status: 'in-stock',
    bin: 'Bin G-12',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZG1rjK3mv9MG5Ag23Ka6IXXXPy08hRgI9CQ8u0FGylIwqSrbvlUeYmb6OcWq5Im5yfHeEQNHSIliqrXQrDrgA-u9eAGs8oXTFuts0uIdnoTCiLwFGO7rcMvOBO8mmOD2AJmqLp4KiwjWXDoF2TTXZVCF8klNUSKFpppArjX71hsZuI0HgsA4MRg6wR0eq0fAWNN_--JNNHGdaymQU71GhQPxA9deq4hGJJU1dEgZF'
  },
  {
    id: '6',
    name: 'Steam Deck OLED 512GB',
    sku: 'GAD-106',
    details: 'Handheld PC 90Hz',
    category: 'Gaming Gear',
    price: 549,
    stock: 2,
    maxStock: 20,
    status: 'low-stock',
    bin: 'Bin G-08',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjvaiZqWfiJnaRJ5z5CcCr_9w9380wRopG9S7ERwC6fEEixepl_URDMxMSWa6WenGdiPVoztWROlRsg22Y2VDuqiAv3Yd_LfNJgua02XUpwhFHfE2FbJQDoNfH4ZUCjmHYSgCF0jKv4oXQSjW6aMA8WsJQuUJHaqKEF5hfyVqOqkX0tVpz7If9NlH2Cuc-T1Jzrzvkh7Olve44pB-TvUI7cBdvgnXTr1IdE1Q8R4hl'
  },
  {
    id: '7',
    name: 'Samsung Galaxy S24 Ultra',
    sku: 'GAD-107',
    details: '512GB Titanium Black',
    category: 'Smartphones',
    price: 1299,
    stock: 21,
    maxStock: 40,
    status: 'in-stock',
    bin: 'Bin P-03',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBttsFT80GfZryvf-X3bSNMnXnZChcFDuWS7m5DHWzOvqo9IYCRs7cDny0lYu9smdReLhJxRAvjgSBHQ7Jc-ZjPq7dBLFA-uid_WWJ0hucom1HbsAsRSxNvlXQPebz4d_jUkRQHnKY5sS105M8XTOCFl6XLyPnUbFd-vib0zqe6RZkvQOcYDnFQRkNSnd53D5j-sdwKKcQl-8FA3EXUhWl7HDG1qOyXN8KocCLEFNO8'
  }
];

const INITIAL_CATEGORIES = [
  {
    id: 'c1',
    name: 'Smartphones & Mobile',
    description: 'iPhones, Android test units, power cables & wireless pads.',
    zone: 'Zone A-1',
    shelf: 'Shelf A-1 (Bay 2)',
    models: 8,
    items: 312,
    icon: 'smartphone',
    status: 'Healthy'
  },
  {
    id: 'c2',
    name: 'Gaming Consoles & Gear',
    description: 'Controllers, VR headsets, handheld rigs & docking ports.',
    zone: 'Zone B-3',
    shelf: 'Shelf B-3 (Main Rack)',
    models: 11,
    items: 450,
    icon: 'sports_esports',
    status: 'Healthy'
  },
  {
    id: 'c3',
    name: 'Audio & Headphones',
    description: 'Studio cans, Bluetooth earbuds, DACs & boom microphones.',
    zone: 'Zone C-1',
    shelf: 'Shelf C-1 (Locker 4)',
    models: 7,
    items: 194,
    icon: 'headphones',
    status: 'Healthy'
  },
  {
    id: 'c4',
    name: 'Drones & Action Cams',
    description: 'Quadcopter frames, gimbal cameras, waterproof housings.',
    zone: 'Zone D-4',
    shelf: 'Shelf D-4 (Upper Bay)',
    models: 4,
    items: 88,
    icon: 'videocam',
    status: 'Needs Restock'
  },
  {
    id: 'c5',
    name: 'Laptops & Tablets',
    description: 'Portable workbenches, drawing slates, USB-C docks.',
    zone: 'Zone E-2',
    shelf: 'Shelf E-2 (Safe Cabinet)',
    models: 6,
    items: 142,
    icon: 'laptop_mac',
    status: 'Healthy'
  },
  {
    id: 'c6',
    name: 'Smart Home & IoT',
    description: 'Zigbee sensors, smart plugs, LED strips & mini bridge hubs.',
    zone: 'Zone F-1',
    shelf: 'Shelf F-1 (Bench Side)',
    models: 5,
    items: 94,
    icon: 'sensors',
    status: 'Healthy'
  }
];

const INITIAL_ACTIVITIES = [
  { id: 1, name: 'PlayStation 5 Slim', category: 'Gaming', bin: 'Bin G-04', delta: '+5 in', isPositive: true, time: '12m ago' },
  { id: 2, name: 'Sony WH-1000XM5', category: 'Audio', bin: 'Bin A-12', delta: '-1 out', isPositive: false, time: '45m ago' },
  { id: 3, name: 'iPad Air M2', category: 'Tablets', bin: 'Bin T-01', delta: '+2 in', isPositive: true, time: '2h ago' },
  { id: 4, name: 'DJI Mini 4 Pro Drone', category: 'Aerial', bin: 'Bin D-09', delta: '-2 out', isPositive: false, time: '4h ago' },
  { id: 5, name: 'Apple Watch Ultra 2', category: 'Wearables', bin: 'Bin W-03', delta: '+8 in', isPositive: true, time: '1d ago' },
];

export function InventoryProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [gadgets, setGadgets] = useState(INITIAL_GADGETS);
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [activities, setActivities] = useState(INITIAL_ACTIVITIES);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const [user, setUser] = useState({
    name: 'Alex Stash',
    role: 'Tech Scout',
    email: 'alex.maker@gadgetstash.com',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaFazkRzc5QA-kTz3ZIK7-BC93FzyrKr0ovMsEJGbddlu0dWPbidi7JzZ-7r1fZJch6GDkhoTHZXYiVE8YdpbEt_mZkVkmPUlgPUYPwoTQGfso3wkcHmkrX5VWe5yCGpcFQ5Rfiya7JpijIKIoaceCyjGtK2-6m5TywYMsJeprE_vKSOPypKRyMhlNYcCF7urqrXylcngZwRhuOFWQbWfRRalAtkkjpLUQP8vgM5zv'
  });

  const addGadget = (gadget) => {
    const newGadget = {
      id: Date.now().toString(),
      name: gadget.name,
      sku: gadget.sku || `GAD-${Math.floor(100 + Math.random() * 900)}`,
      details: gadget.details || 'Standard Edition',
      category: gadget.category || 'Gaming Gear',
      price: Number(gadget.price) || 299,
      stock: Number(gadget.stock) || 1,
      maxStock: 50,
      status: Number(gadget.stock) <= 5 ? 'low-stock' : 'in-stock',
      bin: gadget.bin || 'Bin X-01',
      image: gadget.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh4EVRYjzC4T6qGsNpv1fNeEtCAppEMX6LIILtLTUIBfsYmZogvzbLK_xnT22-G3N2xNWj1nkPRFLRxd7YQETnyv9CftnacwCtdSEZoL8Ela80i37vCqT3CkFQCnoi-DoAclCcdnJHFA5_Ums-lcFtKWdhJLtpHWgbdihBKw-IWMAOVipFn3WaH7I0vfjFLTp3dv20YTeDzHLkzp7lnoZlWutds-gUqumiyziMnCUW'
    };

    setGadgets(prev => [newGadget, ...prev]);

    // Add activity record
    setActivities(prev => [
      {
        id: Date.now(),
        name: newGadget.name,
        category: newGadget.category,
        bin: newGadget.bin,
        delta: `+${newGadget.stock} in`,
        isPositive: true,
        time: 'Just now'
      },
      ...prev.slice(0, 7)
    ]);
  };

  const updateStock = (id, delta) => {
    setGadgets(prev =>
      prev.map(item => {
        if (item.id === id) {
          const newCount = Math.max(0, item.stock + delta);
          return {
            ...item,
            stock: newCount,
            status: newCount <= 5 ? 'low-stock' : 'in-stock'
          };
        }
        return item;
      })
    );
  };

  const addCategory = (categoryData) => {
    const newCat = {
      id: `c-${Date.now()}`,
      name: categoryData.name,
      description: categoryData.description || 'Newly added gadget inventory shelf zone.',
      zone: categoryData.zone || 'Zone G-1',
      shelf: `${categoryData.zone || 'Zone G-1'} (Locker)`,
      models: 1,
      items: 0,
      icon: categoryData.icon || 'devices',
      status: 'Healthy'
    };
    setCategories(prev => [newCat, ...prev]);
  };

  // Metrics
  const totalGadgets = gadgets.reduce((acc, curr) => acc + curr.stock, 0);
  const totalValue = gadgets.reduce((acc, curr) => acc + curr.stock * curr.price, 0);
  const lowStockCount = gadgets.filter(g => g.stock <= 5).length;
  const inStockCount = gadgets.filter(g => g.stock > 5).length;

  return (
    <InventoryContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        gadgets,
        categories,
        activities,
        user,
        setUser,
        isQuickAddOpen,
        setIsQuickAddOpen,
        isCategoryModalOpen,
        setIsCategoryModalOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        addGadget,
        updateStock,
        addCategory,
        totalGadgets,
        totalValue,
        lowStockCount,
        inStockCount
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error('useInventory must be used within an InventoryProvider');
  }
  return context;
}
