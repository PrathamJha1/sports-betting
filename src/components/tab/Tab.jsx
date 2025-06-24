import { useState } from "react";
import "./Tab.css";
import OpenOrder from "./open-order/OpenOrder";
export default function Tab() {
  const [activeTab, setActiveTab] = useState("open-orders");
  const [isChecked, setIsChecked] = useState(false);

  const handleCancel = () => {
    setIsChecked(false);
  };
  const tabs = [
    { id: "open-orders", label: "OPEN ORDERS" },
    { id: "positions", label: "POSITIONS" },
    { id: "trade-history", label: "TRADE HISTORY" },
  ];

  return (
    <>
      <div className="trading-tabs">
        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="checkbox-container">
          <div className="checkbox-group">
            <div
              className={`checkbox ${isChecked ? "checked" : ""}`}
              onClick={() => setIsChecked(!isChecked)}
            />
            <label
              className="checkbox-label"
              onClick={() => setIsChecked(!isChecked)}
            >
              Hide Other Pairs
            </label>
          </div>

          <button className="cancel-button" onClick={handleCancel}>
            Cancel All
          </button>
        </div>

        <div className="content-area">
          {activeTab === "open-orders" && <OpenOrder />}
          {activeTab === "positions" && "Positions content goes here"}
          {activeTab === "trade-history" && "Trade History content goes here"}
        </div>
      </div>
    </>
  );
}
