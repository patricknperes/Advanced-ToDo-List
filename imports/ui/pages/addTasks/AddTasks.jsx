import React from 'react';
import AddTasksStyle from './addTasks.module.jsx';
import FormAddTask from './FormAddTask.jsx';
import HeaderTasks from '../../components/headerTasks/HeaderTasks.jsx';

const AddTasks = () => {
    return (
        <AddTasksStyle.AddTasksBackground>
            <HeaderTasks />

            <AddTasksStyle.AddTasksContainer>

                <FormAddTask />

            </AddTasksStyle.AddTasksContainer>
        </AddTasksStyle.AddTasksBackground>
    );
};

export default AddTasks;