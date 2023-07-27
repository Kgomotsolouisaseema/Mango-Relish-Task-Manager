import {useState} from 'react'
import Swal from "sweetalert2"

const AddTask = ({onSave})=>{
    const [text,setText] = useState('');   //declared variable for inputing Text 
    const [day,setDay] =useState('');     // declared variable for day and time input
    const [priority, setPriority] = useState('medium');    // declared variable priority level input

    const onSubmit = (e) =>{
        e.preventDefault();     //the preventDefault method stops the default behavior of (event triggered by HTML element - clicks,submittingforms or pressing keyboard)

        if(!text && !day){      // if  both text and day are not included ,pop-up
            Swal.fire({
                icon: 'error' ,
                title: 'Oops...',
                text: 'Fill in your task and date or close the from!'
            })
        } else if(!text && day){   //if text is included but day is not included ,popup
            Swal.fire({
                icon: 'error',
                title: 'Oops...' ,
                text: 'Fill in your task!'
            })
        }else if(text && !day){     //if text is avail and day is not , tell user to add day
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in you date !'
            })
        }else{
            onSave({text,day ,priority});
        }
        setText(" ");  //resets Text
        setDay(' ');   //resets day
        setPriority('medium') ; //resets the priority level   

    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
            <label>Task</label><input type="text" placeholder="add task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
            <label>Day & Time</label><input type="text" placeholder="add day & time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control"> 
            {/* handles the display of  the priority level dropdown*/ }
            <label>Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            </select>
      </div>
            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    )
    
   
}

export default AddTask;




