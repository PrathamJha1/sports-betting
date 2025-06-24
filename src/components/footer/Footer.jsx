import { useOrders } from "../../context/OrderContext";
import "./Footer.css";
export default function Footer() {
  const { balance } = useOrders();
  return (
    <div className="footer-container">
      <div>
        <button className="footer-item">
          <img src="assets/markets.png" alt="markets" height={24} width={24} />
          <span className="footer-text">Markets</span>
        </button>
      </div>
      <div>
        <button className="footer-item clicked">
          <img src="assets/trades.png" alt="trade" height={24} width={24} />
          <span className="footer-text">Trade</span>
        </button>
      </div>
      <div>
        <button className="footer-item ">
          <img src="assets/wallet.png" alt="wallet" height={24} width={24} />
          <span className="footer-text">${balance}</span>
        </button>
      </div>
      <div>
        <button className="footer-item">
          <img src="assets/more.png" alt="more" height={24} width={24} />
          <span className="footer-text">More</span>
        </button>
      </div>
    </div>
  );
}
