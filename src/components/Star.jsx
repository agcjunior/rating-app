const Star = ({
  star,
  rating,
  hoveredRating,
  onStarClick,
  onStarEnter,
  onStarLeave,
}) => {
  return (
    <span
      onClick={() => onStarClick(star)}
      onMouseEnter={() => onStarEnter(star)}
      onMouseLeave={() => onStarLeave(0)}
      className={`star ${star <= (hoveredRating || rating) ? "active" : ""}`}
    >
      {"\u2605"}
    </span>
  );
};
export default Star;
