import { NavLink, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    return (
        <footer>
            <p>
                Copyright&ensp;&copy;{new Date().getFullYear()}.
                <br />
                By:&emsp;Enes Hamzaj
            </p>
            {location.pathname === '/'
                &&
                <NavLink to="/about">About</NavLink>}
        </footer>
    );
};

export default Footer;