import { motion } from "framer-motion";
import InputGroup from "@/common/InputGroup";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import Logo from "../../../../public/image/auth/logo.png";

type Props = {};

export const loginSchema = z.object({
  email: z
    .string()
    .min(2, { message: "Email must be longer than 2 characters" })
    .email({ message: "Please enter valid email" }),
  password: z
    .string()
    .min(2, { message: "Password must be longer than 2 characters" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const LoginForm = (props: { onSubmitted: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    console.log({ email: data.email, password: data.password });
    //void router.push("/");
  };

  const onError: SubmitErrorHandler<LoginSchema> = (errors) => {
    console.log(errors);
  };

  return (
    <>
      <div className="flex min-h-screen dark:bg-black">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-gray-900">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="h-40 w-40 "
          >
            <Link href={"/"}>
              <Image src={Logo} alt="Logo" className="" />
            </Link>
          </motion.div>
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <motion.h2
                className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                Login to your account
              </motion.h2>
            </div>
            <div className="mt-8 ">
              <div className="mt-6">
                <form
                  onSubmit={handleSubmit(onSubmit, onError)}
                  className="space-y-4"
                >
                  <InputGroup
                    as="input"
                    type="text"
                    label="Email"
                    placeholder="Email"
                    errorMessage={errors.email?.message}
                    {...register("email")}
                  />
                  <InputGroup
                    type="password"
                    placeholder="Password"
                    errorMessage={errors.password?.message}
                    label="Password"
                    {...register("password")}
                  />
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.45,
                    }}
                  >
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <Link
                        href="/forgot-password"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.55,
                    }}
                  >
                    <button
                      type="submit"
                      className="text-zinc-900 bg-white outline-offset-2 outline-2 font-semibold text-sm py-2 px-3 rounded-lg justify-center w-full "
                    >
                      Sign in
                    </button>
                    <div className="mt-2 text-sm text-zinc-800 dark:text-gray-100">
                      Dont have an account?
                      <Link
                        href="/auth/register"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        <span> </span>Register
                      </Link>
                    </div>
                  </motion.div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
