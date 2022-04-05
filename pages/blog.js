import React from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

export default function blog() {
  return (
    <main className={styles.main}>
      <div className={styles.blogs}>
        <div className={styles.blogItem}>
          <Link href='/blogpost/learn-javascript'>
            <h3 className={styles.link}>How to learn JavaScript in 2022?</h3>
          </Link>
          <p>JavaScript is the language to design logic for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language to design logic for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language to design logic for the web</p>
        </div>
      </div>
    </main>
  )
}
