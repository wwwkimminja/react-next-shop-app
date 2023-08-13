import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import colorLogo from "@/assets/colorful.svg";
import facebookIcon from "@/assets/sns-facebook.svg";
import instagramIcon from "@/assets/sns-instagram.svg";

function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.customerGuide}>
        <ul className={styles.customerGuidList}>
          <li><Link href="/">会社概要</Link></li>
          <li><span/><Link href="/">CSR</Link></li>
          <li><span/><Link href="/">Investor Relations</Link></li>
          <li><span/><Link href="/">採用情報</Link></li>
          <li><span/><Link href="/">利用規約</Link></li>
          <li><span/><Link href="/">個人情報保護方針</Link></li>
        </ul>
      </div>

      <div className={styles.coupangInformation}>
        <figure className={styles.logo}> 
          <Image src={colorLogo} alt="logo1"/>
        </figure>
        <ul className={styles.coupangInformationList}>
          <li>
            <span> hosting service 提供 <span>:</span>coupang</span>
          </li>
          <li>
            <span> 代表取締役<span>:</span>金旻子</span>
          </li>
          <li>
            <span> 東京都渋谷区1-1-1 </span>
          </li>
          <li>
            <span> 事業者登録番号 <span>:</span>120-11-123455</span>
          </li>

        </ul>
        <div className={styles.customerCenter}>
          <ul className={styles.customerCenterList}>
            <li className={styles.customerCenterItem}>
              <Link href="/">365 Customer Service</Link>
            </li>
            {/* <li className={styles.customerCenterItem}>
              <span className={styles.divider}></span>
              <Link href="/">Electronic Financial Transaction Dispute Handling</Link>
            </li> */}
          </ul>

          <div className={styles.customerCenterTelephone}>
            <Link href="tel:15777011">1577-7011</Link>
          </div>

          <div className={styles.customerCenterAddress} role="text">
            東京都新宿区新宿１−１−１１
          </div>

          <div className={styles.customerCenterEmail}>
            email<span>:</span>{" "}
            <Link href="mailto:help@coupang.com?subject=문의사항">help@coupang.com</Link>
          </div>
        </div>
        <div className={styles.paymentGuarantee}>
          <strong className={styles.paymentGuaranteeTitle}>Debt payment guarantee guide</strong>
          {/* <p>We have signed a debt payment guarantee contract with Woori Bank for the amount you paid in cash to ensure safe transactions.</p> */}
        </div>
      </div>

      <div className={styles.copyrightArea}>
        <div className={styles.copyrightAreaInner}>
          <div className={styles.copyright}>
            <span>Among the products sold in the cyber mall are marketplace (open market) products sold by individual sellers registered with Coupang.</span>
            <span>In the case of marketplace (open market) products, Coupang is a mail order broker and is not a party to mail order</span>
            <span>Coupang is not responsible for marketplace (open market) products, transaction information, and transactions.</span>
            <span>Coupang operates a trust management center (CM112@coupang.com ) for consumer protection and safety transactions, and in the event of a related dispute, the dispute is handled according to a separate dispute handling procedure.</span>
            <small className={styles.copyrightText}>
              Copyright &copy; Coupang Corp. 2010-2020 All Right Reserved.
            </small>
          </div>
          <div className={styles.sns}>
            <ul className={styles.snsList}>
              <li>
                <Link href="https://www.facebook.com" className="facebook">
                  <Image src={facebookIcon} alt="facebook" />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/" className={styles.instagram}>
                  <Image src={instagramIcon} alt="instagram" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer