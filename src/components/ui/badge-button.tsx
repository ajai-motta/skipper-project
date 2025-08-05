import React, { Children } from "react"
import { IceCreamCone } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const BadgeButton = ({children}) => {
  return (
    <Badge
      variant="outline"
      className="mb-3 mt-4 cursor-pointer rounded-[14px] border border-black/10 bg-white text-base md:left-6"
    >
      
      <IceCreamCone className=" mr-2  fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
      {children}
    </Badge>
  )
}

export default BadgeButton
