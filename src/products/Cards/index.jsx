import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";

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
        console.log(item);
        return (
          <div key={item.id} className="card">
            <img src={item.image.url} alt={item.image.alt} />
            <span className="card-title">{item.title}</span>
            <span className="card-price">{item.price}</span>
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
