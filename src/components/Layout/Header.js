import { useLocation } from 'react-router-dom';
import Button from '../UI/Button';
import { MdOutlineAddTask } from 'react-icons/md';
import { TfiClose } from 'react-icons/tfi';

const Header = ({ title, showAddTask, onAddTaskForm }) => {
    const location = useLocation();

    const onClick = () => onAddTaskForm();

    const btnText = showAddTask ? 'Close' : 'Add a Task';

    const headerBtn = (
        location.pathname === '/'
        &&
        <Button color={showAddTask ? '#CF1020' : '#9d96fb'} onClick={onClick}>
            {btnText}
            {showAddTask ? <TfiClose style={{ marginLeft: '0.55rem' }} /> : <MdOutlineAddTask style={{ marginLeft: '0.4rem' }} />}
        </Button>
    );

    return (
        <header className='header'>
            <h1 title={title}>{title}</h1>
            {headerBtn}
        </header>
    );
};

Header.defaultProps = {
    title: 'Task Tracker'
};

export default Header;