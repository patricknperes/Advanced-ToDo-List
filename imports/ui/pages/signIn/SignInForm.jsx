import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Alert, CircularProgress, InputAdornment, Link as MuiLink, Typography } from '@mui/material';
import SignInStyle from './signIn.module';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import { useMediaQuery, useTheme } from '@mui/material';

const SignInForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email é obrigatório';
        else if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)) newErrors.email = 'Email inválido';
        if (!formData.password) newErrors.password = 'Senha é obrigatória';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
        if (errors[field] || errors.general) {
            setErrors({ ...errors, [field]: '', general: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        Meteor.loginWithPassword(formData.email, formData.password, (err) => {
            setLoading(false);
            if (err) {
                console.error('Erro no login:', err.reason);
                setErrors({ general: err.reason || 'Erro ao iniciar sessão' });
            } else {
                navigate('/dashboard');
            }
        });
    };

    return (
        <SignInStyle.SigninFormContainer component="form" onSubmit={handleSubmit} role="form">
            {errors.general && <Alert severity="error">{errors.general}</Alert>}
            <SignInStyle.SignInTextField
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
                size={isSmallScreen ? 'small' : 'medium'}
            />
            <SignInStyle.SignInTextField
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
                size={isSmallScreen ? 'small' : 'medium'}
            />
            <SignInStyle.SignInButtonOutlined
                variant="contained"
                color="primary"
                size={isSmallScreen ? 'small' : 'large'}
                endIcon={<ArrowForwardIcon />}
                fullWidth
                disabled={loading}
                type="submit"
            >
                {loading ? <CircularProgress size={24} /> : 'Iniciar sessão'}
            </SignInStyle.SignInButtonOutlined>
        </SignInStyle.SigninFormContainer>
    );
};

export default SignInForm;