import React from "react";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

function Checkout() {
  const { cartItems, removeFromCart, clearCart, changeQuantity } = useCart();

  const fullPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const finalPrice = cartItems.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );
  const totalDiscount = fullPrice - finalPrice;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const incrementQuantity = (id, quantity) => {
    changeQuantity(id, quantity + 1);
  };

  const decrementQuantity = (id, quantity) => {
    changeQuantity(id, Math.max(1, quantity - 1));
  };

  return (
    <>
      <div className="cart">
        <section>
          <h1 className="heading">Shopping cart</h1>
        </section>
        <section className="cart-container">
          {cartItems.map((item, index) => (
            <article key={index} className="cart-item">
              <Link to={`/product/${item.id}`} key={item.id}>
                <img
                  src={item.image?.url}
                  alt={item.image?.alt || "Product Image"}
                />
              </Link>
              <span className="cart-title">{item.title}</span>
              <p className="cart-description">
                {truncateText(item.description, 80)}
              </p>

              <button
                className="cart-remove-item"
                onClick={() => removeFromCart(item.id)}
              >
                X
              </button>
              <div className="cart-quantity-container">
                <button
                  className="cart-quantity-subtract"
                  onClick={() => decrementQuantity(item.id, item.quantity)}
                >
                  <span>-</span>
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    changeQuantity(item.id, parseInt(e.target.value))
                  }
                />
                <button
                  className="cart-quantity-addition"
                  onClick={() => incrementQuantity(item.id, item.quantity)}
                >
                  <span>+</span>
                </button>
              </div>
              <div className="cart-price-container">
                <span className="cart-price">
                  {(item.discountedPrice * item.quantity).toFixed(2)},-
                </span>
              </div>
            </article>
          ))}
          {cartItems.length > 0 && (
            <>
              <button className="cart-empty-cart-btn" onClick={clearCart}>
                Empty cart
              </button>
              <section className="cart-summary">
                <h2>Cart summary</h2>
                <div className="cart-summary-price">
                  <div className="cart-full-price">
                    <span>Full price:</span>
                    <span>{fullPrice.toFixed(2)},-</span>
                  </div>
                  <div className="cart-total-discount">
                    <span>Total discount:</span>
                    <span>{totalDiscount.toFixed(2)},-</span>
                  </div>
                  <div className="cart-final-price">
                    <span>Final price:</span>
                    <span>{finalPrice.toFixed(2)},-</span>
                  </div>
                </div>
                <button className="cart-checkout-btn">
                  Proceed to checkout
                </button>
              </section>
            </>
          )}
          {cartItems.length === 0 && (
            <>
              <section className="cart-summary">
                <h2>Shopping cart is empty</h2>
                <p>We recommend that you put something in it! &#128527;</p>
              </section>
            </>
          )}
        </section>
      </div>
    </>
  );
}

export default Checkout;
