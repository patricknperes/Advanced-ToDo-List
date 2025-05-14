import React from 'react';
import SignUpStyle from './signUp.module';
import SignUpForm from './SignUpForm';
import Header from "../../components/header/Header";

const SignUp = () => {
    return (
        <>
            <Header />

            <SignUpStyle.SignUpContainer>
                <SignUpStyle.SignUpContent>
                    <SignUpStyle.SignUpLeft>
                        <SignUpStyle.SignUpTitle variant="h3">
                            Faça seu cadastro
                        </SignUpStyle.SignUpTitle>
                        <SignUpStyle.SignUpText variant="body1">
                            Já possui uma conta? {' '}
                            <a href="/login"
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
                                Acesse
                            </a>
                        </SignUpStyle.SignUpText>

                        <SignUpForm />
                    </SignUpStyle.SignUpLeft>
                    <SignUpStyle.SignUpRight>

                    </SignUpStyle.SignUpRight>
                </SignUpStyle.SignUpContent>
            </SignUpStyle.SignUpContainer>
        </>
    );
};

export default SignUp;