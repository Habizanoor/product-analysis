import React from 'react';
import useReview from '../../hook/useReview';
import './Review.css'

const Review = (props) => {
    
    
    const { name, picture, review, raiting } = props.review;
    return (
        <div className='user-review'>
            <img src={picture} alt="" />
            <div className="user-container">
                <h5>User Name: <span>{name}</span></h5>
                <p><small><strong>Comment: </strong>{review}</small></p>
                <p><small><strong>Rating:</strong> {raiting}</small></p>
            </div>
        </div>
    );
};

export default Review;