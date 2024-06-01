import React from 'react'
import type { SVGProps } from 'react'

export default function Uil18Plus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clip-path="url(#clip0_56_732)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.0599 16.0599C12.7787 16.3408 12.3974 16.4986 11.9999 16.4986C11.6024 16.4986 11.2212 16.3408 10.9399 16.0599L5.2819 10.4039C5.00064 10.1225 4.84268 9.74089 4.84277 9.34304C4.84287 8.94518 5.00101 8.56365 5.2824 8.28239C5.56379 8.00113 5.9454 7.84317 6.34325 7.84326C6.74111 7.84336 7.12264 8.00149 7.4039 8.28289L11.9999 12.8789L16.5959 8.28289C16.8787 8.00952 17.2575 7.85814 17.6508 7.86137C18.0441 7.8646 18.4204 8.02218 18.6986 8.30016C18.9769 8.57815 19.1348 8.95429 19.1384 9.34759C19.142 9.74088 18.991 10.1199 18.7179 10.4029L13.0609 16.0609L13.0599 16.0599Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="clip0_56_732">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
