import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Instagram from "../components/instagram"
import Carousel from "nuka-carousel"

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
          <h2>Badass Bitch</h2>
        </section>
      </div>

      <div id="video-container">
        <h2>
          <a id="music"></a>Music Videos
        </h2>

        <Carousel id="videos">
          <a href="https://www.youtube.com/watch?v=UEBKhz5j6Lw">
            <Img fluid={data.a1.childImageSharp.fluid} alt="band playing" />
          </a>
          <a href="https://www.youtube.com/watch?v=RGbDjdoWVoI">
            <Img
              fluid={data.a2.childImageSharp.fluid}
              alt="dancer reaching up"
            />
          </a>
          <a href="https://www.youtube.com/watch?v=3tZfHOUfiB8">
            <Img fluid={data.a3.childImageSharp.fluid} alt="old clock" />
          </a>
          <a href="https://www.youtube.com/watch?v=2ow3jZXGmPU">
            <Img
              fluid={data.a4.childImageSharp.fluid}
              alt="Gordan Lyle Bash playing bass"
            />
          </a>
          <a href="https://www.youtube.com/watch?v=nfzE9Ufc0CA">
            <Img
              fluid={data.a5.childImageSharp.fluid}
              alt="Tosh Cox being caressed"
            />
          </a>
          <a href="https://www.youtube.com/watch?v=gHYf-4qWDK0">
            <Img
              fluid={data.a6.childImageSharp.fluid}
              alt="woman crouching on ground in forest"
            />
          </a>
          <a href="https://www.youtube.com/watch?v=7Ap5Rx80fac">
            <Img
              fluid={data.a7.childImageSharp.fluid}
              alt="life size puppets lying in a pile"
            />
          </a>
          <a href="https://www.youtube.com/watch?v=qzJHbHhCvAM">
            <Img
              fluid={data.a8.childImageSharp.fluid}
              alt="Tash Cox in front of beach"
            />
          </a>
          <a href="https://www.youtube.com/watch?v=LUPwz6s5JH8">
            <Img
              fluid={data.a9.childImageSharp.fluid}
              alt="Sasha Travis in front of snowy background"
            />
          </a>
          <a href="https://www.youtube.com/watch?v=oSp4ZS4xC5U">
            <Img
              fluid={data.a10.childImageSharp.fluid}
              alt="soundboard dials"
            />
          </a>
          <a href="https://www.youtube.com/watch?v=Bumzlb7RBBs">
            <Img
              fluid={data.a11.childImageSharp.fluid}
              alt="hands playing piano"
            />
          </a>
          <a href="https://www.youtube.com/watch?v=LTCOgAG-jCo">
            <Img fluid={data.a12.childImageSharp.fluid} alt="woman beckoning" />
          </a>
          <a href="https://www.youtube.com/watch?v=_VhwUxTu0qE">
            <Img
              fluid={data.a13.childImageSharp.fluid}
              alt="Hands reaching up"
            />
          </a>
          <a href="https://www.youtube.com/watch?v=Fcy87hQAShg">
            <Img
              fluid={data.a13b.childImageSharp.fluid}
              alt="Sasha Travis looking tribal"
            />
          </a>
          <Img
            fluid={data.a14.childImageSharp.fluid}
            alt="woman dancing on beach"
          />
        </Carousel>
      </div>

      <div>
        <Instagram />
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
    a1: file(relativePath: { eq: "a1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    a2: file(relativePath: { eq: "a2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    a3: file(relativePath: { eq: "a3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    a4: file(relativePath: { eq: "a4.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    a5: file(relativePath: { eq: "a5.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    a6: file(relativePath: { eq: "a6.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    a7: file(relativePath: { eq: "a7.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    a8: file(relativePath: { eq: "a8.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    a9: file(relativePath: { eq: "a9.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    a10: file(relativePath: { eq: "a10.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    a11: file(relativePath: { eq: "a11.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    a12: file(relativePath: { eq: "a12.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    a13: file(relativePath: { eq: "a13.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    a13b: file(relativePath: { eq: "a13b.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    a14: file(relativePath: { eq: "a14.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
