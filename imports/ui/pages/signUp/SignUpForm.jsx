import { Meteor } from 'meteor/meteor';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Alert, CircularProgress, InputAdornment, Link as MuiLink, Typography, FormControl, InputLabel, Select, MenuItem, Snackbar } from '@mui/material';
import SignUpStyle from './signUp.module';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import HttpsIcon from '@mui/icons-material/Https';
import WcIcon from '@mui/icons-material/Wc';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useMediaQuery, useTheme } from '@mui/material';

const SignUpForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        sexo: '',
        dataNascimento: '',
        empresa: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    // Validate password matching
    useEffect(() => {
        if (formData.password && formData.confirmPassword) {
            if (formData.password !== formData.confirmPassword) {
                setErrors((prev) => ({ ...prev, confirmPassword: 'As senhas não correspondem' }));
            } else {
                setErrors((prev) => ({ ...prev, confirmPassword: '' }));
            }
        }
    }, [formData.password, formData.confirmPassword]);

    // Auto-redirect after success
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => navigate('/login'), 3000);
            return () => clearTimeout(timer);
        }
    }, [success, navigate]);

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
        if (errors[field] || errors.general) {
            setErrors({ ...errors, [field]: '', general: '' });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.nome) newErrors.nome = 'Nome é obrigatório';
        if (!formData.email) newErrors.email = 'Email é obrigatório';
        else if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)) newErrors.email = 'Email inválido';
        if (!formData.password) newErrors.password = 'Senha é obrigatória';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'As senhas não correspondem';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        Meteor.call(
            'users.signupFull',
            {
                nome: formData.nome,
                email: formData.email,
                dataNascimento: formData.dataNascimento,
                sexo: formData.sexo,
                empresa: formData.empresa,
                password: formData.password,
            },
            (error, userId) => {
                setLoading(false);
                if (error) {
                    console.error('Erro no signup:', error.reason);
                    if (error.error === 'email-already-exists') {
                        setErrors({ email: 'Este email já está em uso' });
                    } else {
                        setErrors({ general: error.reason || 'Erro ao cadastrar' });
                    }
                } else {
                    setSuccess(true);
                }
            }
        );
    };

    const handleCloseSnackbar = () => {
        setSuccess(false);
    };

    return (
        <>
            <SignUpStyle.SignUpFormContainer component="form" onSubmit={handleSubmit} role="form">
                {errors.general && <Alert severity="error">{errors.general}</Alert>}
                <SignUpStyle.SignUpTextField
                    id="name"
                    label="Nome"
                    variant="outlined"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon aria-hidden="true" />
                                </InputAdornment>
                            ),
                        },
                    }}
                    placeholder="Digite seu nome"
                    type="text"
                    fullWidth
                    value={formData.nome}
                    onChange={handleChange('nome')}
                    error={Boolean(errors.nome)}
                    helperText={errors.nome}
                    aria-label="Nome"
                // size={isSmallScreen ? 'small' : 'medium'}
                />

                <SignUpStyle.SignUpTextField
                    id="email"
                    label="Email"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon aria-hidden="true" />
                                </InputAdornment>
                            ),
                        },
                    }}
                    variant="outlined"
                    placeholder="Digite seu email"
                    type="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange('email')}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    aria-label="Email"
                // size={isSmallScreen ? 'small' : 'medium'}
                />

                <SignUpStyle.SignUpFormLayout>
                    <FormControl fullWidth variant="outlined" error={Boolean(errors.sexo)}>
                        <InputLabel
                            id="sexo-label"
                            shrink={!!formData.sexo}
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
                            Gênero
                        </InputLabel>
                        <Select
                            labelId="sexo-label"
                            name="sexo"
                            value={formData.sexo}
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
                                '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--text-color)',
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
                            onChange={handleChange('sexo')}
                            label="Gênero"
                            // size={isSmallScreen ? 'small' : 'medium'}
                            aria-label="Gênero"
                        >
                            <MenuItem value="Masculino">Masculino</MenuItem>
                            <MenuItem value="Feminino">Feminino</MenuItem>
                            <MenuItem value="Outro">Outro</MenuItem>
                        </Select>
                        {errors.sexo && (
                            <Typography variant="caption" color="error" sx={{ mt: 1 }}>
                                {errors.sexo}
                            </Typography>
                        )}
                    </FormControl>
                    <SignUpStyle.SignUpTextField
                        id="birthdate"
                        label="Data de Nascimento"
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
                        variant="outlined"
                        type="date"
                        fullWidth
                        value={formData.dataNascimento}
                        onChange={handleChange('dataNascimento')}
                        error={Boolean(errors.dataNascimento)}
                        helperText={errors.dataNascimento}
                        aria-label="Data de Nascimento"
                        sx={{
                            '& input[type="date"]::-webkit-calendar-picker-indicator': {
                                filter: 'invert(1) brightness(2)'
                            },
                        }}
                    // size={isSmallScreen ? 'small' : 'medium'}
                    />
                </SignUpStyle.SignUpFormLayout>

                <SignUpStyle.SignUpTextField
                    id="empresa"
                    label="Empresa"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <WorkIcon aria-hidden="true" />
                                </InputAdornment>
                            ),
                        },
                    }}
                    variant="outlined"
                    placeholder="Digite o nome da sua empresa"
                    type="text"
                    fullWidth
                    value={formData.empresa}
                    onChange={handleChange('empresa')}
                    error={Boolean(errors.empresa)}
                    helperText={errors.empresa}
                    aria-label="Empresa"
                // size={isSmallScreen ? 'small' : 'medium'}
                />

                <SignUpStyle.SignUpFormLayout>
                    <SignUpStyle.SignUpTextField
                        id="password"
                        label="Senha"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <HttpsIcon aria-hidden="true" />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        variant="outlined"
                        placeholder="Digite sua senha"
                        type="password"
                        fullWidth
                        value={formData.password}
                        onChange={handleChange('password')}
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                        aria-label="Senha"
                    // size={isSmallScreen ? 'small' : 'medium'}
                    />

                    <SignUpStyle.SignUpTextField
                        id="confirmPassword"
                        label="Confirme sua senha"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <HttpsIcon aria-hidden="true" />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        variant="outlined"
                        placeholder="Digite novamente"
                        type="password"
                        fullWidth
                        value={formData.confirmPassword}
                        onChange={handleChange('confirmPassword')}
                        error={Boolean(errors.confirmPassword)}
                        helperText={errors.confirmPassword}
                        aria-label="Confirme sua senha"
                    // size={isSmallScreen ? 'small' : 'medium'}
                    />
                </SignUpStyle.SignUpFormLayout>

                <SignUpStyle.SignUpButtonOutlined
                    variant="contained"
                    color="primary"
                    // size={isSmallScreen ? 'small' : 'large'}
                    fullWidth
                    endIcon={<ArrowForwardIcon />}
                    disabled={loading}
                    type="submit"
                >
                    {loading ? <CircularProgress size={24} /> : 'Cadastrar'}
                </SignUpStyle.SignUpButtonOutlined>
            </SignUpStyle.SignUpFormContainer>
            <Snackbar
                open={success}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="success"
                    sx={{ width: '100%', fontSize: '1rem', fontWeight: '500' }}
                >
                    Cadastro realizado com sucesso! Redirecionando...
                </Alert>
            </Snackbar>
        </>
    );
};

export default SignUpForm;