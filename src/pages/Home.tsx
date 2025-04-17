import ArrowPointDown from '@/components/ArrowPointDown'
import SvgComponentNavbarSlime from '@/components/SvgComponentNavbarSlime'
import "@/output.css"
import gsap from 'gsap'
import { motion } from 'framer-motion'

const Home = () => {
    gsap.to("#wave-path", {
        duration: 3,
        morphSVG: "M0,50 C100,20 200,80 300,50 L300,100 L0,100 Z",
        repeat: -1,
        yoyo: true
    });
    return (
        <>
            <div className="bg-negro h-dvh flex flex-col justify-between relative">
                <div className="w-full">
                    <SvgComponentNavbarSlime />
                </div>

                <div className="flex-grow flex items-center justify-center md:top-3/4 .-translate-y-50">
                    <img src='/nautilus1.png' className="bg-negro w-200 md:w-300  -translate-y-20 md:-translate-y-30" />
                </div>

                <div className="w-full flex items-end justify-between pb-8 px-6">
                    {/* Left SVG */}
                    <div className="flex-shrink-0">
                        <svg className="w-16 h-16" viewBox="0 0 24 24">
                            {/* Your SVG content here */}
                        </svg>
                    </div>

                    {/* Center content */}
                    <div className="flex flex-col items-center">
                        <h5 className="text-azul text-lg mb-2">Dig deep into the ocean</h5>
                        <ArrowPointDown />
                    </div>

                    {/* Empty div to balance layout */}
                    <div className="flex-shrink-0 w-16"></div>
                </div>
            </div>
            <div className="bg-negro h-dvh flex flex-col justify-between relative">
                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="wave"><defs></defs><path id="wave-path" d="M0,50 C100,20 200,80 300,50 L300,100 L0,100 Z" /></svg>

                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="wave"><defs></defs><path id="wave-path-two" d="M0,50 C100,20 200,80 300,50 L300,100 L0,100 Z" /></svg>
            </div>
        </>


    )
}

export default Home