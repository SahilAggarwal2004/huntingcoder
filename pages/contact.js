import React from 'react';
import styles from '../styles/Contact.module.css'

export default function contact() {

  async function postcontact(event) {
    event.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const mobile = document.getElementById('mobile').value
    const description = document.getElementById('description').value
    const response = await fetch('http://localhost:3000/api/contact', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, mobile, description })
    })
    const { msg } = await response.json()
    alert(msg)
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h2>Contact Us</h2>
        <form className={styles.form} onSubmit={postcontact}>
          <div className={styles.item}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder='Enter your name' />
          </div>
          <div className={styles.item}>
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" required placeholder='abc@example.com' />
          </div>
          <div className={styles.item}>
            <label htmlFor="mobile">Mobile No.</label>
            <input type="tel" id="mobile" minLength={10} maxLength={10} placeholder="Enter your phone number" />
          </div>
          <div className={styles.item}>
            <label htmlFor="description">Concern</label>
            <textarea rows={5} cols={30} id="description" placeholder="Elaborate your concern" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
