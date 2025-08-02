'use client'
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroPage from '@/components/langingPage/HeroPage'
import CardCarosal from '@/components/HomeCard/CardCarosal'
function page() {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
      <CardCarosal/>
    </div>
  )
}

export default page