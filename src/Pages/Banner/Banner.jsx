
const Banner = () => {
    return (
        <div className="hero min-h-screen lg:px-20 md:px-3 bg-black text-white">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://images.businessnewsdaily.com/app/uploads/2022/04/04074130/teamwork_g-stockstudio_getty.jpg" className="lg:max-w-2xl rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold uppercase border-b-2 border-yellow-500 py-5  md:text-center">lets start career here</h1>
                    <p className="py-6  md:text-center">Efficiency, Simplicity, and Success for Hiring Managers and HR Professionals</p>
                    <button className="btn btn-primary bg-yellow-500 hover:bg-white  md:text-center text-black font-bold border-none">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;