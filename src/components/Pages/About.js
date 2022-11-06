import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const About = () => {
    return (
        <div className="about">
            <h4>Version 1.0.0</h4>
            <Link to="/">
                <BiArrowBack style={{ marginRight: '0.5rem' }} /> Go Back
            </Link>
        </div>
    );
};

export default About;