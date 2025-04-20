import React from 'react';
import { FaRegBookmark } from "react-icons/fa6";
const Blog = ({blog}) => {

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className='flex justify-around items-center'>
        <h1 className='text-2xl font-bold'>{blog.author}</h1>
        <img className='w-12 rounded-full' src={blog.author_img} alt="" />
        <FaRegBookmark />
    </div>
    <div className='flex font-semibold text-xl'>
        {
            blog.hasting_tag.map((has) =><p>{has}</p>)
        }
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">mark as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;