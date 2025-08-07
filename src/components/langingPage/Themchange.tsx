import React from 'react'
import ThemeToggleButton from '../ui/theme-toggle-button'

const Themchange = () => {
  return (
    <div className='w-full px-4 my-20'> {/* ✅ CHANGED: Full width + padding added */}
      <div className='max-w-7xl mx-auto rounded-2xl border shadow-2xl border-gray-300 p-6 bg-gray-300/10'>
      <div className='mx-auto text-center'>
    Theme
      </div>
      
       <ThemeToggleButton variant="gif" url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWI1ZmNvMGZyemhpN3VsdWp4azYzcWUxcXIzNGF0enp0eW1ybjF0ZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Fa6uUw8jgJHFVS6x1t/giphy.gif" />
<ThemeToggleButton variant="gif" url="https://media.giphy.com/media/ArfrRmFCzYXsC6etQX/giphy.gif?cid=ecf05e47kn81xmnuc9vd5g6p5xyjt14zzd3dzwso6iwgpvy3&ep=v1_stickers_search&rid=giphy.gif&ct=s"/>

        </div>
    </div>
  )
}

export default Themchange