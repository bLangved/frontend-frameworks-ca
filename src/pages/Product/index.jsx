import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { API_BASE_URL } from "../../constants/apiUrls";
import StarRating from "../../components/StarRating";
import { useCart } from "../../contexts/CartContext";
import calculatePercentage from "../../components/utils/calculatePercentage";

function Product() {
  let { id } = useParams();
  const { data, isLoading, isError } = useApi(`${API_BASE_URL}${id}`);
  const productData = data[0] || {};
  const { addToCart } = useCart();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error</div>;
  }
  const {
    id: productId,
    title,
    description,
    price,
    discountedPrice,
    image,
    rating,
    tags,
    reviews,
  } = productData;

  const imageUrl = image?.url;
  const imageAlt = image?.alt || "Product Image";
  const renderedTags = tags
    ? tags.map((tag, index) => <span key={index}>{tag}</span>)
    : null;

  const renderedReviews = reviews
    ? reviews.map((review, index) => (
        <div key={index} className="review">
          <div className="star-rating">
            <StarRating rating={review.rating} />
          </div>
          <p className="review-description">{review.description}</p>
          <p className="review-user">
            <span>By: </span>
            <span>{review.username}</span>
          </p>
        </div>
      ))
    : null;

  const discountPercentage = calculatePercentage(productData);

  return (
    <article className="product">
      <img className="product-image" src={imageUrl} alt={imageAlt} />
      <h1 className="product-title header">{title}</h1>
      <p className="product-description">{description}</p>
      <div className="star-rating">
        <StarRating rating={rating} />
      </div>
      <div className="product-price-wrapper">
        {price !== discountedPrice && (
          <>
            <div className="product-price">
              <span className="product-price-discounted">
                Before: {price},-
              </span>
              <span className="product-price">Now: {discountedPrice},-</span>
            </div>
            <div className="product-price-discounted-percentage">
              <span>-{discountPercentage.toFixed(0)}%</span>
            </div>
          </>
        )}
        {discountedPrice === price && (
          <>
            <span className="product-price">{discountedPrice},-</span>
          </>
        )}
      </div>
      <button className="product-buyBtn" onClick={() => addToCart(productData)}>
        Add to cart
      </button>
      <div className="product-tags">
        <span>tags:</span>
        <span>{renderedTags}</span>
      </div>
      <div className="product-id">
        <span>Product ID:</span>
        <span>{productId}</span>
      </div>
      <section className="product-reviews">
        <h2>Customer reviews</h2>
        <div>
          {renderedReviews && renderedReviews.length > 0 ? (
            renderedReviews
          ) : (
            <div className="review">No reviews yet for this product!</div>
          )}
        </div>
      </section>
    </article>
  );
}

export default Product;
