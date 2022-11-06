import Task from './Task';

const Tasks = ({ tasks, onToggleReminder, onDelete }) => {

    if (tasks?.length === 0) {
        return <p className="alert" style={{ background: "#9d96fb" }}>No Tasks To Show.</p>
    }

    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onToggleReminder={onToggleReminder}
                    onDelete={onDelete}
                />
            ))}
        </>
    );
};

export default Tasks;