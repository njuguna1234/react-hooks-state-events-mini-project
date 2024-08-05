
import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

const initialTasks = [
  { text: "Buy groceries", category: "Home" },
  { text: "Finish project", category: "Work" },
  
];

const categories = ["All", "Home", "Work", "Personal"]; 
const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (taskText) => {
    setTasks(tasks.filter(task => task.text !== taskText));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = tasks.filter(task =>
    selectedCategory === "All" || task.category === selectedCategory
  );

  return (
    <div>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
      <NewTaskForm categories={categories} onTaskFormSubmit={handleAddTask} />
    </div>
  );
};

export default App;
