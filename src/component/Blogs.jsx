import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = ({addBookmarksHandle}) => {
    const [blogs, setBlogs] =useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])


    return (
        <div className="md:w-2/3">
            <h1 className="text-2xl font-semibold">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} addBookmarksHandle={addBookmarksHandle}></Blog>)
            }
        </div>
    );
};

export default Blogs;