'use client'
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroPage from '@/components/langingPage/HeroPage'
import CardCarosal from '@/components/HomeCard/CardCarosal'
import MyMinimal from '@/components/HomeCard/MyMinimal'
import MySpecialCard from '@/components/HomeCard/MySpecialCard'
import AiCard from '@/components/HomeCard/AiCard'
import Themchange from '@/components/langingPage/Themchange'

function page() {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
      <CardCarosal/>
     <MyMinimal/>
     <MySpecialCard/>
     <AiCard/>
     <Themchange/>
      

    </div>
  )
}

export default page