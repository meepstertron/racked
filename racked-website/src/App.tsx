import Panel from "./components/panel"
import ArrowR from "./assets/ArrowR.svg"
import ArrowL from "./assets/ArrowL.svg"
import RJ45 from "./assets/RJ45.svg"
import HCFlag from "./assets/HCFlag.svg"
import Screw from "./assets/Screw.svg"

function App() {
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
          <Panel units={1} ><div className="flex flex-col justify-center items-center gap-4 content h-full"><button className="h-12 w-56 bg-green-500 rounded-md">
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
          </button></div></Panel>
          <Panel units={1} className=""><div className="h-full w-full flex flex-row p-4 justify-between items-center"><img className="h-12 md:h-full" src={RJ45} /><img className="h-12 md:h-full" src={RJ45} /><img className="h-12 md:h-full" src={RJ45} /><img className="h-12 md:h-full" src={RJ45} /><img className="h-12 md:h-full" src={RJ45} /><img className="h-12 md:h-full" src={RJ45} /></div></Panel>
          <Panel units={1}><div className="flex flex-row items-center h-full pl-4"><h2 className="text-2xl md:text-4xl content">Questions You <span className="italic">might ask?</span></h2></div></Panel>
          <Panel units={2}>
            <div className="pl-4 pt-4">  
              <h3 className="text-2xl md:text-3xl content italic">How does the grant work?</h3>
              <p className="text-1xl md:text-2xl content pl-4">For every hour logged with Hackatime/Lapse you get 4 Screws 
                <span className="whitespace-nowrap mr-1 ml-0.5">
                  <img src={Screw} width={24} className="inline-block align-middle" />
                </span>
                depending on the complexity of your module you may get up to 4x the Screws (so 16, thats four times the racky’ness!!111!) you can choose between getting a grant to make your module or getting a rack.</p>
            </div>
          </Panel>
          <Panel units={1} className="hidden md:block"></Panel>
          <Panel units={2}>
            <div className="pl-4 pt-4">  
              <h3 className="text-2xl md:text-3xl content italic">But racks are just for servers?</h3>
              <p className="text-1xl md:text-2xl content pl-4">Nope, not at all! A rack is just a way of organizing things, if you are more interested in audio you could make a audio rack, if you are more of a desk guy you could make something blinky that just looks cool! Or something to organize your growing collection of hackclub stickers? </p>
            </div>
          </Panel>
          <Panel units={1}><div className="flex justify-center items-center h-full flex-col"><p className="pl-4 pt-4 text-2xl content text-center">Checkout the FaQ on the Slack for more!</p><p><a href="https://hackclub.enterprise.slack.com/docs/T0266FRGM/F0AMHLB80E4" className="text-blue-500 underline">Slack Canvas↗</a></p></div></Panel>
          <Panel units={1} filler className="hidden md:block"></Panel>
          <Panel units={2} ><div className="flex flex-col justify-center items-center gap-4 content h-full"><p>What are you waiting for? Get Rack'ing NOW!</p> <button className="h-12 w-28 bg-green-500 rounded-md">
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
          </button></div></Panel>
        </div>

      </div>
    </div>
  )
}

export default App