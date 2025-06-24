# Trading Orders Management App

A React-based trading orders management application that allows users to track and manage their trading orders with real-time balance updates.

## 🚀 Live Demo

**Deployed Project:** https://admirable-bunny-3fe408.netlify.app/

## 📋 Project Overview

This application provides a comprehensive interface for managing trading orders, featuring a clean and intuitive design for tracking buy/sell orders, monitoring account balance, and managing trading positions.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **State Management:** React Context API
- **Styling:** Plain Css
- **Deployment:** Netlify

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/PrathamJha1/sports-betting.git
   cd sports-betting
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🔧 Build for Production

```bash
npm run build
```

### Context Architecture

Our `OrdersContext` serves as the single source of truth for:

- **Orders Management:** Complete CRUD operations for trading orders
- **Wallet Balance:** Real-time balance tracking and updates
- **Data Persistence:** Maintains state across component re-renders

### Key Features of Our Context Implementation

**Centralized Data Store:**

- Initial dummy data includes sample CSK/IPL trading orders
- Wallet balance initialized at $3038
- All order operations flow through context providers

**Comprehensive Order Operations:**

- `addOrder()` - Creates new orders with auto-generated IDs and timestamps
- `updateOrder()` - Modifies existing order properties
- `deleteOrder()` - Removes orders from the system
- `clearOrders()` - Bulk deletion functionality
- `getOrderById()` - Individual order retrieval
- `getOrdersByType()` - Filtered order queries

Not some of the functions have not been used in the project.

**Smart Data Management:**

- Automatic timestamp generation for new orders
- Unique ID assignment using `Date.now()`
- Type-based order filtering capabilities
- Real-time order count tracking
