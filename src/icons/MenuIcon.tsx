import React from 'react'
import type { SVGProps } from 'react'

export default function MaterialSymbolsMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill={props.fill} d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"></path>
    </svg>
  )
}
