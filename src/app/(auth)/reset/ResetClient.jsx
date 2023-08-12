'use client'
import React, { useState } from 'react'
import Loader from '@/components/loader/Loader'
import styles from './Reset.module.scss'
import Heading from '@/components/heading/Heading'
import Input from '@/components/input/Input'
import Button from '@/components/button/Button'
import Link from 'next/link'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { toast } from 'react-toastify'

const ResetClient = () => {

  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState("")

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);

    sendPasswordResetEmail(auth,email)
    .then(()=>{
      setIsLoading(false)
      toast.success('please check your email to update your password ')
    })
    .catch((error)=>{
      setIsLoading(false)
      toast.error(error.message)

    })
  }


  return (
    <>
    {isLoading&& <Loader/>}
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.form}>
          <Heading title="Update Password" subTitle="please enter your email"/>

          <form onSubmit={resetPassword}>
            <Input
            type="text"
            placeholder='Email'
            required
            value={email}
            className={styles.control}
            onChange={((e)=>setEmail(e.target.value))}
            />
            <div>
              <Button type="submit">
                update
              </Button>
            </div>
            <div className={styles.links}>
              <p>
              <Link href="/login">Log in</Link>
              </p>
              <p>
              <Link href="/register">Sign in</Link>
              </p>
            </div>

          </form>
        </div>

      </div>

    </section>
    </>
  )
}

export default ResetClient