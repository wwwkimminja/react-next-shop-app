'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import LogoPath from '@/assets/colorful.svg'
import { useRouter } from 'next/navigation'
import styles from './Auth.module.scss'
import Loader from '@/components/loader/Loader'


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
            input
          <div className={styles.group}>
            {/* autoLogin,password change */}
            autoLogin,password change
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
