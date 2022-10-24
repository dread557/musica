import React, { useContext, useState, useEffect, useRef } from 'react'
import { ScreenContext } from '../contexts/Screensize'
import { SongContext } from '../contexts/SongContext'
import { ColorRing } from 'react-loader-spinner'

const Player = () => {
  const { screenSize } = useContext(ScreenContext)
  const { src, audioImg, artist, title } = useContext(SongContext)
  const [percentage, setPercentage] = useState(0)
  const [position, setPosition] = useState(0)
  const [marginLeft, setMarginLeft] = useState(0)
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  const [isPlaying, setIsplaying] = useState(false)
  // const [duration, setDuration] = useState(0)
  // const [currentTime, setCurrentTime] = useState(0)
  const [volumeBar, setVolumeBar] = useState(0)
  const [mute, setMute] = useState(false)


  const onChangeTime = (e) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const onChangeVol = (e) => {
    const audio = audioRef.current
    audio.volume = e.target.value / 100
    setVolumeBar(e.target.value)
  }

  const muteClick = () => {
    const audio = audioRef.current
    if (!mute) {
      setMute(true)
      audio.volume = 0
    } else {
      setMute(false)
      audio.volume = 1
    }
  }

  const play = () => {
    const audio = audioRef?.current
    audio.volume = 1

    if (!isPlaying) {
      setIsplaying(true)
      audio.play()
    } else {
      setIsplaying(false)
      audio.pause()
    }
  }

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    // const time = e.currentTarget.currentTime

    setPercentage(+percent)
    // setCurrentTime(time.toFixed(2))
  }

  const rangeRef = useRef()
  const thumbRef = useRef()
  const rangeRef2 = useRef()
  const thumbRef2 = useRef()
  const audioRef = useRef()

  useEffect(() => {
    const rangeWidth = rangeRef?.current?.getBoundingClientRect().width
    const thumbWidth = thumbRef?.current?.getBoundingClientRect().width
    const centerThumb = (thumbWidth / 100) * percentage * -1
    const centerProgressBar = 12 + rangeWidth / 100 * percentage - (thumbWidth / 100 * percentage)

    setProgressBarWidth(centerProgressBar)
    setMarginLeft(centerThumb)
    setPosition(percentage)
  }, [percentage])

  useEffect(() => {
    // const rangeWidth = rangeRef2?.current?.getBoundingClientRect().width
    const thumbWidth = thumbRef2?.current?.getBoundingClientRect().width
    const centerThumb = (thumbWidth / 100) * percentage * -1
    // const centerProgressBar = 12 + rangeWidth / 100 * percentage - (thumbWidth / 100 * percentage)

    // setVolumeBar(centerProgressBar)
    setMarginLeft(centerThumb)
    setPosition(percentage)
  }, [percentage])

  useEffect(() => {
    const audio = audioRef?.current
    audio.play()
  }, [src])
  return (
    <div className='mt-[100px]'>
      {screenSize < 768 ? (
        <div className='flex justify-between bg-[#fff0] backdrop-blur-[15px] pt-2 pb-2 p-10 items-center border-[#ffffff1a] fixed bottom-0 w-full z-50 h-[120px]'>
          <div className='flex'>
            <img className='w-[57px] h-[57px]' src={audioImg || '../assets/music-1.png'} alt='music' />
            <span className='flex flex-col ml-2'>
              <h5 className='text-white font-bold'>{title}</h5>
              <p>{artist}</p>
            </span>
          </div>
          <div className='flex gap-5'>
            <button className='text-[30px] text-[#FACD66]'>
              {audioRef?.current?.readyState <= 2 ? (
                <ColorRing
                  visible={true}
                  height="24"
                  width="24"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
              ) : (
                <ion-icon onClick={play} name={isPlaying ? "pause-circle-sharp" : "play-circle"}></ion-icon>
              )}
            </button>
            <button className='text-[22px] text-white'>
              <ion-icon name="play-skip-forward-sharp"></ion-icon>
            </button>
            <audio
              src={src}
              ref={audioRef}
              onTimeUpdate={getCurrDuration}>
            </audio>
          </div>
        </div>) :
        (
          <div className='flex justify-between bg-[#fff0] backdrop-blur-[15px] pt-2 pb-2 p-10 items-center border-[#ffffff1a] fixed bottom-0 w-full z-50'>
            <div className='flex'>
              <img className='w-[57px] h-[57px]' src={audioImg || '../assets/music-1.png'} alt='music' />
              <span className='flex flex-col ml-2'>
                <h5 className='text-white font-bold'>{title}</h5>
                <p>{artist}</p>
              </span>
            </div>
            <div className=''>
              <div className='flex gap-10 items-center justify-center'>
                <button className='text-[22px] text-white'>
                  <ion-icon name="shuffle"></ion-icon>
                </button>
                <button className='text-[22px] text-white'>
                  <ion-icon name="play-skip-back"></ion-icon>
                </button>
                <button className='text-[30px] text-[#FACD66]'>
                  {audioRef?.current?.readyState <= 2 ? (
                    <ColorRing
                      visible={true}
                      height="24"
                      width="24"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
                  ) : (
                    <ion-icon onClick={play} name={isPlaying ? "pause-circle-sharp" : "play-circle"}></ion-icon>
                  )}
                </button>
                <button className='text-[22px] text-white'>
                  <ion-icon name="play-skip-forward-sharp"></ion-icon>
                </button>
                <button className='text-[22px] text-white'>
                  <ion-icon name="repeat"></ion-icon>
                </button>
              </div>
              <div className='slider-container w-[600px]' >
                <div className='progress-bar-cover' style={{ width: `${progressBarWidth}px` }}></div>
                <div className='thumb' ref={thumbRef} style={{ left: `${position}%`, marginLeft: `${marginLeft}px` }}></div>
                <input type='range' ref={rangeRef} step='0.01' value={position} className='range' onChange={onChangeTime} />
                <audio
                  src={src}
                  ref={audioRef}
                  onTimeUpdate={getCurrDuration}>
                </audio>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <button className='text-[22px] text-white' onClick={muteClick}>
                <ion-icon name={mute ? "volume-mute-outline" : "volume-medium"}></ion-icon>
              </button>
              <div className='slider-container' >
                <div className='progress-bar-cover' style={{ width: `${volumeBar}px` }}></div>
                <input type="range" ref={rangeRef2} value={position} className="volume" onChange={onChangeVol} />
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Player