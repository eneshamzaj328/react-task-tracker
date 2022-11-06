import { useState } from 'react';

const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const taskText = (e) => {
        setText(text => text = e.target.value);

        if (text.trim().length > 0)
            setIsValid(true);
    }

    const taskDayHandler = (e) => {
        setDay(day => day = e.target.value);
    };

    const taskReminderHandler = (e) => {
        setReminder(reminder => reminder = e.target.checked);
    };

    const newDate = () => {
        const date = new Date();
        const formatedDate = date.toDateString();
        const hour = date.getHours();
        const mins = date.getMinutes();
        const time = hour + ":" + mins;
        const am_pm = hour >= 12 ? 'pm' : 'am';
        const dateTime = formatedDate + " | " + time + am_pm;
        return dateTime;
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (text?.trim() === "") {
            setIsValid(false);
            return;
        } else {
            setIsValid(true);
        }

        onAddTask({
            text,
            day: day || newDate(),
            reminder
        });

        setText('');
        setDay('');
        setReminder('');
    };

    const errorAlert = (
        <p className="error"
            onClick={() => setIsValid(true)}
            style={{ marginTop: '1rem', fontSize: '1.2rem' }}
        >
            Please fill in All Fields!
        </p>
    );

    return (
        <form className="add-form" onSubmit={onSubmitHandler}>
            {!isValid && errorAlert}
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" onChange={taskText} value={text === 'invalid' ? '' : text} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" onChange={taskDayHandler} value={day} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="checkbox">Set Reminder</label>
                <input type="checkbox" id="checkbox" placeholder="Reimnder" onChange={taskReminderHandler} value={reminder} checked={reminder} />
            </div>

            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    );
};

export default AddTask;