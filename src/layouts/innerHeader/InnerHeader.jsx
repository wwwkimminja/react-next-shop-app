import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import freshIcon from '@/assets/icon-fresh.svg'
import rocketIcon from '@/assets/icon-rocket.svg'
import styles from './InnerHeader.module.scss'
import classNames from 'classnames'
import logo from '@/assets/colorful.svg'
import { useRouter } from 'next/navigation'


const InnerHeader =()=> {

  const router=useRouter()
  const [search, setSearch] = useState("")


  const handleClick=()=>{
    router.push('/cart')
  }
  return (
    <div className={styles.innerHeader}>
      {/* logo */}
      <h1 className={styles.brand}>
        <Link href="/">
        <Image src={logo} alt="logo" width={211} height={48} priority/>
        </Link>
      </h1>
      {/* category button */}
      <button type="button" className={styles.buttonCategory}>Category</button>
      {/* search form */}
      <form action="/" className={styles.searchForm}>
        <fieldset>
          <div className={styles.searchFormWrapper}>
            <div className={styles.formSelect}>
              <select name="searchCategory" id="searchCategory">
                <option>total</option>
              </select>
              <svg
                className={styles.iconDown} width="9" height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0H0L4.69565 6L9 0Z" fill="#767676" />
              </svg>
            </div>
            <div className={styles.formInput}>
              <input type="search" id="searchKeyword" placeholder='search item' 
              value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <button type="button" className={styles.searchButton}></button>
            <button type="button" className={styles.voiceSearchButton}></button>
          </div>
        </fieldset>
      </form>
      {/* my coupang area */}
      <div className={styles.myCoupang}>
        <button type="button" className={classNames(styles.button ,styles.myCoupangButton)}>
        my coupang
        </button>
          <ul className={styles.myCoupangList}>
            <li><Link href="/">order list</Link></li>
            <li><Link href="/">cancel/return</Link></li>
            <li><Link href="/">keep list</Link></li>
          </ul>
      </div>
      {/* cart area */}
      <div className={styles.cart}>
        <div className={styles.cartButtonWrapper}>
          <button
          type="button" onClick={handleClick} 
          className={classNames(styles.button,styles.cartButton)}>cart</button>
          <strong className={styles.cartProductCount}>1</strong>
        </div>
      </div>
      {/* link list */}
      <div className={styles.typeNavigation}>
        <ul className={styles.typeNavigationList}>
          <li><Link href="/">
            <Image src={rocketIcon} className={styles.badgeRocket} alt='rocket'/>
            rocket delivery</Link></li>
          <li><Link href="/">
          <Image src={freshIcon} className={styles.badgeNew} alt='rocket'/>
            rocket fresh</Link></li>
          <li><Link href="/">friday 2023</Link></li>
          <li><Link href="/">direct</Link></li>
          <li><Link href="/">golden</Link></li>
          <li><Link href="/">delivery</Link></li>
          <li><Link href="/">coupon</Link></li>
          <li><Link href="/">travel </Link></li>
        </ul>
      </div>
    </div>
  )
}

export default InnerHeader