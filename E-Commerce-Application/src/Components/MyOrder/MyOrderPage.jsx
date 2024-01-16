import React from "react";
import Table from "../Common/Table";
import useData from './../../hooks/useData';

const MyOrderPage = () => {
  const { data: orders, error } = useData("/order");
  const getProductString = order => {
    const productStringArr = order.products.map(p => `${p.product.title}(${p.quantity})`)
    return productStringArr.join(", ")
  }
  return (
    <section className="align_center myorder_page">
      {orders && (
        <Table headings={["Order", "Products", "Total", "Status"]}>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{getProductString(order)}</td>
                <td>Rs . {order.total * 83}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </section>
  );
};

export default MyOrderPage;
