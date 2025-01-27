import React from 'react'
import AnimatedTitle from './AnimatedTitle'

const Story = () => {
  return (
    <section id="story" className="min-h-dvh w-screen bg-black">
      <div className="flex flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px] text-white">
          the Multiversal ip world
        </p>
        <div className=" relative size-full ">
          <AnimatedTitle
            title="the Story of a hidden realm"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix=blend-difference  relative z-10"
          />
          <div className="story-img-container">
            <div className="story-img-mark">
              <div className="story-img-cotent">
                <img
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
