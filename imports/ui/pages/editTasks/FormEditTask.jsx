import React from 'react';
import EditTasksStyle from './editTasks.module';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack';
import { MenuItem, Select, InputAdornment, FormControl, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';

const FormAddTask = () => {
    return (
        <EditTasksStyle.EditTasksFormContainer>
            <EditTasksStyle.EditTasksLeft>
            </EditTasksStyle.EditTasksLeft>

            <EditTasksStyle.EditTasksRight>

                <EditTasksStyle.EditTasksTitle variant="h3">Adicionar Tarefa</EditTasksStyle.EditTasksTitle>
                <EditTasksStyle.EditTasksText variant="body1">Preencha os campos abaixo para adicionar uma nova tarefa</EditTasksStyle.EditTasksText>

                <EditTasksStyle.EditTasksForm>

                    <EditTasksStyle.EditTasksCardTextField
                        id="outlined-basic"
                        label="Título"
                        variant="outlined"
                        placeholder="Digite o título da tarefa"
                        type='text'
                    />

                    <EditTasksStyle.EditTasksCardTextField
                        id="outlined-basic"
                        label="Descrição"
                        variant="outlined"
                        placeholder="Digite a descrição da tarefa"
                        type='text'
                        rows={4}
                        multiline
                    />

                    <EditTasksStyle.EditTasksFormLayout>
                        <EditTasksStyle.EditTasksCardTextField
                            id="outlined-basic"
                            label="Data de Vencimento"
                            variant="outlined"
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
                                    filter: 'invert(1) brightness(2)'
                                },
                            }}
                            placeholder="Digite a data de vencimento da tarefa"
                            fullWidth
                            type='date'
                        />

                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="privacy-label"
                                sx={{
                                    fontFamily: 'var(--font-family)',
                                    color: 'var(--text-color)',
                                    '&.Mui-focused': {
                                        color: 'var(--color-accent)'
                                    }
                                }}
                            >Privacidade</InputLabel>
                            <Select
                                labelId="privacy-label"
                                id="outlined-basic"
                                label="Privacidade"
                                placeholder="Digite a privacidade da tarefa"
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

                        <EditTasksStyle.EditTasksButtonText variant="text" startIcon={<ArrowBackIcon />}>Voltar</EditTasksStyle.EditTasksButtonText>
                        <EditTasksStyle.EditTasksButtonOutlined variant="contained" startIcon={<AddIcon />}>Adicionar</EditTasksStyle.EditTasksButtonOutlined>
                    </Stack>

                </EditTasksStyle.EditTasksForm>

            </EditTasksStyle.EditTasksRight>
        </EditTasksStyle.EditTasksFormContainer>
    );
};

export default FormAddTask;