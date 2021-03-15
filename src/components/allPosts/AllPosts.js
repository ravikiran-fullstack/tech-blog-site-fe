import React from 'react';
import {useParams} from 'react-router-dom';
import ShowAllPosts from './ShowAllPosts';

const AllPosts = () => {
    const { category } = useParams();
    console.log('category', category);
    return (
        <div>
            <ShowAllPosts category={category}/>
        </div>
    )
}

export default AllPosts
