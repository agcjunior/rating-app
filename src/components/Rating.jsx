import { useState } from "react";
import Star from "./Star";

const Rating = ({ heading = "Rate your Experience" }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHovered] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const feedback = ["Very Bad", "Bad", "Neutral", "Good", "Very Good"];

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHovered(0);
  };

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hoveredRating={hoveredRating}
            onStarClick={setRating}
            onStarEnter={setHovered}
            onStarLeave={setHovered}
          />
        ))}
      </div>
      <p className="feedback">{rating > 0 && feedback[rating - 1]}</p>
      <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        submit
      </button>
      {submitted && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Thank you</h2>
            <p>
              You rated us {rating} star{rating > 1 ? "s" : ""}
            </p>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rating;
