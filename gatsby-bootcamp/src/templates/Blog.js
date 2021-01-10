import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

function Blog({
  data: {
    markdownRemark: {
      frontmatter: { date, title },
      html,
    },
  },
}) {
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export default Blog
