import React from "react";
import user from "../../assets/user.webp";
import "./cartPage.css";

const CartPage = () => {
  return (
    <section className="align_center cart_page">
      <div className="align_center user_info">
        <img src={user} alt="" />
        <div>
          <p className="user_name"></p>
          <p className="user_email"></p>
        </div>
      </div>

      <table className="cart_bill">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>$999</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td>$5</td>
          </tr>
          <tr className="cart_bill_final">
            <td>Total</td>
            <td>$1004</td>
          </tr>
        </tbody>
      </table>
      <button className="search_button checkout_button"></button>
    </section>
  );
};

export default CartPage;
