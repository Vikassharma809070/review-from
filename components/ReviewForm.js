// components/ReviewForm.js
import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';

const ReviewForm = () => {
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [recommend, setRecommend] = useState(null);

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Leave a review</h2>
      <div style={{ marginBottom: '20px' }}>
        <h3>Safety</h3>
        <Rating
          count={5}
          size={30}
          activeColor="#ffd700"
          value={safetyRating}
          onChange={(newValue) => {
            setSafetyRating(newValue);
          }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3>Communication</h3>
        <Rating
          count={5}
          size={30}
          activeColor="#ffd700"
          value={communicationRating}
          onChange={(newValue) => {
            setCommunicationRating(newValue);
          }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3>Would you recommend Trausti?</h3>
        <button
          onClick={() => setRecommend(true)}
          style={{ marginRight: '10px', padding: '10px', background: recommend === true ? 'green' : '#ccc', border: 'none', borderRadius: '5px', color: '#fff' }}
        >
          Yes
        </button>
        <button
          onClick={() => setRecommend(false)}
          style={{ padding: '10px', background: recommend === false ? 'red' : '#ccc', border: 'none', borderRadius: '5px', color: '#fff' }}
        >
          No
        </button>
      </div>
      <div>
        <h3>Praise</h3>
        <input type="text" placeholder="What best describes Trausti?" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </div>
    </div>
  );
};

export default ReviewForm;
