import "./OpenOrder.css";
import { useOrders } from "../../../context/OrderContext";
const OpenOrder = () => {
  const { orders, deleteOrder } = useOrders();
  console.log(orders, deleteOrder);
  const handleCancel = (orderId) => {
    deleteOrder(orderId);
  };
  return (
    <div className="open-orders-container">
      {orders.map((order, index) => (
        <div key={`order-${index}`} className="order-table-row" id={order.id}>
          <div className="order">
            <div className="order-header">
              <div className="order-title">{order.title}</div>
              <div className="order-time">
                <span
                  className={`order-type ${
                    order.type !== "Limit / Buy" ? "red" : "green"
                  }`}
                >
                  {order.type}
                </span>
                <span className="order-date">{order.date}</span>
              </div>
            </div>
            <div className="order-percentage">
              <div className="percentage-val">{order.percentage}%</div>
              <button
                className="order-button"
                onClick={() => handleCancel(order.id)}
              >
                Cancel
              </button>
            </div>
          </div>
          <div className="order-detail">
            <div className="order-price-filled">
              <span>Filled/Amount</span>
              <span>0.00/0.01</span>
            </div>
            <div className="order-price">
              <span>Price</span>
              <span className="Price">{order.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OpenOrder;
