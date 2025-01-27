import React from 'react'

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className=" relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-4 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the metagame Layer
          </p>
          <p className="max-w-md font-circular-web  text-lg text-blue-50 opacity-50">
            Immerse Yourself in a rich and ever-expanding universe where a
            vibrant array of produvts coverge into an intercommencted overlay
            exprience on your world
          </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>radint</>}
            description="A cross-platform metagame app, turning your activities across web2 and web3 game into a rewarding adventure"
          />
        </div>
        <div
          className="grid h-[135vh] grid-col-2 grid-rows-3 gap-7
        "
        >
          <div className="bento-tilt_1"></div>
        </div>
      </div>
    </section>
  )
}

export default Features
