import React, { useState } from 'react';
import TestimonialCard from './components/TestimonialCard';

const App = () => {
  const [customerName, setCustomerName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [testimonials, setTestimonials] = useState([]);

  const addTestimonial = (event) => {
    event.preventDefault();
    setTestimonials([...testimonials, { customerName, reviewText }]);
    setCustomerName('');
    setReviewText('');
  };

  return (
    <div className="container">
      <h1>What Our Customers Say</h1>
      <form onSubmit={addTestimonial}>
        <label>
          Your Name:
          <input
            type="text"
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Your Review:
          <textarea
            value={reviewText}
            onChange={(event) => setReviewText(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Testimonial</button>
      </form>
      <div className="testimonial-cards">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.customerName} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default App;

