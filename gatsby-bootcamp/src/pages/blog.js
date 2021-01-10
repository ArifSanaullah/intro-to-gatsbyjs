import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

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
            html
            excerpt
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <h1>Blogs</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(
          ({
            node: {
              frontmatter: { title, date },
            },
          }) => (
            <li key={title}>
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
          )
        )}
      </ul>
    </Layout>
  )
}

export default Blog
