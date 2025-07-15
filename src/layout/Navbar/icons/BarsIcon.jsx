import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={16}
    fill="none"
    {...props}
  >
    <path stroke="#454545" strokeWidth={2} d="M0 1h30M4.5 8H30m-20 7h20" />
  </svg>
)
export default SvgComponent;
