import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {

  const [task, setTask] = useState(TASKS)
  const [filteredTasks, setFilteredTasks] = useState(TASKS)


  function handleDelete(deleteTask){
    setTask(task.filter((t)=> t.text !== deleteTask))}

  function handleCategoryChange(category){
  setFilteredTasks(filteredTasks.filter((ft) => ft.category !==category))
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES = {CATEGORIES}
      handleCategoryChange = {handleCategoryChange}
      />
      <NewTaskForm />
      <TaskList tasks = {task} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
