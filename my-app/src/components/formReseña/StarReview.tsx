import React from 'react';

interface StarRatingProps {
  value: number;
  onChange: (newValue: number) => void;
  maxRating: number;
  question: string;
}

const StarRating: React.FC<StarRatingProps> = ({ value, onChange, maxRating, question }) => {
  return (
    <div className="mb-6">
      <p className="text-base text-black  mb-4 text-center">{question}</p>
      <div className="flex justify-center items-center mb-4">
        {[...Array(maxRating)].map((_, index) => {
          const star = index + 1;
          return (
            <button
              key={star}
              type="button"
              onClick={() => onChange(star)}
              className={`text-4xl transition-colors duration-300 ${
                value >= star ? 'text-yellow-500' : 'text-gray-300'
              }`}
            >
              {value >= star ? '★' : '☆'}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
