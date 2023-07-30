'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import LogoPath from '@/assets/colorful.svg'
import { useRouter } from 'next/navigation'
import styles from './Auth.module.scss'
import Loader from '@/components/loader/Loader'
import Input from '@/components/input/Input'


const LoginClient = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isAutoLogin, setIsAutoLogin] = useState(false)

  const router = useRouter();

  const redirectUser=()=>{
    router.push("/");
  }

  const loginUser=(e)=>{
    e.preventDefault();
    setIsLoading(true);

  }

  const signInWithGoogle =()=>{

  }


  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Image src={LogoPath} alt="logo"/>
        </h1>
        <form onSubmit={loginUser} className={styles.form}>
          {/* input */}
            <Input
              email
              icon="letter"
              id="email"
              name="email"
              label="E-mail"
              placeholder='e-mail address'
              className={styles.control}
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          <div className={styles.group}>
            {/* autoLogin,password change */}
            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="Password"
              placeholder='password'
              className={styles.control}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className={styles.buttonGroup}>
            {/* Button */}
            button
            <div>
              {/* Button */}
              button
            </div>
          </div>
        </form>
      </div>
    </section>

  )
}

export default LoginClient
