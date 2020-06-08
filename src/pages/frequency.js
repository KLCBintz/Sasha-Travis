import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const VideoPage = () => (
  <Layout>
    <SEO title="Frequency" />

    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UEBKhz5j6Lw"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </Layout>
)

export default VideoPage
