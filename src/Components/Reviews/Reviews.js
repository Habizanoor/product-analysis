import React from 'react';
import useReview from '../../hook/useReview';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReview([]);
    return (
        <div className='reviews'>
            <div className='review'>
                
                {
                    reviews.map(review => <div className='abc'>
                        <img src={review.picture} alt="" />
                        <div className="user">
                            <h5>User Name: <span>{review.name}</span></h5>
                            <p><small><strong>Comment: </strong>{review.review}</small></p>
                            <p><small><strong>Rating:</strong> {review.raiting}</small></p>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Reviews;