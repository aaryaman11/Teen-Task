"use client";
import { useState } from "react";

const TaskList = () => {
    const [tasks, setTasks] = useState([
      { id: 1, name: "Mow my lawn", completed: false },
      { id: 2, name: "Pick up groceries", completed: false },
      { id: 3, name: "Mow my lawn", completed: false },
    ]);
    const toggleTask = (taskId) => {
      const upddatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      setTasks(upddatedTasks);
    };
    return (
      <div>
        <h1 className="text-black">task1</h1>
        <label>
          <input type="checkbox" checked={false} />
        </label>
      </div>
    );
  };
  export default TaskList;
  