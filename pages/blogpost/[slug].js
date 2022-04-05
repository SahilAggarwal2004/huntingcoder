import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blog.module.css'

export default function slug() {
    const router = useRouter()
    const { slug } = router.query
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Title of the blog: {slug}</h1>
                <hr />
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus nemo animi eius dolores architecto perferendis repellat repellendus, illo ipsum voluptas suscipit dolore minima ullam. Accusantium cum quo amet voluptates. Repellat?
                </div>
            </main>
        </div>
    )
}
