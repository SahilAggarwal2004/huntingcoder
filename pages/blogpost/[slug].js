import React from 'react'
import styles from '../../styles/Blog.module.css'
// import * as fs from 'fs'

export default function slug(props) {
    const { blog } = props

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{blog.title}</h1>
                <hr />
                {/* Let's assume that blog.content is html string(like "<div>div</div><p>para</p>") instead of plain string to make our blog look good. In that case if we pass the content as below, react will treat html string as plain string only for security issues. Since we know that our html is safe, we will use a react's feature dangerouslySetInnerHTML which will be passed as an attribute and will take a js object as value with __html as key and html string as value */}
                {/* <div>{blog.content}</div> */}
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </main>
        </div>
    )
}

// Note that SSR/SSG used front-end server and not back-end server. These servers may be same or different.

// getServerSideProps() is used for SSR. In SSR, the connection of client to server doesn't break after serving the files. So, any update in the server will be reflected on load.
export async function getServerSideProps(context) {
    const { slug } = context.query // we were using next/router above in CSR to find out the query but this function has a context parameter which is an object which contains almost all the info about the network. So we can access our slug from here.
    const response = await fetch(`http://localhost:3000/api/fetchblog?slug=${slug}`);
    const blog = await response.json();
    return {
        props: { blog },
    }
}


// getStaticProps() and getStaticPaths() are used for SSG. In SSG, static html files are generated by server at the time of build and connection between client and front-end server breaks as soon as server serves the html files to client. So, any update in the server will not be reflected on load until we build the html files again. Note that in SSG, we cannot use next/image for image optimisation
// export async function getStaticPaths() { // This functions is only required if we are generating static pages for a dynamic component([slug], here). In here we will mention the paths that needs to be generated as html. It returns an object with paths key which has an array(as value) containing object(s). Now these objects will have a params key which again has another object(as value) containing a key depending on the file_name(slug, here) which has a string(as value) describing the name that will replace the dynamic file_name.
//     let slugs = [];
//     const data = await fs.promises.readdir('blogdata') // data will be an array
//     data.forEach(slug => {
//         slugs.push({ params: { slug: slug.split('.')[0] } })
//     });
//     return {
//         paths: slugs, // getting slugs dynamically instead of hard-coding, so that we just need to add blogs and don't edit our code after that
//         // [
//         //     { params: { slug: 'learn-flask' } }, // this will create a file learn-flask.html inside the blogpost folder which will be accessible as blogpost/learn-flask.html. As of files with static names, they will generated as file_name.html(eg: about.js --> about.html)
//         //     { params: { slug: 'learn-javascript' } },
//         //     { params: { slug: 'learn-nextjs' } }
//         // ],
//         fallback: false // false or 'blocking'. When copied from nextjs website, it was true(don't know why)
//     };
// }

// export async function getStaticProps(context) {
//     const { slug } = context.params
//     const blog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
//     return {
//         props: { blog: JSON.parse(blog) }
//     }
// }
// Now to generate the static site, we created a scirpt command named "export" in package.json which runs next build and next export. Now after we run this command, it will create an out directory inside the main folder which contains the static site that doesn't need any server for data.