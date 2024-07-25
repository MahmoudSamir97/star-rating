type StartProp = {
  onRate: () => void;
  onHoverIn: () => void;
  onHoverOut: () => void;
  full: boolean;
  color: string;
  size: number;
};
const Star = ({
  onRate,
  onHoverIn,
  onHoverOut,
  color,
  size,
  full,
}: StartProp) => {
  const StarStyle = {
    marginRight: "5px",
    width: `${size}px`,
    height: `${size}px`,
    cursor: "pointer",
  };
  return (
    <span onClick={onRate} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      {full ? (
        <svg
          style={StarStyle}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill={color}
          stroke={color}
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.396.197-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.33-.314-.158-.888.283-.95l4.898-.696 2.174-4.398c.197-.398.73-.398.927 0l2.174 4.398 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.35.789-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      ) : (
        <svg
          style={StarStyle}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          fill="none"
          height="16"
          stroke={color}
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.396.197-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.33-.314-.158-.888.283-.95l4.898-.696 2.174-4.398c.197-.398.73-.398.927 0l2.174 4.398 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.35.789-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      )}
    </span>
  );
};

export default Star;
