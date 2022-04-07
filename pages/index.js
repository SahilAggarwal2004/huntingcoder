import Head from 'next/head'
import Image from 'next/image' // remove when using SSG
import Link from 'next/link'
// import Dummy from '../components/Dummy'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // styles.container in nextjs is equivalent to importing css file using import '../styles/file_name' and then putting className="container" in react. Note that the react import can be done in nextjs also if file has a normal name file_name.css but it can be imported only via _app.js as a global style sheet which will be applicable on all our components. For nextjs unique css import, file must have a name of file_name.module.css and now, this css file will export styles as a module in form of an object. Now the advantage of this system is that here we used Home.module.css for our home. Let's say we have some similar tags for our about component but we want different styles, so we can create another css file name About.module.css and import it into about component, what this is do is it will keep both styles as separate to avoid mixing of properties and thus, we can have similar classes with different properties in different files.
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Hunting Coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Another way to write css inside a component is to write styled jsx as below */}
      {/* <style jsx>{`styles`}</style> */}
      {/* <style jsx>
        { // Here we can write css as normally we do
          `
        .mySpan {
          color: red;
        }
        `}
      </style> */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          {/* mySpan class styled inside styled jsx above */}
          <span className='mySpan dummy'>{'<HuntingCoder/>'}</span>
          {/* We imported Dummy component above which contains a dummy class in styled jsx. But we still couldn't apply the dummy class css for this span if we haven't given the global attribute to Dummy's styled jsx */}
        </h1>
        <Image className={styles.img} src='/home.jpg' width={273} height={158} quality={100} />
        {/* <img src='/home.jpg' width={273} height={158} alt="" /> */}
        <p className={styles.description}>A blog for hunting coders by a hunting coder!</p>

        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <Link href={`/blogpost/learn-flask`}>
              <h3 className={styles.link}>How to learn Flask</h3>
            </Link>
            <p>Flask is a micro web framework written in Python.</p>
          </div>
          <div className={styles.blogItem}>
            <Link href={`/blogpost/learn-flask`}>
              <h3 className={styles.link}>How to learn JavaScript</h3>
            </Link>
            <p>JavaScript is the language to design logic for the web.</p>
          </div>
          <div className={styles.blogItem}>
            <Link href={`/blogpost/learn-nextjs`}>
              <h3 className={styles.link}>How to learn NextJS</h3>
            </Link>
            <p>Next.js is an open-source web development framework built on top of Node.js enabling React based web applications.</p>
          </div>
        </div>
      </main>
      {/* <Dummy /> */}
    </div>
  )
}
