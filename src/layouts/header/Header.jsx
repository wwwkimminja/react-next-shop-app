'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { toast } from 'react-toastify'
import { usePathname, useRouter } from 'next/navigation'
import InnerHeader from '../innerHeader/InnerHeader'

function Header() {
  const pathname=usePathname()
  const router=useRouter()
  const [displayName, setDisplayName] = useState("")

  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
      if(user){
        if(user.displayName === null){
          const u1=user.email.substring(0,user.email.indexOf("@"));
          const uName=u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        }else{
          setDisplayName(user.displayName);
        }
          //save user info at redux store
      }else{
        setDisplayName("");
        //delete user info from redux store
      }
    })

  }, [])
  

  const logoutUser=()=>{
    signOut(auth).then(()=>{
      toast.success('logged in')
      router.push('/')

    }).catch((error)=>{
      toast.error(error.message)
    })
  }

  if(pathname==='/login'||pathname==="/register"||pathname=='/reset')return null;
  return (
    <header>
      <div className={styles.loginBar}>
        <ul className={styles.list}>
          {/* <li className={styles.item}>
            <Link href={"/login"}>log in</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/admin/dashboard"}>admin</Link>
          </li> */}
          <li className={styles.item}>
            <Link href={"/order-history"}>order </Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"} onClick={logoutUser}>log out</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"}>marketing</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"}>coupang play</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"}>customer center</Link>
          </li>
        </ul>
      </div>
      {
        pathname.startsWith('/admin')?null:<InnerHeader/>
      }
    </header>
  )
}

export default Header