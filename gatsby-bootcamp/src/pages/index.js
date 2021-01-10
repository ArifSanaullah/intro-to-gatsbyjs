import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Hello...!</h1>
        <h1>
          I'm Arif Sanaullah, A full stack developer living in beautiful
          Pakistan.
        </h1>
        <p>
          Need a developer? <Link to="/contact">Contact me</Link>{" "}
        </p>
        <p>
          See all blogs <Link to="/blog">Blogs</Link>{" "}
        </p>
        <p>
          Find about me <Link to="/about">About me</Link>{" "}
        </p>
      </div>
    </Layout>
  )
}
