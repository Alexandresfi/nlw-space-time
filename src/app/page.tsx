import Image from 'next/image'

import { EmptyMemories } from '@/components/EmptyMemories'
import { api } from '@/lib/api'
import { cookies } from 'next/dist/client/components/headers'

import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

dayjs.locale(ptBr)
interface MemoriesProps {
  id: string
  coverUrl: string
  excerpt: string
  isPublic: boolean
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value

  const response = await api.get('memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: MemoriesProps[] = response.data

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => (
        <div key={memory.id} className="space-y-4">
          <time className="-ml-8 flex items-center gap-3 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
            {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
          </time>
          <Image
            width={592}
            src={memory.coverUrl}
            height={280}
            alt="image memory"
          />
          <p>{memory.excerpt}</p>
        </div>
      ))}
    </div>
  )
}
