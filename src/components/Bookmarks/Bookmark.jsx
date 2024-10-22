const Bookmark = ({bookmark}) => {

    return (
        <div>
            <div className="bg-white rounded-lg p-5">
                <h3 className="font-semibold text-[18px] text-[#111111]">{bookmark.title}</h3>
            </div>
        </div>
    );
};

export default Bookmark;