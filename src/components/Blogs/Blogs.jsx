import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

 const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch("public.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

   
    return (

        <div className='grid grid-cols-2 gap-2'>
            {
                blogs.map((blog) =><Blog blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;