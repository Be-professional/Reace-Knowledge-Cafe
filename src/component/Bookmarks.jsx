import PropTypes from 'prop-types'
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h3 className="text-3xl font-medium ite bg-slate-200 p-4 rounded-xl text-center m-4">Bookmarks Blogs:{bookmarks.length}</h3>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array
}

export default Bookmarks;