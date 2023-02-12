import { RegisterForm } from "../../components/forms/auth/RegisterForm";
import React from "react";

export default function Signup() {
  return (
    <div>
      <RegisterForm
        onSubmitted={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
