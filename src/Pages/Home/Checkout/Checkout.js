import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = form.email?.value;
    const message = form.message.value;
    const order = {
      Service: _id,
      ServiceName: title,
      price,
      Customer: name,
      email,
      phone,
      message,
    };

    // Validation
    if (phone.length < 11) {
      toast.warning("Phone at least 11 characters", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    fetch(
      "https://genius-car-server-2i9prbc5j-paulbishwajit09-gmailcom.vercel.app/orders",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("genius-car-token")}`,
        },
        body: JSON.stringify(order),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Order placed successfully.", {
            position: toast.POSITION.TOP_CENTER,
          });
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="py-24 mt-20 bg-slate-100">
        <form onSubmit={handlePlaceOrder} className="w-3/4 mx-auto">
          <h2 className="text-3xl py-1 font-bold">
            You are about to order: {title}
          </h2>
          <h2 className="text-3xl py-1 mb-4 font-bold">Price: {price} $</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="input w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="input w-full"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input w-full"
              required
            />
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              className="input w-full"
              readOnly
            />
          </div>
          <div className="text-area mt-5">
            <textarea
              name="message"
              className="textarea  w-full h-40"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="btn btn-active btn-secondary w-full"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
