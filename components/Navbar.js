import React from 'react'
import Link from 'next/link' // next/link is a next package which is similar to Link in react-router and has optimisations such as prefetch, scroll(scroll to top), etc.
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/contact'>Contact</Link>
            </ul>
        </nav>
    )
}
