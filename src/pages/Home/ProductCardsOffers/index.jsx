import { API_BASE_URL } from "../../../constants/apiUrls";
import useApiFetcher from "../../../hooks/useApiFetcher";
import { useNavigate } from "react-router-dom";
import StarRating from "../../../components/StarRating";
import calculatePercentage from "../../../components/utils/calculatePercentage";

function ProductCardsOffers() {
  const navigate = useNavigate();
  const customError = (
    <div>There was an error retrieving the products. Please try again</div>
  );

  const { data, customComponent } = useApiFetcher(API_BASE_URL, customError);

  if (customComponent) return customComponent;

  const discountedItems = data.filter(
    (item) => Number(item.discountedPrice) < Number(item.price)
  );

  const handleNavigate = (itemId) => {
    navigate(`/product/${itemId}`);
  };

  return (
    <section className="card-container">
      {discountedItems.map((item) => {
        const discountPercentage = calculatePercentage(item);
        return (
          <div key={item.id} className="card">
            <div className="card-image-wrapper">
              <img src={item.image.url} alt={item.image.alt} />
            </div>
            <span className="card-title">{item.title}</span>
            <div className="star-rating">
              <StarRating rating={item.rating} />
              <span className="card-reviews">({item.reviews.length})</span>
            </div>
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
            <button onClick={() => handleNavigate(item.id)}>
              View product
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default ProductCardsOffers;
