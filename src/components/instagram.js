import React from "react"
import Img from "gatsby-image"

const Instagram = data => {
  return (
    <>
      <div className="text-center">
        <a
          className="unstyled-link"
          href="https://www.instagram.com/sashamtravis/"
          target="_blank"
        >
          <h2 className="with-underline">Instagram Feed</h2>
        </a>
      </div>

      <div className="Instagram-feed">
        {/*         
        {data.data.edges.map((item, index) => (
          <a
            className="unstyled-link"
            href="https://www.instagram.com/sashamtravis/"
            target="_blank"
            key={index}
          >
            <div className="Instagram-picture">
              <Img sizes={item.node.localImage.childImageSharp.fluid} />
            </div>
          </a>
        ))} */}
      </div>
    </>
  )
}

export default Instagram
