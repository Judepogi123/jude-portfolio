import React from 'react'
import { useMediaQuery } from 'react-responsive'

export const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
export const isMobileSize = useMediaQuery({query: "(min-width: 640px)"})
export const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
export const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
export const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

// const Responsive = () => {
//     const 
//   return (
//     <div>Responsive</div>
//   )
// }

// export default Responsive