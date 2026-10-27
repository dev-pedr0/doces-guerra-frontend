import React from 'react';
import { Star } from 'lucide-react';
import GenericCard from './GenericCard';
import { Feedback } from '@/data/feedbacks';

interface FeedbackCardProps {
  feedback: Feedback;
  isCenter?: boolean;
  onClick?: () => void;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback, isCenter, onClick }) => {
  const { authorName, comment, rating } = feedback;

  return (
    <GenericCard
      className={`flex flex-col items-start text-left w-[254px] lg:w-[502px] gap-[8px] lg:gap-[16px] py-4 px-2 lg:py-4 lg:px-2 ${
        isCenter ? 'cursor-pointer hover:border-strong' : 'cursor-pointer'
      }`}
      onClick={onClick}
    >
      <div className="w-full flex justify-between items-center">
        <h4 className="heading-h4 text-body text-left">{authorName}</h4>
      </div>

      <p className="body-text-responsive text-body text-left text-justify line-clamp-2 overflow-hidden text-ellipsis w-full">
        {comment}
      </p>

      <div className="w-full flex flex-row justify-start items-center">
        {[...Array(5)].map((_, i) => {
          const isFilled = i < rating;
          return (
            <Star
              key={i}
              className={`w-6 h-6 lg:w-[28px] lg:h-[28px] ${
                isFilled
                  ? 'text-[var(--cream-100)] fill-[var(--cream-100)]'
                  : 'text-muted'
              }`}
            />
          );
        })}
      </div>
    </GenericCard>
  );
};

export default FeedbackCard;