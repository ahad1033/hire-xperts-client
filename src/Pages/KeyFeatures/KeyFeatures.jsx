
const KeyFeatures = () => {
    return (
        <div className="mx-auto lg:px-10 md:px-3 lg:my-20 md:my-5">
            <div>
                <h1 className="font-bold text-4xl text-center text-yellow-500 mb-10">Key Features</h1>
            </div>
            <div className="grid lg:grid-cols-3 mg:grid-cols gap-10">
                <div className="card w-96 bg-white text-black">
                    <div className="card-body">
                        <h2 className="card-title">Efficiency and Time-saving</h2>
                        <p>Our online recruitment solution streamlines the entire hiring process, saving valuable time and effort for hiring managers and HR professionals. By automating repetitive tasks, such as job postings, candidate screening, and interview scheduling, it enables you to focus on strategic decision-making and finding the right talent faster.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-yellow-500 hover:bg-white text-black font-bold border-none">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-black text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Customizable Workflows</h2>
                        <p>Tailor the recruitment process to fit your organizations unique requirements. Our solution allows you to create customizable workflows, define interview stages, and set up automated notifications, ensuring a consistent and structured hiring process across different departments or positions.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-yellow-500 hover:bg-white text-black font-bold border-none">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-white text-black">
                    <div className="card-body">
                        <h2 className="card-title">Collaboration and Communication</h2>
                        <p>Foster seamless collaboration between hiring managers, recruiters, and other stakeholders involved in the recruitment process. Our solution facilitates real-time communication, enabling team members to share feedback, review candidate profiles, and collaborate on decision-making, all within a centralized platform.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-yellow-500 hover:bg-white text-black font-bold border-none">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyFeatures;