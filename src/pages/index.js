import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>The great gatsby bootcamp</h1>
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
