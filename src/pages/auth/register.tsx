import { RegisterForm } from '../../components/forms/auth/RegisterForm'
import React from 'react'

export default function Signup() {
  return (
    <div>
      <RegisterForm
        onSubmitted={function (data) {
          console.log(data)
        }}
      />
    </div>
  )
}
