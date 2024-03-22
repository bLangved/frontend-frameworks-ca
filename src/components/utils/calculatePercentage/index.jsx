function calculatePercentage(item) {
  return (
    ((Number(item.price) - Number(item.discountedPrice)) / Number(item.price)) *
    100
  );
}
export default calculatePercentage;
