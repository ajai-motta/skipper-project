'use client'
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroPage from '@/components/langingPage/HeroPage'
import CardCarosal from '@/components/HomeCard/CardCarosal'
import MyMinimal from '@/components/HomeCard/MyMinimal'
import MySpecialCard from '@/components/HomeCard/MySpecialCard'

function page() {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
      <CardCarosal/>
     <MyMinimal/>
     <MySpecialCard/>
      

    </div>
  )
}

export default page