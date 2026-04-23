import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";

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
      <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
    </div>
  );
};

export default Rating;
