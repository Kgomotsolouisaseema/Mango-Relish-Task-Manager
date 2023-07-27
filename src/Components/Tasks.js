// //This Component is very short and precise:
// It receives the tasks, onDelete and onEdit props then maps through the tasks,
// and passing each task down along with the edit and delete functions to the Task Component we created above.

import Task from './Task';
import "../index.css"

const Tasks = ({ tasks, onDelete, onEdit }) => {
    return (
        <>
        {tasks.map((task) => (<Task 
        key={task.id}
        task={task}
        onDelete={onDelete} 
        onEdit={onEdit} />))}
        </>
    )
}

export default Tasks;