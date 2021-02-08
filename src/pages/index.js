import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { useSpring, animated as a } from "react-spring"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <Layout>
      <SEO title="Home" />
      <div id="hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt="sasha singing into a mic"
          className="hero"
        />
        <section className="hero-text">
          <h1>Sasha Travis</h1>
          <h2>Voiceover Artist</h2>
        </section>
      </div>

      <div class="cardImage" onClick={() => set(state => !state)}>
        <a.div
          className="flip"
          style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
        >
          <Img
            fluid={data.cardImage.childImageSharp.fluid}
            alt="sasha looking cheeky"
          />
          <button class="radio">Play Now</button>
        </a.div>
        <a.div
          class="flip"
          style={{
            opacity,
            transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          }}
        >
          <Img fluid={data.cardImage2.childImageSharp.fluid} alt="microphone" />
        </a.div>
      </div>

      <div id="contactContainer" className="container">
        <div className="row">
          <h3>Contact Me</h3>
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            className="col s12"
          >
            <p className="hidden">
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="first_name"
                  type="text"
                  className="validate white-text"
                  required
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  className="validate white-text"
                  required
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate white-text"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="message"
                  className="materialize-textarea white-text"
                  required
                >
                  {" "}
                </textarea>
                <label htmlFor="message">Message</label>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "sasha-cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImage: file(relativePath: { eq: "listen.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImage2: file(relativePath: { eq: "microphone.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
