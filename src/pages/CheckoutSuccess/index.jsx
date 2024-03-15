import React from "react";
import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <>
      <article className="checkoutsuccess-content">
        <section>
          <h1>Your order was successful! &#127881;</h1>
          <p>
            We hope you will be satisfied with the product(s) you have bought.{" "}
            <br />
            Don't hesitate to get in touch with us if you have any questions.
          </p>
          <p>Best regards</p>
          <p>eCom online store</p>
        </section>
        <Link to={"/"}>
          <button>Go back to store</button>
        </Link>
      </article>
    </>
  );
}

export default CheckoutSuccess;
