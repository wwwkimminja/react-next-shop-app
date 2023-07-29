'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import LogoPath from '@/assets/colorful.svg'
import { useRouter } from 'next/navigation'


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
    <section>
      <div>
        <h1>
          <Image src={LogoPath} alt="logo"/>
        </h1>
        <form onSubmit={loginUser}>
          {/* input */}
          <div>
            {/* autoLogin,password change */}
          </div>
          <div>
            {/* Button */}
            <div>
              {/* Button */}
            </div>
          </div>
        </form>
      </div>
    </section>

  )
}

export default LoginClient
