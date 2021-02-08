// import React from "react"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { Link } from "gatsby"
// import Carousel from "nuka-carousel"
// import Img from "gatsby-image"

// const MusicVideos = ({ data }) => {
//   console.log(data)

//   return (
//  <Layout>
//     <SEO title="Video Editing" />
//     <div id="video-container">
//       <h2>
//         <a id="music"></a>Music Videos
//       </h2>
//     </div>
//     <h1>Videos</h1>
//     <Carousel id="videos">
//       <a href="https://www.youtube.com/watch?v=UEBKhz5j6Lw">
//         <Img fluid={data.a1.childImageSharp.fluid} alt="sasha singing" />
//       </a>
//       <a href="https://www.youtube.com/watch?v=RGbDjdoWVoI">
//         <Img fluid={data.a2.childImageSharp.fluid} alt="dancer reaching up" />
//       </a>
//       <a href="https://www.youtube.com/watch?v=3tZfHOUfiB8">
//         <Img fluid={data.a3.childImageSharp.fluid} alt="old clock" />
//       </a>
//       <a href="https://www.youtube.com/watch?v=2ow3jZXGmPU">
//         <Img
//           fluid={data.a4.childImageSharp.fluid}
//           alt="Gordan Lyle Bash playing bass"
//         />
//       </a>
//       <a href="https://www.youtube.com/watch?v=nfzE9Ufc0CA">
//         <Img
//           fluid={data.a5.childImageSharp.fluid}
//           alt="Tosh Cox being caressed"
//         />
//       </a>
//       <a href="https://www.youtube.com/watch?v=gHYf-4qWDK0">
//         <Img
//           fluid={data.a6.childImageSharp.fluid}
//           alt="woman crouching on ground in forest"
//         />
//       </a>
//       <a href="https://www.youtube.com/watch?v=7Ap5Rx80fac">
//         <Img
//           fluid={data.a7.childImageSharp.fluid}
//           alt="life size puppets lying in a pile"
//         />
//       </a>
//       <a href="https://www.youtube.com/watch?v=qzJHbHhCvAM">
//         <Img
//           fluid={data.a8.childImageSharp.fluid}
//           alt="Tash Cox in front of beach"
//         />
//       </a>
//       <a href="https://www.youtube.com/watch?v=LUPwz6s5JH8">
//         <Img
//           fluid={data.a9.childImageSharp.fluid}
//           alt="Sasha Travis in front of snowy background"
//         />
//       </a>
//       <a href="https://www.youtube.com/watch?v=oSp4ZS4xC5U">
//         <Img fluid={data.a10.childImageSharp.fluid} alt="soundboard dials" />
//       </a>
//       <a href="https://www.youtube.com/watch?v=Bumzlb7RBBs">
//         <Img fluid={data.a11.childImageSharp.fluid} alt="hands playing piano" />
//       </a>
//       <a href="https://www.youtube.com/watch?v=LTCOgAG-jCo">
//         <Img fluid={data.a12.childImageSharp.fluid} alt="woman beckoning" />
//       </a>
//       <a href="https://www.youtube.com/watch?v=_VhwUxTu0qE">
//         <Img fluid={data.a13.childImageSharp.fluid} alt="Hands reaching up" />
//       </a>
//       <a href="https://www.youtube.com/watch?v=Fcy87hQAShg">
//         <Img
//           fluid={data.a13b.childImageSharp.fluid}
//           alt="Sasha Travis looking tribal"
//         />
//       </a>
//       <a href="https://www.youtube.com/watch?v=wOZHTwNPuns">
//         <Img
//           fluid={data.a14.childImageSharp.fluid}
//           alt="woman dancing on beach"
//         />
//       </a>

//       <Img fluid={data.a1.childImageSharp.fluid} alt="sasha singing" />
//     </Carousel>

//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

// export default musicVideos

// export const query = graphql`
//   query videos {

//   a1: file(relativePath: { eq: "a1.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     a2: file(relativePath: { eq: "a2.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     a3: file(relativePath: { eq: "a3.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     a4: file(relativePath: { eq: "a4.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     a5: file(relativePath: { eq: "a5.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     a6: file(relativePath: { eq: "a6.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     a7: file(relativePath: { eq: "a7.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     a8: file(relativePath: { eq: "a8.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     a9: file(relativePath: { eq: "a9.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     a10: file(relativePath: { eq: "a10.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     a11: file(relativePath: { eq: "a11.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     a12: file(relativePath: { eq: "a12.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     a13: file(relativePath: { eq: "a13.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     a13b: file(relativePath: { eq: "a13b.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     a14: file(relativePath: { eq: "a14.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// }
// `
