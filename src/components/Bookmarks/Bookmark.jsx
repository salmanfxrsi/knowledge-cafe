import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

    return (
        <div>
            <div className="bg-white rounded-lg p-5">
                <h3 className="font-semibold text-[18px] text-[#111111]">{bookmark.title}</h3>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object
}

export default Bookmark;