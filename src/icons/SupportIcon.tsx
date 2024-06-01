import React from 'react'
import type { SVGProps } from 'react'

export default function SupportIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 28 28"
      {...props}
    >
      <path
        fill={props.fill}
        d="m12.167 17.802l-.006-.014a8 8 0 0 1-.36-.094l-.009-.003A8 8 0 0 1 8.708 16a8 8 0 1 1 13.257-6.75c.039.413-.3.75-.715.75c-.414 0-.745-.337-.793-.749A6.5 6.5 0 1 0 11.496 16l.04.017q.3.123.616.217A2 2 0 0 1 16 17a2 2 0 0 1-3.833.802m-.986 1.272a9.5 9.5 0 0 1-4.53-3.054A3 3 0 0 0 4 19v.715C4 23.433 8.21 26 14 26s10-2.708 10-6.285V19a3 3 0 0 0-3-3h-3.645a3.5 3.5 0 0 1-6.174 3.074M19 10c0-1.512-.67-2.867-1.731-3.784a5 5 0 1 0-5.624 8.195A3.5 3.5 0 0 1 14 13.5a3.5 3.5 0 0 1 2.356.911A5 5 0 0 0 19 10"
      ></path>
    </svg>
  )
}
