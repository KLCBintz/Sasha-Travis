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
        buttonColor="black"
      />

      <div class="download">
        <button class="character">
          <a class="c" href="../audio/sasha-travis-a2.mp3" download>
            Download Character Reel
          </a>
        </button>
      </div>

      <FlipCard
        baseImage={data.cardImage3.childImageSharp.fluid}
        flippedImage={data.cardImage2.childImageSharp.fluid}
        audioFile={"/audio/sasha-travis-c3.mp3"}
        id="commercial"
        audioTitle="Advertising Reel"
        buttonColor="black"
      />

      <div class="download">
        <button class="ad">
          <a class="c" href="../audio/sasha-travis-c3.mp3" download>
            Download Advertisement Reel
          </a>
        </button>
      </div>

      <div id="bio">
        <h3>About</h3>
        <p>
          Sasha Travis is a voiceover artist who brings warmth, wit, and range
          to every script. She is equally at home delivering a polished,
          trustworthy commercial read or bringing a quick-witted animated
          character to life. With a background in singing and theatrical
          performance, she treats every session as a collaborative act of
          storytelling, chasing exactly the right tone for your vision alongside
          you.
        </p>
        <p>
          Off script, she's a recovering theater kid who still tears up at a good
          curtain call, happily running on homemade cold brew and a near-religious
          devotion to dry shampoo, with a lifelong soft spot for true love and
          petting all the dogs. And art. Art is one of the great connectors of
          the human race, and she's here to be part of your story.
        </p>
        <p>
          Based in California, available for remote sessions. Let's build
          something together.
        </p>
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
            <br /> 323-947-3396
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
