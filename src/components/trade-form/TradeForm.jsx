import React, { useState, useContext, useEffect } from "react";
import "./TradeForm.css";
import { useOrders } from "../../context/OrderContext";

const TradeForm = () => {
  const [isBuyClicked, setIsBuyClicked] = useState(true);
  const [isShortClicked, setIsShortClicked] = useState(false);
  const [orderMethod, setOrderMethod] = useState("Limit");
  const [price, setPrice] = useState(34.5); // Set default price to 34.5
  const [shares, setShares] = useState(0);
  const [midValue, setMidValue] = useState(34.5);
  const [sliderValue, setSliderValue] = useState(0);
  const { addOrder, balance, setBalance } = useOrders();

  // Function to calculate shares based on slider percentage and price
  const calculateShares = (percentage, currentPrice, availableBalance) => {
    if (percentage === 0 || currentPrice === 0) return 0;

    // Calculate the amount to invest based on percentage of available balance
    const investmentAmount = (availableBalance * percentage) / 100;

    // Calculate shares based on investment amount and price
    const calculatedShares = Math.floor(investmentAmount / currentPrice);

    return calculatedShares;
  };

  // Function to calculate order total
  const calculateOrderTotal = () => {
    return (shares * price).toFixed(2);
  };

  // Function to calculate potential winnings (taking 10% profit as example )
  const calculatePotentialWinnings = () => {
    const orderTotal = shares * price;
    const potentialReturn = orderTotal * 0.1;
    return potentialReturn.toFixed(2);
  };

  useEffect(() => {
    const newShares = calculateShares(sliderValue, price, balance);
    setShares(newShares);
  }, [sliderValue, price, balance]);

  const handleBuyClick = () => {
    setIsBuyClicked(true);
    setIsShortClicked(false);
  };

  const handleShortClick = () => {
    setIsShortClicked(true);
    setIsBuyClicked(false);
  };

  const handlePriceChange = (e) => {
    const newPrice = parseFloat(e.target.value) || 0;
    setPrice(newPrice);
  };

  const handleSliderChange = (e) => {
    const newSliderValue = parseInt(e.target.value);
    setSliderValue(newSliderValue);
  };

  const handleSharesChange = (e) => {
    const newShares = parseInt(e.target.value) || 0;
    setShares(newShares);

    // Optional: Update slider based on manual shares input
    if (price > 0 && balance > 0) {
      const sharesCost = newShares * price;
      const percentage = Math.min((sharesCost / balance) * 100, 100);
      setSliderValue(Math.round(percentage));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (shares > 0 && price > 0) {
      const orderTotal = shares * price;

      // Check if user has enough balance
      if (orderTotal > balance) {
        alert("Insufficient balance for this trade!");
        return;
      }

      // Create order object
      const newOrder = {
        title: "CSK/IPL Winner",
        type: isBuyClicked ? "Limit / Buy" : "Limit / Sell",
        price: `${price}¢`,
        percentage: sliderValue.toString(),
        shares: shares,
        orderTotal: orderTotal,
        potentialWinnings: calculatePotentialWinnings(),
      };

      // Add order to context
      addOrder(newOrder);

      // Update balance (deduct the order total)
      setBalance((prevBalance) => prevBalance - orderTotal);

      // Reset form
      setPrice(0);
      setShares(0);
      setSliderValue(0);

      alert(`Order placed successfully! ${shares} shares at $${price} each.`);
    } else {
      alert("Please enter valid price and shares values.");
    }
  };

  return (
    <div className="order-form-container">
      <div className="order-form-header">
        <button
          className={`page-toggle-buttons ${isBuyClicked ? "clicked" : ""}`}
          onClick={handleBuyClick}
        >
          Buy/Long
        </button>
        <button
          className={`page-toggle-buttons ${isShortClicked ? "clicked" : ""}`}
          onClick={handleShortClick}
        >
          Sell/Short
        </button>
      </div>

      <div className="dropdown-wrapper">
        <img
          src="assets/info.png"
          className="info-icon"
          alt="info"
          height={16}
          width={16}
        />
        <select
          className="select-element"
          value={orderMethod}
          onChange={(e) => setOrderMethod(e.target.value)}
        >
          <option value="Limit">Limit</option>
          <option value="Market">Market</option>
        </select>
        <svg
          className="dropdown-arrow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLeftjoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div className="funds-availaibilty">
        <div className="underline-text">Available to Trade</div>
        <div className="balance">{balance.toFixed(2)} USD</div>
      </div>

      <div className="price-input-container">
        <input
          type="number"
          className="price-input"
          placeholder="Price (USD)"
          value={price === 0 ? "" : price}
          step={0.1}
          min={0.1}
          onChange={handlePriceChange}
        />
        <button
          className="avg-price"
          onClick={() => {
            setPrice(midValue);
          }}
        >
          {midValue}
          <span className="mid-label">Mid</span>
        </button>
      </div>

      <div className="shares-input-container">
        <span className="shares-label">Shares</span>
        <input
          type="number"
          className="shares-input"
          value={shares}
          min="0"
          step="1"
          placeholder="0"
          onChange={handleSharesChange}
        />
      </div>

      <div className="slider-container">
        <div className="slider-wrapper">
          <input
            type="range"
            className="slider"
            id="percentageSlider"
            min="0"
            max="100"
            value={sliderValue}
            step="1"
            onChange={handleSliderChange}
          />
          <div className="tick-marks">
            <div className="tick"></div>
            <div className="tick"></div>
            <div className="tick"></div>
            <div className="tick"></div>
            <div className="tick"></div>
          </div>
        </div>
        <div className="percentage-display">
          <span className="percentage-value" id="percentageValue">
            {sliderValue}%
          </span>
        </div>
      </div>

      <div className="order-details">
        <div className="order-details-top">
          <div>Order total</div>
          <p>${calculateOrderTotal()}</p>
        </div>
        <div className="order-details-bottom">
          <div>To Win 💸</div>
          <p>${calculatePotentialWinnings()}</p>
        </div>
      </div>

      <div className="trade-button">
        {isBuyClicked && (
          <button className="submit-button" onClick={handleSubmit}>
            Buy/Long CSK
          </button>
        )}
        {isShortClicked && (
          <button className="submit-button" onClick={handleSubmit}>
            Sell/Short CSK
          </button>
        )}
      </div>
    </div>
  );
};

export default TradeForm;
