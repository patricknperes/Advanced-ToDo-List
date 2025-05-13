import React from 'react';
import TasksListStyle from './tasksList.module';
import EnhancedTable from './TasksComponent';
const painelIcon = '/assets/icons/painel.png';


const TasksList = () => {
    return (
        <TasksListStyle.TasksListBackground>
            <TasksListStyle.TasksListContainer>
                <TasksListStyle.TasksListText variant="h5">
                    Minhas Tarefas
                </TasksListStyle.TasksListText>

                <TasksListStyle.TasksListTitleContainer>
                    <TasksListStyle.TasksListTitle variant="h4">
                        Controle de Tarefas
                    </TasksListStyle.TasksListTitle>
                    <img src={painelIcon} alt="Painel Icon" style={{ width: 40, height: 40 }} />
                </TasksListStyle.TasksListTitleContainer>

                <EnhancedTable />
            </TasksListStyle.TasksListContainer>
        </TasksListStyle.TasksListBackground>
    );
};

export default TasksList;