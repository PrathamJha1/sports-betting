import React from "react";
import "./OrderBook.css";

const OrderBook = () => {
  // Sample order book data with shares
  const asks = [
    { price: "38¢", shares: 14984.0, total: 14984.0 },
    { price: "37¢", shares: 14984.0, total: 29968.0 },
    { price: "36¢", shares: 14984.0, total: 44952.0 },
    { price: "35.6¢", shares: 14984.0, total: 59936.0 },
    { price: "35¢", shares: 14984.0, total: 74920.0 },
  ];

  const bids = [
    { price: "33.5¢", shares: 14984.0, total: 14984.0 },
    { price: "33.4¢", shares: 14984.0, total: 29968.0 },
    { price: "32¢", shares: 14984.0, total: 44952.0 },
    { price: "30¢", shares: 14984.0, total: 59936.0 },
  ];

  // Calculate max depth for percentage scaling
  const maxDepth = Math.max(
    ...bids.map((b) => b.total),
    ...asks.map((a) => a.total)
  );

  return (
    <div className="order-book">
      <div className="order-book-header">
        <div className="price-header">Price</div>
        <div className="shares-header">Shares</div>
      </div>

      <div className="asks-section">
        {asks.map((ask, index) => {
          const widthPercent = (ask.total / maxDepth) * 100 * 1; // 1/4 width
          return (
            <div key={`ask-${index}`} className="order-row ask-row">
              <div
                className="depth-fill ask-fill"
                style={{ width: `${widthPercent}%` }}
              />
              <div className="price ask-price">{ask.price}</div>
              <div className="shares">{ask.shares.toLocaleString()}</div>
            </div>
          );
        })}
      </div>

      <div className="spread">
        <div className="spread-value">34.5¢</div>
        <div className="spread-percentage">(Spread 1%)</div>
      </div>

      <div className="bids-section">
        {bids.map((bid, index) => {
          const widthPercent = (bid.total / maxDepth) * 100 * 0.25; // 1/4 width
          return (
            <div key={`bid-${index}`} className="order-row bid-row">
              <div
                className="depth-fill bid-fill"
                style={{ width: `${widthPercent}%` }}
              />
              <div className="price bid-price">{bid.price}</div>
              <div className="shares">{bid.shares.toLocaleString()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderBook;
