import React from 'react'
import type { SVGProps } from 'react'

export default function CricketBall(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.fill || '#DE2E2E'}
        d="m3.67 16.26l.54.53l-.62.61a9 9 0 0 0 .84 1.11L18.51 4.42a10.93 10.93 0 0 0-1.1-.83l-.62.61l-.53-.53l.48-.48A10 10 0 0 0 3.2 16.74zM14.86 5.07l.53.53L14 7l-.53-.53zm-2.79 2.8l.52.53l-1.39 1.4l-.53-.53zm-2.8 2.8l.53.53l-1.4 1.39l-.53-.53zm-2.8 2.79L7 14l-1.4 1.4l-.53-.53zm.12 6.95l.62-.61l.53.53l-.48.48A10 10 0 0 0 20.8 7.26l-.47.48l-.54-.53l.62-.61a9 9 0 0 0-.84-1.11L5.49 19.58a10.93 10.93 0 0 0 1.1.83M18.4 8.61l.53.53l-1.4 1.4L17 10zm-2.8 2.8l.53.53l-1.4 1.39l-.53-.53zm-2.8 2.79l.53.53l-1.39 1.4l-.54-.53zM10 17l.53.53l-1.4 1.4l-.53-.53z"
      ></path>
    </svg>
  )
}
