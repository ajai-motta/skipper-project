'use client'
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroPage from '@/components/langingPage/HeroPage'
import CardCarosal from '@/components/HomeCard/CardCarosal'
import MyMinimal from '@/components/HomeCard/MyMinimal'

function page() {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
      <CardCarosal/>
     <MyMinimal/>
      

    </div>
  )
}

export default page