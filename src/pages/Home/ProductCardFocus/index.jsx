import { API_BASE_URL } from "../../../constants/apiUrls";
import useApiFetcher from "../../../hooks/useApiFetcher";
import { useNavigate } from "react-router-dom";
import StarRating from "../../../components/StarRating";
import calculatePercentage from "../../../components/utils/calculatePercentage";

function ProductCardFocus() {
  const navigate = useNavigate();
  const customError = (
    <div>There was an error retrieving the products. Please try again</div>
  );

  const { data, customComponent } = useApiFetcher(API_BASE_URL, customError);

  if (customComponent) return customComponent;

  if (data.length === 0) return null;

  const item = data[0];
  const discountPercentage = calculatePercentage(item);

  const handleNavigate = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div key={item.id} className="card-focus">
      <div className="card-focus-image-wrapper">
        <img src={item.image.url} alt={item.image.alt} />
      </div>
      <span className="card-focus-title">{item.title}</span>
      <p className="card-focus-description">{item.description}</p>
      <div className="star-rating">
        <StarRating rating={item.rating} />
        <span className="card-focus-reviews">({item.reviews.length})</span>
      </div>
      <div className="card-focus-price-wrapper">
        {item.discountedPrice !== item.price && (
          <>
            <div className="card-focus-price-discounted-percentage">
              <span>-{discountPercentage.toFixed(0)}%</span>
            </div>
            <span className="card-focus-price-discounted">
              Before: {item.price},-
            </span>
            <span className="card-focus-price">
              Now: {item.discountedPrice},-
            </span>
          </>
        )}
        {item.discountedPrice === item.price && (
          <>
            <span className="card-focus-price">{item.discountedPrice},-</span>
          </>
        )}
      </div>
      <button onClick={handleNavigate}>View product</button>
    </div>
  );
}

export default ProductCardFocus;
