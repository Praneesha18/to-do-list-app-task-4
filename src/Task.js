import './Task.css'
import listimage from './list.webp'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRepeat,faTrash } from "@fortawesome/free-solid-svg-icons"
function Task(){
    const [tasks,setTasks]=useState([])
    const [entertask,setEntertask]=useState("")
    const [completed ,setCompleted]=useState(new Set());

    function handleInputChange(event){
        setEntertask(event.target.value);
    }
    function addtask(){
        if(entertask.trim()!==""){
        setTasks([...tasks,entertask])}
        else
        alert("please enter task")
    setEntertask('')
    }
    function deletetask(index){
       const remainingtasks= tasks.filter((_,i)=>i!==index)
       setTasks(remainingtasks)
    }
   const togglecomplete =(index)=>{
    const completedtasks=new Set(completed)
    if(completedtasks.has(index)){
        completedtasks.delete(index)
    }
        else{
               completedtasks.add(index)
        }
        setCompleted(completedtasks)
   };
    return (
        <div className="list">
            <div className='header'>
                <div className='icon'><h1>TO-DO List</h1> <img src={listimage} alt="listicon"/></div>
                <input type="text" placeholder="Enter a task ..." value={entertask} onChange={handleInputChange} id="newtask"/>
                <button onClick={addtask}>ADD</button>
            </div>
            <div className='scrollbox'>
                <div className='scrollcontent'>
                    {tasks.map((tasks,index)=>
                    <ul className="tasklist">
                    <li key={index}> <input type="checkbox" className='check' onClick={()=>togglecomplete(index)}/>
                    <span className="taskname"  onClick={() => togglecomplete(index)}
                        style={{
                        textDecoration: completed.has(index) ? 'line-through' : 'none',
                        cursor: 'pointer',
                        }}>
                        {tasks} </span> 
                    <FontAwesomeIcon icon={faRepeat} className="repeatsymbol"
                      style={{
                        textDecoration: completed.has(index) ? 'none' : 'line-through',
                        cursor: 'pointer',
                        }}/>
                    <FontAwesomeIcon icon={faTrash} onClick={()=>deletetask(index)} className="deletesymbol"/>
                    </li>
                    </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Task;