import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { FaS } from 'react-icons/fa6'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'

const navItem = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact']

const Navbar = () => {
  const [isAudioPlauing, setisAudioPlauing] = useState(false)
  const [isIndicatorActive, setisIndicatorActive] = useState(false)

  const [lastScrollY, setlastScrollY] = useState(0)
  const [isNavVisible, setisNavVisible] = useState(true)
  const navConatinerRef = useRef(null)
  const audioElementRef = useRef(null)

  const { y: CurrentScrollY } = useWindowScroll()

  useEffect(() => {
    if (CurrentScrollY === 0) {
      setisNavVisible(true)
      navConatinerRef.current.classList.remove('floating-nav')
    } else if (CurrentScrollY > lastScrollY) {
      setisNavVisible(false)
      navConatinerRef.current.classList.add('floating-nav')
    } else if (CurrentScrollY < lastScrollY) {
      setisNavVisible(true)
      navConatinerRef.current.classList.add('floating-nav')
    }
    setlastScrollY(CurrentScrollY)
  }, [CurrentScrollY, lastScrollY])

  useEffect(() => {
    gsap.to(navConatinerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    })
  }, [isNavVisible])
  const toggleAudioIndicator = () => {
    setisAudioPlauing((prev) => !prev)

    setisIndicatorActive((prev) => !prev)
  }

  useEffect(() => {
    if (isAudioPlauing) {
      audioElementRef.current.play()
    } else {
      audioElementRef.current.pause()
    }
  }, [isAudioPlauing])
  return (
    <div
      ref={navConatinerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className=" absolute top-1/2 w-full -translate-y-1/2">
        <nav className=" flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden item-center justify-center gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItem.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioElementRef}
                className="hiddin"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorActive ? 'active' : ''
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
