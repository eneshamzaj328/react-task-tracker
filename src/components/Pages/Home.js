import Tasks from '../Tasks';
import AddTask from '../AddTask';

const Home = ({ showAddTask, onAddTask, tasks, onDeleteTask, onToggleReminder }) => {
    return (
        <>
            {showAddTask && <AddTask onAddTask={onAddTask} />}
            <Tasks tasks={tasks} onDelete={onDeleteTask} onToggleReminder={onToggleReminder} />
        </>
    );
};

export default Home;