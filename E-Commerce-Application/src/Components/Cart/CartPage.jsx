import React, { useEffect, useState, useContext } from "react";
import "./cartPage.css";
import Table from "../Common/Table";
import QuantityInput from "../SingleProduct/QuantityInput";
import remove from "../../assets/remove.png";
import userContext from "../../contexts/userContext";
import cartContext from "../../contexts/cartContext";
import { checkoutAPI } from "../../services/orderServices";
import { toast } from "react-toastify";

const CartPage = () => {
  const userObj = useContext(userContext);

  const { cart, removeFromCart, updateCart, setCart} = useContext(cartContext);

  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    setSubTotal(total);
  }, [cart]);

  const checkout = () => {
    const oldCart = [...cart]
    setCart([])
    checkoutAPI().then(() => {
      toast.success("Order Placed Successfully!")
    }).catch(() => {
      toast.error("Something Went Wrong!")
      setCart(oldCart)
    })
  }
  return (
    <section className="align_center cart_page">
      <div className="align_center user_info">
        <img
          src={`http://localhost:5000/profile/${userObj?.profilePic}`}
          alt=""
        />
        <div>
          <p className="user_name">Name: {userObj?.name}</p>
          <p className="user_email">Email: {userObj?.email}</p>
        </div>
      </div>
      <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
        <tbody>
          {cart.map(({ product, quantity }) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>Rs. {83 * product.price}</td>
              <td className="align_center table_quantity_input">
                <QuantityInput
                  quantity={quantity}
                  stock={product.stock}
                  setQuantity={updateCart}
                  cartPage={true}
                  productId={product._id}
                />
              </td>
              <td>Rs. {quantity * product.price * 83}</td>
              <td>
                <img
                  src={remove}
                  alt=""
                  className="cart_remove_icon"
                  onClick={() => removeFromCart(product._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <table className="cart_bill">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>{subTotal * 83}</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td>100</td>
          </tr>
          <tr className="cart_bill_final">
            <td>Total (in Rs.)</td>
            <td>{subTotal * 83 + 100}</td>
          </tr>
        </tbody>
      </table>
      <button className="search_button checkout_button" onClick={() => {
        checkout()
      }}>Checkout</button>
    </section>
  );
};

export default CartPage;