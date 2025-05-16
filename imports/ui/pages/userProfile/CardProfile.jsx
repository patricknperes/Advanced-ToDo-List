import React, { useState, useEffect, useRef } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { InputAdornment, Snackbar, Alert, IconButton, CircularProgress, Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import WcIcon from '@mui/icons-material/Wc';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreateIcon from '@mui/icons-material/Create';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UserProfileStyle from './userProfile.module.jsx';

const CardProfile = () => {
    const fileInputRef = useRef(null);
    const { user, isLoading } = useTracker(() => {
        const handler = Meteor.subscribe('currentUserData');
        return {
            user: Meteor.user(),
            isLoading: !handler.ready(),
        };
    }, []);

    const [isEditing, setIsEditing] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success',
    });
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        sexo: '',
        dataNascimento: '',
        empresa: '',
        foto: '',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (user) {
            let dataNascimento = '';
            if (user.profile.dataNascimento) {
                const date = new Date(user.profile.dataNascimento);
                if (!isNaN(date.getTime())) {
                    dataNascimento = date.toISOString().split('T')[0];
                }
            }
            setFormData({
                nome: user.profile.nome || '',
                email: user.emails[0].address || '',
                sexo: user.profile.sexo || '',
                dataNascimento,
                empresa: user.profile.empresa || '',
                foto: user.profile.foto || '',
            });
        }
    }, [user]);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.nome) newErrors.nome = 'Nome é obrigatório';
        if (!formData.email) newErrors.email = 'Email é obrigatório';
        else if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)) newErrors.email = 'Email inválido';
        if (formData.dataNascimento && new Date(formData.dataNascimento) > new Date()) {
            newErrors.dataNascimento = 'Data de nascimento não pode ser no futuro';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: '' });
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        let dataNascimento = '';
        if (user.profile.dataNascimento) {
            const date = new Date(user.profile.dataNascimento);
            if (!isNaN(date.getTime())) {
                dataNascimento = date.toISOString().split('T')[0];
            }
        }
        setFormData({
            nome: user.profile.nome || '',
            email: user.emails[0].address || '',
            sexo: user.profile.sexo || '',
            dataNascimento,
            empresa: user.profile.empresa || '',
            foto: user.profile.foto || '',
        });
        setErrors({});
        setIsEditing(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        Meteor.call('users.updateProfile', formData, (error) => {
            if (error) {
                setSnackbar({
                    open: true,
                    message: `Erro ao atualizar perfil: ${error.reason || 'Erro desconhecido'}`,
                    severity: 'error',
                });
            } else {
                setSnackbar({
                    open: true,
                    message: 'Perfil atualizado com sucesso!',
                    severity: 'success',
                });
                setIsEditing(false);
            }
        });
    };

    const handlePhotoClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.size > 2 * 1024 * 1024) {
            setSnackbar({
                open: true,
                message: 'Imagem deve ter menos de 2MB',
                severity: 'error',
            });
            return;
        }
        if (file && !['image/jpeg', 'image/png'].includes(file.type)) {
            setSnackbar({
                open: true,
                message: 'Apenas imagens JPEG ou PNG são permitidas',
                severity: 'error',
            });
            return;
        }
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, foto: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeletePhoto = () => {
        setFormData({ ...formData, foto: '' });
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    if (isLoading) {
        return (
            <Box sx={{ textAlign: 'center', mt: 4 }} role="status" aria-label="Carregando perfil">
                <CircularProgress />
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Carregando...
                </Typography>
            </Box>
        );
    }

    if (!user) {
        return <Box sx={{ p: 3 }}>Por favor, faça login para visualizar seu perfil.</Box>;
    }

    return (
        <UserProfileStyle.UserProfileCard component="form" onSubmit={handleSubmit} role="form">
            <UserProfileStyle.UserProfileCardLeft>
                <Box sx={{ position: 'relative' }}>
                    <UserProfileStyle.UserProfileCardAvatar
                        alt={formData.nome || 'Foto de perfil'}
                        src={formData.foto || '/assets/userImageProfile.webp'}
                    />
                    {isEditing && (
                        <>
                            <input
                                accept="image/jpeg,image/png"
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            <Box sx={{ position: 'absolute', bottom: 8, right: 8, display: 'flex', gap: 1 }}>
                                <IconButton
                                    sx={{ bgcolor: '#6C8AB1', '&:hover': { bgcolor: '#4A5C7E' } }}
                                    onClick={handlePhotoClick}
                                >
                                    <PhotoCameraIcon sx={{ color: 'white' }} />
                                </IconButton>
                                {formData.foto && (
                                    <IconButton
                                        sx={{ bgcolor: '#d32f2f', '&:hover': { bgcolor: '#b71c1c' } }}
                                        onClick={handleDeletePhoto}
                                    >
                                        <DeleteOutlineIcon sx={{ color: 'white' }} />
                                    </IconButton>
                                )}
                            </Box>
                        </>
                    )}
                </Box>
                <UserProfileStyle.UserProfileTitleLeft variant="h4">
                    {formData.nome || 'Usuário'}
                </UserProfileStyle.UserProfileTitleLeft>
                <UserProfileStyle.UserProfileTextLeft variant="body1">
                    Manter seus dados atualizados é essencial para garantir uma experiência mais personalizada.
                </UserProfileStyle.UserProfileTextLeft>
            </UserProfileStyle.UserProfileCardLeft>
            <UserProfileStyle.UserProfileCardRight>
                <UserProfileStyle.UserProfileTitle variant="h3">
                    Editar Perfil
                </UserProfileStyle.UserProfileTitle>
                <UserProfileStyle.UserProfileText variant="body1">
                    Mantenha suas informações atualizadas
                </UserProfileStyle.UserProfileText>
                <UserProfileStyle.UserProfileFormContainer>
                    {snackbar.open && (
                        <Alert severity={snackbar.severity} onClose={handleCloseSnackbar} sx={{ mb: 2 }}>
                            {snackbar.message}
                        </Alert>
                    )}
                    <UserProfileStyle.UserProfileCardTextField
                        label="Nome"
                        variant="outlined"
                        fullWidth
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        error={!!errors.nome}
                        helperText={errors.nome}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon aria-hidden="true" />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        type="text"
                        aria-label="Nome"
                    />
                    <UserProfileStyle.UserProfileCardTextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled
                        error={!!errors.email}
                        helperText={errors.email || 'O email não pode ser alterado aqui'}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon aria-hidden="true" />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        type="email"
                        aria-label="Email"
                    />
                    <UserProfileStyle.UserProfileFormLayout>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="sexo-label" shrink={!!formData.sexo || isEditing}>
                                Gênero
                            </InputLabel>
                            <Select
                                labelId="sexo-label"
                                name="sexo"
                                value={formData.sexo}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                                label="Gênero"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <WcIcon aria-hidden="true" />
                                    </InputAdornment>
                                }
                                aria-label="Gênero"
                            >
                                <MenuItem value="Masculino">Masculino</MenuItem>
                                <MenuItem value="Feminino">Feminino</MenuItem>
                                <MenuItem value="Outro">Outro</MenuItem>
                            </Select>
                        </FormControl>
                        <UserProfileStyle.UserProfileCardTextField
                            label="Data de Nascimento"
                            variant="outlined"
                            fullWidth
                            name="dataNascimento"
                            value={formData.dataNascimento}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            error={!!errors.dataNascimento}
                            helperText={errors.dataNascimento}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CalendarMonthIcon aria-hidden="true" />
                                        </InputAdornment>
                                    ),
                                },
                                inputLabel: { shrink: true },
                            }}
                            type="date"
                            aria-label="Data de Nascimento"
                        />
                    </UserProfileStyle.UserProfileFormLayout>
                    <UserProfileStyle.UserProfileCardTextField
                        label="Empresa"
                        variant="outlined"
                        fullWidth
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        error={!!errors.empresa}
                        helperText={errors.empresa}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <WorkIcon aria-hidden="true" />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        type="text"
                        aria-label="Empresa"
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                        {!isEditing ? (
                            <UserProfileStyle.UserProfileCardButtonOutlined
                                variant="contained"
                                startIcon={<CreateIcon />}
                                onClick={handleEditClick}
                            >
                                Editar
                            </UserProfileStyle.UserProfileCardButtonOutlined>
                        ) : (
                            <>
                                <UserProfileStyle.UserProfileCardButtonOutlined
                                    variant="outlined"
                                    startIcon={<CancelIcon />}
                                    onClick={handleCancelClick}
                                    sx={{
                                        mr: 1,
                                        backgroundColor: '#d32f2f',
                                        color: 'white',
                                        borderColor: '#d32f2f',
                                        '&:hover': {
                                            backgroundColor: '#b71c1c',
                                            borderColor: '#b71c1c',
                                        },
                                    }}
                                >
                                    Cancelar
                                </UserProfileStyle.UserProfileCardButtonOutlined>
                                <UserProfileStyle.UserProfileCardButtonOutlined
                                    variant="contained"
                                    startIcon={<SaveIcon />}
                                    type="submit"
                                    sx={{
                                        backgroundColor: '#1B56FD',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#1B56FD',
                                        },
                                    }}
                                >
                                    Salvar
                                </UserProfileStyle.UserProfileCardButtonOutlined>
                            </>
                        )}
                    </div>
                </UserProfileStyle.UserProfileFormContainer>
            </UserProfileStyle.UserProfileCardRight>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </UserProfileStyle.UserProfileCard>
    );
};

export default CardProfile;