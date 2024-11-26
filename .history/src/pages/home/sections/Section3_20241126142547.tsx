import React from 'react'
import mainImage from '../../../assets/pages/Homepage/3.1 Full section 3.png'
import



export default function Section3() {
  return (
    <div style={{
      backgroundImage: `url(${mainImage})`,
    }}>
      <img style={{width: "100%"}} src={mainImage} alt="image-main"/>
    </div>
  )
}