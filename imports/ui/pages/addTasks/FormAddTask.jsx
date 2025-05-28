import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Navigate, useNavigate } from 'react-router-dom';
import AddTasksStyle from './addTasks.module';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack';
import { useMediaQuery, useTheme } from '@mui/material';
import { MenuItem, Select, InputAdornment, FormControl, InputLabel, Snackbar, Alert, CircularProgress } from '@mui/material';

const FormAddTask = () => {
    const navigate = useNavigate();
    const { user, isLoading } = useTracker(() => {
        const subscription = Meteor.subscribe('currentUserData');
        return {
            user: Meteor.user(),
            isLoading: !subscription.ready(),
        };
    }, []);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [privacy, setPrivacy] = useState('');
    const [errors, setErrors] = useState({});
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!title) newErrors.title = 'Digite o título da tarefa';
        else if (title.length > 100) newErrors.title = 'Máximo 100 caracteres';
        if (!description) newErrors.description = 'Digite a descrição da tarefa';
        else if (description.length > 500) newErrors.description = 'Máximo 500 caracteres';
        if (!dueDate) newErrors.dueDate = 'Selecione a data de vencimento';
        else if (new Date(dueDate) < new Date().setHours(0, 0, 0, 0)) newErrors.dueDate = 'Data deve ser futura';
        if (!privacy) newErrors.privacy = 'Selecione a privacidade';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);
        Meteor.call(
            'tasks.insert',
            {
                name: title,
                descricao: description,
                data: new Date(dueDate),
                pessoal: privacy === 'personal',
                userId: user._id,
            },
            (error) => {
                setIsSubmitting(false);
                if (error) {
                    setSnackbarMessage(error.reason || 'Erro ao criar tarefa');
                    setSnackbarSeverity('error');
                } else {
                    setSnackbarMessage('Tarefa adicionada com sucesso!');
                    setSnackbarSeverity('success');
                    setTitle('');
                    setDescription('');
                    setDueDate('');
                    setPrivacy('');
                    setErrors({});
                    setTimeout(() => navigate('/dashboard'), 1000);
                }
                setOpenSnackbar(true);
            }
        );
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpenSnackbar(false);
    };

    if (isLoading) {
        return (
            <AddTasksStyle.AddTasksFormContainer>
                <AddTasksStyle.AddTasksRight sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                    <CircularProgress />
                    <AddTasksStyle.AddTasksText variant="body1" sx={{ ml: 2 }}>
                        Carregando...
                    </AddTasksStyle.AddTasksText>
                </AddTasksStyle.AddTasksRight>
            </AddTasksStyle.AddTasksFormContainer>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace state={{ message: 'Por favor, faça login' }} />;
    }

    return (
        <AddTasksStyle.AddTasksFormContainer>
            <AddTasksStyle.AddTasksLeft />

            <AddTasksStyle.AddTasksRight>
                <AddTasksStyle.AddTasksTitle variant="h3">Adicionar Tarefa</AddTasksStyle.AddTasksTitle>
                <AddTasksStyle.AddTasksText variant="body1">Preencha os campos abaixo para adicionar uma nova tarefa</AddTasksStyle.AddTasksText>

                <AddTasksStyle.AddTasksForm component="form" onSubmit={handleSubmit}>
                    <AddTasksStyle.AddTasksCardTextField
                        id="task-title"
                        label="Título"
                        variant="outlined"
                        placeholder="Digite o título da tarefa"
                        size={isSmallScreen ? 'small' : 'medium'}
                        type="text"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            setErrors({ ...errors, title: '' });
                        }}
                        error={!!errors.title}
                        helperText={errors.title}
                        fullWidth
                        aria-label="Título da tarefa"
                    />

                    <AddTasksStyle.AddTasksCardTextField
                        id="task-description"
                        label="Descrição"
                        variant="outlined"
                        placeholder="Digite a descrição da tarefa"
                        size={isSmallScreen ? 'small' : 'medium'}
                        type="text"
                        rows={4}
                        multiline
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                            setErrors({ ...errors, description: '' });
                        }}
                        error={!!errors.description}
                        helperText={errors.description}
                        fullWidth
                        aria-label="Descrição da tarefa"
                    />

                    <AddTasksStyle.AddTasksFormLayout>
                        <AddTasksStyle.AddTasksCardTextField
                            id="task-due-date"
                            label="Data de Vencimento"
                            variant="outlined"
                            size={isSmallScreen ? 'small' : 'medium'}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CalendarMonthIcon aria-hidden="true" />
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{ shrink: true }}
                            placeholder="Selecione a data de vencimento"
                            type="date"
                            value={dueDate}
                            onChange={(e) => {
                                setDueDate(e.target.value);
                                setErrors({ ...errors, dueDate: '' });
                            }}
                            sx={{
                                '& input[type="date"]::-webkit-calendar-picker-indicator': {
                                    filter: 'invert(1) brightness(2)'
                                },
                            }}
                            error={!!errors.dueDate}
                            helperText={errors.dueDate}
                            fullWidth
                            aria-label="Data de vencimento da tarefa"
                        />

                        <FormControl variant="outlined" fullWidth error={!!errors.privacy}>
                            <InputLabel
                                id="privacy-label"
                                size={isSmallScreen ? 'small' : 'medium'}
                                sx={{
                                    fontFamily: 'var(--font-family)',
                                    color: 'var(--text-color)',
                                    '&.Mui-focused': {
                                        color: 'var(--color-accent)',
                                    },
                                }}
                            >
                                Privacidade
                            </InputLabel>
                            <Select
                                labelId="privacy-label"
                                id="task-privacy"
                                size={isSmallScreen ? 'small' : 'medium'}
                                label="Privacidade"
                                value={privacy}
                                onChange={(e) => {
                                    setPrivacy(e.target.value);
                                    setErrors({ ...errors, privacy: '' });
                                }}
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
                                }}
                                aria-label="Privacidade da tarefa"
                            >
                                <MenuItem value="" disabled>Selecione</MenuItem>
                                <MenuItem value="public">Pública</MenuItem>
                                <MenuItem value="personal">Pessoal</MenuItem>
                            </Select>
                            <AddTasksStyle.AddTasksText variant="caption" color="error">
                                {errors.privacy}
                            </AddTasksStyle.AddTasksText>
                        </FormControl>
                    </AddTasksStyle.AddTasksFormLayout>

                    <Stack
                        spacing={2}
                        direction="row"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '2rem',
                        }}
                    >
                        <AddTasksStyle.AddTasksButtonText
                            variant="text"
                            startIcon={<ArrowBackIcon />}
                            size={isSmallScreen ? 'small' : 'large'}
                            onClick={() => navigate('/dashboard')}
                            aria-label="Voltar para tarefas"
                        >
                            Voltar
                        </AddTasksStyle.AddTasksButtonText>
                        <AddTasksStyle.AddTasksButtonOutlined
                            variant="contained"
                            startIcon={<AddIcon />}
                            size={isSmallScreen ? 'small' : 'large'}
                            type="submit"
                            disabled={isSubmitting}
                            aria-label="Adicionar tarefa"
                        >
                            {isSubmitting ? <CircularProgress size={24} /> : 'Adicionar'}
                        </AddTasksStyle.AddTasksButtonOutlined>
                    </Stack>
                </AddTasksStyle.AddTasksForm>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert
                        onClose={handleCloseSnackbar}
                        severity={snackbarSeverity}
                        sx={{ width: '100%' }}
                        aria-describedby="snackbar-message"
                    >
                        <span id="snackbar-message">{snackbarMessage}</span>
                    </Alert>
                </Snackbar>
            </AddTasksStyle.AddTasksRight>
        </AddTasksStyle.AddTasksFormContainer>
    );
};

export default FormAddTask;