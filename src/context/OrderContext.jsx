import React, { createContext, useContext, useState } from "react";

// Initial data
const initialOrders = [
  {
    id: 1,
    title: "CSK/IPL Winner",
    type: "Limit / Buy",
    date: "2025-06-03 14:57:23",
    price: "30¢",
    percentage: "0",
  },
];

const wallet = 3038;
// Create Context
const OrdersContext = createContext();

// Provider Component
export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState(initialOrders);
  const [balance, setBalance] = useState(wallet);
  // Helper functions
  const addOrder = (orderData) => {
    const newOrder = {
      ...orderData,
      id: Date.now(),
      date: new Date().toISOString().replace("T", " ").slice(0, 19),
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  const updateOrder = (id, updates) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, ...updates } : order
      )
    );
  };

  const deleteOrder = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  const clearOrders = () => {
    setOrders([]);
  };

  const getOrderById = (id) => {
    return orders.find((order) => order.id === id);
  };

  const getOrdersByType = (type) => {
    return orders.filter((order) => order.type === type);
  };

  const value = {
    orders,
    addOrder,
    updateOrder,
    deleteOrder,
    clearOrders,
    getOrderById,
    getOrdersByType,
    balance,
    setBalance,
    totalOrders: orders.length,
  };

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
};

// Custom hook to use the context
export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrdersProvider");
  }
  return context;
};
