import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import TurbulenceTitle from "./TurbulenceTitle"
import WaveContent from "./WaveContent"
import WaveSection from "./WaveSection"
import '@/App.css'


const About = () => {

  useGSAP(() => {
    const rotatingElements = document.querySelectorAll('[data-rotate]');

    rotatingElements.forEach((element) => {
      // Get custom rotation values from data attributes (or use defaults)
      const startRotation = element instanceof HTMLElement && element.dataset.rotateStart || 0;
      const endRotation = element instanceof HTMLElement && element.dataset.rotateEnd || 360;
      const scrubValue = element instanceof HTMLElement && element.dataset.rotateScrub === 'false' ? false : 1;

      // Create the animation
      gsap.fromTo(element,
        { rotation: startRotation },
        {
          rotation: endRotation,
          ease: "none",
          scrollTrigger: {
            trigger: element, // Use your container as trigger
            start: "top 50%",
            end: "bottom top",
            scrub: scrubValue, // Smooth scrubbing effect
            // markers: true, // Helpful during development, remove in production
          }
        }
      );
    });

  })

  return (
    <>
      <div
        id="first-wade"
        // style={{ backgroundImage: 'url(/surf.png)' }}
        className="shape-overlays z-2 relative w-full h-auto
      mx-auto -mt-60 py-32 pb-64
      bg-oscazul
      text-white
      overflow-x-hidden
      bg-no-repeat
      bg-center
      bg-fit
      no-bg-md
      "
      >

        <TurbulenceTitle
          className="about-item text-6xl absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-2 z-50 text-white text-3xl md:text-5xl w-full text-center mb-20 font-bold pointer-events-none drop-shadow-lg"
          title={"Your simulator"}
        />
        {/* Full-width responsive YouTube iframe with white overlay title */}
        <WaveContent
        
          videoId="ek8YlkkR3TA"
          description={<>
            I leverage my web development background and full-stack programming experience to build entire Roblox games solo. On the backend, I architect multiplayer systems with a zero-trust <strong>anti-exploit</strong> approach to the client, using clean and scalable code. On the frontend, I build optimized UIs in <strong>Roact/Fusion</strong>, focusing on practical designs that run smoothly on the client.
          </>}
          features={["Dynamic UIs (Roact)", "Progressive", "Quest & Leveling"]}
          asideTitle="UI Anims?"
          asideItems={["Tweens", "After Effect", "PSHP even"]}
        />

      </div>
      <WaveSection
        title="Your m1 combat"
        fromBg="bg-oscazul"
        toBg="bg-masoscuro"
        videoId="AXsCUxebbH8"
        description={<>
          A <strong>M1 combat framework </strong> developed using the <strong>Nevermore Engine. </strong> It features smooth <strong>client-side hit detection</strong> and smart optimization techniques. The system is fully <strong>data-driven </strong>, allowing new M1 combat variations to be built in just a few days.
        </>}
        features={["m1 Combat", "PVP & PVE", "Attacks", "Optimized npcs"]}
        asideTitle="Animations?"
        asideItems={["r-15", "r-6", "any"]}
      />      

      <WaveSection
        title="Your shooter"
        
        fromBg="bg-masoscuro"
        toBg="bg-oscazul"
        videoId="wQG0NATIa4k"
        description={<>
          Optimized <strong>hitscan shooter framework</strong> with a service-oriented architecture (Nevermore DI, binder-driven lifecycles). A custom <strong>camera stack</strong> composes recoil and mode effects, allowing seamless <strong>first-person/third-person</strong> switching without losing in-flight camera state. Weapons and abilities (melee, AOE, projectile, movement) are fully <strong>data-driven</strong> with Motor6D grip corrections aligning weapon aim to the camera center. 

        </>}
        features={["Weapons", "Hit Scan", "Mobile support & auto aim", "Optimized bots"]}
        
      />

      <WaveSection
        title="Your race framework"
        fromBg="bg-oscazul"
        toBg="bg-masoscuro"
        videoId="PXXqxkE9sUE"
        description={<>
          <strong>Racing framework</strong> constraint-based vehicle physics with modular camera modes, haptics, VFX and engine audio. Client-authoritative controls with physics replicated via network ownership and zero per-frame remote traffic. <strong>Procedural car initialization</strong> allows me to built new vehicles skeleton from the model's actual geometry, set up the physics constraints and default stats.
        </>}
        features={["Configurable", "tunable", "Optimized"]}
        asideTitle="Support?"
        asideItems={["PC", "Mobile", "Gamepad"]}
      />
    </>
  )
}

export default About
