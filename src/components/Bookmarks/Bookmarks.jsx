import Bookmark from "./Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks,readingTime}) => {
    
    return (
        <div className="flex flex-col gap-6">
            <hr className="mb-2"/>
            <div className="p-6 bg-[#6047EC1A] bg-opacity-10 rounded-lg">
                <h4 className="text-[#6047EC] font-bold text-2xl text-center">Spent time on read : {readingTime}</h4>
            </div>
            <div className="rounded-lg bg-[#111111] bg-opacity-5 p-[2.5rem]">
            <h1 className="font-bold text-2xl text-[#111111]">Bookmarked Blogs : {bookmarks.length}</h1>
            <div className="flex flex-col gap-[1rem] mt-4">
            {
                bookmarks.map((bookmark,index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
            }
            </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime : PropTypes.number
}

export default Bookmarks;