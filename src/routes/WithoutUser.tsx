import React, { useState } from 'react'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { app } from '../config/firebase'
import { WiSleet } from 'react-icons/wi'

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
        <div>
            <h1>Welcome to the Book App</h1>
            <p>Login or create account to continue</p>
            <div>
                <input type="radio" name='optionSelected' value={"login"} onChange={(e) => setOptionSelected(e.target.value)} checked={optionSelected === "login"} />
                <label>Login</label>
            </div>
            <div>
                <input type="radio" name='optionSelected' value={"signup"} onChange={(e) => setOptionSelected(e.target.value)} checked={optionSelected === "signup"} />
                <label>Signup</label>
            </div>
            {optionSelected === "login" ? <SignIn /> : <SignUp />}
            <button onClick={handleForgotPassword}>Forgot password?</button>
        </div>
    )
}

export default WithoutUser