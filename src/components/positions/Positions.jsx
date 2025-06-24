import React, { useContext } from "react";
import { TradingContext } from "../../context/TradingContext";
import "./Positions.css";

const Positions = () => {
  const { state, dispatch } = useContext(TradingContext);

  const handleClosePosition = (position) => {
    const profit = position.amount * 1.05; // Simulate 5% profit
    dispatch({
      type: "CLOSE_POSITION",
      payload: { id: position.id, profit },
    });
  };

  return (
    <div className="positions-container">
      <h3>Your Positions</h3>
      {state.positions.length === 0 ? (
        <p className="no-positions">No open positions</p>
      ) : (
        <ul className="positions-list">
          {state.positions.map((position) => (
            <li key={position.id} className="position-item">
              <div className="position-info">
                <span className="market">{position.marketName}</span>
                <span className="amount">{position.amount} USDC</span>
              </div>
              <button
                onClick={() => handleClosePosition(position)}
                className="close-button"
                aria-label={`Close position for ${position.marketName}`}
              >
                Close
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Positions;
