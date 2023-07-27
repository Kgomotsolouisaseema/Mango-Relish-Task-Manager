//This Component will define the structure of our added tasks. We will build this component according to the user interface in our complete App look.
// In this component, we will be using two icons from the React Icons library for the edit and delete features.
// We will also pass three props which are (task, onDelete, onEdit). The purpose of these props is to show the added, deleted, and edited tasks.

import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"

const Task = ({ task, onDelete, onEdit }) => {
    return (
        <div>
            {task && (     
            <div className="task">
                <div>
                <p className="taskName"><span className="textBold">Task Name:</span> {task.text}</p>
                <p className="taskDate"><span className="textBold">Date of Completion:</span> {task.day}</p>
                <p className="taskDate"><span className="textBold">Priority level:</span> {task.priority}</p>
                </div>
                <div>
                <p><FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" /></p>
                <p><FaTimes onClick={() => onDelete(task.id)} className="delIcon" /></p>
                
                </div>
            </div>
 )}
        </div>
    );
};

export default Task;

