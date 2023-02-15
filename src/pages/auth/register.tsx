import { RegisterForm } from "../../components/forms/auth/RegisterForm";
import React from "react";

export default function Signup() {
  return (
    <div>
      <RegisterForm
        onSubmitted={function (asd): void {
          console.log(asd);
        }}
      />
    </div>
  );
}
