import { motion } from "motion/react"
// import { useEffect, useState } from "react"


const ArrowPointDown = () => {


  return (
    <motion.svg
      initial={{ y: 0 }}
      animate={{
        y: [0, 10, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }
      }}
      width={"24"}
      height={"24"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <g stroke="#1E3E62" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" className="w-5">
        <line x1="12" y1="4" x2="12" y2="16" className="w-5" />
        <polyline points="7 12 12 20 17 12" />
      </g>
    </motion.svg>
  )
}

export default ArrowPointDown