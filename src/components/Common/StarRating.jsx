import { CiStar } from "react-icons/ci";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({
  value = 4,
  count = 5,
  size = 24,
  activeColor = "#ffd700",
}) => {
  // Round to nearest half
  const rounded = Math.round(value * 2) / 2;
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[...Array(count)].map((_, i) => {
        if (rounded - i >= 1) {
          // Full star
          return <FaStar key={i} size={size} color={activeColor} />;
        } else if (rounded - i === 0.5) {
          // Half star
          return <FaStarHalfAlt key={i} size={size} color={activeColor} />;
        } else {
          // Empty star
          return <FaRegStar key={i} size={size} color={activeColor} />;
        }
      })}
    </div>
  );
};

export default StarRating;
