import React from 'react'
import type { SVGProps } from 'react'

export default function LetsIconsCloseRingLight(
  props: SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke={props.fill}
        strokeLinecap="round"
        d="M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18zM9 9l6 6m0-6l-6 6"
      ></path>
    </svg>
  )
}
