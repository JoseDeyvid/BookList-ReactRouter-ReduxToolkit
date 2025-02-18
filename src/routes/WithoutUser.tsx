import React, { useState } from 'react'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

const WithoutUser = () => {
    const [optionSelected, setOptionSelected] = useState("login")
    return (
        <div>
            <h1>Welcome to the Book App</h1>
            <p>Login or create account to continue</p>
            <div>
                <input type="radio" name='optionSelected' value={"login"} onChange={(e) => setOptionSelected(e.target.value)} />
                <label htmlFor="login">Login</label>
            </div>
            <div>
                <input type="radio" name='optionSelected' value={"signup"} onChange={(e) => setOptionSelected(e.target.value)} />
                <label htmlFor="signup">Signup</label>
            </div>
            {optionSelected === "login" ? <SignIn/>  : <SignUp/>}
        </div>
    )
}

export default WithoutUser