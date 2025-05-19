import React from 'react';
import SignInStyle from './signIn.module';
import SignInForm from './SignInForm';
import Header from '../../components/header/Header.jsx';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (

        <>
            <Header />

            <SignInStyle.SignInContainer>
                <SignInStyle.SignInContent>
                    <SignInStyle.SignInLeft>

                    </SignInStyle.SignInLeft>
                    <SignInStyle.SignInRight>
                        <SignInStyle.SignInTitle>
                            Acesse sua conta
                        </SignInStyle.SignInTitle>
                        <SignInStyle.SignInText>
                            Não tem conta? {' '}
                            <Link to='/register'
                                style={{
                                    fontFamily: "var(--font-family)",
                                    color: "var(--color-accent)",
                                    fontWeight: "var(--font-regular)",
                                    textDecoration: "underline",
                                    "&:hover": {
                                        color: "var(--color-accent-dark)",
                                        cursor: "pointer",
                                    },
                                }}>
                                Cadastrar
                            </Link>
                        </SignInStyle.SignInText>
                        <SignInForm />
                    </SignInStyle.SignInRight>
                </SignInStyle.SignInContent>
            </SignInStyle.SignInContainer>
        </>
    );
};

export default SignIn;