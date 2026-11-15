import React, { useState } from "react"
import { useSpring, animated as a } from "react-spring"
import Img from "gatsby-image"
import ReelPlayButton from "./reel-play-button"

const FlipCard = props => {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const playAudio = () => {
    document.getElementById(props.id).play()
  }
  return (
    <div
      className="cardImage"
      id={`${props.id}Container`}
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
        <div className="reelPhoto">
          <Img
            fluid={props.baseImage}
            alt="sasha looking cheeky"
            style={{ height: "100%" }}
            imgStyle={
              props.id === "character"
                ? {
                    left: "5%",
                    width: "90%",
                    objectFit: "cover",
                    objectPosition: "center 27%",
                  }
                : undefined
            }
          />
          <ReelPlayButton reelTitle={props.audioTitle} />
        </div>
        <h3 className="flipCardTitle">{props.audioTitle}</h3>
      </a.div>
      <a.div
        className="flip"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      >
        <Img fluid={props.flippedImage} alt="microphone" />
        <figure className="audio-elem">
          <figcaption>{props.audioTitle}</figcaption>
          <audio
            controls
            autoPlay
            preload="auto"
            id={props.id}
            src={props.audioFile}
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
      </a.div>
    </div>
  )
}

export default FlipCard
