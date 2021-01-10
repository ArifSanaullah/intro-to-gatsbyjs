import React from "react"
import { graphql, useStaticQuery } from "gatsby"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      <p>
        Create by{" "}
        <a
          href="https://twitter.com/arifsanaullah78"
          target="_blank"
          rel="noreferrer"
        >
          {data.site.siteMetadata.author}
        </a>{" "}
        with Love{" "}
      </p>
    </footer>
  )
}

export default Footer
