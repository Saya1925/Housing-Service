import React, { useState } from "react";
import axios from "axios";

function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/tasks", {
        title,
        description,
        dueDate,
        budget,
        location,
        category,
      });
      console.log(response.data);
      // Redirect to the new task's details page
    } catch (error) {
      console.error(error);
      setError("Failed to create task. Please try again.");
    }
  };

  return (
    <div>
      <h2>Create a new task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="dueDate">Due date:</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="budget">Budget:</label>
          <input
            type="number"
            id="budget"
            min="1"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
          >
            <option value="">-- Select a category --</option>
            <option value="cleaning">Cleaning</option>
            <option value="handyman">Handyman</option>
            <option value="moving">Moving</option>
            <option value="gardening">Gardening</option>
            <option value="delivery">Delivery</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <button type="submit">Create task</button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default CreateTask;
