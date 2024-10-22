import profile from "../../assets/profile.png"

const Navbar = () => {
    return (
        <div className="my-8 container mx-auto">
            
            <div className="flex items-center justify-between">
               <h3 className="font-bold text-[#111111] text-[2.5rem]">Knowledge Cafe</h3>
               <img src={profile} alt="" />
            </div>
            
        </div>
    );
};

export default Navbar;