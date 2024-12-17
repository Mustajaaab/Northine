import { useState } from "react";

const SeeMoreText = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-gray-800 font-syne">
      {/* Display truncated text or full text */}
      <p>
        {isExpanded ? text : text.slice(0, maxLength) + (text.length > maxLength ? "..." : "")}
      </p>

      {/* Toggle button */}
      {text.length > maxLength && (
        <button
          onClick={toggleExpand}
          className="text-yellow font-medium hover:underline focus:outline-none mt-2"
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

export default SeeMoreText;
