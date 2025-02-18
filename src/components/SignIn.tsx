import React, { ChangeEvent, FormEvent, useState } from 'react'

type SignInProps = {
  email: string,
  password: string
}

const SignIn = () => {
  const [formFields, setFormFields] = useState<SignInProps>({ email: "", password: "" });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(formFields)

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
        <input type="password" name='password' value={formFields.password} onChange={handleChangeField}/>
      </div>
      <button type='submit'>Login</button>
    </form>
  )
}

export default SignIn