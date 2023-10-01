import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/loging'>Loging</Link>
            
        </div>
    );
};

export default Navbar;