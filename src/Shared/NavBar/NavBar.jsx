import { Link } from "react-router-dom";

const NavBar = () => {

    const navItems = <>
        <li><a>Home</a></li>
        <li><a>About Us</a></li>
        <li><a>Contact Us</a></li>
    </>

    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white lg:max-w-screen-xl md:max-w-full mx-auto p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="text-3xl" to="/">Hire<span className="font-bold">Xperts</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn btn-primary bg-yellow-500 hover:bg-white text-black font-bold border-none">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;