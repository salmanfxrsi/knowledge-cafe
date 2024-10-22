import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark,handleSpentTime}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    
    return (
        <div className="col-span-2">
            
            <div className="container mx-auto flex flex-col gap-10">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark} handleSpentTime={handleSpentTime}></Blog>)
                }
            </div>

        </div>
    );
};

Blogs.propTypes = {
    handleSpentTime : PropTypes.func,
    handleAddToBookmark : PropTypes.func
}

export default Blogs;