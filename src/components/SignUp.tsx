import React, { ChangeEvent, FormEvent, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../config/firebase.ts"

type SignUpProps = {
  email: string,
  password: string,
  confirmPassword: string
}

const SignUp = () => {
  const [formFields, setFormFields] = useState<SignUpProps>({ email: "", password: "", confirmPassword: "" });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const auth = getAuth(app);
    console.log(auth)
    const { email, password, confirmPassword } = formFields

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      console.log("Todos os campos devem ser preenchidos!")
      return;
    }

    if (confirmPassword !== password) {
      console.log("Senhas devem ser iguais!")
      return;
    }

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential);
    }).catch((error) => {
      console.log(error.message)
    })



  }
  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormFields((prev) => ({ ...prev, [name]: value }))
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" name='email' value={formFields.email} onChange={(e) => handleChangeField(e)} />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" name='password' value={formFields.password} onChange={handleChangeField} />
      </div>
      <div>
        <label htmlFor="">Confirm Password</label>
        <input type="password" name='confirmPassword' value={formFields.confirmPassword} onChange={handleChangeField} />
      </div>
      <button type='submit'>Register</button>
    </form>
  )
}

export default SignUp