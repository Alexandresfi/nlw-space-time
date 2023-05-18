import Link from 'next/link'

import { User } from 'lucide-react'

import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* {left} */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* {Blur} */}
        <div className=" absolute right-0 top-1/2 h-[288px] w-[526px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* {Stripes} */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        {/* sign In */}
        <Link
          href="/"
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </Link>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW spacetime" width={160} height={48} />
          <div className="max-w-[420px]">
            <h1 className="pb-1 text-[2.5rem] font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed text-gray-100">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <Link
            href="/"
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
          >
            CADASTRAR LEMBRANçA
          </Link>
        </div>

        {/* copyright */}
        <div className="text-sm text-gray-200">
          Feito com 💜 no NLW da{' '}
          <Link
            href="https://rocketseat.com.br/"
            target="_blank"
            className="underline hover:text-gray-100"
          >
            Rocketseat
          </Link>
        </div>
      </div>

      {/* {Right} */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <Link href="/" className="underline hover:text-gray-50">
              criar agora
            </Link>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
