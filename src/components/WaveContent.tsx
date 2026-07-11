import type { ReactNode } from 'react'
import VideoFrame from './VideoFrame'
import { Diamond } from 'lucide-react'

export interface WaveContentProps {
  videoId: string
  description: ReactNode
  features: string[]
  asideTitle?: string
  asideItems?: string[]
}

const WaveContent = ({ videoId, description, features, asideTitle, asideItems }: WaveContentProps) => {
  return (
    <div className="w-full max-w-none">
      <div className="relative w-full md:w-3/4 lg:w-3/4 mx-auto aspect-[16/9]">
        <VideoFrame videoid={videoId} />
      </div>
      <p className="w-full md:w-3/4 lg:w-3/4 mx-auto text-xl pt-8">
        {description}
      </p>
      {/* List placed directly below the video container */}
      <ul className="mt-6 md:mt-8 flex flex-col gap-4 justify-center items-center text-white text-sm md:text-base w-full">
        {features.map((feature) => (
          <li key={feature} className="w-full md:w-3/4 mx-auto flex items-center gap-3 px-4 py-2 rounded-md">
            <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" aria-hidden="true"></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {(asideTitle || (asideItems && asideItems.length > 0)) && (
      <div className="relative md:w-3/4 lg:w-3/4 mx-auto mt-12 gap-3 flex flex-col gap-4 justify-end items-end">
        <img
          src="bubble.png"
          className="
      absolute -z-10
      top-0 right-0
      w-68 h-68
      translate-x-2 -translate-y-8
      sm:w-86 sm:h-86
      sm:translate-x-10 sm:-translate-y-18

      md:translate-x-10 md:-translate-y-22
      md:w-92 md:h-92
      xl:w-112 xl:h-112
      xl:translate-x-12 xl:-translate-y-32
    "
          alt="image bubble"
        />
        <h3
          className="absolute -z-10
      top-0 right-0
      text-xl
      -translate-x-18 translate-y-8
      sm:-translate-x-18 sm:translate-y-2
      sm:text-3xl
      md:-translate-x-18 md:translate-y-2
      md:text-4xl
      xl:-translate-x-18 xl:translate-y-2
      xl:text-4xl
            ">{asideTitle}</h3>
        <ul className="relative text-white sm:text-lg text-lg md:text-xl  xl:text-3xl flex flex-col gap-2
            p-16
             xl:p-16  sm:p-16 ">
          {asideItems?.map((item) => (
            <li key={item} className="flex items-center rounded-md z-10
              md:pr-12
              xl:pr-18">
              <Diamond className="w-4 h-4" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  )
}

export default WaveContent
