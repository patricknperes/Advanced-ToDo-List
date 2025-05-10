import React from 'react';
import SignInStyle from './signIn.module';
import SignInForm from './SignInForm';
import Header from '../../components/header/Header.jsx';

const SignIn = () => {
    return (

        <>
            <Header />

            <SignInStyle.SignInContainer>
                <SignInStyle.SignInContent>
                    <SignInStyle.SignInLeft>

                    </SignInStyle.SignInLeft>
                    <SignInStyle.SignInRight>
                        <SignInStyle.SignInTitle variant="h3">
                            Acesse sua conta
                        </SignInStyle.SignInTitle>
                        <SignInStyle.SignInText variant="body1">
                            Não tem conta? {' '}
                            <a href="/signUp"
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
                            </a>
                        </SignInStyle.SignInText>
                        <SignInForm />
                    </SignInStyle.SignInRight>
                </SignInStyle.SignInContent>
            </SignInStyle.SignInContainer>
        </>
    );
};

export default SignIn;