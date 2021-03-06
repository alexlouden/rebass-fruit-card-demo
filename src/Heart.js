import React, { useState } from 'react'
import styled from 'styled-components/macro'

const HeartIcon = ({
  color = 'white',
  size = 20,
  fill = 'none',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const PositionedHeart = styled(HeartIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`

const Heart = ({ heart: initial }) => {
  const [heart, setHeart] = useState(initial)
  return (
    <PositionedHeart
      fill={heart ? 'white' : 'none'}
      onClick={() => setHeart(!heart)}
    />
  )
}

export default Heart
