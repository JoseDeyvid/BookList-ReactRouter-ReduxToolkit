import React, { useState } from 'react'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { app } from '../config/firebase'

import styles from "./WithoutUser.module.scss"

const WithoutUser = () => {
    const [optionSelected, setOptionSelected] = useState("login")
    const auth = getAuth(app);
    const handleForgotPassword = () => {
        const email = prompt("Digite o email para redefinição de senha: ")
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("Verifique seu email para redefinir a senha.")
                })
                .catch((error) => {
                    alert(error.message)
                });
        }


    }
    return (
        <div className={styles.container}>
            <h1>Welcome to the Book App</h1>
            <p>Login or create account to continue</p>
            <div className={styles.options}>
                <div className={styles.option}>
                    <input className={styles.input} type="radio" name='login' id='login' value={"login"} onChange={(e) => setOptionSelected(e.target.value)} checked={optionSelected === "login"} />
                    <label htmlFor='login'>Login</label>
                </div>
                <div className={styles.option}>
                    <input type="radio" name='signup' id='signup' value={"signup"} onChange={(e) => setOptionSelected(e.target.value)} checked={optionSelected === "signup"} />
                    <label htmlFor='signup'>Signup</label>
                </div>      
            </div>  
            {optionSelected === "login" ? <SignIn /> : <SignUp />}
            <button className={styles.forgotPassword} onClick={handleForgotPassword}>Forgot password?</button>
        </div>
    )
}

export default WithoutUser