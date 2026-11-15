import React from "react"

const ReelPlayButton = ({ reelTitle }) => (
  <button type="button" className="radio" aria-label={`Play ${reelTitle}`}>
    <i className="medium material-icons" aria-hidden="true">
      play_circle_filled
    </i>
    <span>Play Now</span>
  </button>
)

export default ReelPlayButton
