import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import styles from "../styles/blogs.module.scss"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ul className={styles.blogsList}>
        {data.allMarkdownRemark.edges.map(
          ({
            node: {
              frontmatter: { title, date },
              fields: { slug },
            },
          }) => (
            <li key={title} className={styles.blog}>
              <Link to={`/blogs/${slug}`}>
                <h2>{title}</h2>
                <p>{date}</p>
              </Link>
            </li>
          )
        )}
      </ul>
    </Layout>
  )
}

export default Blog
