
const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <div>
                <h1 className="font-bold text-4xl">HireXperts<br /><span className="text-2xl font-semibold">Providing reliable <br />
                    jobs since 1992</span></h1>
            </div>
            <div>
                <span className="footer-title font-bold text-2xl text-yellow-500">Navigation</span>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Pages</a>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Services</a>
            </div>
            <div>
                <span className="footer-title font-bold text-2xl text-yellow-500">Quick Link</span>
                <a className="link link-hover">Contact us</a>
                <a className="link link-hover">FAQs</a>
                <a className="link link-hover">Booking</a>
                <a className="link link-hover">Jobs</a>
            </div>
            <div>
                <span className="footer-title font-bold text-2xl text-yellow-500">Services</span>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">404</a>
            </div>
        </footer>
    );
};

export default Footer;