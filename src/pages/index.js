import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import SEO from "../components/seo"
import FlipCard from "../components/flipcard"

const IndexPage = ({ data }) => {
  console.log(data)

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
          <div class="menu">
            <a href="#characterContainer">Characters</a>
            <a href="#commercialContainer">Advertisements</a>
            <a href="#bio">About</a>
            <a href="#contactContainer">Contact</a>
          </div>
        </section>
      </div>

      <FlipCard
        baseImage={data.cardImage.childImageSharp.fluid}
        flippedImage={data.cardImage2.childImageSharp.fluid}
        audioFile={"/audio/sasha-travis-a2.mp3"}
        id="character"
        audioTitle="Character Reel"
        buttonColor="#a96554"
      />

      <FlipCard
        baseImage={data.cardImage3.childImageSharp.fluid}
        flippedImage={data.cardImage2.childImageSharp.fluid}
        audioFile={"/audio/sasha-travis-c3.mp3"}
        id="commercial"
        audioTitle="Advertising Reel"
        buttonColor="black"
      />

      <div id="bio">
        <h3>About</h3>
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
        <h3>Contact Me</h3>
        <div id="contactInfo">
          <p>
            Email:
            <br />
            sasha@sashatravis.com
          </p>
          <p>
            Phone:
            <br /> 123-456-789
          </p>
        </div>
        <div className="row">
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
              id="submit"
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
    cardImage3: file(relativePath: { eq: "professional.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
