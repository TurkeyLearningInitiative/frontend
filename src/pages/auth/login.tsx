import React from 'react'
import { LoginForm } from '../../components/forms/auth/LoginForm'

export default function Login() {
  return (
    <div>
      <LoginForm
        onSubmitted={function (data) {
          console.log(data)
        }}
      />
    </div>
  )
}
