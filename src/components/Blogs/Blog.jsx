const Blog = ({blog,handleAddToBookmark,handleSpentTime}) => {

    const {cover,title,author_img,author,posted_date,reading_time,hashtags} = blog;


    return (
        <div>
            <div>
                <hr className="mb-8"/>

                <img className="w-full rounded-lg mb-8" src={cover} alt="" />
                
                <div className="flex justify-between mb-4">
                    
                    <div className="flex items-center gap-4">
                        <img className="h-[60px] w-[60px]" src={author_img} alt="" />
                        <div>
                            <h5 className="text-2xl font-bold text-[#111111] mb-0.5">{author}</h5>
                            <p className="font-semibold text-base text-[#11111199] text-opacity-60">{posted_date}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <p>{reading_time} Min Read</p>
                        <button onClick={()=>handleAddToBookmark(blog)}><i class="fa-regular fa-bookmark"></i></button>
                    </div>

                </div>
                
                <h1 className="font-bold text-[2.5rem] text-[#111111] text-left mb-4">{title}</h1>
                
                <div className="flex gap-4 text-[#11111199] text-opacity-60 font-medium text-xl mb-5">
                    {
                        hashtags.map((hashtag,index) => <p key={index}>#{hashtag}</p>)
                    }
                </div>
                
                <button onClick={() => handleSpentTime(reading_time)} className="underline text-[#6047EC] font-semibold text-xl">Mark As Read</button>

            </div>
        </div>
    );
};

export default Blog;