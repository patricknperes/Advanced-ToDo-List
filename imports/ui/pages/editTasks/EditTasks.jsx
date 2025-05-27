import React from 'react';
import EditTasksStyle from './editTasks.module.jsx';
import FormEditTask from './FormEditTask.jsx';

const EditTasks = () => {
    return (
        <EditTasksStyle.EditTasksBackground>
            <EditTasksStyle.EditTasksContainer>
                <FormEditTask />
            </EditTasksStyle.EditTasksContainer>
        </EditTasksStyle.EditTasksBackground>
    );
};

export default EditTasks;