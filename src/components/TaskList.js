// import { useState } from "react";
import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDelete, deleteTask}) {
  // const [deleteTask, setDeleteTask] = useState(true)
  //There's some stuff on my clipboard that resembles 
  const allTask = tasks.map((task) => {

   return <Task 
   key={task.text}
   task={task}
   handleDelete={handleDelete}
   deleteTask = {deleteTask}
   />
      
   })

  return (
    <div className="tasks">
      {allTask}
    </div>
  );
}

export default TaskList;