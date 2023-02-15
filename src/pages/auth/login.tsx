import React from "react";
import { LoginForm } from "../../components/forms/auth/LoginForm";

export default function Login() {
  return (
    <div>
      <LoginForm
        onSubmitted={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
