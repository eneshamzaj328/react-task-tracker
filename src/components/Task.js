import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onToggleReminder, onDelete }) => {
    return (
        <div className={`task${task.reminder ? ' reminder' : ''}`} style={{ position: 'relative' }} onDoubleClick={() => onToggleReminder(task.id)}>
            <h3>
                {task.text}
                <FaTimes
                    onClick={() => onDelete(task.id)}
                    style={{ position: 'absolute', inset: '0 0 auto auto', height: '100%', margin: 'auto 1rem auto 0', fontSize: '1.1rem', color: 'red', cursor: 'pointer' }}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;