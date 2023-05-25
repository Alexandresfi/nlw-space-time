import Image from 'next/image'
import Link from 'next/link'

import nlwLogo from '../../assets/nlw-spacetime-logo.svg'

export function Hero() {
  return (
    <div className="z-10 space-y-5">
      <Image src={nlwLogo} alt="NLW spacetime" width={160} height={48} />
      <div className="max-w-[420px]">
        <h1 className="pb-1 text-[2.5rem] font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed text-gray-100">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <Link
        href="/memories/new"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
      >
        CADASTRAR LEMBRANçA
      </Link>
    </div>
  )
}
