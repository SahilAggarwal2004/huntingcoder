import React from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'
// import * as fs from 'fs'

export default function blogs(props) {
  const blog = props.blogs

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>All Blogs</h2>
        <div className={styles.blogs}>
          {blog.map(element => {
            return <div className={styles.blogItem} key={element.name}>
              <Link href={`/blogpost/${element.name}`}>
                <h3 className={styles.link}>{element.title}</h3>
              </Link>
              <p>{element.short}</p>
            </div>
          })}
        </div>
      </main>
    </div>
  )
}

// getServerSideProps is a function that executes on the server side and returns us some props as an object with only props key(no more extra key can be returned) whose keys will be directly accessible from the client side component
export async function getServerSideProps() {
  // Now instead of fetching blogs in client side, we will fetch them in this function from server.
  // fetch('/api/fetchall').then(res => { return res.json() }).then(data => setBlog(data))
  const response = await fetch(`${process.env.API}fetchall`); // But while using fetch inside server, we must pass absolute urls
  const blogs = await response.json();
  return {
    props: { blogs }, // this will be directly accessible from blog component as props. 1st functional parameter is always props, so it can be named anything. But here, it can only be named props
    // Now we passed blogs as props and they will be directly rendered in the component above. This was a basic example of SSR.
  }
}

// export async function getStaticProps(context) {
//   let blogs = [];
//   const data = await fs.promises.readdir('blogdata') // data will be an array
//   for (let index = 0; index < data.length; index++) {
//     const blog = data[index];
//     const response = await fs.promises.readFile(`blogdata/${blog}`, 'utf-8')
//     blogs.push(JSON.parse(response))
//   }
//   return {
//     props: { blogs }
//   }
// }