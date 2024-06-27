import React from 'react'

export const USFlag: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <path fill="#bd3d44" d="M0 0h640v480H0" />
    <path stroke="#fff" strokeWidth="37" d="M0 55.3h640m0 64H0m0 64h640m0 64H0m0 64h640m0 64H0" />
    <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
    <marker id="a" markerHeight="30" markerWidth="30">
      <path fill="#fff" d="M14 0l9 27L0 10h28L5 27z" />
    </marker>
    <path fill="none" markerMid="url(#a)" d="M0 0l16 11h61 61 61 61 60L320 0v31l-43 32h57 57l43-32v64l-43-32h-57-57l43 32v64l-43-32h-57-57l43 32v64l-43-32h-57-57l43 32v64l-43-32h-57-57L320 288v31l-60-43h-61-61-61-61L0 319v-31l16-11v-64l-16 11v-64l16-11v-64l-16 11V31" />
  </svg>
)

export const ESFlag: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <path fill="#c60b1e" d="M0 0h640v480H0z" />
    <path fill="#ffc400" d="M0 120h640v240H0z" />
  </svg>
)
