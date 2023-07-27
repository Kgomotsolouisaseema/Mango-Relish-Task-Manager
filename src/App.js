// Importing Components
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';

// Importing React Hooks
import { useState , useEffect } from 'react';

// Importing Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";

function App() {
    // All States
    const [loading, setloading] = useState(true); // Pre-loader before page renders
    const [tasks, setTasks] = useState([]); // Task State
    const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form

    // const toggleForm = () => {
    //     setShowAddTask((prevValue) => !prevValue); // Toggle the form visibility
    // }

    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 2000);
    }, [])

    // Fetching from Local Storage
    const getTasks = JSON.parse(localStorage.getItem("taskAdded"));

    useEffect(() => {
        if (getTasks == null) {
            setTasks([])
        } else {
            setTasks(getTasks);
        }
    
    }, [])
    
    useEffect(() => {
    }, [])                           // this showAddTask is a fall back on the empty array , when the array has nothing, then gor throught shoowAddTask also .

    // Adding Task Function:
    const addTask = (task) => {
        const id = uuidv4();
        const newTask = { id, ...task }

        setTasks([...tasks, newTask]);

        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'You have successfully added a new task!'
        })
            //setItem() set the items/task in localstorage and identifies them with a key .
        localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));    
    }

    // Delete Task function  , loacates the task with key and removeItem() removes the items :
    const deleteTask = (id) => {
        const deleteTask = tasks.filter((task) => task.id !== id);

        setTasks(deleteTask);

        Swal.fire({
            icon: 'success',
            title: 'Oops...',
            text: 'You have successfully deleted a task!'
        })

        localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
    }

    //  EDITING TASK FUNCTION
    const editTask = (id) => {

        const text = prompt("Task Name");
        const day = prompt("Day and Time");
        let data = JSON.parse(localStorage.getItem('taskAdded'));
         

        const myData = data.map(x => {
            if (x.id === id) {
                return {
                    ...x,
                    text: text,
                    day: day,
                    // priority: "simply" ,
                    id: uuidv4()
                }
            }
            return x;
        })

        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'You have successfully edited an existing task!'
        })

        localStorage.setItem("taskAdded", JSON.stringify(myData));
        window.location.reload();
    }

    return (
        <>
            {
                loading
                    ?
                    <div className="spinnerContainer">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="container">
                        {/* App Header that has open and App Name */}
                        <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />

                        {/* Revealing of Add Task Form */}
                        {showAddTask && <AddTask onSave={addTask} />}

                        {/* Task Counter */}
                        <h3>Number of Tasks: {tasks.length}</h3>

                        {/* Displaying of Tasks */}
                        {
                            tasks.length > 0 ?(<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />):('No Task Found!')
                        }
                    </div>
            }
        </>
    )
}

export default App;