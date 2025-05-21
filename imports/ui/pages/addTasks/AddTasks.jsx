import React from 'react';
import AddTasksStyle from './addTasks.module.jsx';
import FormAddTask from './FormAddTask.jsx';

const AddTasks = () => {
    return (
        <AddTasksStyle.AddTasksBackground>
            <AddTasksStyle.AddTasksContainer>

                <FormAddTask />

            </AddTasksStyle.AddTasksContainer>
        </AddTasksStyle.AddTasksBackground>
    );
};

export default AddTasks;