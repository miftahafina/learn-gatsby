import * as React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Home({ data }) {
  console.log(data)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop &amp; Deploy</h3>
          <p>UX designer &amp; web developer based in Indonesia.</p>
          <Link className={styles.btn} to='/projects'>My Portfolio Projects</Link>
        </div>
        {/* <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%' }}/> */}
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`