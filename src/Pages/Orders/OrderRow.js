import React, { useEffect, useState } from "react";
import "./Orders.css";

const OrderRow = ({ order, id, handleDelete, handleStatusUpdate }) => {
  const { _id, ServiceName, Customer, email, price, phone, Service, status } =
    order;
  const [orderService, setOrderService] = useState({});

  // Will fetch image from services table
  useEffect(() => {
    fetch(
      `https://genius-car-server-2i9prbc5j-paulbishwajit09-gmailcom.vercel.app/services/${Service}`
    )
      .then((response) => response.json())
      .then((data) => setOrderService(data));
  }, [Service]);

  return (
    <tr>
      <th>{id}</th>
      <td>
        <div className="avatar">
          <div className="avatar rounded w-24 h-20 shadow-lg">
            {orderService?.img && (
              <img
                src={orderService?.img}
                alt="Avatar Tailwind CSS Component"
              />
            )}
          </div>
        </div>
      </td>
      <td>{ServiceName}</td>
      <td>{Customer}</td>
      <td>{email}</td>
      <td>{price}</td>
      <td>{phone}</td>
      <td>
        <button onClick={() => handleStatusUpdate(_id)}>
          {status ? status : "pending"}
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-secondary mr-3"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
