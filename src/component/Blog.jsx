import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title,cover,reading_time,authori,posted_date,author}=blog;
    return (
        <div>
            <img src={cover} alt={`Cover Picture of the ${title}`} />
            <div className='flex justify-between items-center'>
                <div>
                    <img className='w-16' src={authori} alt="" />
                    <h4>{author}</h4>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;