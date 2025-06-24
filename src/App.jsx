import { OrdersProvider } from "./context/OrderContext";
import OrderBook from "./components/order-book/OrderBook";
import "./App.css";
import Header from "./components/header/header";
import TradeForm from "./components/trade-form/TradeForm";
import Tab from "./components/tab/Tab";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <OrdersProvider>
      <div className="sports-trading-app">
        <Header />
        <div className="app-body">
          <TradeForm />
          <OrderBook />
        </div>
        <Tab />

        <Footer />
      </div>
    </OrdersProvider>
  );
}

export default App;
