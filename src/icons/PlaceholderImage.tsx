import React from 'react'
import type { SVGProps } from 'react'

export default function BasilImageSolid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.fill}
        fillRule="evenodd"
        d="M7.268 4.658a54.647 54.647 0 0 1 9.465 0l1.51.132a3.138 3.138 0 0 1 2.831 2.66a30.604 30.604 0 0 1 0 9.1c-.04.264-.112.517-.212.754c-.066.157-.27.181-.386.055l-4.421-4.864a.75.75 0 0 0-.792-.207l-2.531.844l-3.671-4.13A.75.75 0 0 0 7.97 8.97l-4.914 4.914a.246.246 0 0 1-.422-.159a30.601 30.601 0 0 1 .292-6.276a3.138 3.138 0 0 1 2.831-2.66zM14 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"
        clipRule="evenodd"
      ></path>
      <path
        fill={props.fill}
        d="M2.961 16.1a.249.249 0 0 0-.07.21l.035.24a3.138 3.138 0 0 0 2.831 2.66l1.51.131c3.15.274 6.316.274 9.466 0l1.51-.131a3.13 3.13 0 0 0 1.185-.347c.137-.071.16-.252.056-.366l-4.1-4.51a.25.25 0 0 0-.265-.07l-2.382.794a.75.75 0 0 1-.798-.213l-3.295-3.707a.25.25 0 0 0-.364-.01z"
      ></path>
    </svg>
  )
}
