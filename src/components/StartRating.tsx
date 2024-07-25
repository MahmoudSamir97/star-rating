import { useState } from "react";
import Star from "./Star";

type StarRatingProps = {
  maxRating: number;
  color: string;
  size: number;
  className: string;
  messages?: string[];
};

const StartRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
}: StarRatingProps) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const TextStyle = {
    lineHeight: "1",
    marginLeft: "10px",
    color,
    fontSize: `${size}px`,
    display: "block",
  };

  const handleStarClick = (val: number) => {
    setRating(val);
  };

  const handleHoverIn = (val: number) => {
    setTempRating(val);
  };
  const handleHoverOut = () => {
    setTempRating(0);
  };

  return (
    <div className={className}>
      {Array.from({ length: maxRating }, (_, i) => {
        return (
          <Star
            key={i}
            full={tempRating ? i + 1 <= tempRating : i + 1 <= rating}
            onRate={() => handleStarClick(i + 1)}
            onHoverIn={() => handleHoverIn(i + 1)}
            onHoverOut={handleHoverOut}
            color={color}
            size={size}
          />
        );
      })}
      <span style={TextStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </span>
    </div>
  );
};

export default StartRating;
