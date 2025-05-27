import React from 'react';
import TasksListStyle from './tasksList.module';
import Tasks from './Tasks';

const taskIcon = '/assets/icons/tarefas.png';


const TasksList = () => {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let iconSize = 40;
    if (windowWidth < 600) {
        iconSize = 24;
    } else if (windowWidth < 900) {
        iconSize = 32;
    }

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
                    <img src={taskIcon} alt="Task Icon" style={{ width: iconSize, height: iconSize }} />
                </TasksListStyle.TasksListTitleContainer>

                <Tasks />

            </TasksListStyle.TasksListContainer>
        </TasksListStyle.TasksListBackground>
    );
};

export default TasksList;