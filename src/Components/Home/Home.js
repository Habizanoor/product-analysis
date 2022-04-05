import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hook/useReview';
import Review from '../Review/Review';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReview([]);
    return (
        <div className='home-container'>
            <div className="router-container">
                <div className="router-detail">
                    <p>Router review</p>
                    <h1>Your next router</h1>
                    <h1 id='special-comment'>Your best router</h1>
                    <p>Great Speed: Share your Internet connection with your wired and wireless devices with fast wireless speeds and range to reach more places throughout your home</p>
                </div>
                <div className="router-img">
                    <img src="router.jpg" alt="" />
                </div>
            </div>
            <div className="router-reviews">
                <h2>Customer Review (3)</h2>
                <div className="reviews-container">
                    {
                        reviews.slice(0,3).map(review => <Review
                            review={review}
                        ></Review>)
                    }
                </div>
                <Link reviews={reviews}to={"/reviews"}>See All Reviews</Link>


            </div>
        </div>
    );
};

export default Home;