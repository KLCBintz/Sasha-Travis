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

  const playAudio = () => {
    document.getElementById("character").play()
  }

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

      <div
        className="cardImage"
        onClick={() =>
          set(state => {
            if (!flipped) playAudio()
            return !state
          })
        }
      >
        <a.div
          className="flip"
          style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
        >
          <Img
            fluid={data.cardImage.childImageSharp.fluid}
            alt="sasha looking cheeky"
          />
          <button className="radio">
            <i class="medium material-icons">play_circle_filled</i> <br /> Play
            Now
          </button>
        </a.div>
        <a.div
          className="flip"
          style={{
            opacity,
            transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          }}
        >
          <Img fluid={data.cardImage2.childImageSharp.fluid} alt="microphone" />
          <figure className="audio-elem">
            <figcaption>Character Reel</figcaption>
            <audio
              controls
              autoPlay
              preload="auto"
              id="character"
              src="/audio/sasha-travis-a2.mp3"
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
        </a.div>
      </div>

      <div id="bio">
        <p>
          Howdy! Welcome to my cyberspace green room! I'm sasha, and I'm excited
          you're here!
        </p>
        <p>
          I am an enthusiastically driven Scorpio who believes in true love,
          exquisite art and dry shampoo. I drive just a little too fast and
          consume massive amounts of homemade, cold-brew coffee.
        </p>
        <p>
          I am at my best when I get to be a collaborative storyteller; I love
          nothing more than the power of a creative collective with a common
          goal.
        </p>
        <p>
          I'm here to build dreams, to be a part of your creative vision and to
          help bring your ideas to life! Art is a great connector of people, one
          of the universal languages of the human race, and I want to be a part
          of your art and your story.
        </p>
        <p>
          I am a dreamer and a builder, I believe it is completely possible to
          be both the tether and the kite! I love both the whimsical artistry of
          the creative process and the satisfaction of a polished and
          professional product.
        </p>
        <p>Thanks for stopping by. Let's build together!</p>
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
