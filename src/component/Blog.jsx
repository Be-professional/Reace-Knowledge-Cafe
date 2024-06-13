import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog,addBookmarksHandle}) => {
    const {title,cover,reading_time,authori,posted_date,author,hashtags}=blog;
    return (
        <div className='mb-16'>
            <img className='w-full' src={cover} alt={`Cover Picture of the ${title}`} />
            <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='w-16' src={authori} alt="" />
                    <div>
                        <h3 className='text-xl font-medium'>{author}</h3>
                        <h4>{posted_date}</h4>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>addBookmarksHandle(blog)} className='ml-3 text-red-400 text-xl'>< IoBookmarksOutline /></button>
                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=> <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    addBookmarksHandle: PropTypes.func
}

export default Blog;