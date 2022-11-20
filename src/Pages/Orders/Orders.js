import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  let id = 1;

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  // Will update status in database
  const handleStatusUpdate = (id) => {
    const agreedToUpdateStatus = window.confirm(
      "Do you want to update status?"
    );
    if (agreedToUpdateStatus) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "Approved" }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            const rest = orders.filter((odr) => odr._d !== id);
            const approved = orders.find((odr) => odr._id === id);
            approved.status = "Approved";
            const updatedStatus = [approved, ...rest];
            setOrders(updatedStatus);
          }
        });
    }
  };

  // Will delete data from database
  const handleDelete = (id) => {
    const agreedToDelete = window.confirm(
      "Are you sure of deleting this data?"
    );
    if (agreedToDelete) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Data has been deleted");
            const remaining = orders.filter((ord) => ord._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold my-5">
        You have {orders.length} orders in queue.
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Service Img</th>
              <th>Service</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Price</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                id={id++}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Id</th>
              <th>Service Img</th>
              <th>Service</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Price</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Orders;
