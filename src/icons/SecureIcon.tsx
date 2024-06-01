import React from 'react'
import type { SVGProps } from 'react'

export default function GalaSecure(props: SVGProps<SVGSVGElement>) {
  return (
    <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 256 256"
      {...props}
    >
      <g
        fill="none"
        stroke="#34C51D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={20}
      >
        <path d="m 127.99999,239.96468 c 0,0 95.98506,-31.99503 95.98506,-111.98257"></path>
        <path d="M 223.98505,127.98211 V 31.997059 c 0,0 -31.99502,-15.997511 -95.98506,-15.997511"></path>
        <path d="m 128,239.96468 c 0,0 -95.985056,-31.99503 -95.985056,-111.98257"></path>
        <path d="M 32.014944,127.98211 V 31.997059 c 0,0 31.995019,-15.997509 95.985056,-15.997509"></path>
        <path d="M 191.99003,63.99208 C 128,111.9846 112.00249,175.97464 112.00249,175.97464 c 0,0 -15.997511,-19.0946 -31.995019,-31.99502"></path>
      </g>
    </svg>
    </>
  )
}
