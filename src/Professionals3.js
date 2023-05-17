import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Professionals.css';
import HeaderProfessional from './HeaderProfessional';

const Professionals3 = () => {
  const navigate = useNavigate();

  const handleCreateTaskClick = () => {
    // Navigate to the CreateTask.js component
    navigate('/CreateTask');
  };

  return (
    <div>
    <HeaderProfessional />
      <h1>Congratulations!</h1>
      <p>Now you can start requesting a service without any payment!</p>
      <button className="p-create-task-button" onClick={handleCreateTaskClick}>
        Create a Task
      </button>
    </div>
  );
};

export default Professionals3;
