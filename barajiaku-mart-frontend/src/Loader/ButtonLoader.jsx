import React from 'react'
import { ColorRing } from  'react-loader-spinner'
const ButtonLoader = ({height,width}) => {
  return (
    <div>
    <ColorRing
    visible={true}
    height= {height}
    width={width}
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
    </div>
  )
}

export default ButtonLoader
