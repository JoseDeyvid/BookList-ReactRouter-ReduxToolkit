import React, { ChangeEvent, FormEvent, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../config/firebase.ts"
import { useDispatch } from 'react-redux';
import styles from "./SignUp.module.scss"
type SignUpProps = {
  email: string,
  password: string,
  confirmPassword: string
}

const SignUp = () => {
  const [formFields, setFormFields] = useState<SignUpProps>({ email: "", password: "", confirmPassword: "" });
  const [errorMessage, setErrorMessage] = useState("")
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formFields

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setErrorMessage("All fields must be filled.")
      return;
    }

    if (confirmPassword !== password) {
      setErrorMessage("Passwords don't match.")
      return;
    }

    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      setErrorMessage(error.message)
    })



  }
  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setErrorMessage("")

    setFormFields((prev) => ({ ...prev, [name]: value }))
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formControl}>
        <label htmlFor="">Email</label>
        <input type="email" name='email' value={formFields.email} onChange={(e) => handleChangeField(e)} />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="">Password</label>
        <input type="password" name='password' value={formFields.password} onChange={handleChangeField} />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="">Confirm Password</label>
        <input type="password" name='confirmPassword' value={formFields.confirmPassword} onChange={handleChangeField} />
      </div>
      {errorMessage ? <p className={styles.errorMessage}>{errorMessage}</p> : ""}
      <button className={styles.submit} type='submit'>Register</button>
    </form>
  )
}

export default SignUp