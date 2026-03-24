import Panel from "./components/panel"
import ArrowR from "./assets/ArrowR.svg"
import ArrowL from "./assets/ArrowL.svg"
import RJ45 from "./assets/RJ45.svg"
import HCFlag from "./assets/HCFlag.svg"
import Screw from "./assets/Screw.svg"
import MiniRack001 from "./assets/mini-rack-001.jpeg"
import useEmblaCarousel from "embla-carousel-react"


function App() {
  const [emblaRef] = useEmblaCarousel()

  const slides = [
  { src: MiniRack001, credit: "Jeff Geerling", href: "https://www.jeffgeerling.com/blog/2025/project-mini-rack-compact-and-portable-homelabs/", caption: "Jeff's mini rack" },
  {src: "https://cdn.hackclub.com/019d1ce7-b386-7d30-a433-d11af18fa3c2/image.png", credit: "Jan Koch", href: "https://hackclub.enterprise.slack.com/team/U087PR1B2HX", caption: "Example of a simple cover plate!" },
  
  { src: "https://preview.redd.it/mini-unifi-lab-i-built-for-my-parents-with-ha-and-plex-v0-3qq19ouj2eqg1.jpg?width=1080&crop=smart&auto=webp&s=170c3a654ca422dc7d2b439061b3d60b2f2c8c30", credit: "u/gargravarr2112", href: "https://www.reddit.com/r/minilab/comments/1rzqhra/mini_unifi_lab_i_built_for_my_parents_with_ha_and/", caption: "A mini rack for home automation and media" },
  { src: "https://preview.redd.it/i-made-a-120mm-fan-1u-plate-v0-7qbz3e2lhyng1.jpg?width=1080&crop=smart&auto=webp&s=73a70e3c9e9a3b938b58b6caa048568ec5c3afc9", credit: "u/PitBossKitchen", href: "https://www.reddit.com/r/minilab/comments/1rorrdn/i_made_a_120mm_fan_1u_plate/", caption: "A 1U fan plate" },
  
]

  
  function sizeBigBoxBecauseMobileIsAss() {
    if (window.innerWidth < 768) {
      return 3
    } else {
      return 2
    }
  }

  return (
    <div className="bg-[#1B1B1B] flex justify-center">
      <img src={HCFlag} alt="" width={128} className="fixed top-0 left-4 z-50 md:invert"/>
      <div className=" min-h-screen w-screen relative max-w-[1080px]">

        <div className="absolute inset-0 flex flex-row justify-between pointer-events-none">
          <div className="bg-[#d9d9d9] w-28 h-full flex justify-center">
            <div className="w-14 h-full bg-[#BABABA] shadow-inner"></div>
          </div>

          <div className="bg-[#d9d9d9] w-28 h-full flex justify-center">
            <div className="w-14 h-full bg-[#BABABA] shadow-inner"></div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col h-full w-full gap-2.5">
          <Panel units={2}>
            <div className="h-full w-full flex items-center justify-center">
            <div className="flex flex-row gap-6">
              <img className="hidden md:block" src={ArrowR} />
              <h1 className="font-black text-6xl md:text-8xl title">Rack'ed</h1>
              <img className="hidden md:block" src={ArrowL} />
            </div>
            </div>
          </Panel>
          <Panel units={1} filler className="hidden md:block"></Panel>
          <Panel units={2}><div className="p-4 md:text-2xl  sm:text-lg content">
            Not everyone can afford to have a full server rack... <br/> So build a mini one! Design a module for a standardized 10" rack, and we'll ship you the rack + a grant to make it. Infinitely customizable, desk-sized, and lowkey a fashion statement.
            </div></Panel>
          <Panel units={1} ><div className="flex flex-row justify-center items-center gap-4 content h-full"><a href="https://forms.fillout.com/t/ixoUHB5zNFus"><button className="h-12 w-56 bg-green-500 rounded-md cursor-pointer">
            <div className="h-full p-1 flex flex-row items-center">
              <div className="flex flex-col justify-between h-full">
                <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
              </div>

              <span className="flex-1 text-center text-white content">RSVP</span>

              <div className="flex flex-col justify-between h-full">
                <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
              </div>
            </div>
          </button></a>
          <a href="/docs"><button className="h-12 w-56 bg-blue-500 rounded-md cursor-pointer">
            <div className="h-full p-1 flex flex-row items-center">
              <div className="flex flex-col justify-between h-full">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              </div>

              <span className="flex-1 text-center text-white content">Docs</span>

              <div className="flex flex-col justify-between h-full">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              </div>
            </div>
          </button></a>
          
          
          </div></Panel>
          <Panel units={1} className=" overflow-hidden"><div className="h-full w-full flex flex-row p-4 justify-between items-center"><img className="h-10 md:h-full" src={RJ45} /><img className="h-10 md:h-full" src={RJ45} /><img className="h-10 md:h-full" src={RJ45} /><img className="h-10 md:h-full" src={RJ45} /><img className="hidden md:block" src={RJ45} /><img className="hidden md:block" src={RJ45} /></div></Panel>
          
          {/* Carousel/galery of images */}
          <Panel units={3}>
            <div className="pt-4">
              <span className="pl-2 text-xl content">Here are some examples:</span>
              <div className="overflow-hidden rounded-lg mt-2 mx-2 bg-[#1B1B1B]" ref={emblaRef}>
                <div className="flex">
                  {slides.map(({ src, credit, href, caption }) => (
                    <div className="flex-none w-full h-80 relative">
                      <img src={src} className="w-full h-full object-contain" />
                      <span className="absolute top-2 left-2 text-xs bg-black/50 text-white/80 px-2 py-0.5 rounded-full">
                        {caption}
                      </span>
                      <a href={href}><span className="absolute bottom-2 right-2 text-xs bg-black/50 text-white/80 px-2 py-0.5 rounded-full">
                        {credit} ↗
                      </span></a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Panel>
          
          
          <Panel units={1}><div className="flex flex-row items-center h-full pl-4"><h2 className="text-2xl md:text-4xl content">Questions You <span className="italic">might ask?</span></h2></div></Panel>
          <Panel units={sizeBigBoxBecauseMobileIsAss()}>
            <div className="pl-4 pt-4">  
              <h3 className="text-2xl md:text-3xl content italic">How does the grant work?</h3>
              <p className="text-sm md:text-2xl content pl-4">For every hour logged with Hackatime/Lapse you get 4 Screws 
                <span className="whitespace-nowrap mr-1 ml-0.5">
                  <img src={Screw} width={24} className="inline-block align-middle" />
                </span>
                depending on the complexity of your module you may get up to 4x the Screws (so 16, thats four times the racky’ness!!111!) you can choose between getting a grant to make your module or getting a rack.</p>
            </div>
          </Panel>
          <Panel units={1} className="hidden md:block"></Panel>
          <Panel units={sizeBigBoxBecauseMobileIsAss()} >
            <div className="pl-4 pt-4">  
              <h3 className="text-2xl md:text-3xl content italic">But racks are just for servers?</h3>
              <p className="text-sm md:text-2xl content pl-4">Nope, not at all! A rack is just a way of organizing things, if you are more interested in audio you could make a audio rack, if you are more of a desk guy you could make something blinky that just looks cool! Or something to organize your growing collection of hackclub stickers? </p>
            </div>
          </Panel>
          <Panel units={sizeBigBoxBecauseMobileIsAss()} >
            <div className="pl-4 pt-4">  
              <h3 className="text-2xl md:text-3xl content italic">But i dont know hardware? :(</h3>
              <p className="text-sm md:text-2xl content pl-4">No worries, we have guides (TBD) and you can always ask in the channel!</p>
            </div>
          </Panel>
          <Panel units={1}><div className="flex justify-center items-center h-full flex-col"><p className="pl-4 pt-4 text-1xl md:text-2xl content text-center">Check out the FaQ on the Slack for more!</p><p><a href="https://hackclub.enterprise.slack.com/docs/T0266FRGM/F0AMHLB80E4" className="text-blue-500 underline">Slack Canvas↗</a></p></div></Panel>
          <Panel units={1} filler className="hidden md:block"></Panel>
          <Panel units={2} ><div className="flex flex-col justify-center items-center gap-4 content h-full"><p>What are you waiting for? Get Rack'ing NOW!</p> <a href="https://forms.fillout.com/t/ixoUHB5zNFus"><button className="h-12 w-28 bg-green-500 rounded-md cursor-pointer">
            <div className="h-full p-1 flex flex-row items-center">
              <div className="flex flex-col justify-between h-full">
                <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
              </div>

              <span className="flex-1 text-center text-white content">RSVP</span>

              <div className="flex flex-col justify-between h-full">
                <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
              </div>
            </div>
          </button></a>
          
          
          
          </div></Panel>
        </div>
        {/* <span className="absolute bottom-0 left-0 p-4 text-white">Opensourc'ed @ <a href="https://github.com/meepstertron/racked">https://github.com/meepstertron/racked</a></span> */}
      </div>
    </div>
  )
}

export default App