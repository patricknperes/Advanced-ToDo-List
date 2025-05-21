import React from 'react';
import EditTasksStyle from './editTasks.module.jsx';
import FormEditTask from './FormEditTask.jsx';
import HeaderTasks from '../../components/headerTasks/HeaderTasks.jsx';

const EditTasks = () => {
    return (
        <EditTasksStyle.EditTasksBackground>
            <HeaderTasks />
            <EditTasksStyle.EditTasksContainer>
                <FormEditTask />
            </EditTasksStyle.EditTasksContainer>
        </EditTasksStyle.EditTasksBackground>
    );
};

export default EditTasks;