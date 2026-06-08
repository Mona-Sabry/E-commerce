import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

type RatingProps = {
  rating: number;
  count: number;
  label?: string;
};

export default function Rating({ rating, count , label}: RatingProps) {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-2 text-xs font-medium text-[#6a7282]">
      
      <div className="flex gap-1 text-[#FDC700] text-xl">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}

        {halfStar && <FaStarHalfAlt />}

        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </div>

      <p>
  {rating.toFixed(1)}
  <span>{` (${count}${label ? " " + label : ""})`}</span>
</p>
    </div>
  );
}