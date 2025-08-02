import React from 'react'
import { CardCarousel } from "@/components/ui/card-carousel"
const images=[
  {
    src: '/images/card1.webp',
    alt: 'Sunset over a mountain range',
  },
  {
    src: '/images/card2.webp',
    alt: 'Serene lake view with forest background',
  },
  {
    src: '/images/card3.webp',
    alt: 'City skyline during golden hour',
  },]
function CardCarosal() {
  return (
    <div><CardCarousel images={images} showPagination={false}/></div>
  )
}

export default CardCarosal