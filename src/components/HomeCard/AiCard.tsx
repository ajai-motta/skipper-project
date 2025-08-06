import React from 'react'
import BadgeButton from '../ui/badge-button'
import AiInput from '../ui/ai-input'

const AiCard = () => {
  return (
    <div className='my-20'>
        <div className='w-[50%] mx-auto my-20 rounded-4xl border shadow-2xl border-gray-300 p-4'>
            <div className='max-w-7xl mx-auto rounded-4xl border shadow-2xl border-gray-300 p-6 bg-gray-300/40'>
            
            <BadgeButton>Latest Component</BadgeButton>
            <AiInput />
            </div>
        </div>
        </div>
  )
}

export default AiCard