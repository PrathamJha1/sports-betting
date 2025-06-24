import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header-top">
        <div className="app-header-left">
          <img src="assets/logo.png" alt="logo" height={36} width={19} />
        </div>
        <div className="app-header-right">
          <div>
            <button className="app-header-star-button">
              <img src="assets/star.png" alt="star" height={24} width={24} />
            </button>
          </div>
          <div>
            <button className="app-header-notification-button">
              <img
                src="assets/notification.png"
                alt="noti"
                height={24}
                width={24}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="app-header-bottom">
        <div className="app-header-bottom-left">
          <img src="assets/csk.png" alt="csk logo" height={48} width={48} />
          <div className="app-header-bottom-heading">
            <div className="app-header-bottom-heading-name">
              Chennai Super Kings
            </div>
            <div className="volume">$65.20M Vol.</div>
          </div>
        </div>
        <div className="app-header-bottom-right">
          <div className="app-header-bottom-right-item">
            <div className="app-header-bottom-right-item-name">34¢</div>
            <div className="app-header-bottom-right-item-value">+ 0.86%</div>
          </div>
          <img src="assets/bar.png" alt="bar" height={36} width={36} />
        </div>
      </div>
    </div>
  );
};

export default Header;
