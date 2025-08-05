import React from 'react'

import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card"
import BadgeButton from '../ui/badge-button'
const MyMinimal = () => {
   const cards = [
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
      src: "https://pbs.twimg.com/media/GgMiuRpa4AAoW2y?format=jpg&name=medium",
    },
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
      src: "https://pbs.twimg.com/media/GgHZJN0aoAA__92?format=jpg&name=medium",
    },
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
      src: "https://pbs.twimg.com/media/GgCPjsQacAAWvm3?format=jpg&name=medium",
    },
  ]


  return (
    <div>

    <div className='w-[35%] mx-auto my-20 rounded-2xl border shadow-2xl border-gray-300 p-4'>

    <div className="w-full  px-4 bg-[#f4f4f4] shadow-2xl rounded-2xl">
      <div>
        <BadgeButton >Templates</BadgeButton>
      </div>
        
      <div className='flex flex-wrap justify-between items-center '>


          {cards.map((card, index) => (
            <MinimalCard className="m-2 w-[460px] mx-auto" key={index}>
              <MinimalCardImage
                className="h-[320px]"
                src={card.src}
                alt={card.title}
              />
              <MinimalCardTitle className='font-bold text-white'>{card.title}</MinimalCardTitle>
              <MinimalCardDescription className='text-green-50'>
                {card.description}
              </MinimalCardDescription>
            </MinimalCard>
          ))}
      </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default MyMinimal