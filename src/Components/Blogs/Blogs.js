import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='ques-ans'>
            <h5>What is Context API? What is the purpose of it?</h5>
            <p><strong>Ans:</strong> Context API let us exchange unique 
            details and helps solving prop-drilling from application. 
            When we use prop-drilling we need to pass an element from each 
            and every parant though by Context API we can only pass that 
            element to a specific component without passing through each of them. </p>

            <h5>What is Semantic tag?</h5>
            <p><strong>Ans:</strong> Semantic tag clearly describes it's 
            meaning to browser and human readable way. Example: header,
            article,footer,article etc are Semantic tags. Semantic tags makes web sites more informative, 
            understandable, makes browsers and search engines work more efficiently.
            </p>

            <h5>inline block vs inline block element?</h5>
            <p><strong>Ans:</strong> </p>
        </div>
    );
};

export default Blogs;