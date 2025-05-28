import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams, useNavigate } from 'react-router-dom';
import EditTasksStyle from './editTasks.module';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { useMediaQuery, useTheme } from '@mui/material';
import { MenuItem, Select, InputAdornment, FormControl, InputLabel, Alert, Snackbar, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { TasksCollection } from '../../../api/TasksCollection';

const EditTaskForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        dueDate: '',
        privacy: 'public',
    });
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const { task, isLoading, block } = useTracker(() => {
        const taskSub = Meteor.subscribe('tasks.filter', { _id: id });
        const user = Meteor.user();
        const task = TasksCollection.findOne({ _id: id });
        const block = task ? !(task.userId === user._id) : true;
        return {
            task,
            isLoading: !taskSub.ready(),
            block,
        };
    }, [id]);

    useEffect(() => {
        if (task && !isEditing) {
            setFormData({
                title: task.name || '',
                description: task.descricao || '',
                dueDate: task.data && !isNaN(new Date(task.data).getTime())
                    ? new Date(task.data).toISOString().split('T')[0]
                    : '',
                privacy: task.pessoal ? 'personal' : 'public',
            });
        }
    }, [task, isEditing]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        if (task) {
            setFormData({
                title: task.name || '',
                description: task.descricao || '',
                dueDate: task.data && !isNaN(new Date(task.data).getTime())
                    ? new Date(task.data).toISOString().split('T')[0]
                    : '',
                privacy: task.pessoal ? 'personal' : 'public',
            });
        }
        setIsEditing(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim()) {
            setAlertMessage('O título da tarefa é obrigatório');
            setAlertSeverity('error');
            setOpenSnackbar(true);
            return;
        }

        const updates = {
            name: formData.title,
            descricao: formData.description,
            data: formData.dueDate,
            pessoal: formData.privacy === 'personal',
        };

        Meteor.call('tasks.update', { _id: id, updates }, (error) => {
            if (error) {
                setAlertMessage(`Erro ao editar tarefa: ${error.reason || error.message || 'Erro desconhecido'}`);
                setAlertSeverity('error');
            } else {
                setAlertMessage('Sua tarefa foi alterada com sucesso!');
                setAlertSeverity('success');
                setIsEditing(false);
            }
            setOpenSnackbar(true);
        });
    };

    const handleDeleteClick = () => {
        setDeleteDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDeleteDialogOpen(false);
    };

    const confirmDelete = () => {
        Meteor.call('tasks.remove', id, (error) => {
            setDeleteDialogOpen(false);
            if (error) {
                setAlertMessage(`Erro ao excluir tarefa: ${error.reason || error.message || 'Erro desconhecido'}`);
                setAlertSeverity('error');
                setOpenSnackbar(true);
            } else {
                setAlertMessage('Tarefa excluída com sucesso!');
                setAlertSeverity('success');
                setOpenSnackbar(true);
                navigate('/dashboard');
            }
        });
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpenSnackbar(false);
        setAlertMessage('');
    };

    if (isLoading) {
        return <CircularProgress />;
    }

    if (!task) {
        return <Alert severity="error">Tarefa não encontrada. Verifique o ID ou tente novamente.</Alert>;
    }

    return (
        <EditTasksStyle.EditTasksFormContainer>
            <EditTasksStyle.EditTasksLeft />

            <EditTasksStyle.EditTasksRight>
                <EditTasksStyle.EditTasksTitle variant="h3">Editar Tarefa</EditTasksStyle.EditTasksTitle>
                <EditTasksStyle.EditTasksText variant="body1">
                    Edite os campos abaixo para atualizar a tarefa
                </EditTasksStyle.EditTasksText>

                <EditTasksStyle.EditTasksForm onSubmit={handleSubmit}>
                    <EditTasksStyle.EditTasksCardTextField
                        id="title"
                        label="Título"
                        variant="outlined"
                        placeholder="Digite o título da tarefa"
                        size={isSmallScreen ? 'small' : 'medium'}
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        disabled={!isEditing || block}
                        aria-label="Título da tarefa"
                    />

                    <EditTasksStyle.EditTasksCardTextField
                        id="description"
                        label="Descrição"
                        variant="outlined"
                        placeholder="Digite a descrição da tarefa"
                        size={isSmallScreen ? 'small' : 'medium'}
                        type="text"
                        name="description"
                        rows={4}
                        multiline
                        value={formData.description}
                        onChange={handleInputChange}
                        disabled={!isEditing || block}
                        aria-label="Descrição da tarefa"
                    />

                    <EditTasksStyle.EditTasksFormLayout>
                        <EditTasksStyle.EditTasksCardTextField
                            id="dueDate"
                            label="Data de Vencimento"
                            variant="outlined"
                            size={isSmallScreen ? 'small' : 'medium'}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CalendarMonthIcon aria-hidden="true" />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            sx={{
                                '& input[type="date"]::-webkit-calendar-picker-indicator': {
                                    filter: 'invert(1) brightness(2)',
                                },
                            }}
                            placeholder="Digite a data de vencimento da tarefa"
                            fullWidth
                            type="date"
                            name="dueDate"
                            value={formData.dueDate}
                            onChange={handleInputChange}
                            disabled={!isEditing || block}
                            aria-label="Data de vencimento da tarefa"
                        />

                        <FormControl variant="outlined" fullWidth>
                            <InputLabel
                                id="privacy-label"
                                size={isSmallScreen ? 'small' : 'medium'}
                                sx={{
                                    fontFamily: 'var(--font-family)',
                                    color: 'var(--text-color)',
                                    '&.Mui-focused': {
                                        color: 'var(--color-accent)',
                                    },
                                    '&.Mui-disabled': {
                                        color: 'var(--text-color)',
                                        opacity: 1,
                                    },
                                }}
                            >
                                Privacidade
                            </InputLabel>
                            <Select
                                labelId="privacy-label"
                                id="privacy"
                                size={isSmallScreen ? 'small' : 'medium'}
                                label="Privacidade"
                                name="privacy"
                                value={formData.privacy}
                                onChange={handleInputChange}
                                disabled={!isEditing || block}
                                sx={{
                                    color: 'var(--title-color)',
                                    fontFamily: 'var(--font-family)',
                                    backgroundColor: 'var(--container-color)',
                                    '& .MuiSelect-icon': {
                                        color: 'var(--text-color)',
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--text-color)',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--color-accent)',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--color-accent)',
                                    },
                                    // Estilo quando desabilitado
                                    '&.Mui-disabled': {
                                        backgroundColor: 'var(--container-color)',
                                        color: 'var(--text-color)',
                                        opacity: 1,
                                    },
                                    // Ajuste específico para a borda quando desabilitado
                                    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--text-color)', // Faz a borda acompanhar a cor do texto
                                    },
                                    "& .MuiOutlinedInput-root.Mui-disabled .MuiInputAdornment-root .MuiSvgIcon-root": {
                                        color: "var(--text-color)",
                                    },
                                    "& .MuiOutlinedInput-root.Mui-disabled .MuiInputBase-input": {
                                        color: "var(--text-color)",
                                        WebkitTextFillColor: "var(--text-color)",
                                    },
                                    "& .MuiSelect-select.Mui-disabled": {
                                        color: "var(--text-color)",
                                        WebkitTextFillColor: "var(--text-color)",
                                        opacity: 1,
                                    },
                                    "& .MuiSelect-icon.Mui-disabled": {
                                        color: "var(--text-color)",
                                        opacity: 1,
                                    },
                                }}
                                aria-label="Selecionar privacidade da tarefa"
                            >
                                <MenuItem value="public">Pública</MenuItem>
                                <MenuItem value="personal">Pessoal</MenuItem>
                            </Select>
                        </FormControl>
                    </EditTasksStyle.EditTasksFormLayout>

                    <Stack
                        spacing={2}
                        direction="row"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '2rem',
                        }}
                    >
                        <EditTasksStyle.EditTasksButtonText
                            variant="text"
                            startIcon={<ArrowBackIcon />}
                            size={isSmallScreen ? 'small' : 'large'}
                            onClick={() => navigate('/dashboard')}
                            aria-label="Voltar para o dashboard"
                        >
                            Voltar
                        </EditTasksStyle.EditTasksButtonText>

                        <Stack spacing={1} direction="row">
                            {isEditing ? (
                                <EditTasksStyle.EditTasksButtonOutlinedContainer>
                                    <EditTasksStyle.EditTasksButtonOutlined
                                        variant="outlined"
                                        startIcon={<CancelIcon />}
                                        size={isSmallScreen ? 'small' : 'large'}
                                        onClick={handleCancelClick}
                                        sx={{
                                            backgroundColor: '#d32f2f',
                                            color: 'white',
                                            borderColor: '#d32f2f',
                                            '&:hover': {
                                                backgroundColor: '#b71c1c',
                                                borderColor: '#b71c1c',
                                            },
                                        }}
                                        aria-label="Cancelar edição"
                                        disabled={block}
                                    >
                                        Cancelar
                                    </EditTasksStyle.EditTasksButtonOutlined>
                                    <EditTasksStyle.EditTasksButtonOutlined
                                        variant="contained"
                                        startIcon={<SaveIcon />}
                                        sx={{
                                            backgroundColor: '#1B56FD',
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: '#1B56FD',
                                            },
                                        }}
                                        onClick={handleSubmit}
                                        type="submit"
                                        size={isSmallScreen ? 'small' : 'large'}
                                        aria-label="Salvar alterações da tarefa"
                                        disabled={block}
                                    >
                                        Salvar
                                    </EditTasksStyle.EditTasksButtonOutlined>
                                </EditTasksStyle.EditTasksButtonOutlinedContainer>
                            ) : (
                                <EditTasksStyle.EditTasksButtonOutlinedContainer>
                                    <EditTasksStyle.EditTasksButtonOutlined
                                        variant="contained"
                                        startIcon={<EditIcon />}
                                        size={isSmallScreen ? 'small' : 'large'}
                                        sx={{
                                            boxShadow: 'none',
                                            backgroundColor: '#FFB22C',
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: '#F3C623',
                                            },
                                        }}
                                        onClick={handleEditClick}
                                        aria-label="Editar tarefa"
                                        disabled={block}
                                    >
                                        Editar
                                    </EditTasksStyle.EditTasksButtonOutlined>
                                    <EditTasksStyle.EditTasksButtonOutlined
                                        variant="outlined"
                                        startIcon={<DeleteIcon />}
                                        size={isSmallScreen ? 'small' : 'large'}
                                        onClick={handleDeleteClick}
                                        sx={{
                                            backgroundColor: '#d32f2f',
                                            color: 'white',
                                            borderColor: '#d32f2f',
                                            '&:hover': {
                                                backgroundColor: '#b71c1c',
                                                borderColor: '#b71c1c',
                                            },
                                        }}
                                        aria-label="Excluir tarefa"
                                        disabled={block}
                                    >
                                        Excluir
                                    </EditTasksStyle.EditTasksButtonOutlined>
                                </EditTasksStyle.EditTasksButtonOutlinedContainer>
                            )}
                        </Stack>
                    </Stack>
                </EditTasksStyle.EditTasksForm>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert
                        onClose={handleCloseSnackbar}
                        severity={alertSeverity}
                        sx={{ width: '100%' }}
                    >
                        {alertMessage}
                    </Alert>
                </Snackbar>

                <Dialog
                    open={deleteDialogOpen}
                    onClose={handleCloseDialog}
                    aria-labelledby="delete-dialog-title"
                    sx={{ '& .MuiDialog-paper': { backgroundColor: '#3E3F40' } }}
                >
                    <DialogTitle id="delete-dialog-title"
                        sx={{
                            color: 'var(--title-color)',
                            fontFamily: 'var(--font-family)',
                        }}
                    >
                        Confirmar Exclusão
                    </DialogTitle>
                    <DialogContent
                        sx={{
                            color: 'var(--text-color)',
                            fontFamily: 'var(--font-family)',
                        }}
                    >
                        Tem certeza de que deseja excluir a tarefa "{formData.title}"?
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} sx={{ color: 'var(--text-color)', fontFamily: 'var(--font-family)' }}>
                            Cancelar
                        </Button>
                        <Button onClick={confirmDelete} color="error" sx={{ fontFamily: 'var(--font-family)', color: '#EA4236' }} autoFocus>
                            Excluir
                        </Button>
                    </DialogActions>
                </Dialog>
            </EditTasksStyle.EditTasksRight>
        </EditTasksStyle.EditTasksFormContainer>
    );
};

export default EditTaskForm;