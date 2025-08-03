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
      src: "/_next/image?url=https%3A%2F%2Fi.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExYTFjaG1wM3o0ZzBlbXA2Z2Ywc243d2ttdGZpZXVpbXdmYjJreHp5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw%2FsZ7wUinnbIQYlucMXv%2Fgiphy.gif&w=640&q=75",
    },
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
      src: "/_next/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExaWVwNXVkdXM3aWM4NXM2a2s2czFhd283NHdrbWFsdm43bGdsMXp4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw%2FSM08k77xWhQtQDDluI%2Fgiphy.gif&w=640&q=75",
    },
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
      src: "/_next/image?url=https%3A%2F%2Fmedia4.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExanI3bjNzdTliOTF0aW9xMzY3Y21sdnE3Nnowb3l6YW4xeXZtdTE0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw%2FL9F8Kt6IYdRvHbcHvl%2Fgiphy.gif&w=640&q=75",
    },
  ]
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
        <BadgeButton />
      <div className="flex flex-col justify-center rounded-lg p-4">
        <div className="flex flex-wrap items-center justify-center ">
          {cards.map((card, index) => (
            <MinimalCard className="m-2 w-[460px] " key={index}>
              <MinimalCardImage
                className="h-[320px]"
                src={card.src}
                alt={card.title}
              />
              <MinimalCardTitle>{card.title}</MinimalCardTitle>
              <MinimalCardDescription>
                {card.description}
              </MinimalCardDescription>
            </MinimalCard>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyMinimal