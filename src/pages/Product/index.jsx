import React, { createElement } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import StarRating from "../../components/StarRating";

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

  return (
    <article className="product">
      {/* {data.data.map((item) => {
        const discountPercentage =
          ((Number(item.price) - Number(item.discountedPrice)) /
            Number(item.price)) *
          100;
} */}

      <img className="product-image" src={imageUrl} alt={imageAlt} />
      <h1 className="product-title">{title}</h1>
      <p className="product-description">{description}</p>
      <div className="product-price-wrapper">
        {price !== discountedPrice && (
          <>
            {/* <div className="product-price-discounted-percentage">
                    <span>-{discountPercentage.toFixed(0)}%</span>
                  </div> */}
            <span className="product-price-discounted">Before: {price},-</span>
            <span className="product-price">Now: {discountedPrice},-</span>
          </>
        )}
        {discountedPrice === price && (
          <>
            <span className="product-price">{discountedPrice},-</span>
          </>
        )}
      </div>

      <div className="star-rating">
        <StarRating rating={rating} />
      </div>
      <div className="product-id">
        <span>Product ID:</span>
        <span>{productId}</span>
      </div>
      <div className="product-tags">
        <span>tags:</span>
        <span>{renderedTags}</span>
      </div>
      <section className="product-reviews">
        <h2>Customer reviews</h2>
        <div>{renderedReviews}</div>
      </section>
    </article>
  );
}

export default Product;
