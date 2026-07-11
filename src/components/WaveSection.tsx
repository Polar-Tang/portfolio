import { useId, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TurbulenceTitle from './TurbulenceTitle'
import WaveContent, { type WaveContentProps } from './WaveContent'

gsap.registerPlugin(ScrollTrigger)

interface WaveSectionProps extends WaveContentProps {
  title: string
  /** Background revealed *behind* the wave — the previous section's color, e.g. "bg-oscazul" */
  fromBg: string
  /** Background of this wave and its content section, e.g. "bg-masoscuro" */
  toBg: string
}

const WaveSection = ({ title, fromBg, toBg, ...content }: WaveSectionProps) => {
  const waveRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  // Unique clip-path id per instance so multiple WaveSections can coexist
  const clipId = `wave-clip-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`

  useGSAP(() => {
    const wave = waveRef.current
    const path = pathRef.current
    if (!wave || !path) return

    const numPoints = 8
    const delayPointsMax = 0.9
    // clipPathUnits="objectBoundingBox" -> coordinates go from 0 to 1
    const points: number[] = new Array(numPoints).fill(0.5)

    const tl = gsap.timeline({
      onUpdate: render,
      defaults: {
        ease: 'power2.inOut',
        duration: 0.9,
      },
    })

    ScrollTrigger.create({
      trigger: wave,
      start: 'top bottom',
      end: 'center top',
      scrub: true,
      // markers: true,
      animation: tl,
    })

    for (let j = 0; j < numPoints; j++) {
      tl.to(points, {
        [j]: 0,
      }, Math.random() * delayPointsMax)
    }

    // Reads the current state of points[] and rewrites the clip path's d attribute
    function render() {
      let d = `M 0 0 V ${points[0]} C`
      for (let j = 0; j < numPoints - 1; j++) {
        const p = (j + 1) / (numPoints - 1)
        const cp = p - (1 / (numPoints - 1)) / 2

        d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`
      }
      d += ` V 100 H 0`
      path!.setAttribute('d', d)
    }
    render()
  }, [])

  return (
    <>
      <div
        className={`z-1 relative h-[200dvh] w-full ${fromBg} text-white overflow-x-hidden`}
      >
        <svg viewBox="0 0 100 100" className="h-0 w-0">
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path ref={pathRef} d="" />
          </clipPath>
        </svg>
        <div
          ref={waveRef}
          className={`${toBg} z-5 h-full relative`}
          style={{
            clipPath: `url(#${clipId})`,
          }}
        >
          <TurbulenceTitle
            className="about-item text-6xl absolute left-1/2 w-full  -translate-x-1/2 bottom-[10%] text-center"
            title={title}
          />
        </div>
      </div>
      {/* In-flow with natural height, so content can never be covered by the next section */}
      <div className={`${toBg} z-1 relative w-full -mt-[150px] py-32 text-white`}>
        <WaveContent {...content} />
      </div>
    </>
  )
}

export default WaveSection
