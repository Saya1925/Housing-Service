import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewTask() {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    async function fetchTask() {
      try {
        const response = await axios.get(`/api/tasks/${taskId}`);
        setTask(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTask();
  }, [taskId]);

  return (
    <div>
      {task ? (
        <div>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Due date: {task.dueDate}</p>
          <p>Budget: ${task.budget}</p>
          <p>Location: {task.location}</p>
          <p>Category: {task.category}</p>
          <p>Status: {task.status}</p>
          {task.assignee && (
            <p>
              Assignee: {task.assignee.firstName} {task.assignee.lastName}
            </p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ViewTask;
