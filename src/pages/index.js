import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroAnimatedText from "../components/hero-animated-text"

const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <div id="hero">
        <h1 className="hero__text">
          I am <span className="hero__text-mobile">Sasha Travis</span>
        </h1>
        <div id="animated" className="hero__text">
          <HeroAnimatedText />
        </div>

        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt="sasha posing on a couch like rose from titanic"
          className="hero"
        />
      </div>

      <h2>Sasha's Tour Notes</h2>
      <h4>Unity of Opposites Tour</h4>

      <div id="blog" className="container">
        <div className="row">
          <div className="col m12 l4">
            <div className="card z-depth-3">
              <div className="card-image">
                <Img fluid={data.blog1.childImageSharp.fluid} alt="selfies" />
                <span className="card-title">Day 1</span>
              </div>
              <div className="card-content">
                <p>
                  Everything takes Pi times as long as I think it will, always,
                  nothing in my life takes less time. I need to get better at
                  this. Time is just so liquid.
                </p>
                <p>Snaps take longer. Tatoo removal...</p>
              </div>
              <div className="card-action">
                <a href="https://www.ilikealice.com/tour-notes-day-1-unity-of-opposites-tour/">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col m12 l4">
            <div className="card z-depth-3">
              <div className="card-image">
                <Img
                  fluid={data.blog2.childImageSharp.fluid}
                  alt="spooky house"
                />
                <span className="card-title">Day 2</span>
              </div>
              <div className="card-content">
                <p>
                  Duck time!! Lookin all swanky and feathery smooth on the top
                  and paddlin like crazy underneath! Find your moments for rest
                  and protect them, you need them, your team...
                </p>
              </div>
              <div className="card-action">
                <a href="https://www.ilikealice.com/tour-notes-day-2-unity-of-opposites-tour/">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col m12 l4">
            <div className="card z-depth-3">
              <div className="card-image">
                <Img
                  fluid={data.blog3.childImageSharp.fluid}
                  alt="band setup"
                />
                <span className="card-title">Day 3</span>
              </div>
              <div className="card-content">
                <p>
                  Self care and being able to care for other people/creatures go
                  hand in hand. When yer outfit has little feathers in it yer
                  prolly gonna leave little feathers everywhere...
                </p>
              </div>
              <div className="card-action">
                <a href="https://www.ilikealice.com/tour-notes-day-3-unity-of-opposites-tour/">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3>Vampire: The Masquerade</h3>
        <div className="row">
          <div className="col m12 l6">
            <Img
              fluid={data.ravnos1.childImageSharp.fluid}
              alt="vampire woman lifting cards with mind"
              className="shadow"
            />
          </div>
          <div className="col m12 l6">
            <Img
              fluid={data.ravnos3.childImageSharp.fluid}
              alt="vampire woman beckoning"
              className="shadow"
            />
          </div>
        </div>
      </div>

      <h2>
        <a id="music"></a>Music Videos
      </h2>

      <div className="container">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_VhwUxTu0qE"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Fcy87hQAShg"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
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

export const cardImage = graphql`
  fragment cardImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    blog1: file(relativePath: { eq: "blog1.jpg" }) {
      ...cardImage
    }
    blog2: file(relativePath: { eq: "blog2.jpg" }) {
      ...cardImage
    }
    blog3: file(relativePath: { eq: "blog3.jpg" }) {
      ...cardImage
    }
    hero: file(relativePath: { eq: "sasha-cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ravnos1: file(relativePath: { eq: "Ravnos1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ravnos3: file(relativePath: { eq: "Ravnos3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
