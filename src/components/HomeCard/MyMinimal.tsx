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
      description: "How to design with gestures and motion that feel intuitive and natural.",
      src: "https://pbs.twimg.com/media/GgMiuRpa4AAoW2y?format=jpg&name=medium",
    },
    {
      title: "Sick title",
      description: "How to design with gestures and motion that feel intuitive and natural.",
      src: "https://pbs.twimg.com/media/GgHZJN0aoAA__92?format=jpg&name=medium",
    },
    {
      title: "Sick title",
      description: "How to design with gestures and motion that feel intuitive and natural.",
      src: "https://pbs.twimg.com/media/GgCPjsQacAAWvm3?format=jpg&name=medium",
    },
  ]

  return (
    <div className='w-full px-4 my-20'> {/* ✅ CHANGED: Full width + padding added */}
      <div className='max-w-7xl mx-auto rounded-2xl border shadow-2xl border-gray-300 p-6 bg-gray-300/10'>
      <div className='max-w-7xl mx-auto rounded-2xl border shadow-2xl border-gray-300 p-6 bg-white/80'> {/* ✅ CHANGED: container width + padding + bg */}
       {/* ✅ CHANGED: container width + padding + bg */}

        <BadgeButton>Templates</BadgeButton>

        {/* ✅ CHANGED: Replaced old flex container with a responsive grid */}
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {cards.map((card, index) => (
            <MinimalCard className="rounded-xl shadow-md" key={index}> {/* ✅ CHANGED: removed fixed width + added shadow */}
              
              {/* ✅ CHANGED: made image fill card and look good */}
              <MinimalCardImage
                className="h-[240px] object-cover w-full rounded-t-xl"
                src={card.src}
                alt={card.title}
              />
              
              {/* ✅ CHANGED: Added padding to text sections */}
              <MinimalCardTitle className='font-bold text-white px-4 pt-4'>
                {card.title}
              </MinimalCardTitle>
              <MinimalCardDescription className='text-green-50 px-4 pb-4'>
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
