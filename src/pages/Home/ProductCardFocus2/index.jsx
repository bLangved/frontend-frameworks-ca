import { API_BASE_URL } from "../../../constants/apiUrls";
import useApiFetcher from "../../../hooks/useApiFetcher";
import { useNavigate } from "react-router-dom";
import StarRating from "../../../components/StarRating";
import calculatePercentage from "../../../components/utils/calculatePercentage";

function ProductCardfocus2() {
  const navigate = useNavigate();
  const customError = (
    <div>There was an error retrieving the products. Please try again</div>
  );

  const { data, customComponent } = useApiFetcher(API_BASE_URL, customError);

  if (customComponent) return customComponent;

  if (data.length === 0) return null;

  const indices = [15, 17];

  const cards = indices.map((index) => {
    const item = data[index];
    if (!item) return null;
    const discountPercentage = calculatePercentage(item);
    const handleNavigate = () => {
      navigate(`/product/${item.id}`);
    };

    return (
      <div key={item.id} className="card-focus2">
        <div className="card-focus2-image-wrapper">
          <img src={item.image.url} alt={item.image.alt} />
        </div>
        <span className="card-focus2-title">{item.title}</span>
        <div className="star-rating">
          <StarRating rating={item.rating} />
          <span className="card-focus2-reviews">({item.reviews.length})</span>
        </div>
        <div className="card-focus2-price-wrapper">
          {item.discountedPrice !== item.price && (
            <>
              <div className="card-focus2-price-discounted-percentage">
                <span>-{discountPercentage.toFixed(0)}%</span>
              </div>
              <span className="card-focus2-price-discounted">
                Before: {item.price},-
              </span>
              <span className="card-focus2-price">
                Now: {item.discountedPrice},-
              </span>
            </>
          )}
          {item.discountedPrice === item.price && (
            <>
              <span className="card-focus2-price">
                {item.discountedPrice},-
              </span>
            </>
          )}
        </div>
        <button onClick={handleNavigate}>View product</button>
      </div>
    );
  });
  return <div className="cards-focus2-container">{cards}</div>;
}

export default ProductCardfocus2;
