import InputGroup from "@/common/InputGroup";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useCallback } from "react";
import type { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  password_again: z.string(),
});

export type RegisterFormType = z.infer<typeof registerFormSchema>;

export const RegisterForm = (props: { onSubmitted: () => void }) => {
  // TODO: Verify registration
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormType> = async (data) => {
    console.log(data);
  };

  const onError: SubmitErrorHandler<RegisterFormType> = (errors) => {
    console.log(errors);
  };

  const getMotionProps = useCallback((props: { delay: number }) => {
    return {
      initial: { opacity: 0, y: 5 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3, delay: props.delay },
    };
  }, []);

  return (
    <>
      <div className="flex min-h-full dark:bg-black">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-gray-900">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="h-12 w-auto"
              >
                <h2>Logo</h2>
              </motion.div>
              <motion.h2
                className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                Create an account
              </motion.h2>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form
                  onSubmit={handleSubmit(onSubmit, onError)}
                  className="space-y-4"
                >
                  <motion.div {...getMotionProps({ delay: 0.2 })}>
                    <InputGroup
                      as="input"
                      label="First Name"
                      placeholder="First Name"
                      {...register("name")}
                      errorMessage={errors.name?.message}
                    />
                  </motion.div>
                  <motion.div {...getMotionProps({ delay: 0.3 })}>
                    <InputGroup
                      as="input"
                      label="Email"
                      placeholder="Email"
                      {...register("email")}
                      errorMessage={errors.email?.message}
                    />
                  </motion.div>

                  <motion.div
                    {...getMotionProps({
                      delay: 0.45,
                    })}
                  >
                    <InputGroup
                      as="input"
                      type="password"
                      label="Password"
                      placeholder="Password"
                      {...register("password")}
                      errorMessage={errors.password?.message}
                    />
                  </motion.div>
                  <motion.div {...getMotionProps({ delay: 0.5 })}>
                    <InputGroup
                      as="input"
                      type="password"
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      {...register("password_again")}
                      errorMessage={errors.password_again?.message}
                    />
                  </motion.div>
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
                        href="/auth/login"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Already have an account?
                      </Link>
                    </div>
                  </motion.div>

                  {errors.password_again && (
                    <div className="mt-1 text-red-500">
                      {errors.password_again.message?.toString()}
                    </div>
                  )}
                  <motion.div
                    {...getMotionProps({
                      delay: 0.55,
                    })}
                  >
                    <button
                      type="submit"
                      className="text-zinc-900 bg-white outline-offset-2 outline-2 font-semibold text-sm py-2 px-3 rounded-lg justify-center w-full "
                    >
                      Register
                    </button>
                  </motion.div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/auth/uv-2.png"
            alt="uv-protective-clothing"
          />
        </div>
      </div>
    </>
  );
};
