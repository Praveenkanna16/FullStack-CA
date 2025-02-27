import React from 'react'
import './TestimonialCard.css'

const TestimonialCard = ({ customerName, reviewText }) => {
  return (
    <div className="testimonial-card">
      <h3>{customerName}</h3>
      <p>{reviewText}</p>
    </div>
  )
}

export default TestimonialCard

