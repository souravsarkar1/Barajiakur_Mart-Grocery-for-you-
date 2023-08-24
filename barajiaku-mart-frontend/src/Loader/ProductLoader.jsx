import React from 'react'
import { ThreeCircles } from  'react-loader-spinner'
const ProductLoader = () => {
  return (
    <div>
    <ThreeCircles
    height="100"
    width="100"
    color="#4fa94d"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor="#ba0d9d"
    innerCircleColor="#03adfc"
    middleCircleColor="#bafc03"
  />
    </div>
  )
}

export default ProductLoader
