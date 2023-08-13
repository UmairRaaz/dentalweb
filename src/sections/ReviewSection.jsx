import React from 'react';

const ReviewSection = () => {
  const reviewsData = [
    {
      name: 'Yosuf Ali',
      review:
        'Excellent service and friendly staff. The dentist was very knowledgeable and addressed all my concerns.',
      rating: 5,
    },
    {
      name: 'Moosa Afridi',
      review:
      'The dental team is top-notch. They made me feel comfortable throughout the whole procedure. Will definitely come back!',
      rating: 4,
    },
    {
      name: 'Sheefa Ali',
      review:
      'The staff was professional and courteous. The clinic is clean and well-maintained. I had a positive experience overall.',
      rating: 4,
    },
    {
      name: 'Malik Shakih',
      review:
        'I had a great experience at this clinic. The dental hygienist was gentle and thorough. Highly recommended!',
      rating: 4,
    },
    // Add more reviews here
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsData.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.3 6.91.9-5 4.87 1.18 6.88-6.18-3.24-6.18 3.24 1.18-6.88-5-4.87 6.91-.9z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-4 text-gray-600">{review.name}</span>
              </div>
              <p className="text-gray-700">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
