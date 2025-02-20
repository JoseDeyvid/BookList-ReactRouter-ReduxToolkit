import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { app } from '../config/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';

import styles from "./SignIn.module.scss"

type SignInProps = {
  email: string,
  password: string
}

const SignIn = () => {
  const [formFields, setFormFields] = useState<SignInProps>({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("")
  const auth = getAuth(app)
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser({ email: user.email! }))
    } else {
      dispatch(setUser(null))
    }
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = formFields

    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      setErrorMessage(error.message);
    })

  }
  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

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
      {errorMessage ? <p className={styles.errorMessage}>{errorMessage}</p> : ""}
      <button type='submit'>Login</button>
    </form>
  )
}

export default SignIn