import ArrowPointDown from '@/components/ArrowPointDown'
import SvgComponentNavbarSlime from '@/components/SvgComponentNavbarSlime'
import "@/output.css"

const Home = () => {
    return (
        <div className="bg-negro h-screen flex flex-col justify-between relative">
            <div className="w-full">
                <SvgComponentNavbarSlime />
            </div>

            <div className="flex-grow flex items-center justify-center md:top-3/4 .-translate-y-50">
                <img src='/nautilus1.png' className="bg-negro w-200" />
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


    )
}

export default Home