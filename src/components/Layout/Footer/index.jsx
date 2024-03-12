import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="footer-content">
          <h2>Additional information</h2>
          <section className="footer-links">
            <article className="footer-account">
              <h3>Account</h3>
              <ul>
                <li>
                  <Link to="/">My page</Link>
                </li>
                <li>
                  <Link to="/">Order history</Link>
                </li>
              </ul>
            </article>
            <article className="footer-help">
              <h3>Help and support</h3>
              <ul>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
              </ul>
            </article>
            <article className="footer-information">
              <h3>Information</h3>
              <ul>
                <li>
                  <Link to="/">Terms of condition</Link>
                </li>
              </ul>
            </article>
          </section>
        </div>
        <section className="footer-copyright">
          <span>® 2024 eCom online store. All rights reserved.</span>
        </section>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
