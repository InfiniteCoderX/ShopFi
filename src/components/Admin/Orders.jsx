import { useState } from "react";
import Layout from "./Layout";
import ordersData from "../../utils/ordersData";

const Orders = () => {


  const [orders, setOrders] = useState(ordersData);

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-semibold">Orders</h1>
        <table className="mt-7 w-full">
          <thead className="bg-[#306190] text-white">
            <tr>
              <th className="py-2">Order Id</th>
              <th>Customer`s name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((items, index) => (
              <tr className="text-center" key={index} style={
                {
                  background: (index+1)%2 === 0 ? 'gray' : 'white'
                }
              }>
                <td className="py-4">{items.Id}</td>
                <td>{items.CustomerName}</td>
                <td>{items.CustomerEmail}</td>
                <td>+91 {items.mobile}</td>
                <td>{items.product}</td>
                <td>{items.amount}</td>
                <td>{items.date}</td>
                <td>Pending</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Orders;
