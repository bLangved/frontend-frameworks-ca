import React, { createElement } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";

function Product() {
  let { id } = useParams();
  const { data, isLoading, isError } = useApi(
    `https://v2.api.noroff.dev/online-shop/${id}`
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error</div>;
  }

  console.log(data.data);
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
  } = data.data;

  const imageUrl = image?.url;
  const imageAlt = image?.alt || "Product Image";
  const renderedTags = tags
    ? tags.map((tag, index) => <span key={index}>{tag}</span>)
    : null;

  const renderedReviews = reviews
    ? reviews.map((review, index) => (
        <div key={index} className="review">
          <p className="review-user">Username: {review.username}</p>
          <p className="review-rating">Rating: {review.rating} / 5</p>
          <p className="review-description">
            Description: {review.description}
          </p>
        </div>
      ))
    : null;

  return (
    <article className="product">
      <img src={imageUrl} alt={imageAlt} />
      <h1>{title}</h1>
      <div>
        <span>Description:</span>
        <p>{description}</p>
      </div>
      <div>price: {price}</div>
      <div>discountedPrice: {discountedPrice}</div>
      <div>rating: {rating} / 5</div>
      <div className="product-id">
        <span>Product ID:</span>
        <span>{productId}</span>
      </div>
      <div className="product-tags">tags: {renderedTags}</div>
      <section className="product-reviews">
        <h2>Customer reviews</h2>
        <div>{renderedReviews}</div>
      </section>
    </article>
  );
}

export default Product;
