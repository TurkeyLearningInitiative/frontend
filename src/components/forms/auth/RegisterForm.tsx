import InputGroup from '@/common/InputGroup'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import React, { useCallback } from 'react'
import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import Logo from './auth/logo.png'

import { z } from 'zod'

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Kullanıcı adı en az 2 karakterden oluşmalıdır.' }),
    email: z.string().email({ message: 'Lütfen geçerli bir e-posta girin.' }),
    password: z
      .string()
      .min(2, { message: 'Şifre en az 2 karakterden oluşmalıdır.' }),
    password_again: z
      .string()
      .min(2, { message: 'Şifre en az 2 karakterden oluşmalıdır.' }),
  })
  .refine((data) => data.password === data.password_again, {
    message: 'Şifreler eşleşmiyor.',
    path: ['password_again'],
  })

export type RegisterFormType = z.infer<typeof registerFormSchema>

export const RegisterForm = (props: { onSubmitted: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
  })

  const onSubmit: SubmitHandler<RegisterFormType> = async (data) => {
    console.log(data)
  }

  const onError: SubmitErrorHandler<RegisterFormType> = (errors) => {
    console.log(errors)
  }

  const getMotionProps = useCallback((props: { delay: number }) => {
    return {
      initial: { opacity: 0, y: 5 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3, delay: props.delay },
    }
  }, [])

  return (
    <>
      <div className="flex min-h-screen dark:bg-black">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-gray-50 dark:bg-gray-900">
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
                Bir hesap oluşturun
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
                      label="Kullanıcı adı"
                      placeholder="Kullanıcı adı"
                      {...register('name')}
                      errorMessage={errors.name?.message}
                    />
                  </motion.div>
                  <motion.div {...getMotionProps({ delay: 0.3 })}>
                    <InputGroup
                      as="input"
                      label="E-posta"
                      placeholder="E-posta"
                      {...register('email')}
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
                      label="Şifre"
                      placeholder="Şifre"
                      {...register('password')}
                      errorMessage={errors.password?.message}
                    />
                  </motion.div>
                  <motion.div {...getMotionProps({ delay: 0.5 })}>
                    <InputGroup
                      as="input"
                      type="password"
                      label="Şifreyi Onayla"
                      placeholder="Şifreyi Onayla"
                      {...register('password_again')}
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
                        Beni Hatırla
                      </label>
                    </div>

                    <div className="text-sm">
                      <Link
                        href="/auth/login"
                        className="font-medium text-orange-700 hover:text-orange-300"
                      >
                        Zaten hesabınız var mı?
                      </Link>
                    </div>
                  </motion.div>
                  <motion.div
                    {...getMotionProps({
                      delay: 0.55,
                    })}
                  >
                    <button
                      type="submit"
                      className="text-white dark:text-black dark:bg-white bg-black outline-offset-2 outline-2 font-semibold text-sm py-2 px-3 rounded-lg justify-center w-full "
                    >
                      Kayıt Ol
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
            src="/image/auth/Signup.png"
            alt=""
          />
        </div>
      </div>
    </>
  )
}
