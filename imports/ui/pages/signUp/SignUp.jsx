import React from 'react';
import SignUpStyle from './signUp.module';
import SignUpForm from './SignUpForm';
import Header from "../../components/header/Header";
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <SignUpStyle.BackgroundStyle>
            <Header />

            <SignUpStyle.SignUpContainer>
                <SignUpStyle.SignUpContent>
                    <SignUpStyle.SignUpLeft>
                        <SignUpStyle.SignUpTitle>
                            Faça seu cadastro
                        </SignUpStyle.SignUpTitle>
                        <SignUpStyle.SignUpText>
                            Já possui uma conta? {' '}
                            <Link to="/login"
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
                            </Link>
                        </SignUpStyle.SignUpText>

                        <SignUpForm />
                    </SignUpStyle.SignUpLeft>
                    <SignUpStyle.SignUpRight>

                    </SignUpStyle.SignUpRight>
                </SignUpStyle.SignUpContent>
            </SignUpStyle.SignUpContainer>
        </SignUpStyle.BackgroundStyle>
    );
};

export default SignUp;