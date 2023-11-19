import Image from 'next/image'
import hubPc from '@/assets/hub-pc.png'

export default function HeroCard() {
  return (
    <div className="w-full grid grid-cols-[1fr_1fr]">
      <div className="self-center grow grid grid-auto-rows place-items-center">
        <h1 className="text-5xl font-bold text-center mb-4">New stock!</h1>
        <p className="text-2xl font-bold text-center w-80 self-center">
          Fulfill your <span className="text-2xl font-bold bg-gradient-to-r from-orange-700 via-teal-500 to-purple-400 text-transparent bg-clip-text bg-300% animate-gradient">
            RGB
          </span> craze with our our 2023 desktops from <br /> <span className='text-[#5E4399] text-4xl'>NZXT</span></p>
      </div>
      <Image
        src={hubPc}
        alt="PC Parts Logo"
        width={900}
        priority
      />
    </div>
  )
}
