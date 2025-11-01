'use client'; // This component needs to fetch data on the client side

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Define a type for the review object for better TypeScript support
interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.91l6.572-.955L10 1l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();
        if (!response.ok) {
        throw new Error('Failed to fetch reviews from the server.');
      }
        setReviews(data);
      } catch (error) {
        console.error('Failed to load reviews:', error);
        setReviews([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading Reviews...</div>;
  }

  if (!reviews || reviews.length === 0) {
    return null; // Or a message saying "No reviews yet"
  }

  return (
    <section id="reviews" className="pt-20 scroll-mt-16 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews?.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <div className="flex items-center mb-4">
                <Image
  src={review.profile_photo_url}
  alt={review.author_name}
  width={48}  
  height={48} 
  className="w-12 h-12 rounded-full mr-4"
/>
                <div>
                  <h4 className="font-bold">{review.author_name}</h4>
                  <p className="text-sm text-gray-500">{review.relative_time_description}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-gray-600 mt-4 flex-grow">{review.text}</p>
            </div>
          ))}
        </div>
         <p className="text-center mt-8 text-gray-500">Reviews sourced from Google Maps.</p>
      </div>
    </section>
  );
};

export default ReviewsSection;