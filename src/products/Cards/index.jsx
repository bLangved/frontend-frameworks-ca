import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import StarRating from "../../components/StarRating/";

function ApiCall() {
  const { data, isLoading, isError } = useApi(
    "https://v2.api.noroff.dev/online-shop"
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <section className="products-container">
      {data.data.map((item) => {
        const discountPercentage =
          ((Number(item.price) - Number(item.discountedPrice)) /
            Number(item.price)) *
          100;
        console.log(item);
        return (
          <div key={item.id} className="card">
            <div className="card-image-wrapper">
              <img src={item.image.url} alt={item.image.alt} />
            </div>
            <span className="card-title">{item.title}</span>
            <div className="card-price-wrapper">
              {item.discountedPrice !== item.price && (
                <>
                  <div className="card-price-discounted-percentage">
                    <span>-{discountPercentage.toFixed(0)}%</span>
                  </div>
                  <span className="card-price-discounted">
                    Before: {item.price},-
                  </span>
                  <span className="card-price">
                    Now: {item.discountedPrice},-
                  </span>
                </>
              )}
              {item.discountedPrice === item.price && (
                <>
                  <span className="card-price">{item.discountedPrice},-</span>
                </>
              )}
            </div>
            <div className="star-rating">
              <StarRating rating={item.rating} />
              <span className="card-reviews">({item.reviews.length})</span>
            </div>
            <Link to={`/product/${item.id}`} key={item.id}>
              <button>View product</button>
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export default ApiCall;
