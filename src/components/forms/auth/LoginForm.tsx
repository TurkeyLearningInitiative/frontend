import { motion } from 'framer-motion'
import InputGroup from '@/common/InputGroup'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'
import type { SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { z } from 'zod'

type Props = {}

export const loginSchema = z.object({
  email: z
    .string()
    .min(2)
    .email({ message: 'Lütfen geçerli bir e-posta girin.' }),
  password: z
    .string()
    .min(2, { message: 'Şifre en az 2 karakterden oluşmalıdır.' }),
})

export type LoginSchema = z.infer<typeof loginSchema>

export const LoginForm = (props: {
  onSubmitted: (data: LoginSchema) => void
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const router = useRouter()

  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    console.log({ email: data.email, password: data.password })
    //void router.push("/");
  }

  const onError: SubmitErrorHandler<LoginSchema> = (errors) => {
    console.log(errors)
  }

  return (
    <>
      <div className="flex min-h-screen dark:bg-black">
        <div className="flex flex-1 flex-col justify-center items-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-gray-50 dark:bg-gray-900">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="h-40 w-40 "
          >
            <Link href={'/'}>
              <Image
                src={'/image/auth/logo.png'}
                alt="Logo"
                width={150}
                height={150}
              />
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
                Hesabınıza giriş yapın
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
                    label="E-posta"
                    placeholder="E-posta"
                    errorMessage={errors.email?.message}
                    {...register('email')}
                  />
                  <InputGroup
                    type="password"
                    placeholder="Şifre"
                    label="Şifre"
                    errorMessage={errors.password?.message}
                    {...register('password')}
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
                        Beni Hatırla
                      </label>
                    </div>

                    <div className="text-sm">
                      <Link
                        href="/forgot-password"
                        className="font-medium  text-orange-700 hover:text-orange-300"
                      >
                        Parolanızı mı unuttunuz?
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
                      className="text-white dark:text-black dark:bg-white bg-black outline-offset-2 outline-2 font-semibold text-sm py-2 px-3 rounded-lg justify-center w-full "
                    >
                      Kayıt Ol
                    </button>
                    <div className="mt-2 text-sm text-zinc-800 dark:text-gray-100">
                      Hesabınız yok mu?
                      <Link
                        href="/auth/register"
                        className=" text-orange-700 hover:text-orange-300"
                      >
                        <span> </span>Kayıt Ol
                      </Link>
                    </div>
                  </motion.div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/image/auth/Login.png"
            alt=""
          />
        </div>
      </div>
    </>
  )
}
