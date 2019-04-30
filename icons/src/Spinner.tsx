import React from 'react'
const SvgSpinner = React.forwardRef((props: React.SVGProps<SVGSVGElement>, svgRef: any) => (
  <svg width={32} height={32} viewBox="0 0 32 32" ref={svgRef} {...props}>
    <g fill="currentColor">
      <path d="M32 16.75h-6.05a9.92 9.92 0 0 1-2.38 5.75l4.28 4.28A16 16 0 0 0 32 16.75z" opacity={0.2} />
      <path d="M9.5 23.57l-4.28 4.28a16 16 0 0 0 10 4.15v-6.05a9.92 9.92 0 0 1-5.72-2.38z" opacity={0.4} />
      <path d="M23.57 9.5a9.92 9.92 0 0 1 2.38 5.75H32a16 16 0 0 0-4.15-10L23.57 9.5z" opacity={0.1} />
      <path d="M22.5 8.43l4.28-4.28A16 16 0 0 0 16.75 0v6.05a9.92 9.92 0 0 1 5.75 2.38z" />
      <path d="M8.43 22.5a9.92 9.92 0 0 1-2.38-5.75H0a16 16 0 0 0 4.15 10l4.28-4.25z" opacity={0.5} />
      <path d="M22.5 23.57a9.92 9.92 0 0 1-5.75 2.38V32a16 16 0 0 0 10-4.15l-4.25-4.28z" opacity={0.3} />
      <path d="M15.25 6.05V0a16 16 0 0 0-10 4.15L9.5 8.43a9.92 9.92 0 0 1 5.75-2.38z" opacity={0.7} />
      <path d="M6.05 15.25A9.92 9.92 0 0 1 8.43 9.5L4.15 5.22A16 16 0 0 0 0 15.25h6.05z" opacity={0.6} />
    </g>
  </svg>
))
export default SvgSpinner
